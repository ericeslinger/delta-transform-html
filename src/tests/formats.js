/* eslint-env node, mocha*/

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import * as transform from '../index';

chai.use(chaiAsPromised);

const expect = chai.expect;

describe('formats', () => {
  it('should format background color', () => {
    const delta = {ops: [{
      insert: 'word\n',
      attributes: {
        bg: 'red',
      },
    }]};
    const result = '<p>\n  <span style="background-color:red;">\n    <span>word</span>\n  </span>\n</p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format bold', () => {
    const delta = {ops: [{
      insert: 'word\n',
      attributes: {
        bold: true,
      },
    }]};
    const result = '<p>\n  <strong>\n    <span>word</span>\n  </strong>\n</p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format foreground color', () => {
    const delta = {ops: [{
      insert: 'word\n',
      attributes: {
        color: 'red',
      },
    }]};
    const result = '<p>\n  <span style="color:red;">\n    <span>word</span>\n  </span>\n</p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format headers', () => {
    const delta = {ops: [{
      insert: 'word',
    }, {
      insert: '\n',
      attributes: {
        header: 1,
      },
    }]};
    const result = '<h1>\n  <span>word</span>\n</h1>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format images', () => {
    const delta = {ops: [{
      attributes: {
        image: 'URL',
      },
    }, {
      insert: '\n',
      attributes: {},
    }]};
    const result = '<p>\n  <img src="URL">\n</p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format italic', () => {
    const delta = {ops: [{
      insert: 'word\n',
      attributes: {
        italic: true,
      },
    }]};
    const result = '<p>\n  <em>\n    <span>word</span>\n  </em>\n</p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format links', () => {
    const delta = {ops: [{
      insert: 'word',
      attributes: {
        link: 'URL',
      },
    }, {
      insert: '\n',
      attributes: {},
    }]};
    const result = '<p>\n  <a target="_blank" href="URL">\n    <span>word</span>\n  </a>\n</p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format ordered lists', () => {
    const delta = {ops: [{
      insert: 'word',
    }, {
      insert: '\n',
      attributes: {
        ordered: true,
      },
    }]};
    const result = '<ol>\n  <li>\n    <span>word</span>\n  </li>\n</ol>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format unordered lists', () => {
    const delta = {ops: [{
      insert: 'word',
    }, {
      insert: '\n',
      attributes: {
        bullet: true,
      },
    }]};
    const result = '<ul>\n  <li>\n    <span>word</span>\n  </li>\n</ul>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format paragraphs', () => {
    const delta = {ops: [{
      insert: 'word\n',
    }]};
    const result = '<p>\n  <span>word</span>\n</p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format strikethrough', () => {
    const delta = {ops: [{
      insert: 'word\n',
      attributes: {
        strike: true,
      },
    }]};
    const result = '<p>\n  <s>\n    <span>word</span>\n  </s>\n</p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format superscript', () => {
    const delta = {ops: [{
      insert: 'word\n',
      attributes: {
        super: true,
      },
    }]};
    const result = '<p>\n  <sup>\n    <span>word</span>\n  </sup>\n</p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format subscript', () => {
    const delta = {ops: [{
      insert: 'word\n',
      attributes: {
        sub: true,
      },
    }]};
    const result = '<p>\n  <sub>\n    <span>word</span>\n  </sub>\n</p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format underlines', () => {
    const delta = {ops: [{
      insert: 'word\n',
      attributes: {
        underline: true,
      },
    }]};
    const result = '<p>\n  <u>\n    <span>word</span>\n  </u>\n</p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
});
