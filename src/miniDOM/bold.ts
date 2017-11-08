import { SpanNode } from './span';
import { Token } from '../tokenize';

export class BoldNode extends SpanNode {
  openTag() {
    return '<strong>';
  }
  closeTag() {
    return '</strong>';
  }
  static matches(token: Token) {
    return token.attributes && token.attributes.bold;
  }
}

BoldNode.priority = 1;
