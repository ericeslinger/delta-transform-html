import * as Registry from '../registry';
export default class TreeNode {
  constructor(opts = {}) {
    this.children = [];
    this.attributes = opts.attributes || {};
    // this.contents = opts.contents;
    this.type = this.constructor.name;
  }

  dfsTraverse() {
    return this.children.reduce((prev, curr) => prev.concat(curr), [this]);
  }

  openTag() {
    return '';
  }

  closeTag() {
    return '';
  }

  toHTML(indentLevel = 0) {
    if (this.isLeaf()) {
      return `${new Array(indentLevel + 1).join(' ')}${this.openTag()}${this.contents}${this.closeTag()}`; // eslint-disable-line max-len
    } else {
      return `${new Array(indentLevel + 1).join(' ')}${this.openTag()}\n${this.children.map((c) => c.toHTML(indentLevel + 2)).join('\n')}\n${new Array(indentLevel + 1).join(' ')}${this.closeTag()}`; // eslint-disable-line max-len
    }
  }

  isLeaf() {
    return false;
  }

  appendChild(child) {
    this.children.push(child);
  }

  absorb(child) {
    this.children.push(child);
    return null;
  }

  toJSON() {
    return {
      type: this.type,
      level: this.level,
      children: this.children,
      attributes: this.attributes,
      contents: this.contents,
    };
  }

  static build(token) {
    const formatList = Registry.listFormats()
    .filter((format) => format.matches(token))
    .map((N) => new N(token));
    if (formatList.length === 0) {
      throw new Error('token has no matching formats');
    }
    const retVal = formatList.shift();
    formatList.reduce((prev, curr) => {
      prev.children = [curr];
      return curr;
    }, retVal);
    return retVal;
  }

  get priority() {
    return this.constructor.priority;
  }

  static matches() {
    return false;
  }
}

TreeNode.priority = -2;
