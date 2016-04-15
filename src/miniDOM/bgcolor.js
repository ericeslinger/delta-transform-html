import SpanNode from './span';

export default class BackgroundColorNode extends SpanNode {
  openTag() {
    return `<span style="background-color:${this.attributes.bg};">`;
  }
  closeTag() {
    return '</span>';
  }
  static matches(token = {}) {
    return (token.attributes && token.attributes.bg);
  }
}

BackgroundColorNode.priority = 6;
