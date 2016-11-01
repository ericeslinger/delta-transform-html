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
    var result = '<p><span style="background-color:red;"><span>word</span></span></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format bold', function () {
    var delta = { ops: [{
        insert: 'word\n',
        attributes: {
          bold: true
        }
      }] };
    var result = '<p><strong><span>word</span></strong></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format foreground color', function () {
    var delta = { ops: [{
        insert: 'word\n',
        attributes: {
          color: 'red'
        }
      }] };
    var result = '<p><span style="color:red;"><span>word</span></span></p>'; // eslint-disable-line max-len
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
    var result = '<h1><span>word</span></h1>'; // eslint-disable-line max-len
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
    var result = '<p><img src="URL"></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format italic', function () {
    var delta = { ops: [{
        insert: 'word\n',
        attributes: {
          italic: true
        }
      }] };
    var result = '<p><em><span>word</span></em></p>'; // eslint-disable-line max-len
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
    var result = '<p><a target="_blank" href="URL"><span>word</span></a></p>'; // eslint-disable-line max-len
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
    var result = '<ol><li><span>word</span></li></ol>'; // eslint-disable-line max-len
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
    var result = '<ul><li><span>word</span></li></ul>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format paragraphs', function () {
    var delta = { ops: [{
        insert: 'word\n'
      }] };
    var result = '<p><span>word</span></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format strikethrough', function () {
    var delta = { ops: [{
        insert: 'word\n',
        attributes: {
          strike: true
        }
      }] };
    var result = '<p><s><span>word</span></s></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format superscript', function () {
    var delta = { ops: [{
        insert: 'word\n',
        attributes: {
          super: true
        }
      }] };
    var result = '<p><sup><span>word</span></sup></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format subscript', function () {
    var delta = { ops: [{
        insert: 'word\n',
        attributes: {
          sub: true
        }
      }] };
    var result = '<p><sub><span>word</span></sub></p>'; // eslint-disable-line max-len
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
    var result = '<p></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
  it('should format underlines', function () {
    var delta = { ops: [{
        insert: 'word\n',
        attributes: {
          underline: true
        }
      }] };
    var result = '<p><u><span>word</span></u></p>'; // eslint-disable-line max-len
    expect(transform.transform(delta)).to.equal(result);
  });
});
//# sourceMappingURL=data:application/json;base64,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QTVDLEVBUmtDO0dBQU4sQ0FBOUIsQ0FqSXdCO0FBMkl4QixLQUFHLHdCQUFILEVBQTZCLFlBQU07QUFDakMsUUFBTSxRQUFRLEVBQUMsS0FBSyxDQUFDO0FBQ25CLG9CQUFZO0FBQ1YsaUJBQU8sUUFBUDtTQURGO09BRGtCLEVBSWpCO0FBQ0QsZ0JBQVEsSUFBUjtPQUxrQixDQUFMLEVBQVQsQ0FEMkI7QUFRakMsUUFBTSxTQUFTLFNBQVQ7QUFSMkIsVUFTakMsQ0FBTyxVQUFVLFNBQVYsQ0FBb0IsS0FBcEIsQ0FBUCxFQUFtQyxFQUFuQyxDQUFzQyxLQUF0QyxDQUE0QyxNQUE1QyxFQVRpQztHQUFOLENBQTdCLENBM0l3QjtBQXNKeEIsS0FBRywwQkFBSCxFQUErQixZQUFNO0FBQ25DLFFBQU0sUUFBUSxFQUFDLEtBQUssQ0FBQztBQUNuQixnQkFBUSxRQUFSO0FBQ0Esb0JBQVk7QUFDVixxQkFBVyxJQUFYO1NBREY7T0FGa0IsQ0FBTCxFQUFULENBRDZCO0FBT25DLFFBQU0sU0FBUyxpQ0FBVDtBQVA2QixVQVFuQyxDQUFPLFVBQVUsU0FBVixDQUFvQixLQUFwQixDQUFQLEVBQW1DLEVBQW5DLENBQXNDLEtBQXRDLENBQTRDLE1BQTVDLEVBUm1DO0dBQU4sQ0FBL0IsQ0F0SndCO0NBQU4sQ0FBcEIiLCJmaWxlIjoidGVzdHMvZm9ybWF0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgbm9kZSwgbW9jaGEqL1xuXG5pbXBvcnQgY2hhaSBmcm9tICdjaGFpJztcbmltcG9ydCBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcbmltcG9ydCAqIGFzIHRyYW5zZm9ybSBmcm9tICcuLi9pbmRleCc7XG5cbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcblxuY29uc3QgZXhwZWN0ID0gY2hhaS5leHBlY3Q7XG5cbmRlc2NyaWJlKCdmb3JtYXRzJywgKCkgPT4ge1xuICBpdCgnc2hvdWxkIGZvcm1hdCBiYWNrZ3JvdW5kIGNvbG9yJywgKCkgPT4ge1xuICAgIGNvbnN0IGRlbHRhID0ge29wczogW3tcbiAgICAgIGluc2VydDogJ3dvcmRcXG4nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBiZzogJ3JlZCcsXG4gICAgICB9LFxuICAgIH1dfTtcbiAgICBjb25zdCByZXN1bHQgPSAnPHA+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcIj48c3Bhbj53b3JkPC9zcGFuPjwvc3Bhbj48L3A+JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgZXhwZWN0KHRyYW5zZm9ybS50cmFuc2Zvcm0oZGVsdGEpKS50by5lcXVhbChyZXN1bHQpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmb3JtYXQgYm9sZCcsICgpID0+IHtcbiAgICBjb25zdCBkZWx0YSA9IHtvcHM6IFt7XG4gICAgICBpbnNlcnQ6ICd3b3JkXFxuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgYm9sZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfV19O1xuICAgIGNvbnN0IHJlc3VsdCA9ICc8cD48c3Ryb25nPjxzcGFuPndvcmQ8L3NwYW4+PC9zdHJvbmc+PC9wPic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIGV4cGVjdCh0cmFuc2Zvcm0udHJhbnNmb3JtKGRlbHRhKSkudG8uZXF1YWwocmVzdWx0KTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZm9ybWF0IGZvcmVncm91bmQgY29sb3InLCAoKSA9PiB7XG4gICAgY29uc3QgZGVsdGEgPSB7b3BzOiBbe1xuICAgICAgaW5zZXJ0OiAnd29yZFxcbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgIH0sXG4gICAgfV19O1xuICAgIGNvbnN0IHJlc3VsdCA9ICc8cD48c3BhbiBzdHlsZT1cImNvbG9yOnJlZDtcIj48c3Bhbj53b3JkPC9zcGFuPjwvc3Bhbj48L3A+JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgZXhwZWN0KHRyYW5zZm9ybS50cmFuc2Zvcm0oZGVsdGEpKS50by5lcXVhbChyZXN1bHQpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmb3JtYXQgaGVhZGVycycsICgpID0+IHtcbiAgICBjb25zdCBkZWx0YSA9IHtvcHM6IFt7XG4gICAgICBpbnNlcnQ6ICd3b3JkJyxcbiAgICB9LCB7XG4gICAgICBpbnNlcnQ6ICdcXG4nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBoZWFkZXI6IDEsXG4gICAgICB9LFxuICAgIH1dfTtcbiAgICBjb25zdCByZXN1bHQgPSAnPGgxPjxzcGFuPndvcmQ8L3NwYW4+PC9oMT4nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICBleHBlY3QodHJhbnNmb3JtLnRyYW5zZm9ybShkZWx0YSkpLnRvLmVxdWFsKHJlc3VsdCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZvcm1hdCBpbWFnZXMnLCAoKSA9PiB7XG4gICAgY29uc3QgZGVsdGEgPSB7b3BzOiBbe1xuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBpbWFnZTogJ1VSTCcsXG4gICAgICB9LFxuICAgIH0sIHtcbiAgICAgIGluc2VydDogJ1xcbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICB9XX07XG4gICAgY29uc3QgcmVzdWx0ID0gJzxwPjxpbWcgc3JjPVwiVVJMXCI+PC9wPic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIGV4cGVjdCh0cmFuc2Zvcm0udHJhbnNmb3JtKGRlbHRhKSkudG8uZXF1YWwocmVzdWx0KTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZm9ybWF0IGl0YWxpYycsICgpID0+IHtcbiAgICBjb25zdCBkZWx0YSA9IHtvcHM6IFt7XG4gICAgICBpbnNlcnQ6ICd3b3JkXFxuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgaXRhbGljOiB0cnVlLFxuICAgICAgfSxcbiAgICB9XX07XG4gICAgY29uc3QgcmVzdWx0ID0gJzxwPjxlbT48c3Bhbj53b3JkPC9zcGFuPjwvZW0+PC9wPic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIGV4cGVjdCh0cmFuc2Zvcm0udHJhbnNmb3JtKGRlbHRhKSkudG8uZXF1YWwocmVzdWx0KTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZm9ybWF0IGxpbmtzJywgKCkgPT4ge1xuICAgIGNvbnN0IGRlbHRhID0ge29wczogW3tcbiAgICAgIGluc2VydDogJ3dvcmQnLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBsaW5rOiAnVVJMJyxcbiAgICAgIH0sXG4gICAgfSwge1xuICAgICAgaW5zZXJ0OiAnXFxuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgIH1dfTtcbiAgICBjb25zdCByZXN1bHQgPSAnPHA+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIlVSTFwiPjxzcGFuPndvcmQ8L3NwYW4+PC9hPjwvcD4nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICBleHBlY3QodHJhbnNmb3JtLnRyYW5zZm9ybShkZWx0YSkpLnRvLmVxdWFsKHJlc3VsdCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZvcm1hdCBvcmRlcmVkIGxpc3RzJywgKCkgPT4ge1xuICAgIGNvbnN0IGRlbHRhID0ge29wczogW3tcbiAgICAgIGluc2VydDogJ3dvcmQnLFxuICAgIH0sIHtcbiAgICAgIGluc2VydDogJ1xcbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIG9yZGVyZWQ6IHRydWUsXG4gICAgICB9LFxuICAgIH1dfTtcbiAgICBjb25zdCByZXN1bHQgPSAnPG9sPjxsaT48c3Bhbj53b3JkPC9zcGFuPjwvbGk+PC9vbD4nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICBleHBlY3QodHJhbnNmb3JtLnRyYW5zZm9ybShkZWx0YSkpLnRvLmVxdWFsKHJlc3VsdCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZvcm1hdCB1bm9yZGVyZWQgbGlzdHMnLCAoKSA9PiB7XG4gICAgY29uc3QgZGVsdGEgPSB7b3BzOiBbe1xuICAgICAgaW5zZXJ0OiAnd29yZCcsXG4gICAgfSwge1xuICAgICAgaW5zZXJ0OiAnXFxuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgYnVsbGV0OiB0cnVlLFxuICAgICAgfSxcbiAgICB9XX07XG4gICAgY29uc3QgcmVzdWx0ID0gJzx1bD48bGk+PHNwYW4+d29yZDwvc3Bhbj48L2xpPjwvdWw+JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgZXhwZWN0KHRyYW5zZm9ybS50cmFuc2Zvcm0oZGVsdGEpKS50by5lcXVhbChyZXN1bHQpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmb3JtYXQgcGFyYWdyYXBocycsICgpID0+IHtcbiAgICBjb25zdCBkZWx0YSA9IHtvcHM6IFt7XG4gICAgICBpbnNlcnQ6ICd3b3JkXFxuJyxcbiAgICB9XX07XG4gICAgY29uc3QgcmVzdWx0ID0gJzxwPjxzcGFuPndvcmQ8L3NwYW4+PC9wPic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIGV4cGVjdCh0cmFuc2Zvcm0udHJhbnNmb3JtKGRlbHRhKSkudG8uZXF1YWwocmVzdWx0KTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZm9ybWF0IHN0cmlrZXRocm91Z2gnLCAoKSA9PiB7XG4gICAgY29uc3QgZGVsdGEgPSB7b3BzOiBbe1xuICAgICAgaW5zZXJ0OiAnd29yZFxcbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHN0cmlrZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfV19O1xuICAgIGNvbnN0IHJlc3VsdCA9ICc8cD48cz48c3Bhbj53b3JkPC9zcGFuPjwvcz48L3A+JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgZXhwZWN0KHRyYW5zZm9ybS50cmFuc2Zvcm0oZGVsdGEpKS50by5lcXVhbChyZXN1bHQpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmb3JtYXQgc3VwZXJzY3JpcHQnLCAoKSA9PiB7XG4gICAgY29uc3QgZGVsdGEgPSB7b3BzOiBbe1xuICAgICAgaW5zZXJ0OiAnd29yZFxcbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHN1cGVyOiB0cnVlLFxuICAgICAgfSxcbiAgICB9XX07XG4gICAgY29uc3QgcmVzdWx0ID0gJzxwPjxzdXA+PHNwYW4+d29yZDwvc3Bhbj48L3N1cD48L3A+JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgZXhwZWN0KHRyYW5zZm9ybS50cmFuc2Zvcm0oZGVsdGEpKS50by5lcXVhbChyZXN1bHQpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmb3JtYXQgc3Vic2NyaXB0JywgKCkgPT4ge1xuICAgIGNvbnN0IGRlbHRhID0ge29wczogW3tcbiAgICAgIGluc2VydDogJ3dvcmRcXG4nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBzdWI6IHRydWUsXG4gICAgICB9LFxuICAgIH1dfTtcbiAgICBjb25zdCByZXN1bHQgPSAnPHA+PHN1Yj48c3Bhbj53b3JkPC9zcGFuPjwvc3ViPjwvcD4nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICBleHBlY3QodHJhbnNmb3JtLnRyYW5zZm9ybShkZWx0YSkpLnRvLmVxdWFsKHJlc3VsdCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGlnbm9yZSB1bmtub3ducycsICgpID0+IHtcbiAgICBjb25zdCBkZWx0YSA9IHtvcHM6IFt7XG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHR1YmVyOiAnUE9UQVRPJyxcbiAgICAgIH0sXG4gICAgfSwge1xuICAgICAgaW5zZXJ0OiAnXFxuJyxcbiAgICB9XX07XG4gICAgY29uc3QgcmVzdWx0ID0gJzxwPjwvcD4nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICBleHBlY3QodHJhbnNmb3JtLnRyYW5zZm9ybShkZWx0YSkpLnRvLmVxdWFsKHJlc3VsdCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZvcm1hdCB1bmRlcmxpbmVzJywgKCkgPT4ge1xuICAgIGNvbnN0IGRlbHRhID0ge29wczogW3tcbiAgICAgIGluc2VydDogJ3dvcmRcXG4nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICB1bmRlcmxpbmU6IHRydWUsXG4gICAgICB9LFxuICAgIH1dfTtcbiAgICBjb25zdCByZXN1bHQgPSAnPHA+PHU+PHNwYW4+d29yZDwvc3Bhbj48L3U+PC9wPic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIGV4cGVjdCh0cmFuc2Zvcm0udHJhbnNmb3JtKGRlbHRhKSkudG8uZXF1YWwocmVzdWx0KTtcbiAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
