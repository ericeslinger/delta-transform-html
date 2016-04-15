import SpanNode from './span';

export default class StrikeThroughNode extends SpanNode {
  openTag() {
    return '<s>';
  }
  closeTag() {
    return '</s>';
  }
  static matches(token = {}) {
    return (token.attributes && token.attributes.strike);
  }
}

StrikeThroughNode.priority = 8;
