import TreeNode from './treeNode';

export default class BlockNode extends TreeNode {
  constructor(opts) {
    super(opts);
    this.level = 'block';
  }

  plainTextAsync() {
    return Promise.all(this.children.map((child) => child.plainTextAsync()))
    .then((c) => `${c.join('')}\n`);
  }

  plainText() {
    return `${super.plainText()}\n`;
  }
  appendChild(child) {
    if (this.children.length === 0) {
      this.children.push(child);
    } else {
      const remains = this.children[this.children.length - 1].absorb(child);
      if (remains !== null) {
        this.children.push(remains);
      }
    }
  }
}

BlockNode.priority = 101;
