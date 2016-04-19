import SpanNode from './span';

export default class ImageNode extends SpanNode {
  constructor(opts = {}) {
    super(opts);
    this.contents = `<img src="${opts.contents.image}">`;
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
    return (token.contents && token.contents.image);
  }
}

ImageNode.priority = 99;
