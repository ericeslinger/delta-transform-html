'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _index = require('../index');

var transform = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiAsPromised2.default); /* eslint-env node, mocha*/

var expect = _chai2.default.expect;

var testVal = {
  ops: [{ insert: 'multiline\nvalue' }, { insert: '\n' }, { insert: 'simple text' }, { insert: ' with a\n' }, { insert: '\nfollowing text\n\n' }, { insert: 'bulleted list one', attributes: { link: 'linkTarget' } }, { insert: '\n', attributes: { list: 'bullet' } }, { insert: 'bulleted list two' }, { insert: '\n', attributes: { list: 'bullet' } }, { insert: 'bulleted list three' }, { insert: '\n', attributes: { list: 'bullet' } }, { insert: 'numbered list one' }, { insert: '\n', attributes: { list: 'ordered' } }, { insert: 'numbered list two' }, { insert: '\n', attributes: { ordered: true } }, { insert: 'numbered list three' }, { insert: '\n', attributes: { list: 'ordered' } }, { insert: 'header two' }, { insert: '\n', attributes: { header: 2 } }, { insert: 'underlined header one', attributes: { underline: true } }, { insert: '\n', attributes: { header: 1 } }, { insert: 'red', attributes: { color: 'red' } }, { insert: 'bgred', attributes: { bg: 'red' } }, { insert: 'strikethru', attributes: { strike: true } }, { insert: '\n' }, { insert: { image: 'IMAGEURL' } }, { insert: 'escaped HTML & < > { } " \' &' }, { insert: '\n' }, { insert: 'empty newline should have nbsp (four after this)\n\n\n' }, { insert: '\n' }, { insert: '\n' }, { insert: 'old image style:' }, { insert: '1', attributes: { image: 'IMAGEURL' } }, { insert: '\n' }, { insert: 'going NUTS', attributes: {
      italic: true,
      bold: true,
      sub: true,
      super: true,
      bg: '#000000',
      color: '#ffffff',
      strike: true,
      underline: true
    } }, { insert: '\n' }, { insert: 'bold multiline\nvalue', attributes: { bold: true } }, { insert: 'italic value', attributes: { italic: true } }, { insert: 'bold-italic value', attributes: { bold: true, italic: true } }, { insert: '\n' }]
};

var integrationResultPlain = 'multiline\nvalue\nsimple text with a\n\nfollowing text\n\n* bulleted list one\n* bulleted list two\n* bulleted list three\n\n* numbered list one\n* numbered list two\n* numbered list three\n\nheader two\nunderlined header one\nredbgredstrikethru\nIMAGE: IMAGEURLescaped HTML & < > { } " \' &\nempty newline should have nbsp (four after this)\n\n\n\n\nold image style:IMAGE: IMAGEURL\ngoing NUTS\nbold multiline\nvalueitalic valuebold-italic value\n';

var integrationResultHTML = '<p>\n  <span>multiline</span>\n</p>\n<p>\n  <span>value</span>\n</p>\n<p>\n  <span>simple text with a</span>\n</p>\n<p>\n  <span>&nbsp;</span>\n</p>\n<p>\n  <span>following text</span>\n</p>\n<p>\n  <span>&nbsp;</span>\n</p>\n<ul>\n  <li>\n    <a target="_blank" href="linkTarget">\n      <span>bulleted list one</span>\n    </a>\n  </li>\n  <li>\n    <span>bulleted list two</span>\n  </li>\n  <li>\n    <span>bulleted list three</span>\n  </li>\n</ul>\n<ol>\n  <li>\n    <span>numbered list one</span>\n  </li>\n  <li>\n    <span>numbered list two</span>\n  </li>\n  <li>\n    <span>numbered list three</span>\n  </li>\n</ol>\n<h2>\n  <span>header two</span>\n</h2>\n<h1>\n  <u>\n    <span>underlined header one</span>\n  </u>\n</h1>\n<p>\n  <span style="color:red;">\n    <span>red</span>\n  </span>\n  <span style="background-color:red;">\n    <span>bgred</span>\n  </span>\n  <s>\n    <span>strikethru</span>\n  </s>\n</p>\n<p>\n  <img src="IMAGEURL">\n  <span>escaped HTML &amp; &lt; &gt; &#123; &#125; &quot; &#39; &amp;</span>\n</p>\n<p>\n  <span>empty newline should have nbsp (four after this)</span>\n</p>\n<p>\n  <span>&nbsp;</span>\n</p>\n<p>\n  <span>&nbsp;</span>\n</p>\n<p>\n  <span>&nbsp;</span>\n</p>\n<p>\n  <span>&nbsp;</span>\n</p>\n<p>\n  <span>old image style:</span>\n  <img src="IMAGEURL">\n</p>\n<p>\n  <sup>\n    <sub>\n      <s>\n        <span style="background-color:#000000;">\n          <span style="color:#ffffff;">\n            <u>\n              <em>\n                <strong>\n                  <span>going NUTS</span>\n                </strong>\n              </em>\n            </u>\n          </span>\n        </span>\n      </s>\n    </sub>\n  </sup>\n</p>\n<p>\n  <strong>\n    <span>bold multiline</span>\n  </strong>\n</p>\n<p>\n  <strong>\n    <span>value</span>\n  </strong>\n  <em>\n    <span>italic value</span>\n    <strong>\n      <span>bold-italic value</span>\n    </strong>\n  </em>\n</p>';

describe('integration', function () {
  it('synchronously output html that meets all specifications', function () {
    return expect(transform.transform(testVal)).to.equal(integrationResultHTML);
  });
  it('synchronously output plain text that meets all specifications', function () {
    return expect(transform.plainText(testVal)).to.equal(integrationResultPlain);
  });
  it('asynchronously output html that meets all specifications', function () {
    return expect(transform.transformAsync(testVal)).to.eventually.equal(integrationResultHTML);
  });
  it('asynchronously output plain text that meets all specifications', function () {
    return expect(transform.plainTextAsync(testVal)).to.eventually.equal(integrationResultPlain);
  });
});
//# sourceMappingURL=data:application/json;base64,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RUFBQyxRQUFRLElBQVIsRUFBYixFQS9DdEIsRUFnREgsRUFBQyxRQUFRLG1CQUFSLEVBQTZCLFlBQVksRUFBQyxNQUFNLElBQU4sRUFBWSxRQUFRLElBQVIsRUFBekIsRUFoRDNCLEVBaURILEVBQUMsUUFBUSxJQUFSLEVBakRFLENBQUw7Q0FESTs7QUFzRE4sSUFBTSwyZEFBTjs7QUE2QkEsSUFBTSw2NkRBQU47O0FBd0hBLFNBQVMsYUFBVCxFQUF3QixZQUFNO0FBQzVCLEtBQUcseURBQUgsRUFBOEQsWUFBTTtBQUNsRSxXQUFPLE9BQU8sVUFBVSxTQUFWLENBQW9CLE9BQXBCLENBQVAsRUFBcUMsRUFBckMsQ0FBd0MsS0FBeEMsQ0FBOEMscUJBQTlDLENBQVAsQ0FEa0U7R0FBTixDQUE5RCxDQUQ0QjtBQUk1QixLQUFHLCtEQUFILEVBQW9FLFlBQU07QUFDeEUsV0FBTyxPQUFPLFVBQVUsU0FBVixDQUFvQixPQUFwQixDQUFQLEVBQXFDLEVBQXJDLENBQXdDLEtBQXhDLENBQThDLHNCQUE5QyxDQUFQLENBRHdFO0dBQU4sQ0FBcEUsQ0FKNEI7QUFPNUIsS0FBRywwREFBSCxFQUErRCxZQUFNO0FBQ25FLFdBQU8sT0FBTyxVQUFVLGNBQVYsQ0FBeUIsT0FBekIsQ0FBUCxFQUEwQyxFQUExQyxDQUE2QyxVQUE3QyxDQUF3RCxLQUF4RCxDQUE4RCxxQkFBOUQsQ0FBUCxDQURtRTtHQUFOLENBQS9ELENBUDRCO0FBVTVCLEtBQUcsZ0VBQUgsRUFBcUUsWUFBTTtBQUN6RSxXQUFPLE9BQU8sVUFBVSxjQUFWLENBQXlCLE9BQXpCLENBQVAsRUFBMEMsRUFBMUMsQ0FBNkMsVUFBN0MsQ0FBd0QsS0FBeEQsQ0FBOEQsc0JBQTlELENBQVAsQ0FEeUU7R0FBTixDQUFyRSxDQVY0QjtDQUFOLENBQXhCIiwiZmlsZSI6InRlc3RzL2ludGVncmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWVudiBub2RlLCBtb2NoYSovXG5cbmltcG9ydCBjaGFpIGZyb20gJ2NoYWknO1xuaW1wb3J0IGNoYWlBc1Byb21pc2VkIGZyb20gJ2NoYWktYXMtcHJvbWlzZWQnO1xuaW1wb3J0ICogYXMgdHJhbnNmb3JtIGZyb20gJy4uL2luZGV4JztcblxuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xuY29uc3QgZXhwZWN0ID0gY2hhaS5leHBlY3Q7XG5cbmNvbnN0IHRlc3RWYWwgPSB7XG4gIG9wczogW1xuICAgIHtpbnNlcnQ6ICdtdWx0aWxpbmVcXG52YWx1ZSd9LFxuICAgIHtpbnNlcnQ6ICdcXG4nfSxcbiAgICB7aW5zZXJ0OiAnc2ltcGxlIHRleHQnfSxcbiAgICB7aW5zZXJ0OiAnIHdpdGggYVxcbid9LFxuICAgIHtpbnNlcnQ6ICdcXG5mb2xsb3dpbmcgdGV4dFxcblxcbid9LFxuICAgIHtpbnNlcnQ6ICdidWxsZXRlZCBsaXN0IG9uZScsIGF0dHJpYnV0ZXM6IHtsaW5rOiAnbGlua1RhcmdldCd9fSxcbiAgICB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2xpc3Q6ICdidWxsZXQnfX0sXG4gICAge2luc2VydDogJ2J1bGxldGVkIGxpc3QgdHdvJ30sXG4gICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtsaXN0OiAnYnVsbGV0J319LFxuICAgIHtpbnNlcnQ6ICdidWxsZXRlZCBsaXN0IHRocmVlJ30sXG4gICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtsaXN0OiAnYnVsbGV0J319LFxuICAgIHtpbnNlcnQ6ICdudW1iZXJlZCBsaXN0IG9uZSd9LFxuICAgIHtpbnNlcnQ6ICdcXG4nLCBhdHRyaWJ1dGVzOiB7bGlzdDogJ29yZGVyZWQnfX0sXG4gICAge2luc2VydDogJ251bWJlcmVkIGxpc3QgdHdvJ30sXG4gICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtvcmRlcmVkOiB0cnVlfX0sXG4gICAge2luc2VydDogJ251bWJlcmVkIGxpc3QgdGhyZWUnfSxcbiAgICB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2xpc3Q6ICdvcmRlcmVkJ319LFxuICAgIHtpbnNlcnQ6ICdoZWFkZXIgdHdvJ30sXG4gICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtoZWFkZXI6IDJ9fSxcbiAgICB7aW5zZXJ0OiAndW5kZXJsaW5lZCBoZWFkZXIgb25lJywgYXR0cmlidXRlczoge3VuZGVybGluZTogdHJ1ZX19LFxuICAgIHtpbnNlcnQ6ICdcXG4nLCBhdHRyaWJ1dGVzOiB7aGVhZGVyOiAxfX0sXG4gICAge2luc2VydDogJ3JlZCcsIGF0dHJpYnV0ZXM6IHtjb2xvcjogJ3JlZCd9fSxcbiAgICB7aW5zZXJ0OiAnYmdyZWQnLCBhdHRyaWJ1dGVzOiB7Ymc6ICdyZWQnfX0sXG4gICAge2luc2VydDogJ3N0cmlrZXRocnUnLCBhdHRyaWJ1dGVzOiB7c3RyaWtlOiB0cnVlfX0sXG4gICAge2luc2VydDogJ1xcbid9LFxuICAgIHtpbnNlcnQ6IHtpbWFnZTogJ0lNQUdFVVJMJ319LFxuICAgIHtpbnNlcnQ6ICdlc2NhcGVkIEhUTUwgJiA8ID4geyB9IFwiIFxcJyAmJ30sXG4gICAge2luc2VydDogJ1xcbid9LFxuICAgIHtpbnNlcnQ6ICdlbXB0eSBuZXdsaW5lIHNob3VsZCBoYXZlIG5ic3AgKGZvdXIgYWZ0ZXIgdGhpcylcXG5cXG5cXG4nfSxcbiAgICB7aW5zZXJ0OiAnXFxuJ30sXG4gICAge2luc2VydDogJ1xcbid9LFxuICAgIHtpbnNlcnQ6ICdvbGQgaW1hZ2Ugc3R5bGU6J30sXG4gICAge2luc2VydDogJzEnLCBhdHRyaWJ1dGVzOiB7aW1hZ2U6ICdJTUFHRVVSTCd9fSxcbiAgICB7aW5zZXJ0OiAnXFxuJ30sXG4gICAge2luc2VydDogJ2dvaW5nIE5VVFMnLCBhdHRyaWJ1dGVzOiB7XG4gICAgICBpdGFsaWM6IHRydWUsXG4gICAgICBib2xkOiB0cnVlLFxuICAgICAgc3ViOiB0cnVlLFxuICAgICAgc3VwZXI6IHRydWUsXG4gICAgICBiZzogJyMwMDAwMDAnLFxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIHN0cmlrZTogdHJ1ZSxcbiAgICAgIHVuZGVybGluZTogdHJ1ZSxcbiAgICB9fSxcbiAgICB7aW5zZXJ0OiAnXFxuJ30sXG4gICAge2luc2VydDogJ2JvbGQgbXVsdGlsaW5lXFxudmFsdWUnLCBhdHRyaWJ1dGVzOiB7Ym9sZDogdHJ1ZX19LFxuICAgIHtpbnNlcnQ6ICdpdGFsaWMgdmFsdWUnLCBhdHRyaWJ1dGVzOiB7aXRhbGljOiB0cnVlfX0sXG4gICAge2luc2VydDogJ2JvbGQtaXRhbGljIHZhbHVlJywgYXR0cmlidXRlczoge2JvbGQ6IHRydWUsIGl0YWxpYzogdHJ1ZX19LFxuICAgIHtpbnNlcnQ6ICdcXG4nfSxcbiAgXSxcbn07XG5cbmNvbnN0IGludGVncmF0aW9uUmVzdWx0UGxhaW4gPSBgbXVsdGlsaW5lXG52YWx1ZVxuc2ltcGxlIHRleHQgd2l0aCBhXG5cbmZvbGxvd2luZyB0ZXh0XG5cbiogYnVsbGV0ZWQgbGlzdCBvbmVcbiogYnVsbGV0ZWQgbGlzdCB0d29cbiogYnVsbGV0ZWQgbGlzdCB0aHJlZVxuXG4qIG51bWJlcmVkIGxpc3Qgb25lXG4qIG51bWJlcmVkIGxpc3QgdHdvXG4qIG51bWJlcmVkIGxpc3QgdGhyZWVcblxuaGVhZGVyIHR3b1xudW5kZXJsaW5lZCBoZWFkZXIgb25lXG5yZWRiZ3JlZHN0cmlrZXRocnVcbklNQUdFOiBJTUFHRVVSTGVzY2FwZWQgSFRNTCAmIDwgPiB7IH0gXCIgJyAmXG5lbXB0eSBuZXdsaW5lIHNob3VsZCBoYXZlIG5ic3AgKGZvdXIgYWZ0ZXIgdGhpcylcblxuXG5cblxub2xkIGltYWdlIHN0eWxlOklNQUdFOiBJTUFHRVVSTFxuZ29pbmcgTlVUU1xuYm9sZCBtdWx0aWxpbmVcbnZhbHVlaXRhbGljIHZhbHVlYm9sZC1pdGFsaWMgdmFsdWVcbmA7XG5cbmNvbnN0IGludGVncmF0aW9uUmVzdWx0SFRNTCA9IGA8cD5cbiAgPHNwYW4+bXVsdGlsaW5lPC9zcGFuPlxuPC9wPlxuPHA+XG4gIDxzcGFuPnZhbHVlPC9zcGFuPlxuPC9wPlxuPHA+XG4gIDxzcGFuPnNpbXBsZSB0ZXh0IHdpdGggYTwvc3Bhbj5cbjwvcD5cbjxwPlxuICA8c3Bhbj4mbmJzcDs8L3NwYW4+XG48L3A+XG48cD5cbiAgPHNwYW4+Zm9sbG93aW5nIHRleHQ8L3NwYW4+XG48L3A+XG48cD5cbiAgPHNwYW4+Jm5ic3A7PC9zcGFuPlxuPC9wPlxuPHVsPlxuICA8bGk+XG4gICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImxpbmtUYXJnZXRcIj5cbiAgICAgIDxzcGFuPmJ1bGxldGVkIGxpc3Qgb25lPC9zcGFuPlxuICAgIDwvYT5cbiAgPC9saT5cbiAgPGxpPlxuICAgIDxzcGFuPmJ1bGxldGVkIGxpc3QgdHdvPC9zcGFuPlxuICA8L2xpPlxuICA8bGk+XG4gICAgPHNwYW4+YnVsbGV0ZWQgbGlzdCB0aHJlZTwvc3Bhbj5cbiAgPC9saT5cbjwvdWw+XG48b2w+XG4gIDxsaT5cbiAgICA8c3Bhbj5udW1iZXJlZCBsaXN0IG9uZTwvc3Bhbj5cbiAgPC9saT5cbiAgPGxpPlxuICAgIDxzcGFuPm51bWJlcmVkIGxpc3QgdHdvPC9zcGFuPlxuICA8L2xpPlxuICA8bGk+XG4gICAgPHNwYW4+bnVtYmVyZWQgbGlzdCB0aHJlZTwvc3Bhbj5cbiAgPC9saT5cbjwvb2w+XG48aDI+XG4gIDxzcGFuPmhlYWRlciB0d288L3NwYW4+XG48L2gyPlxuPGgxPlxuICA8dT5cbiAgICA8c3Bhbj51bmRlcmxpbmVkIGhlYWRlciBvbmU8L3NwYW4+XG4gIDwvdT5cbjwvaDE+XG48cD5cbiAgPHNwYW4gc3R5bGU9XCJjb2xvcjpyZWQ7XCI+XG4gICAgPHNwYW4+cmVkPC9zcGFuPlxuICA8L3NwYW4+XG4gIDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjpyZWQ7XCI+XG4gICAgPHNwYW4+YmdyZWQ8L3NwYW4+XG4gIDwvc3Bhbj5cbiAgPHM+XG4gICAgPHNwYW4+c3RyaWtldGhydTwvc3Bhbj5cbiAgPC9zPlxuPC9wPlxuPHA+XG4gIDxpbWcgc3JjPVwiSU1BR0VVUkxcIj5cbiAgPHNwYW4+ZXNjYXBlZCBIVE1MICZhbXA7ICZsdDsgJmd0OyAmIzEyMzsgJiMxMjU7ICZxdW90OyAmIzM5OyAmYW1wOzwvc3Bhbj5cbjwvcD5cbjxwPlxuICA8c3Bhbj5lbXB0eSBuZXdsaW5lIHNob3VsZCBoYXZlIG5ic3AgKGZvdXIgYWZ0ZXIgdGhpcyk8L3NwYW4+XG48L3A+XG48cD5cbiAgPHNwYW4+Jm5ic3A7PC9zcGFuPlxuPC9wPlxuPHA+XG4gIDxzcGFuPiZuYnNwOzwvc3Bhbj5cbjwvcD5cbjxwPlxuICA8c3Bhbj4mbmJzcDs8L3NwYW4+XG48L3A+XG48cD5cbiAgPHNwYW4+Jm5ic3A7PC9zcGFuPlxuPC9wPlxuPHA+XG4gIDxzcGFuPm9sZCBpbWFnZSBzdHlsZTo8L3NwYW4+XG4gIDxpbWcgc3JjPVwiSU1BR0VVUkxcIj5cbjwvcD5cbjxwPlxuICA8c3VwPlxuICAgIDxzdWI+XG4gICAgICA8cz5cbiAgICAgICAgPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiMwMDAwMDA7XCI+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjojZmZmZmZmO1wiPlxuICAgICAgICAgICAgPHU+XG4gICAgICAgICAgICAgIDxlbT5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+Z29pbmcgTlVUUzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgPC9lbT5cbiAgICAgICAgICAgIDwvdT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvcz5cbiAgICA8L3N1Yj5cbiAgPC9zdXA+XG48L3A+XG48cD5cbiAgPHN0cm9uZz5cbiAgICA8c3Bhbj5ib2xkIG11bHRpbGluZTwvc3Bhbj5cbiAgPC9zdHJvbmc+XG48L3A+XG48cD5cbiAgPHN0cm9uZz5cbiAgICA8c3Bhbj52YWx1ZTwvc3Bhbj5cbiAgPC9zdHJvbmc+XG4gIDxlbT5cbiAgICA8c3Bhbj5pdGFsaWMgdmFsdWU8L3NwYW4+XG4gICAgPHN0cm9uZz5cbiAgICAgIDxzcGFuPmJvbGQtaXRhbGljIHZhbHVlPC9zcGFuPlxuICAgIDwvc3Ryb25nPlxuICA8L2VtPlxuPC9wPmA7XG5cbmRlc2NyaWJlKCdpbnRlZ3JhdGlvbicsICgpID0+IHtcbiAgaXQoJ3N5bmNocm9ub3VzbHkgb3V0cHV0IGh0bWwgdGhhdCBtZWV0cyBhbGwgc3BlY2lmaWNhdGlvbnMnLCAoKSA9PiB7XG4gICAgcmV0dXJuIGV4cGVjdCh0cmFuc2Zvcm0udHJhbnNmb3JtKHRlc3RWYWwpKS50by5lcXVhbChpbnRlZ3JhdGlvblJlc3VsdEhUTUwpO1xuICB9KTtcbiAgaXQoJ3N5bmNocm9ub3VzbHkgb3V0cHV0IHBsYWluIHRleHQgdGhhdCBtZWV0cyBhbGwgc3BlY2lmaWNhdGlvbnMnLCAoKSA9PiB7XG4gICAgcmV0dXJuIGV4cGVjdCh0cmFuc2Zvcm0ucGxhaW5UZXh0KHRlc3RWYWwpKS50by5lcXVhbChpbnRlZ3JhdGlvblJlc3VsdFBsYWluKTtcbiAgfSk7XG4gIGl0KCdhc3luY2hyb25vdXNseSBvdXRwdXQgaHRtbCB0aGF0IG1lZXRzIGFsbCBzcGVjaWZpY2F0aW9ucycsICgpID0+IHtcbiAgICByZXR1cm4gZXhwZWN0KHRyYW5zZm9ybS50cmFuc2Zvcm1Bc3luYyh0ZXN0VmFsKSkudG8uZXZlbnR1YWxseS5lcXVhbChpbnRlZ3JhdGlvblJlc3VsdEhUTUwpO1xuICB9KTtcbiAgaXQoJ2FzeW5jaHJvbm91c2x5IG91dHB1dCBwbGFpbiB0ZXh0IHRoYXQgbWVldHMgYWxsIHNwZWNpZmljYXRpb25zJywgKCkgPT4ge1xuICAgIHJldHVybiBleHBlY3QodHJhbnNmb3JtLnBsYWluVGV4dEFzeW5jKHRlc3RWYWwpKS50by5ldmVudHVhbGx5LmVxdWFsKGludGVncmF0aW9uUmVzdWx0UGxhaW4pO1xuICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
