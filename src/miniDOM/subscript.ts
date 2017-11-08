import { SpanNode } from './span';
import { Token } from '../tokenize';

export class SubscriptNode extends SpanNode {
  openTag() {
    return '<sub>';
  }
  closeTag() {
    return '</sub>';
  }
  static matches(token: Token) {
    return token.attributes && token.attributes.sub;
  }
}

SubscriptNode.priority = 9;
