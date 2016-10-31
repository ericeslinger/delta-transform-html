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

  toHTML() {
    return this.children.map((c) => c.toHTML(0)).join(''); // eslint-disable-line max-len
  }

  toHTMLAsync() {
    return Promise.all(this.children.map((c) => c.toHTMLAsync(0)))
    .then((childHTML) => {
      return childHTML.join(''); // eslint-disable-line max-len
    });
  }
}

RootNode.priority = -1;
