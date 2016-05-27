import SpanNode from './span';

export default class TextNode extends SpanNode {

  constructor(opts = {}) {
    super(opts);
    this.unescapedContents = opts.contents;
    this.contents = (opts.contents || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
    if (this.contents.trim() === '') {
      this.contents = '&nbsp;';
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

  static matches(token = {}) {
    return ((token.contents) && (typeof token.contents === 'string'));
  }
}

TextNode.priority = 0;
