import SpanNode from './span';

export default class SuperscriptNode extends SpanNode {
  openTag() {
    return '<sup>';
  }
  closeTag() {
    return '</sup>';
  }
  static matches(token = {}) {
    return (token.attributes && token.attributes.super);
  }
}

SuperscriptNode.priority = 10;
