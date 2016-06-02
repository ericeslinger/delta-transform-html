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
  it('should convert newlines into styled linebreaks');
  it('should convert inline newlines into multiple lines');
});
