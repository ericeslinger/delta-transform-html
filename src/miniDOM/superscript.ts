import { SpanNode } from './span';
import { Token } from '../tokenize';

export class SuperscriptNode extends SpanNode {
  openTag() {
    return '<sup>';
  }
  closeTag() {
    return '</sup>';
  }
  static matches(token: Token) {
    return token.attributes && token.attributes.super;
  }
}

SuperscriptNode.priority = 10;
