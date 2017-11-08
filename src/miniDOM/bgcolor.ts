import { SpanNode } from './span';
import { Token } from '../tokenize';

export class BackgroundColorNode extends SpanNode {
  openTag() {
    return `<span style="background-color:${this.attributes.bg};">`;
  }
  closeTag() {
    return '</span>';
  }
  static matches(token: Token) {
    return token.attributes && token.attributes.bg;
  }
}

BackgroundColorNode.priority = 6;
