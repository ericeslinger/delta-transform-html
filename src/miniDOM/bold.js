import SpanNode from './span';

export default class BoldNode extends SpanNode {
  openTag() {
    return '<strong>';
  }
  closeTag() {
    return '</strong>';
  }
  static matches(token = {}) {
    return (token.attributes && token.attributes.bold);
  }
}

BoldNode.priority = 1;
