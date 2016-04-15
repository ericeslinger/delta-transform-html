import SpanNode from './span';

export default class ColorNode extends SpanNode {
  openTag() {
    return `<span style="color:${this.attributes.color};">`;
  }
  closeTag() {
    return '</span>';
  }
  static matches(token = {}) {
    return (token.attributes && token.attributes.color);
  }
}

ColorNode.priority = 5;
