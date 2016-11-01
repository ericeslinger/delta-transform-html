/* eslint-env node, mocha*/

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import * as transform from '../index';

chai.use(chaiAsPromised);
const expect = chai.expect;

const testVal = {
  ops: [
    {insert: 'multiline\nvalue'},
    {insert: '\n'},
    {insert: 'simple text'},
    {insert: ' with a\n'},
    {insert: '\nfollowing text\n\n'},
    {insert: 'bulleted list one', attributes: {link: 'linkTarget'}},
    {insert: '\n', attributes: {list: 'bullet'}},
    {insert: 'bulleted list two'},
    {insert: '\n', attributes: {list: 'bullet'}},
    {insert: 'bulleted list three'},
    {insert: '\n', attributes: {list: 'bullet'}},
    {insert: 'numbered list one'},
    {insert: '\n', attributes: {list: 'ordered'}},
    {insert: 'numbered list two'},
    {insert: '\n', attributes: {ordered: true}},
    {insert: 'numbered list three'},
    {insert: '\n', attributes: {list: 'ordered'}},
    {insert: 'header two'},
    {insert: '\n', attributes: {header: 2}},
    {insert: 'underlined header one', attributes: {underline: true}},
    {insert: '\n', attributes: {header: 1}},
    {insert: 'red', attributes: {color: 'red'}},
    {insert: 'bgred', attributes: {bg: 'red'}},
    {insert: 'strikethru', attributes: {strike: true}},
    {insert: '\n'},
    {insert: {image: 'IMAGEURL'}},
    {insert: 'escaped HTML & < > " \' &'},
    {insert: '\n'},
    {insert: 'empty newline should have nbsp (four after this)\n\n\n'},
    {insert: '\n'},
    {insert: '\n'},
    {insert: 'old image style:'},
    {insert: '1', attributes: {image: 'IMAGEURL'}},
    {insert: '\n'},
    {insert: 'going NUTS', attributes: {
      italic: true,
      bold: true,
      sub: true,
      super: true,
      bg: '#000000',
      color: '#ffffff',
      strike: true,
      underline: true,
    }},
    {insert: '\n'},
    {insert: 'bold multiline\nvalue', attributes: {bold: true}},
    {insert: 'italic value', attributes: {italic: true}},
    {insert: 'bold-italic value', attributes: {bold: true, italic: true}},
    {insert: '\n'},
  ],
};

const integrationResultPlain = `multiline
value
simple text with a

following text

* bulleted list one
* bulleted list two
* bulleted list three

* numbered list one
* numbered list two
* numbered list three

header two
underlined header one
redbgredstrikethru
IMAGE: IMAGEURLescaped HTML & < > " ' &
empty newline should have nbsp (four after this)




old image style:IMAGE: IMAGEURL
going NUTS
bold multiline
valueitalic valuebold-italic value
`;

const integrationResultHTML = '<p>' +
'<span>multiline</span>' +
'</p>' +
'<p>' +
'<span>value</span>' +
'</p>' +
'<p>' +
'<span>simple text with a</span>' +
'</p>' +
'<p>' +
'<span>&nbsp;</span>' +
'</p>' +
'<p>' +
'<span>following text</span>' +
'</p>' +
'<p>' +
'<span>&nbsp;</span>' +
'</p>' +
'<ul>' +
'<li>' +
'<a target="_blank" href="linkTarget">' +
'<span>bulleted list one</span>' +
'</a>' +
'</li>' +
'<li>' +
'<span>bulleted list two</span>' +
'</li>' +
'<li>' +
'<span>bulleted list three</span>' +
'</li>' +
'</ul>' +
'<ol>' +
'<li>' +
'<span>numbered list one</span>' +
'</li>' +
'<li>' +
'<span>numbered list two</span>' +
'</li>' +
'<li>' +
'<span>numbered list three</span>' +
'</li>' +
'</ol>' +
'<h2>' +
'<span>header two</span>' +
'</h2>' +
'<h1>' +
'<u>' +
'<span>underlined header one</span>' +
'</u>' +
'</h1>' +
'<p>' +
'<span style="color:red;">' +
'<span>red</span>' +
'</span>' +
'<span style="background-color:red;">' +
'<span>bgred</span>' +
'</span>' +
'<s>' +
'<span>strikethru</span>' +
'</s>' +
'</p>' +
'<p>' +
'<img src="IMAGEURL">' +
'<span>escaped HTML &amp; &lt; &gt; &quot; &#39; &amp;</span>' +
'</p>' +
'<p>' +
'<span>empty newline should have nbsp (four after this)</span>' +
'</p>' +
'<p>' +
'<span>&nbsp;</span>' +
'</p>' +
'<p>' +
'<span>&nbsp;</span>' +
'</p>' +
'<p>' +
'<span>&nbsp;</span>' +
'</p>' +
'<p>' +
'<span>&nbsp;</span>' +
'</p>' +
'<p>' +
'<span>old image style:</span>' +
'<img src="IMAGEURL">' +
'</p>' +
'<p>' +
'<sup>' +
'<sub>' +
'<s>' +
'<span style="background-color:#000000;">' +
'<span style="color:#ffffff;">' +
'<u>' +
'<em>' +
'<strong>' +
'<span>going NUTS</span>' +
'</strong>' +
'</em>' +
'</u>' +
'</span>' +
'</span>' +
'</s>' +
'</sub>' +
'</sup>' +
'</p>' +
'<p>' +
'<strong>' +
'<span>bold multiline</span>' +
'</strong>' +
'</p>' +
'<p>' +
'<strong>' +
'<span>value</span>' +
'</strong>' +
'<em>' +
'<span>italic value</span>' +
'<strong>' +
'<span>bold-italic value</span>' +
'</strong>' +
'</em>' +
'</p>';

describe('integration', () => {
  it('synchronously output html that meets all specifications', () => {
    return expect(transform.transform(testVal)).to.equal(integrationResultHTML);
  });
  it('synchronously output plain text that meets all specifications', () => {
    return expect(transform.plainText(testVal)).to.equal(integrationResultPlain);
  });
  it('asynchronously output html that meets all specifications', () => {
    return expect(transform.transformAsync(testVal)).to.eventually.equal(integrationResultHTML);
  });
  it('asynchronously output plain text that meets all specifications', () => {
    return expect(transform.plainTextAsync(testVal)).to.eventually.equal(integrationResultPlain);
  });
});
