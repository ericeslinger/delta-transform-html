import * as MiniDOM from './miniDOM';
import { RootNode, TreeNode } from './miniDOM';
import { tokenize } from './tokenize';
export interface TypeRegistry {
  bold?: typeof MiniDOM.BoldNode;
  italic?: typeof MiniDOM.ItalicNode;
  link?: typeof MiniDOM.LinkNode;
  listItem?: typeof MiniDOM.ListItemNode;
  ordered?: typeof MiniDOM.OrderedListNode;
  paragraph?: typeof MiniDOM.ParagraphNode;
  text?: typeof MiniDOM.TextNode;
  TreeNode?: typeof MiniDOM.TreeNode;
  RootNode?: typeof MiniDOM.RootNode;
  bullet?: typeof MiniDOM.UnorderedListNode;
  header?: typeof MiniDOM.HeaderNode;
  underline?: typeof MiniDOM.UnderlineNode;
  strikethrough?: typeof MiniDOM.StrikethroughNode;
  color?: typeof MiniDOM.ColorNode;
  bgcolor?: typeof MiniDOM.BackgroundColorNode;
  subscript?: typeof MiniDOM.SuperscriptNode;
  superscript?: typeof MiniDOM.SubscriptNode;
  SpanNode?: typeof MiniDOM.SpanNode;
  BlockNode?: typeof MiniDOM.BlockNode;
  image?: typeof MiniDOM.ImageNode;
}

export interface FormatOptions {
  rootNode?: string;
  rootClass?: string;
}

export class Formatter {
  formats: TypeRegistry = {
    bold: MiniDOM.BoldNode,
    italic: MiniDOM.ItalicNode,
    link: MiniDOM.LinkNode,
    listItem: MiniDOM.ListItemNode,
    ordered: MiniDOM.OrderedListNode,
    paragraph: MiniDOM.ParagraphNode,
    text: MiniDOM.TextNode,
    TreeNode: MiniDOM.TreeNode,
    RootNode: MiniDOM.RootNode,
    bullet: MiniDOM.UnorderedListNode,
    header: MiniDOM.HeaderNode,
    underline: MiniDOM.UnderlineNode,
    strikethrough: MiniDOM.StrikethroughNode,
    color: MiniDOM.ColorNode,
    bgcolor: MiniDOM.BackgroundColorNode,
    subscript: MiniDOM.SuperscriptNode,
    superscript: MiniDOM.SubscriptNode,
    SpanNode: MiniDOM.SpanNode,
    BlockNode: MiniDOM.BlockNode,
    image: MiniDOM.ImageNode,
  };
  formatList: (typeof MiniDOM.TreeNode)[] = [];
  constructor() {
    this.sortRegistry();
    this.checkPriorities();
  }
  sortRegistry() {
    this.formatList = Object.keys(this.formats)
      .sort((a, b) => this.formats[b].priority - this.formats[a].priority)
      .map(n => this.formats[n]);
  }
  checkPriorities() {
    const seen = {};
    Object.keys(this.formats).forEach(key => {
      if (seen[this.formats[key].priority]) {
        console.log(
          `ERROR: conflict between ${key} and ${seen[
            this.formats[key].priority
          ]}`,
        );
      }
      seen[this.formats[key].priority] = key;
    });
  }

  transform(delta, opts: FormatOptions = {}) {
    let openTag = '';
    let closeTag = '';
    if (opts.rootNode) {
      if (opts.rootClass) {
        openTag = `<${opts.rootNode} class="${opts.rootClass}">`;
      } else {
        openTag = `<${opts.rootNode}>`;
      }
      closeTag = `</${opts.rootNode}>`;
    }
    return `${openTag}${this.blockize(
      tokenize(delta.ops),
    ).toHTML()}${closeTag}`;
  }

  build(token) {
    const matchingFormats = this.formatList
      .filter(format => format.matches(token))
      .map(N => new N(token));
    if (matchingFormats.length === 0) {
      // console.log(`token ${JSON.stringify(token)} has no matching formats`);
      return new this.formats.TreeNode();
    }
    const retVal = matchingFormats.shift();
    matchingFormats.reduce((prev, curr) => {
      prev.children = [curr]; // eslint-disable-line no-param-reassign
      return curr;
    }, retVal);
    return retVal;
  }

  blockize(tokens) {
    const RN: typeof MiniDOM.RootNode = this.formats.RootNode;
    const retVal = new RN();
    let childList = [];
    tokens.forEach(token => {
      if (token.type === 'linebreak') {
        const blockArray = this.formatList.filter(f => f.matches(token));
        const currentBlock = new blockArray[0](token);
        childList.forEach(child => currentBlock.appendChild(this.build(child)));
        retVal.absorb(currentBlock);
        childList = [];
      } else {
        childList.push(token);
      }
    });
    return retVal;
  }

  transformAsync(delta, opts: any = {}) {
    return this.blockize(tokenize(delta.ops))
      .toHTMLAsync()
      .then(v => {
        let openTag = '';
        let closeTag = '';
        if (opts.rootNode) {
          if (opts.rootClass) {
            openTag = `<${opts.rootNode} class="${opts.rootClass}">`;
          } else {
            openTag = `<${opts.rootNode}>`;
          }
          closeTag = `</${opts.rootNode}>`;
        }
        return `${openTag}${v}${closeTag}`;
      });
  }
  plainText(delta) {
    return this.blockize(tokenize(delta.ops)).plainText();
  }
  plainTextAsync(delta) {
    return this.blockize(tokenize(delta.ops)).plainTextAsync();
  }
}
