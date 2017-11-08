import { SpanNode } from './span';
import { Token } from '../tokenize';

export class UnderlineNode extends SpanNode {
  openTag() {
    return '<u>';
  }
  closeTag() {
    return '</u>';
  }
  static matches(token: Token) {
    return token.attributes && token.attributes.underline;
  }
}

UnderlineNode.priority = 3;
