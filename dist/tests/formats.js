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

describe('formats', function () {
  it('should format background color', function () {
    var delta = { ops: [{
        insert: 'word\n',
        attributes: {
          bg: 'red'
        }
      }] };
    var result = '<p>\n  <span style="background-color:red;">\n    <span>word</span>\n  </span>\n</p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format bold', function () {
    var delta = { ops: [{
        insert: 'word\n',
        attributes: {
          bold: true
        }
      }] };
    var result = '<p>\n  <strong>\n    <span>word</span>\n  </strong>\n</p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format foreground color', function () {
    var delta = { ops: [{
        insert: 'word\n',
        attributes: {
          color: 'red'
        }
      }] };
    var result = '<p>\n  <span style="color:red;">\n    <span>word</span>\n  </span>\n</p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format headers', function () {
    var delta = { ops: [{
        insert: 'word'
      }, {
        insert: '\n',
        attributes: {
          header: 1
        }
      }] };
    var result = '<h1>\n  <span>word</span>\n</h1>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format images', function () {
    var delta = { ops: [{
        attributes: {
          image: 'URL'
        }
      }, {
        insert: '\n',
        attributes: {}
      }] };
    var result = '<p>\n  <img src="URL">\n</p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format italic', function () {
    var delta = { ops: [{
        insert: 'word\n',
        attributes: {
          italic: true
        }
      }] };
    var result = '<p>\n  <em>\n    <span>word</span>\n  </em>\n</p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format links', function () {
    var delta = { ops: [{
        insert: 'word',
        attributes: {
          link: 'URL'
        }
      }, {
        insert: '\n',
        attributes: {}
      }] };
    var result = '<p>\n  <a target="_blank" href="URL">\n    <span>word</span>\n  </a>\n</p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format ordered lists', function () {
    var delta = { ops: [{
        insert: 'word'
      }, {
        insert: '\n',
        attributes: {
          ordered: true
        }
      }] };
    var result = '<ol>\n  <li>\n    <span>word</span>\n  </li>\n</ol>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format unordered lists', function () {
    var delta = { ops: [{
        insert: 'word'
      }, {
        insert: '\n',
        attributes: {
          bullet: true
        }
      }] };
    var result = '<ul>\n  <li>\n    <span>word</span>\n  </li>\n</ul>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format paragraphs', function () {
    var delta = { ops: [{
        insert: 'word\n'
      }] };
    var result = '<p>\n  <span>word</span>\n</p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format strikethrough', function () {
    var delta = { ops: [{
        insert: 'word\n',
        attributes: {
          strike: true
        }
      }] };
    var result = '<p>\n  <s>\n    <span>word</span>\n  </s>\n</p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format superscript', function () {
    var delta = { ops: [{
        insert: 'word\n',
        attributes: {
          super: true
        }
      }] };
    var result = '<p>\n  <sup>\n    <span>word</span>\n  </sup>\n</p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format subscript', function () {
    var delta = { ops: [{
        insert: 'word\n',
        attributes: {
          sub: true
        }
      }] };
    var result = '<p>\n  <sub>\n    <span>word</span>\n  </sub>\n</p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should ignore unknowns', function () {
    var delta = { ops: [{
        attributes: {
          tuber: 'POTATO'
        }
      }, {
        insert: '\n'
      }] };
    var result = '<p>\n  \n\n  \n</p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format underlines', function () {
    var delta = { ops: [{
        insert: 'word\n',
        attributes: {
          underline: true
        }
      }] };
    var result = '<p>\n  <u>\n    <span>word</span>\n  </u>\n</p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
});
//# sourceMappingURL=data:application/json;base64,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QTVDLEVBUmtDO0dBQU4sQ0FBOUIsQ0FqSXdCO0FBMkl4QixLQUFHLHdCQUFILEVBQTZCLFlBQU07QUFDakMsUUFBTSxRQUFRLEVBQUMsS0FBSyxDQUFDO0FBQ25CLG9CQUFZO0FBQ1YsaUJBQU8sUUFBUDtTQURGO09BRGtCLEVBSWpCO0FBQ0QsZ0JBQVEsSUFBUjtPQUxrQixDQUFMLEVBQVQsQ0FEMkI7QUFRakMsUUFBTSxTQUFTLHFCQUFUO0FBUjJCLFVBU2pDLENBQU8sVUFBVSxTQUFWLENBQW9CLEtBQXBCLENBQVAsRUFBbUMsRUFBbkMsQ0FBc0MsS0FBdEMsQ0FBNEMsTUFBNUMsRUFUaUM7R0FBTixDQUE3QixDQTNJd0I7QUFzSnhCLEtBQUcsMEJBQUgsRUFBK0IsWUFBTTtBQUNuQyxRQUFNLFFBQVEsRUFBQyxLQUFLLENBQUM7QUFDbkIsZ0JBQVEsUUFBUjtBQUNBLG9CQUFZO0FBQ1YscUJBQVcsSUFBWDtTQURGO09BRmtCLENBQUwsRUFBVCxDQUQ2QjtBQU9uQyxRQUFNLFNBQVMsaURBQVQ7QUFQNkIsVUFRbkMsQ0FBTyxVQUFVLFNBQVYsQ0FBb0IsS0FBcEIsQ0FBUCxFQUFtQyxFQUFuQyxDQUFzQyxLQUF0QyxDQUE0QyxNQUE1QyxFQVJtQztHQUFOLENBQS9CLENBdEp3QjtDQUFOLENBQXBCIiwiZmlsZSI6InRlc3RzL2Zvcm1hdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZW52IG5vZGUsIG1vY2hhKi9cblxuaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XG5pbXBvcnQgKiBhcyB0cmFuc2Zvcm0gZnJvbSAnLi4vaW5kZXgnO1xuXG5jaGFpLnVzZShjaGFpQXNQcm9taXNlZCk7XG5cbmNvbnN0IGV4cGVjdCA9IGNoYWkuZXhwZWN0O1xuXG5kZXNjcmliZSgnZm9ybWF0cycsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCBmb3JtYXQgYmFja2dyb3VuZCBjb2xvcicsICgpID0+IHtcbiAgICBjb25zdCBkZWx0YSA9IHtvcHM6IFt7XG4gICAgICBpbnNlcnQ6ICd3b3JkXFxuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgYmc6ICdyZWQnLFxuICAgICAgfSxcbiAgICB9XX07XG4gICAgY29uc3QgcmVzdWx0ID0gJzxwPlxcbiAgPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcIj5cXG4gICAgPHNwYW4+d29yZDwvc3Bhbj5cXG4gIDwvc3Bhbj5cXG48L3A+JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgZXhwZWN0KHRyYW5zZm9ybS50cmFuc2Zvcm0oZGVsdGEpKS50by5lcXVhbChyZXN1bHQpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmb3JtYXQgYm9sZCcsICgpID0+IHtcbiAgICBjb25zdCBkZWx0YSA9IHtvcHM6IFt7XG4gICAgICBpbnNlcnQ6ICd3b3JkXFxuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgYm9sZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfV19O1xuICAgIGNvbnN0IHJlc3VsdCA9ICc8cD5cXG4gIDxzdHJvbmc+XFxuICAgIDxzcGFuPndvcmQ8L3NwYW4+XFxuICA8L3N0cm9uZz5cXG48L3A+JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgZXhwZWN0KHRyYW5zZm9ybS50cmFuc2Zvcm0oZGVsdGEpKS50by5lcXVhbChyZXN1bHQpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmb3JtYXQgZm9yZWdyb3VuZCBjb2xvcicsICgpID0+IHtcbiAgICBjb25zdCBkZWx0YSA9IHtvcHM6IFt7XG4gICAgICBpbnNlcnQ6ICd3b3JkXFxuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgfSxcbiAgICB9XX07XG4gICAgY29uc3QgcmVzdWx0ID0gJzxwPlxcbiAgPHNwYW4gc3R5bGU9XCJjb2xvcjpyZWQ7XCI+XFxuICAgIDxzcGFuPndvcmQ8L3NwYW4+XFxuICA8L3NwYW4+XFxuPC9wPic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIGV4cGVjdCh0cmFuc2Zvcm0udHJhbnNmb3JtKGRlbHRhKSkudG8uZXF1YWwocmVzdWx0KTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZm9ybWF0IGhlYWRlcnMnLCAoKSA9PiB7XG4gICAgY29uc3QgZGVsdGEgPSB7b3BzOiBbe1xuICAgICAgaW5zZXJ0OiAnd29yZCcsXG4gICAgfSwge1xuICAgICAgaW5zZXJ0OiAnXFxuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgaGVhZGVyOiAxLFxuICAgICAgfSxcbiAgICB9XX07XG4gICAgY29uc3QgcmVzdWx0ID0gJzxoMT5cXG4gIDxzcGFuPndvcmQ8L3NwYW4+XFxuPC9oMT4nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICBleHBlY3QodHJhbnNmb3JtLnRyYW5zZm9ybShkZWx0YSkpLnRvLmVxdWFsKHJlc3VsdCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZvcm1hdCBpbWFnZXMnLCAoKSA9PiB7XG4gICAgY29uc3QgZGVsdGEgPSB7b3BzOiBbe1xuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBpbWFnZTogJ1VSTCcsXG4gICAgICB9LFxuICAgIH0sIHtcbiAgICAgIGluc2VydDogJ1xcbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICB9XX07XG4gICAgY29uc3QgcmVzdWx0ID0gJzxwPlxcbiAgPGltZyBzcmM9XCJVUkxcIj5cXG48L3A+JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgZXhwZWN0KHRyYW5zZm9ybS50cmFuc2Zvcm0oZGVsdGEpKS50by5lcXVhbChyZXN1bHQpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmb3JtYXQgaXRhbGljJywgKCkgPT4ge1xuICAgIGNvbnN0IGRlbHRhID0ge29wczogW3tcbiAgICAgIGluc2VydDogJ3dvcmRcXG4nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBpdGFsaWM6IHRydWUsXG4gICAgICB9LFxuICAgIH1dfTtcbiAgICBjb25zdCByZXN1bHQgPSAnPHA+XFxuICA8ZW0+XFxuICAgIDxzcGFuPndvcmQ8L3NwYW4+XFxuICA8L2VtPlxcbjwvcD4nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICBleHBlY3QodHJhbnNmb3JtLnRyYW5zZm9ybShkZWx0YSkpLnRvLmVxdWFsKHJlc3VsdCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZvcm1hdCBsaW5rcycsICgpID0+IHtcbiAgICBjb25zdCBkZWx0YSA9IHtvcHM6IFt7XG4gICAgICBpbnNlcnQ6ICd3b3JkJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgbGluazogJ1VSTCcsXG4gICAgICB9LFxuICAgIH0sIHtcbiAgICAgIGluc2VydDogJ1xcbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICB9XX07XG4gICAgY29uc3QgcmVzdWx0ID0gJzxwPlxcbiAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIlVSTFwiPlxcbiAgICA8c3Bhbj53b3JkPC9zcGFuPlxcbiAgPC9hPlxcbjwvcD4nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICBleHBlY3QodHJhbnNmb3JtLnRyYW5zZm9ybShkZWx0YSkpLnRvLmVxdWFsKHJlc3VsdCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZvcm1hdCBvcmRlcmVkIGxpc3RzJywgKCkgPT4ge1xuICAgIGNvbnN0IGRlbHRhID0ge29wczogW3tcbiAgICAgIGluc2VydDogJ3dvcmQnLFxuICAgIH0sIHtcbiAgICAgIGluc2VydDogJ1xcbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIG9yZGVyZWQ6IHRydWUsXG4gICAgICB9LFxuICAgIH1dfTtcbiAgICBjb25zdCByZXN1bHQgPSAnPG9sPlxcbiAgPGxpPlxcbiAgICA8c3Bhbj53b3JkPC9zcGFuPlxcbiAgPC9saT5cXG48L29sPic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIGV4cGVjdCh0cmFuc2Zvcm0udHJhbnNmb3JtKGRlbHRhKSkudG8uZXF1YWwocmVzdWx0KTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZm9ybWF0IHVub3JkZXJlZCBsaXN0cycsICgpID0+IHtcbiAgICBjb25zdCBkZWx0YSA9IHtvcHM6IFt7XG4gICAgICBpbnNlcnQ6ICd3b3JkJyxcbiAgICB9LCB7XG4gICAgICBpbnNlcnQ6ICdcXG4nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBidWxsZXQ6IHRydWUsXG4gICAgICB9LFxuICAgIH1dfTtcbiAgICBjb25zdCByZXN1bHQgPSAnPHVsPlxcbiAgPGxpPlxcbiAgICA8c3Bhbj53b3JkPC9zcGFuPlxcbiAgPC9saT5cXG48L3VsPic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIGV4cGVjdCh0cmFuc2Zvcm0udHJhbnNmb3JtKGRlbHRhKSkudG8uZXF1YWwocmVzdWx0KTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZm9ybWF0IHBhcmFncmFwaHMnLCAoKSA9PiB7XG4gICAgY29uc3QgZGVsdGEgPSB7b3BzOiBbe1xuICAgICAgaW5zZXJ0OiAnd29yZFxcbicsXG4gICAgfV19O1xuICAgIGNvbnN0IHJlc3VsdCA9ICc8cD5cXG4gIDxzcGFuPndvcmQ8L3NwYW4+XFxuPC9wPic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIGV4cGVjdCh0cmFuc2Zvcm0udHJhbnNmb3JtKGRlbHRhKSkudG8uZXF1YWwocmVzdWx0KTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZm9ybWF0IHN0cmlrZXRocm91Z2gnLCAoKSA9PiB7XG4gICAgY29uc3QgZGVsdGEgPSB7b3BzOiBbe1xuICAgICAgaW5zZXJ0OiAnd29yZFxcbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHN0cmlrZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfV19O1xuICAgIGNvbnN0IHJlc3VsdCA9ICc8cD5cXG4gIDxzPlxcbiAgICA8c3Bhbj53b3JkPC9zcGFuPlxcbiAgPC9zPlxcbjwvcD4nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICBleHBlY3QodHJhbnNmb3JtLnRyYW5zZm9ybShkZWx0YSkpLnRvLmVxdWFsKHJlc3VsdCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZvcm1hdCBzdXBlcnNjcmlwdCcsICgpID0+IHtcbiAgICBjb25zdCBkZWx0YSA9IHtvcHM6IFt7XG4gICAgICBpbnNlcnQ6ICd3b3JkXFxuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgc3VwZXI6IHRydWUsXG4gICAgICB9LFxuICAgIH1dfTtcbiAgICBjb25zdCByZXN1bHQgPSAnPHA+XFxuICA8c3VwPlxcbiAgICA8c3Bhbj53b3JkPC9zcGFuPlxcbiAgPC9zdXA+XFxuPC9wPic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIGV4cGVjdCh0cmFuc2Zvcm0udHJhbnNmb3JtKGRlbHRhKSkudG8uZXF1YWwocmVzdWx0KTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZm9ybWF0IHN1YnNjcmlwdCcsICgpID0+IHtcbiAgICBjb25zdCBkZWx0YSA9IHtvcHM6IFt7XG4gICAgICBpbnNlcnQ6ICd3b3JkXFxuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgc3ViOiB0cnVlLFxuICAgICAgfSxcbiAgICB9XX07XG4gICAgY29uc3QgcmVzdWx0ID0gJzxwPlxcbiAgPHN1Yj5cXG4gICAgPHNwYW4+d29yZDwvc3Bhbj5cXG4gIDwvc3ViPlxcbjwvcD4nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICBleHBlY3QodHJhbnNmb3JtLnRyYW5zZm9ybShkZWx0YSkpLnRvLmVxdWFsKHJlc3VsdCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGlnbm9yZSB1bmtub3ducycsICgpID0+IHtcbiAgICBjb25zdCBkZWx0YSA9IHtvcHM6IFt7XG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHR1YmVyOiAnUE9UQVRPJyxcbiAgICAgIH0sXG4gICAgfSwge1xuICAgICAgaW5zZXJ0OiAnXFxuJyxcbiAgICB9XX07XG4gICAgY29uc3QgcmVzdWx0ID0gJzxwPlxcbiAgXFxuXFxuICBcXG48L3A+JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgZXhwZWN0KHRyYW5zZm9ybS50cmFuc2Zvcm0oZGVsdGEpKS50by5lcXVhbChyZXN1bHQpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmb3JtYXQgdW5kZXJsaW5lcycsICgpID0+IHtcbiAgICBjb25zdCBkZWx0YSA9IHtvcHM6IFt7XG4gICAgICBpbnNlcnQ6ICd3b3JkXFxuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgdW5kZXJsaW5lOiB0cnVlLFxuICAgICAgfSxcbiAgICB9XX07XG4gICAgY29uc3QgcmVzdWx0ID0gJzxwPlxcbiAgPHU+XFxuICAgIDxzcGFuPndvcmQ8L3NwYW4+XFxuICA8L3U+XFxuPC9wPic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIGV4cGVjdCh0cmFuc2Zvcm0udHJhbnNmb3JtKGRlbHRhKSkudG8uZXF1YWwocmVzdWx0KTtcbiAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
