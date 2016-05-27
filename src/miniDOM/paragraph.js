import BlockNode from './block';

export default class ParagraphNode extends BlockNode {
  openTag() {
    return '<p>';
  }
  closeTag() {
    return '</p>';
  }
  absorb(child) {
    return child;
  }

  toHTML(indentLevel = 0) {
    if (this.children.length === 0) {
      return `${new Array(indentLevel + 1).join(' ')}${this.openTag()}&nbsp;${this.closeTag()}`;
    } else {
      return super.toHTML(indentLevel);
    }
  }

  static matches(token = {}) {
    return (
      (token.type === 'linebreak') && (
        (!!token.attributes) ||
        (
          (token.attributes.list === undefined) &&
          (token.attributes.header === undefined)
        )
      )
    );
  }
}

ParagraphNode.priority = 19;
