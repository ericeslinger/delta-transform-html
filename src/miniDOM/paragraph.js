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
