import TreeNode from './treeNode';

export default class SpanNode extends TreeNode {
  constructor(opts) {
    super(opts);
    this.level = 'span';
  }
  absorb(child) {
    if (child.type === this.type) {
      this.children = this.children.concat(child.children);
      return null;
    } else {
      return child;
    }
  }
}
SpanNode.priority = 100;
