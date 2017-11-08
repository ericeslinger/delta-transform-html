import { SpanNode } from './span';
import { Token } from '../tokenize';

export class ItalicNode extends SpanNode {
  openTag() {
    return '<em>';
  }
  closeTag() {
    return '</em>';
  }
  static matches(token: Token) {
    return token.attributes && token.attributes.italic;
  }
}

ItalicNode.priority = 2;
