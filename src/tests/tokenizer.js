/* eslint-env node, mocha*/

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { tokenize } from '../operations/tokenize';

chai.use(chaiAsPromised);

const expect = chai.expect;

describe('tokenizer', () => {
  it('should convert single lines into a line and a break', () => {
    const ops = [{
      insert: 'word\n',
    }];
    const result = [
      {type: 'text', contents: 'word', attributes: {}},
      {type: 'linebreak', attributes: {}},
    ];
    expect(tokenize(ops)).to.deep.equal(result);
  });

  it('should convert newlines into styled linebreaks', () => {
    const ops = [{
      insert: 'listitem',
    }, {
      insert: '\n',
      attributes: {
        bullet: true,
      },
    }];
    const result = [
      {type: 'text', contents: 'listitem', attributes: {}},
      {type: 'linebreak', attributes: {bullet: true}},
    ];
    expect(tokenize(ops)).to.deep.equal(result);
  });

  it('should convert inline newlines into multiple lines', () => {
    const ops = [{
      insert: 'word\nword\n\nword\n',
    }];
    const result = [
      {type: 'text', contents: 'word', attributes: {}},
      {type: 'linebreak', attributes: {}},
      {type: 'text', contents: 'word', attributes: {}},
      {type: 'linebreak', attributes: {}},
      {type: 'linebreak', attributes: {}},
      {type: 'text', contents: 'word', attributes: {}},
      {type: 'linebreak', attributes: {}},
    ];
    expect(tokenize(ops)).to.deep.equal(result);
  });

  it('add a linebreak if there is not one at the end of input', () => {
    const ops = [{
      insert: 'word',
    }];
    const result = [
      {type: 'text', contents: 'word', attributes: {}},
      {type: 'linebreak', attributes: {}},
    ];
    expect(tokenize(ops)).to.deep.equal(result);
  });

  it('should handle inline newlines at the start of the line', () => {
    const ops = [{
      insert: '\nword\n\nword\n',
    }];
    const result = [
      {type: 'linebreak', attributes: {}},
      {type: 'text', contents: 'word', attributes: {}},
      {type: 'linebreak', attributes: {}},
      {type: 'linebreak', attributes: {}},
      {type: 'text', contents: 'word', attributes: {}},
      {type: 'linebreak', attributes: {}},
    ];
    expect(tokenize(ops)).to.deep.equal(result);
  });
});
