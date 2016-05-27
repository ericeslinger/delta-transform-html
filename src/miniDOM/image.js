import SpanNode from './span';

export default class ImageNode extends SpanNode {
  constructor(opts = {}) {
    super(opts);
    if (opts.contents && opts.contents.image) {
      this.imageUrl = opts.contents.image;
    } else {
      this.imageUrl = opts.attributes.image;
    }
    this.contents = `<img src="${this.imageUrl}">`;
  }
  plainText() {
    return `IMAGE: ${this.imageUrl}`;
  }
  isLeaf() {
    return true;
  }
  openTag() {
    return '';
  }
  closeTag() {
    return '';
  }
  static matches(token = {}) {
    return (
      (token.contents && token.contents.image) ||
      (token.attributes && token.attributes.image)
    );
  }
}

ImageNode.priority = 99;
