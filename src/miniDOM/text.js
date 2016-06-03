import SpanNode from './span';

export default class TextNode extends SpanNode {

  constructor(opts = {}) {
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
      this.unescapedContents = this.unescapedContents.concat(child.unescapedContents);
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

  static matches(token = {}) {
    return (
      ((token.contents === '') || (token.contents)) &&
      (typeof token.contents === 'string') &&
      ((token.attributes === undefined) || (token.attributes.image === undefined))
    );
  }

}

TextNode.priority = 0;
