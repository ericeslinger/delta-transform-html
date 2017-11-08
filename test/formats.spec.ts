/* eslint-env node, mocha*/

import { expect } from 'chai';
import { Formatter } from '../src/index';
import 'mocha';

describe('formats', () => {
  it('should wrap in a root node on request', () => {
    const transform = new Formatter();
    const delta = {
      ops: [
        {
          insert: 'word\n',
          attributes: {
            bg: 'red',
          },
        },
      ],
    };
    const result =
      '<special-thing><p><span style="background-color:red;"><span>word</span></span></p></special-thing>'; // eslint-disable-line max-len
    expect(transform.transform(delta, { rootNode: 'special-thing' })).to.equal(
      result,
    );
  });
  it('should wrap in a classy root node on request', () => {
    const transform = new Formatter();
    const delta = {
      ops: [
        {
          insert: 'word\n',
          attributes: {
            bg: 'red',
          },
        },
      ],
    };
    const result =
      '<special-thing class="potato"><p><span style="background-color:red;"><span>word</span></span></p></special-thing>';
    expect(
      transform.transform(delta, {
        rootNode: 'special-thing',
        rootClass: 'potato',
      }),
    ).to.equal(result);
  });
  it('should format background color', () => {
    const transform = new Formatter();

    const delta = {
      ops: [
        {
          insert: 'word\n',
          attributes: {
            bg: 'red',
          },
        },
      ],
    };
    const result =
      '<p><span style="background-color:red;"><span>word</span></span></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format bold', () => {
    const transform = new Formatter();
    const delta = {
      ops: [
        {
          insert: 'word\n',
          attributes: {
            bold: true,
          },
        },
      ],
    };
    const result = '<p><strong><span>word</span></strong></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format foreground color', () => {
    const transform = new Formatter();
    const delta = {
      ops: [
        {
          insert: 'word\n',
          attributes: {
            color: 'red',
          },
        },
      ],
    };
    const result = '<p><span style="color:red;"><span>word</span></span></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format headers', () => {
    const transform = new Formatter();
    const delta = {
      ops: [
        {
          insert: 'word',
        },
        {
          insert: '\n',
          attributes: {
            header: 1,
          },
        },
      ],
    };
    const result = '<h1><span>word</span></h1>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format images', () => {
    const transform = new Formatter();
    const delta = {
      ops: [
        {
          insert: {
            image: 'URL',
          },
        },
        {
          insert: '\n',
          attributes: {},
        },
      ],
    };
    const result = '<p><img src="URL"></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format italic', () => {
    const transform = new Formatter();
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
    const result = '<p><em><span>word</span></em></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format links', () => {
    const transform = new Formatter();
    const delta = {
      ops: [
        {
          insert: 'word',
          attributes: {
            link: 'URL',
          },
        },
        {
          insert: '\n',
          attributes: {},
        },
      ],
    };
    const result = '<p><a target="_blank" href="URL"><span>word</span></a></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format ordered lists', () => {
    const transform = new Formatter();
    const delta = {
      ops: [
        {
          insert: 'word',
        },
        {
          insert: '\n',
          attributes: {
            ordered: true,
          },
        },
      ],
    };
    const result = '<ol><li><span>word</span></li></ol>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format unordered lists', () => {
    const transform = new Formatter();
    const delta = {
      ops: [
        {
          insert: 'word',
        },
        {
          insert: '\n',
          attributes: {
            bullet: true,
          },
        },
      ],
    };
    const result = '<ul><li><span>word</span></li></ul>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format paragraphs', () => {
    const transform = new Formatter();
    const delta = {
      ops: [
        {
          insert: 'word\n',
        },
      ],
    };
    const result = '<p><span>word</span></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format strikethrough', () => {
    const transform = new Formatter();
    const delta = {
      ops: [
        {
          insert: 'word\n',
          attributes: {
            strike: true,
          },
        },
      ],
    };
    const result = '<p><s><span>word</span></s></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format superscript', () => {
    const transform = new Formatter();
    const delta = {
      ops: [
        {
          insert: 'word\n',
          attributes: {
            super: true,
          },
        },
      ],
    };
    const result = '<p><sup><span>word</span></sup></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format subscript', () => {
    const transform = new Formatter();
    const delta = {
      ops: [
        {
          insert: 'word\n',
          attributes: {
            sub: true,
          },
        },
      ],
    };
    const result = '<p><sub><span>word</span></sub></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should ignore unknowns', () => {
    const transform = new Formatter();
    const delta = {
      ops: [
        {
          attributes: {
            tuber: 'POTATO',
          },
        },
        {
          insert: '\n',
        },
      ],
    };
    const result = '<p></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format underlines', () => {
    const transform = new Formatter();
    const delta = {
      ops: [
        {
          insert: 'word\n',
          attributes: {
            underline: true,
          },
        },
      ],
    };
    const result = '<p><u><span>word</span></u></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
});
