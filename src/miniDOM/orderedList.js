import BlockNode from './block';
import ListItemNode from './listItem';

export default class OrderedListNode extends BlockNode {
  constructor(opts) {
    super(opts);
    this.children = [new ListItemNode(opts)];
  }

  appendChild(node) {
    this.children[0].appendChild(node);
  }

  openTag() {
    return '<ol>';
  }
  closeTag() {
    return '</ol>';
  }

  absorb(child) {
    if (child.type === this.type) {
      this.children = this.children.concat(child.children);
      return null;
    } else {
      return child;
    }
  }
  static matches(token = {}) {
    return (
      (token.type === 'linebreak') &&
      token.attributes &&
      ((token.attributes.list === 'ordered') || (token.attributes.ordered === true))
    );
  }
}

OrderedListNode.priority = 30;
