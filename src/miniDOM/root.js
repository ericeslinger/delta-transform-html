import TreeNode from './treeNode';

export default class RootNode extends TreeNode {
  constructor(opts = {}) {
    super(opts);
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
