import { Registry } from '../registry';
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

  toHTML() {
    if (this.isLeaf()) {
      return  `${this.openTag()}${this.contents}${this.closeTag()}`;
    } else {
      return `${this.openTag()}\n${this.children.map((c) => c.toHTML()).join('\n')}\n${this.closeTag()}`;
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
    const formatList = Object.keys(Registry).map((key) => {
      if (Registry[key].matches(token)) {
        return new Registry[key](token);
      } else {
        return null;
      }
    }).filter((i) => !!i)
    .sort((a, b) => b.priority - a.priority);
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
