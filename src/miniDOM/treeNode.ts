import { Token } from '../tokenize';

export interface TreeAttributes {}

export class TreeNode {
  static priority: number;
  children: TreeNode[];
  attributes: any;
  type: string;
  contents: string;
  // level: string;
  level: 'span' | 'block';
  promisePlainContents?: () => Promise<string>;

  constructor(opts: { attributes?: any } = {}) {
    this.children = [];
    this.attributes = Object.assign({}, opts.attributes);
    this.type = this.constructor.name;
  }

  dfsTraverse() {
    return this.children.reduce((prev: TreeNode[], curr) => prev.concat(curr), [
      this,
    ]);
  }

  openTag() {
    return '';
  }

  closeTag() {
    return '';
  }

  promiseContents() {
    return Promise.resolve(this.contents || '');
  }

  toHTMLAsync(indentLevel = 0) {
    if (this.isLeaf()) {
      return this.promiseContents().then(contents => {
        return `${this.openTag()}${contents}${this.closeTag()}`; // eslint-disable-line max-len
      });
    } else {
      return Promise.all(
        this.children.map(c => c.toHTMLAsync(0)),
      ).then(childHTML => {
        return `${this.openTag()}${childHTML.join('')}${this.closeTag()}`; // eslint-disable-line max-len
      });
    }
  }

  plainTextAsync() {
    if (this.isLeaf()) {
      if (this.promisePlainContents) {
        return this.promisePlainContents();
      } else {
        return Promise.resolve(this.plainText());
      }
    } else {
      return Promise.all(this.children.map(c => c.plainTextAsync())).then(c =>
        c.join(''),
      );
    }
  }

  plainText() {
    return this.children.map(c => c.plainText()).join('');
  }

  toHTML(indentLevel = 0) {
    if (this.isLeaf()) {
      return `${this.openTag()}${this.contents}${this.closeTag()}`; // eslint-disable-line max-len
    } else {
      return `${this.openTag()}${this.children
        .map(c => c.toHTML(0))
        .join('')}${this.closeTag()}`; // eslint-disable-line max-len
    }
  }

  isLeaf() {
    return false;
  }

  appendChild(child) {
    this.children.push(child);
  }

  absorb(child) {
    this.children.push(child);
    return null;
  }

  toJSON() {
    return {
      type: this.type,
      level: this.level,
      children: this.children,
      attributes: this.attributes,
      contents: this.contents,
    };
  }

  get priority() {
    return this.constructor['priority'];
  }

  static matches(token: Token) {
    return false;
  }
}

TreeNode.priority = -2;
