import { SpanNode } from './span';
import { Token } from '../tokenize';

export class ColorNode extends SpanNode {
  openTag() {
    return `<span style="color:${this.attributes.color};">`;
  }
  closeTag() {
    return '</span>';
  }
  static matches(token: Token) {
    return token.attributes && token.attributes.color;
  }
}

ColorNode.priority = 5;
