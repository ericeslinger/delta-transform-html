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
    const result = '<p><span style="background-color:red;"><span>word</span></span></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format bold', () => {
    const delta = {ops: [{
      insert: 'word\n',
      attributes: {
        bold: true,
      },
    }]};
    const result = '<p><strong><span>word</span></strong></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format foreground color', () => {
    const delta = {ops: [{
      insert: 'word\n',
      attributes: {
        color: 'red',
      },
    }]};
    const result = '<p><span style="color:red;"><span>word</span></span></p>'; // eslint-disable-line max-len
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
    const result = '<h1><span>word</span></h1>'; // eslint-disable-line max-len
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
    const result = '<p><img src="URL"></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format italic', () => {
    const delta = {ops: [{
      insert: 'word\n',
      attributes: {
        italic: true,
      },
    }]};
    const result = '<p><em><span>word</span></em></p>'; // eslint-disable-line max-len
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
    const result = '<p><a target="_blank" href="URL"><span>word</span></a></p>'; // eslint-disable-line max-len
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
    const result = '<ol><li><span>word</span></li></ol>'; // eslint-disable-line max-len
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
    const result = '<ul><li><span>word</span></li></ul>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format paragraphs', () => {
    const delta = {ops: [{
      insert: 'word\n',
    }]};
    const result = '<p><span>word</span></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format strikethrough', () => {
    const delta = {ops: [{
      insert: 'word\n',
      attributes: {
        strike: true,
      },
    }]};
    const result = '<p><s><span>word</span></s></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format superscript', () => {
    const delta = {ops: [{
      insert: 'word\n',
      attributes: {
        super: true,
      },
    }]};
    const result = '<p><sup><span>word</span></sup></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format subscript', () => {
    const delta = {ops: [{
      insert: 'word\n',
      attributes: {
        sub: true,
      },
    }]};
    const result = '<p><sub><span>word</span></sub></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should ignore unknowns', () => {
    const delta = {ops: [{
      attributes: {
        tuber: 'POTATO',
      },
    }, {
      insert: '\n',
    }]};
    const result = '<p></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format underlines', () => {
    const delta = {ops: [{
      insert: 'word\n',
      attributes: {
        underline: true,
      },
    }]};
    const result = '<p><u><span>word</span></u></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
});
