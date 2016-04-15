import SpanNode from './span';

export default class SubscriptNode extends SpanNode {
  openTag() {
    return '<sub>';
  }
  closeTag() {
    return '</sub>';
  }
  static matches(token = {}) {
    return (token.attributes && token.attributes.sub);
  }
}

SubscriptNode.priority = 9;
