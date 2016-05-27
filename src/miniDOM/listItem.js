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

  plainTextAsync() {
    return super.plainTextAsync()
    .then((t) => `* ${t}\n`);
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
