import { SpanNode } from './span';
import { Token } from '../tokenize';

export class TextNode extends SpanNode {
  unescapedContents: string;

  constructor(opts: any = {}) {
    super(opts);
    this.unescapedContents = opts.contents || '';
  }

  get contents() {
    if (this.unescapedContents.trim() === '') {
      return '&nbsp;';
    } else {
      return this.escape(this.unescapedContents);
    }
  }

  plainText() {
    return this.unescapedContents;
  }

  openTag() {
    return '<span>';
  }

  closeTag() {
    return '</span>';
  }

  appendChild() {
    throw new Error('TextNode cannot have chldren');
  }

  isLeaf() {
    return true;
  }

  absorb(child) {
    if (child.type === this.type) {
      this.unescapedContents = this.unescapedContents.concat(
        child.unescapedContents,
      );
      return null;
    } else {
      return child;
    }
  }

  escape(contents) {
    return contents
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  static matches(token: Token) {
    return (
      token.type === 'text' &&
      (token.contents === '' || token.contents) &&
      typeof token.contents === 'string' &&
      (token.attributes === undefined || token.attributes.image === undefined)
    );
  }
}

TextNode.priority = 0;
