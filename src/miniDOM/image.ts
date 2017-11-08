import { SpanNode } from './span';
import { Token } from '../tokenize';

export class ImageNode extends SpanNode {
  imageUrl: string;
  constructor(opts: any = {}) {
    super(opts);
    if (opts.contents && opts.contents.image) {
      this.imageUrl = opts.contents.image;
    } else {
      this.imageUrl = opts.attributes.image;
    }
    this.contents = `<img src="${this.imageUrl}">`;
  }
  plainText() {
    return `IMAGE: ${this.imageUrl}`;
  }
  isLeaf() {
    return true;
  }
  openTag() {
    return '';
  }
  closeTag() {
    return '';
  }
  static matches(token: Token) {
    return token.type === 'image';
    //   (token.contents && token.contents.image) ||
    //   (token.attributes && token.attributes.image)
    // );
  }
}

ImageNode.priority = 99;
