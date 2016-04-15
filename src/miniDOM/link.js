import SpanNode from './span';

export default class LinkNode extends SpanNode {
  openTag() {
    return `<a target="_blank" href="${this.attributes.link}">`;
  }
  closeTag() {
    return '</a>';
  }
  static matches(token = {}) {
    return (token.attributes && token.attributes.link);
  }
}

LinkNode.priority = 11;
