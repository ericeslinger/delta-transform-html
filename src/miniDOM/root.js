import TreeNode from './treeNode';

export default class RootNode extends TreeNode {
  constructor(opts = {}) {
    super(opts);
  }
  toHTML() {
    return this.children.map((c) => c.toHTML()).join('\n');
  }
  absorb(child) {
    let remains = child;
    if (this.children.length > 0) {
      remains = this.children[this.children.length - 1].absorb(child);
    }
    if (remains !== null) {
      this.children.push(remains);
    }
    return null;
  }
}

RootNode.priority = -1;
