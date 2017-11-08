import { BlockNode } from './block';
import { Token } from '../tokenize';

export class HeaderNode extends BlockNode {
  openTag() {
    return `<h${this.attributes.header}>`;
  }
  closeTag() {
    return `</h${this.attributes.header}>`;
  }
  absorb(child) {
    return child;
  }
  static matches(token: Token) {
    return token.type === 'linebreak' && token.attributes.header;
  }
}

HeaderNode.priority = 21;
