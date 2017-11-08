import { SpanNode } from './span';
import { Token } from '../tokenize';

export class StrikethroughNode extends SpanNode {
  openTag() {
    return '<s>';
  }
  closeTag() {
    return '</s>';
  }
  static matches(token: Token) {
    return token.attributes && token.attributes.strike;
  }
}

StrikethroughNode.priority = 8;
