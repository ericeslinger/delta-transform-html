import SpanNode from './span';

export default class ItalicNode extends SpanNode {
  openTag() {
    return '<em>';
  }
  closeTag() {
    return '</em>';
  }
  static matches(token = {}) {
    return (token.attributes && token.attributes.italic);
  }
}

ItalicNode.priority = 2;
