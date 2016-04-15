import BlockNode from './block';

export default class HeaderNode extends BlockNode {
  openTag() {
    return `<h${this.attributes.header}>`;
  }
  closeTag() {
    return `</h${this.attributes.header}>`;
  }
  absorb(child) {
    return child;
  }
  static matches(token = {}) {
    return (
      (token.type === 'linebreak') && (token.attributes.header)
    );
  }
}

HeaderNode.priority = 21;
