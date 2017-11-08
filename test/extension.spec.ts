import { expect } from 'chai';
import { Formatter, TypeRegistry, Token, SpanNode } from '../src/index';
import 'mocha';

class BetterItalicNode extends SpanNode {
  openTag() {
    return '<span style="font-style: oblique;">';
  }
  closeTag() {
    return '</span>';
  }
  static matches(token: Token) {
    return token.attributes && token.attributes.italic;
  }
}
BetterItalicNode.priority = 2;

class PotatoNode extends SpanNode {
  openTag() {
    return '<potato>';
  }
  closeTag() {
    return '</potato>';
  }
  static matches(token: Token) {
    return token.attributes && token.attributes.potato;
  }
}
PotatoNode.priority = 102;

class ExtendedFormatter extends Formatter {
  formats: TypeRegistry & { potato: typeof PotatoNode };
  constructor() {
    super();
    this.formats.italic = BetterItalicNode;
    this.formats.potato = PotatoNode;
    this.sortRegistry();
    this.checkPriorities();
  }
}

describe('extensions', () => {
  it('lets you extend the formatter by replacing formats', () => {
    const transform = new ExtendedFormatter();
    const delta = {
      ops: [
        {
          insert: 'word\n',
          attributes: {
            italic: true,
          },
        },
      ],
    };
    const result =
      '<p><span style="font-style: oblique;"><span>word</span></span></p>';
    expect(transform.transform(delta)).to.equal(result);
  });
  it('lets you extend the formatter by adding formats', () => {
    const transform = new ExtendedFormatter();
    const delta = {
      ops: [
        {
          insert: 'word\n',
          attributes: {
            potato: true,
          },
        },
      ],
    };
    const result = '<p><potato><span>word</span></potato></p>';
    expect(transform.transform(delta)).to.equal(result);
  });
});
