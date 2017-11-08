import { SpanNode } from './span';
import { Token } from '../tokenize';

export class LinkNode extends SpanNode {
  openTag() {
    return `<a target="_blank" href="${this.attributes.link}">`;
  }
  closeTag() {
    return '</a>';
  }
  static matches(token: Token) {
    return token.attributes && token.attributes.link;
  }
}

LinkNode.priority = 11;
