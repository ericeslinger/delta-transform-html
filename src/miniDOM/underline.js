import SpanNode from './span';

export default class UnderlineNode extends SpanNode {
  openTag() {
    return '<u>';
  }
  closeTag() {
    return '</u>';
  }
  static matches(token = {}) {
    return (token.attributes && token.attributes.underline);
  }
}

UnderlineNode.priority = 3;
