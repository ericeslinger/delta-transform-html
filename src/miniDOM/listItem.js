import TreeNode from './treeNode';

export default class ListItemNode extends TreeNode {
  openTag() {
    return '<li>';
  }
  closeTag() {
    return '</li>';
  }
  absorb(child) {
    return child;
  }

  plainText() {
    return `* ${super.plainText()}\n`;
  }

  static matches(token = {}) {
    return false;
    // return (token.attributes && token.attributes.list);
  }
}

ListItemNode.priority = 20;
