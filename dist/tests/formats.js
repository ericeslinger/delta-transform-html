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
//# sourceMappingURL=data:application/json;base64,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VixxQkFBVztBQUREO0FBRk8sT0FBRCxDQUFOLEVBQWQ7QUFNQSxRQUFNLFNBQVMsaURBQWYsQztBQUNBLFdBQU8sVUFBVSxTQUFWLENBQW9CLEtBQXBCLENBQVAsRUFBbUMsRUFBbkMsQ0FBc0MsS0FBdEMsQ0FBNEMsTUFBNUM7QUFDRCxHQVREO0FBVUQsQ0FoS0QiLCJmaWxlIjoidGVzdHMvZm9ybWF0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgbm9kZSwgbW9jaGEqL1xuXG5pbXBvcnQgY2hhaSBmcm9tICdjaGFpJztcbmltcG9ydCBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcbmltcG9ydCAqIGFzIHRyYW5zZm9ybSBmcm9tICcuLi9pbmRleCc7XG5cbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcblxuY29uc3QgZXhwZWN0ID0gY2hhaS5leHBlY3Q7XG5cbmRlc2NyaWJlKCdmb3JtYXRzJywgKCkgPT4ge1xuICBpdCgnc2hvdWxkIGZvcm1hdCBiYWNrZ3JvdW5kIGNvbG9yJywgKCkgPT4ge1xuICAgIGNvbnN0IGRlbHRhID0ge29wczogW3tcbiAgICAgIGluc2VydDogJ3dvcmRcXG4nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBiZzogJ3JlZCcsXG4gICAgICB9LFxuICAgIH1dfTtcbiAgICBjb25zdCByZXN1bHQgPSAnPHA+XFxuICA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmVkO1wiPlxcbiAgICA8c3Bhbj53b3JkPC9zcGFuPlxcbiAgPC9zcGFuPlxcbjwvcD4nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICBleHBlY3QodHJhbnNmb3JtLnRyYW5zZm9ybShkZWx0YSkpLnRvLmVxdWFsKHJlc3VsdCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZvcm1hdCBib2xkJywgKCkgPT4ge1xuICAgIGNvbnN0IGRlbHRhID0ge29wczogW3tcbiAgICAgIGluc2VydDogJ3dvcmRcXG4nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBib2xkOiB0cnVlLFxuICAgICAgfSxcbiAgICB9XX07XG4gICAgY29uc3QgcmVzdWx0ID0gJzxwPlxcbiAgPHN0cm9uZz5cXG4gICAgPHNwYW4+d29yZDwvc3Bhbj5cXG4gIDwvc3Ryb25nPlxcbjwvcD4nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICBleHBlY3QodHJhbnNmb3JtLnRyYW5zZm9ybShkZWx0YSkpLnRvLmVxdWFsKHJlc3VsdCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZvcm1hdCBmb3JlZ3JvdW5kIGNvbG9yJywgKCkgPT4ge1xuICAgIGNvbnN0IGRlbHRhID0ge29wczogW3tcbiAgICAgIGluc2VydDogJ3dvcmRcXG4nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICB9LFxuICAgIH1dfTtcbiAgICBjb25zdCByZXN1bHQgPSAnPHA+XFxuICA8c3BhbiBzdHlsZT1cImNvbG9yOnJlZDtcIj5cXG4gICAgPHNwYW4+d29yZDwvc3Bhbj5cXG4gIDwvc3Bhbj5cXG48L3A+JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgZXhwZWN0KHRyYW5zZm9ybS50cmFuc2Zvcm0oZGVsdGEpKS50by5lcXVhbChyZXN1bHQpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmb3JtYXQgaGVhZGVycycsICgpID0+IHtcbiAgICBjb25zdCBkZWx0YSA9IHtvcHM6IFt7XG4gICAgICBpbnNlcnQ6ICd3b3JkJyxcbiAgICB9LCB7XG4gICAgICBpbnNlcnQ6ICdcXG4nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBoZWFkZXI6IDEsXG4gICAgICB9LFxuICAgIH1dfTtcbiAgICBjb25zdCByZXN1bHQgPSAnPGgxPlxcbiAgPHNwYW4+d29yZDwvc3Bhbj5cXG48L2gxPic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIGV4cGVjdCh0cmFuc2Zvcm0udHJhbnNmb3JtKGRlbHRhKSkudG8uZXF1YWwocmVzdWx0KTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZm9ybWF0IGltYWdlcycsICgpID0+IHtcbiAgICBjb25zdCBkZWx0YSA9IHtvcHM6IFt7XG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGltYWdlOiAnVVJMJyxcbiAgICAgIH0sXG4gICAgfSwge1xuICAgICAgaW5zZXJ0OiAnXFxuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgIH1dfTtcbiAgICBjb25zdCByZXN1bHQgPSAnPHA+XFxuICA8aW1nIHNyYz1cIlVSTFwiPlxcbjwvcD4nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICBleHBlY3QodHJhbnNmb3JtLnRyYW5zZm9ybShkZWx0YSkpLnRvLmVxdWFsKHJlc3VsdCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZvcm1hdCBpdGFsaWMnLCAoKSA9PiB7XG4gICAgY29uc3QgZGVsdGEgPSB7b3BzOiBbe1xuICAgICAgaW5zZXJ0OiAnd29yZFxcbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGl0YWxpYzogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfV19O1xuICAgIGNvbnN0IHJlc3VsdCA9ICc8cD5cXG4gIDxlbT5cXG4gICAgPHNwYW4+d29yZDwvc3Bhbj5cXG4gIDwvZW0+XFxuPC9wPic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIGV4cGVjdCh0cmFuc2Zvcm0udHJhbnNmb3JtKGRlbHRhKSkudG8uZXF1YWwocmVzdWx0KTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZm9ybWF0IGxpbmtzJywgKCkgPT4ge1xuICAgIGNvbnN0IGRlbHRhID0ge29wczogW3tcbiAgICAgIGluc2VydDogJ3dvcmQnLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBsaW5rOiAnVVJMJyxcbiAgICAgIH0sXG4gICAgfSwge1xuICAgICAgaW5zZXJ0OiAnXFxuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgIH1dfTtcbiAgICBjb25zdCByZXN1bHQgPSAnPHA+XFxuICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiVVJMXCI+XFxuICAgIDxzcGFuPndvcmQ8L3NwYW4+XFxuICA8L2E+XFxuPC9wPic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIGV4cGVjdCh0cmFuc2Zvcm0udHJhbnNmb3JtKGRlbHRhKSkudG8uZXF1YWwocmVzdWx0KTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZm9ybWF0IG9yZGVyZWQgbGlzdHMnLCAoKSA9PiB7XG4gICAgY29uc3QgZGVsdGEgPSB7b3BzOiBbe1xuICAgICAgaW5zZXJ0OiAnd29yZCcsXG4gICAgfSwge1xuICAgICAgaW5zZXJ0OiAnXFxuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgb3JkZXJlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfV19O1xuICAgIGNvbnN0IHJlc3VsdCA9ICc8b2w+XFxuICA8bGk+XFxuICAgIDxzcGFuPndvcmQ8L3NwYW4+XFxuICA8L2xpPlxcbjwvb2w+JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgZXhwZWN0KHRyYW5zZm9ybS50cmFuc2Zvcm0oZGVsdGEpKS50by5lcXVhbChyZXN1bHQpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmb3JtYXQgdW5vcmRlcmVkIGxpc3RzJywgKCkgPT4ge1xuICAgIGNvbnN0IGRlbHRhID0ge29wczogW3tcbiAgICAgIGluc2VydDogJ3dvcmQnLFxuICAgIH0sIHtcbiAgICAgIGluc2VydDogJ1xcbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGJ1bGxldDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfV19O1xuICAgIGNvbnN0IHJlc3VsdCA9ICc8dWw+XFxuICA8bGk+XFxuICAgIDxzcGFuPndvcmQ8L3NwYW4+XFxuICA8L2xpPlxcbjwvdWw+JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgZXhwZWN0KHRyYW5zZm9ybS50cmFuc2Zvcm0oZGVsdGEpKS50by5lcXVhbChyZXN1bHQpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmb3JtYXQgcGFyYWdyYXBocycsICgpID0+IHtcbiAgICBjb25zdCBkZWx0YSA9IHtvcHM6IFt7XG4gICAgICBpbnNlcnQ6ICd3b3JkXFxuJyxcbiAgICB9XX07XG4gICAgY29uc3QgcmVzdWx0ID0gJzxwPlxcbiAgPHNwYW4+d29yZDwvc3Bhbj5cXG48L3A+JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgZXhwZWN0KHRyYW5zZm9ybS50cmFuc2Zvcm0oZGVsdGEpKS50by5lcXVhbChyZXN1bHQpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmb3JtYXQgc3RyaWtldGhyb3VnaCcsICgpID0+IHtcbiAgICBjb25zdCBkZWx0YSA9IHtvcHM6IFt7XG4gICAgICBpbnNlcnQ6ICd3b3JkXFxuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgc3RyaWtlOiB0cnVlLFxuICAgICAgfSxcbiAgICB9XX07XG4gICAgY29uc3QgcmVzdWx0ID0gJzxwPlxcbiAgPHM+XFxuICAgIDxzcGFuPndvcmQ8L3NwYW4+XFxuICA8L3M+XFxuPC9wPic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIGV4cGVjdCh0cmFuc2Zvcm0udHJhbnNmb3JtKGRlbHRhKSkudG8uZXF1YWwocmVzdWx0KTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZm9ybWF0IHN1cGVyc2NyaXB0JywgKCkgPT4ge1xuICAgIGNvbnN0IGRlbHRhID0ge29wczogW3tcbiAgICAgIGluc2VydDogJ3dvcmRcXG4nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBzdXBlcjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfV19O1xuICAgIGNvbnN0IHJlc3VsdCA9ICc8cD5cXG4gIDxzdXA+XFxuICAgIDxzcGFuPndvcmQ8L3NwYW4+XFxuICA8L3N1cD5cXG48L3A+JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgZXhwZWN0KHRyYW5zZm9ybS50cmFuc2Zvcm0oZGVsdGEpKS50by5lcXVhbChyZXN1bHQpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmb3JtYXQgc3Vic2NyaXB0JywgKCkgPT4ge1xuICAgIGNvbnN0IGRlbHRhID0ge29wczogW3tcbiAgICAgIGluc2VydDogJ3dvcmRcXG4nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBzdWI6IHRydWUsXG4gICAgICB9LFxuICAgIH1dfTtcbiAgICBjb25zdCByZXN1bHQgPSAnPHA+XFxuICA8c3ViPlxcbiAgICA8c3Bhbj53b3JkPC9zcGFuPlxcbiAgPC9zdWI+XFxuPC9wPic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIGV4cGVjdCh0cmFuc2Zvcm0udHJhbnNmb3JtKGRlbHRhKSkudG8uZXF1YWwocmVzdWx0KTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgaWdub3JlIHVua25vd25zJywgKCkgPT4ge1xuICAgIGNvbnN0IGRlbHRhID0ge29wczogW3tcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgdHViZXI6ICdQT1RBVE8nLFxuICAgICAgfSxcbiAgICB9LCB7XG4gICAgICBpbnNlcnQ6ICdcXG4nLFxuICAgIH1dfTtcbiAgICBjb25zdCByZXN1bHQgPSAnPHA+XFxuICBcXG5cXG4gIFxcbjwvcD4nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICBleHBlY3QodHJhbnNmb3JtLnRyYW5zZm9ybShkZWx0YSkpLnRvLmVxdWFsKHJlc3VsdCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZvcm1hdCB1bmRlcmxpbmVzJywgKCkgPT4ge1xuICAgIGNvbnN0IGRlbHRhID0ge29wczogW3tcbiAgICAgIGluc2VydDogJ3dvcmRcXG4nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICB1bmRlcmxpbmU6IHRydWUsXG4gICAgICB9LFxuICAgIH1dfTtcbiAgICBjb25zdCByZXN1bHQgPSAnPHA+XFxuICA8dT5cXG4gICAgPHNwYW4+d29yZDwvc3Bhbj5cXG4gIDwvdT5cXG48L3A+JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgZXhwZWN0KHRyYW5zZm9ybS50cmFuc2Zvcm0oZGVsdGEpKS50by5lcXVhbChyZXN1bHQpO1xuICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
