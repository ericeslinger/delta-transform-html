import { Registry } from '../index';
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

  promiseContents() {
    return Promise.resolve(this.contents || '');
  }

  toHTMLAsync(indentLevel = 0) {
    if (this.isLeaf()) {
      return this.promiseContents()
      .then((contents) => {
        return `${this.openTag()}${contents}${this.closeTag()}`; // eslint-disable-line max-len
      });
    } else {
      return Promise.all(this.children.map((c) => c.toHTMLAsync(0)))
      .then((childHTML) => {
        return `${this.openTag()}${childHTML.join('')}${this.closeTag()}`; // eslint-disable-line max-len
      });
    }
  }

  plainTextAsync() {
    if (this.isLeaf()) {
      if (this.promisePlainContents) {
        return this.promisePlainContents();
      } else {
        return Promise.resolve(this.plainText());
      }
    } else {
      return Promise.all(this.children.map((c) => c.plainTextAsync())).then((c) => c.join(''));
    }
  }

  plainText() {
    return this.children.map((c) => c.plainText()).join('');
  }

  toHTML(indentLevel = 0) {
    if (this.isLeaf()) {
      return `${this.openTag()}${this.contents}${this.closeTag()}`; // eslint-disable-line max-len
    } else {
      return `${this.openTag()}${this.children.map((c) => c.toHTML(0)).join('')}${this.closeTag()}`; // eslint-disable-line max-len
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
      // console.log(`token ${JSON.stringify(token)} has no matching formats`);
      return new TreeNode();
    }
    const retVal = formatList.shift();
    formatList.reduce((prev, curr) => {
      prev.children = [curr]; // eslint-disable-line no-param-reassign
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
