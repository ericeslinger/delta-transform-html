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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RzL2Zvcm1hdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVk7Ozs7OztBQUVaLGVBQUssR0FBTDs7QUFFQSxJQUFNLFNBQVMsZUFBSyxNQUFMOztBQUVmLFNBQVMsU0FBVCxFQUFvQixZQUFNO0FBQ3hCLEtBQUcsZ0NBQUgsRUFBcUMsWUFBTTtBQUN6QyxRQUFNLFFBQVEsRUFBQyxLQUFLLENBQUM7QUFDbkIsZ0JBQVEsUUFBUjtBQUNBLG9CQUFZO0FBQ1YsY0FBSSxLQUFKO1NBREY7T0FGa0IsQ0FBTCxFQUFULENBRG1DO0FBT3pDLFFBQU0sU0FBUyxxRkFBVDtBQVBtQyxVQVF6QyxDQUFPLFVBQVUsU0FBVixDQUFvQixLQUFwQixDQUFQLEVBQW1DLEVBQW5DLENBQXNDLEtBQXRDLENBQTRDLE1BQTVDLEVBUnlDO0dBQU4sQ0FBckMsQ0FEd0I7QUFXeEIsS0FBRyxvQkFBSCxFQUF5QixZQUFNO0FBQzdCLFFBQU0sUUFBUSxFQUFDLEtBQUssQ0FBQztBQUNuQixnQkFBUSxRQUFSO0FBQ0Esb0JBQVk7QUFDVixnQkFBTSxJQUFOO1NBREY7T0FGa0IsQ0FBTCxFQUFULENBRHVCO0FBTzdCLFFBQU0sU0FBUywyREFBVDtBQVB1QixVQVE3QixDQUFPLFVBQVUsU0FBVixDQUFvQixLQUFwQixDQUFQLEVBQW1DLEVBQW5DLENBQXNDLEtBQXRDLENBQTRDLE1BQTVDLEVBUjZCO0dBQU4sQ0FBekIsQ0FYd0I7QUFxQnhCLEtBQUcsZ0NBQUgsRUFBcUMsWUFBTTtBQUN6QyxRQUFNLFFBQVEsRUFBQyxLQUFLLENBQUM7QUFDbkIsZ0JBQVEsUUFBUjtBQUNBLG9CQUFZO0FBQ1YsaUJBQU8sS0FBUDtTQURGO09BRmtCLENBQUwsRUFBVCxDQURtQztBQU96QyxRQUFNLFNBQVMsMEVBQVQ7QUFQbUMsVUFRekMsQ0FBTyxVQUFVLFNBQVYsQ0FBb0IsS0FBcEIsQ0FBUCxFQUFtQyxFQUFuQyxDQUFzQyxLQUF0QyxDQUE0QyxNQUE1QyxFQVJ5QztHQUFOLENBQXJDLENBckJ3QjtBQStCeEIsS0FBRyx1QkFBSCxFQUE0QixZQUFNO0FBQ2hDLFFBQU0sUUFBUSxFQUFDLEtBQUssQ0FBQztBQUNuQixnQkFBUSxNQUFSO09BRGtCLEVBRWpCO0FBQ0QsZ0JBQVEsSUFBUjtBQUNBLG9CQUFZO0FBQ1Ysa0JBQVEsQ0FBUjtTQURGO09BSmtCLENBQUwsRUFBVCxDQUQwQjtBQVNoQyxRQUFNLFNBQVMsa0NBQVQ7QUFUMEIsVUFVaEMsQ0FBTyxVQUFVLFNBQVYsQ0FBb0IsS0FBcEIsQ0FBUCxFQUFtQyxFQUFuQyxDQUFzQyxLQUF0QyxDQUE0QyxNQUE1QyxFQVZnQztHQUFOLENBQTVCLENBL0J3QjtBQTJDeEIsS0FBRyxzQkFBSCxFQUEyQixZQUFNO0FBQy9CLFFBQU0sUUFBUSxFQUFDLEtBQUssQ0FBQztBQUNuQixvQkFBWTtBQUNWLGlCQUFPLEtBQVA7U0FERjtPQURrQixFQUlqQjtBQUNELGdCQUFRLElBQVI7QUFDQSxvQkFBWSxFQUFaO09BTmtCLENBQUwsRUFBVCxDQUR5QjtBQVMvQixRQUFNLFNBQVMsOEJBQVQ7QUFUeUIsVUFVL0IsQ0FBTyxVQUFVLFNBQVYsQ0FBb0IsS0FBcEIsQ0FBUCxFQUFtQyxFQUFuQyxDQUFzQyxLQUF0QyxDQUE0QyxNQUE1QyxFQVYrQjtHQUFOLENBQTNCLENBM0N3QjtBQXVEeEIsS0FBRyxzQkFBSCxFQUEyQixZQUFNO0FBQy9CLFFBQU0sUUFBUSxFQUFDLEtBQUssQ0FBQztBQUNuQixnQkFBUSxRQUFSO0FBQ0Esb0JBQVk7QUFDVixrQkFBUSxJQUFSO1NBREY7T0FGa0IsQ0FBTCxFQUFULENBRHlCO0FBTy9CLFFBQU0sU0FBUyxtREFBVDtBQVB5QixVQVEvQixDQUFPLFVBQVUsU0FBVixDQUFvQixLQUFwQixDQUFQLEVBQW1DLEVBQW5DLENBQXNDLEtBQXRDLENBQTRDLE1BQTVDLEVBUitCO0dBQU4sQ0FBM0IsQ0F2RHdCO0FBaUV4QixLQUFHLHFCQUFILEVBQTBCLFlBQU07QUFDOUIsUUFBTSxRQUFRLEVBQUMsS0FBSyxDQUFDO0FBQ25CLGdCQUFRLE1BQVI7QUFDQSxvQkFBWTtBQUNWLGdCQUFNLEtBQU47U0FERjtPQUZrQixFQUtqQjtBQUNELGdCQUFRLElBQVI7QUFDQSxvQkFBWSxFQUFaO09BUGtCLENBQUwsRUFBVCxDQUR3QjtBQVU5QixRQUFNLFNBQVMsNEVBQVQ7QUFWd0IsVUFXOUIsQ0FBTyxVQUFVLFNBQVYsQ0FBb0IsS0FBcEIsQ0FBUCxFQUFtQyxFQUFuQyxDQUFzQyxLQUF0QyxDQUE0QyxNQUE1QyxFQVg4QjtHQUFOLENBQTFCLENBakV3QjtBQThFeEIsS0FBRyw2QkFBSCxFQUFrQyxZQUFNO0FBQ3RDLFFBQU0sUUFBUSxFQUFDLEtBQUssQ0FBQztBQUNuQixnQkFBUSxNQUFSO09BRGtCLEVBRWpCO0FBQ0QsZ0JBQVEsSUFBUjtBQUNBLG9CQUFZO0FBQ1YsbUJBQVMsSUFBVDtTQURGO09BSmtCLENBQUwsRUFBVCxDQURnQztBQVN0QyxRQUFNLFNBQVMscURBQVQ7QUFUZ0MsVUFVdEMsQ0FBTyxVQUFVLFNBQVYsQ0FBb0IsS0FBcEIsQ0FBUCxFQUFtQyxFQUFuQyxDQUFzQyxLQUF0QyxDQUE0QyxNQUE1QyxFQVZzQztHQUFOLENBQWxDLENBOUV3QjtBQTBGeEIsS0FBRywrQkFBSCxFQUFvQyxZQUFNO0FBQ3hDLFFBQU0sUUFBUSxFQUFDLEtBQUssQ0FBQztBQUNuQixnQkFBUSxNQUFSO09BRGtCLEVBRWpCO0FBQ0QsZ0JBQVEsSUFBUjtBQUNBLG9CQUFZO0FBQ1Ysa0JBQVEsSUFBUjtTQURGO09BSmtCLENBQUwsRUFBVCxDQURrQztBQVN4QyxRQUFNLFNBQVMscURBQVQ7QUFUa0MsVUFVeEMsQ0FBTyxVQUFVLFNBQVYsQ0FBb0IsS0FBcEIsQ0FBUCxFQUFtQyxFQUFuQyxDQUFzQyxLQUF0QyxDQUE0QyxNQUE1QyxFQVZ3QztHQUFOLENBQXBDLENBMUZ3QjtBQXNHeEIsS0FBRywwQkFBSCxFQUErQixZQUFNO0FBQ25DLFFBQU0sUUFBUSxFQUFDLEtBQUssQ0FBQztBQUNuQixnQkFBUSxRQUFSO09BRGtCLENBQUwsRUFBVCxDQUQ2QjtBQUluQyxRQUFNLFNBQVMsZ0NBQVQ7QUFKNkIsVUFLbkMsQ0FBTyxVQUFVLFNBQVYsQ0FBb0IsS0FBcEIsQ0FBUCxFQUFtQyxFQUFuQyxDQUFzQyxLQUF0QyxDQUE0QyxNQUE1QyxFQUxtQztHQUFOLENBQS9CLENBdEd3QjtBQTZHeEIsS0FBRyw2QkFBSCxFQUFrQyxZQUFNO0FBQ3RDLFFBQU0sUUFBUSxFQUFDLEtBQUssQ0FBQztBQUNuQixnQkFBUSxRQUFSO0FBQ0Esb0JBQVk7QUFDVixrQkFBUSxJQUFSO1NBREY7T0FGa0IsQ0FBTCxFQUFULENBRGdDO0FBT3RDLFFBQU0sU0FBUyxpREFBVDtBQVBnQyxVQVF0QyxDQUFPLFVBQVUsU0FBVixDQUFvQixLQUFwQixDQUFQLEVBQW1DLEVBQW5DLENBQXNDLEtBQXRDLENBQTRDLE1BQTVDLEVBUnNDO0dBQU4sQ0FBbEMsQ0E3R3dCO0FBdUh4QixLQUFHLDJCQUFILEVBQWdDLFlBQU07QUFDcEMsUUFBTSxRQUFRLEVBQUMsS0FBSyxDQUFDO0FBQ25CLGdCQUFRLFFBQVI7QUFDQSxvQkFBWTtBQUNWLGlCQUFPLElBQVA7U0FERjtPQUZrQixDQUFMLEVBQVQsQ0FEOEI7QUFPcEMsUUFBTSxTQUFTLHFEQUFUO0FBUDhCLFVBUXBDLENBQU8sVUFBVSxTQUFWLENBQW9CLEtBQXBCLENBQVAsRUFBbUMsRUFBbkMsQ0FBc0MsS0FBdEMsQ0FBNEMsTUFBNUMsRUFSb0M7R0FBTixDQUFoQyxDQXZId0I7QUFpSXhCLEtBQUcseUJBQUgsRUFBOEIsWUFBTTtBQUNsQyxRQUFNLFFBQVEsRUFBQyxLQUFLLENBQUM7QUFDbkIsZ0JBQVEsUUFBUjtBQUNBLG9CQUFZO0FBQ1YsZUFBSyxJQUFMO1NBREY7T0FGa0IsQ0FBTCxFQUFULENBRDRCO0FBT2xDLFFBQU0sU0FBUyxxREFBVDtBQVA0QixVQVFsQyxDQUFPLFVBQVUsU0FBVixDQUFvQixLQUFwQixDQUFQLEVBQW1DLEVBQW5DLENBQXNDLEtBQXRDLENBQTRDLE1BQTVDLEVBUmtDO0dBQU4sQ0FBOUIsQ0FqSXdCO0FBMkl4QixLQUFHLDBCQUFILEVBQStCLFlBQU07QUFDbkMsUUFBTSxRQUFRLEVBQUMsS0FBSyxDQUFDO0FBQ25CLGdCQUFRLFFBQVI7QUFDQSxvQkFBWTtBQUNWLHFCQUFXLElBQVg7U0FERjtPQUZrQixDQUFMLEVBQVQsQ0FENkI7QUFPbkMsUUFBTSxTQUFTLGlEQUFUO0FBUDZCLFVBUW5DLENBQU8sVUFBVSxTQUFWLENBQW9CLEtBQXBCLENBQVAsRUFBbUMsRUFBbkMsQ0FBc0MsS0FBdEMsQ0FBNEMsTUFBNUMsRUFSbUM7R0FBTixDQUEvQixDQTNJd0I7Q0FBTixDQUFwQiIsImZpbGUiOiJ0ZXN0cy9mb3JtYXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWVudiBub2RlLCBtb2NoYSovXG5cbmltcG9ydCBjaGFpIGZyb20gJ2NoYWknO1xuaW1wb3J0IGNoYWlBc1Byb21pc2VkIGZyb20gJ2NoYWktYXMtcHJvbWlzZWQnO1xuaW1wb3J0ICogYXMgdHJhbnNmb3JtIGZyb20gJy4uL2luZGV4JztcblxuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xuXG5jb25zdCBleHBlY3QgPSBjaGFpLmV4cGVjdDtcblxuZGVzY3JpYmUoJ2Zvcm1hdHMnLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgZm9ybWF0IGJhY2tncm91bmQgY29sb3InLCAoKSA9PiB7XG4gICAgY29uc3QgZGVsdGEgPSB7b3BzOiBbe1xuICAgICAgaW5zZXJ0OiAnd29yZFxcbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGJnOiAncmVkJyxcbiAgICAgIH0sXG4gICAgfV19O1xuICAgIGNvbnN0IHJlc3VsdCA9ICc8cD5cXG4gIDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjpyZWQ7XCI+XFxuICAgIDxzcGFuPndvcmQ8L3NwYW4+XFxuICA8L3NwYW4+XFxuPC9wPic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIGV4cGVjdCh0cmFuc2Zvcm0udHJhbnNmb3JtKGRlbHRhKSkudG8uZXF1YWwocmVzdWx0KTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZm9ybWF0IGJvbGQnLCAoKSA9PiB7XG4gICAgY29uc3QgZGVsdGEgPSB7b3BzOiBbe1xuICAgICAgaW5zZXJ0OiAnd29yZFxcbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGJvbGQ6IHRydWUsXG4gICAgICB9LFxuICAgIH1dfTtcbiAgICBjb25zdCByZXN1bHQgPSAnPHA+XFxuICA8c3Ryb25nPlxcbiAgICA8c3Bhbj53b3JkPC9zcGFuPlxcbiAgPC9zdHJvbmc+XFxuPC9wPic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIGV4cGVjdCh0cmFuc2Zvcm0udHJhbnNmb3JtKGRlbHRhKSkudG8uZXF1YWwocmVzdWx0KTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZm9ybWF0IGZvcmVncm91bmQgY29sb3InLCAoKSA9PiB7XG4gICAgY29uc3QgZGVsdGEgPSB7b3BzOiBbe1xuICAgICAgaW5zZXJ0OiAnd29yZFxcbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgIH0sXG4gICAgfV19O1xuICAgIGNvbnN0IHJlc3VsdCA9ICc8cD5cXG4gIDxzcGFuIHN0eWxlPVwiY29sb3I6cmVkO1wiPlxcbiAgICA8c3Bhbj53b3JkPC9zcGFuPlxcbiAgPC9zcGFuPlxcbjwvcD4nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICBleHBlY3QodHJhbnNmb3JtLnRyYW5zZm9ybShkZWx0YSkpLnRvLmVxdWFsKHJlc3VsdCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZvcm1hdCBoZWFkZXJzJywgKCkgPT4ge1xuICAgIGNvbnN0IGRlbHRhID0ge29wczogW3tcbiAgICAgIGluc2VydDogJ3dvcmQnLFxuICAgIH0sIHtcbiAgICAgIGluc2VydDogJ1xcbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGhlYWRlcjogMSxcbiAgICAgIH0sXG4gICAgfV19O1xuICAgIGNvbnN0IHJlc3VsdCA9ICc8aDE+XFxuICA8c3Bhbj53b3JkPC9zcGFuPlxcbjwvaDE+JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgZXhwZWN0KHRyYW5zZm9ybS50cmFuc2Zvcm0oZGVsdGEpKS50by5lcXVhbChyZXN1bHQpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmb3JtYXQgaW1hZ2VzJywgKCkgPT4ge1xuICAgIGNvbnN0IGRlbHRhID0ge29wczogW3tcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgaW1hZ2U6ICdVUkwnLFxuICAgICAgfSxcbiAgICB9LCB7XG4gICAgICBpbnNlcnQ6ICdcXG4nLFxuICAgICAgYXR0cmlidXRlczoge30sXG4gICAgfV19O1xuICAgIGNvbnN0IHJlc3VsdCA9ICc8cD5cXG4gIDxpbWcgc3JjPVwiVVJMXCI+XFxuPC9wPic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIGV4cGVjdCh0cmFuc2Zvcm0udHJhbnNmb3JtKGRlbHRhKSkudG8uZXF1YWwocmVzdWx0KTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZm9ybWF0IGl0YWxpYycsICgpID0+IHtcbiAgICBjb25zdCBkZWx0YSA9IHtvcHM6IFt7XG4gICAgICBpbnNlcnQ6ICd3b3JkXFxuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgaXRhbGljOiB0cnVlLFxuICAgICAgfSxcbiAgICB9XX07XG4gICAgY29uc3QgcmVzdWx0ID0gJzxwPlxcbiAgPGVtPlxcbiAgICA8c3Bhbj53b3JkPC9zcGFuPlxcbiAgPC9lbT5cXG48L3A+JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgZXhwZWN0KHRyYW5zZm9ybS50cmFuc2Zvcm0oZGVsdGEpKS50by5lcXVhbChyZXN1bHQpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmb3JtYXQgbGlua3MnLCAoKSA9PiB7XG4gICAgY29uc3QgZGVsdGEgPSB7b3BzOiBbe1xuICAgICAgaW5zZXJ0OiAnd29yZCcsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGxpbms6ICdVUkwnLFxuICAgICAgfSxcbiAgICB9LCB7XG4gICAgICBpbnNlcnQ6ICdcXG4nLFxuICAgICAgYXR0cmlidXRlczoge30sXG4gICAgfV19O1xuICAgIGNvbnN0IHJlc3VsdCA9ICc8cD5cXG4gIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJVUkxcIj5cXG4gICAgPHNwYW4+d29yZDwvc3Bhbj5cXG4gIDwvYT5cXG48L3A+JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgZXhwZWN0KHRyYW5zZm9ybS50cmFuc2Zvcm0oZGVsdGEpKS50by5lcXVhbChyZXN1bHQpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmb3JtYXQgb3JkZXJlZCBsaXN0cycsICgpID0+IHtcbiAgICBjb25zdCBkZWx0YSA9IHtvcHM6IFt7XG4gICAgICBpbnNlcnQ6ICd3b3JkJyxcbiAgICB9LCB7XG4gICAgICBpbnNlcnQ6ICdcXG4nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBvcmRlcmVkOiB0cnVlLFxuICAgICAgfSxcbiAgICB9XX07XG4gICAgY29uc3QgcmVzdWx0ID0gJzxvbD5cXG4gIDxsaT5cXG4gICAgPHNwYW4+d29yZDwvc3Bhbj5cXG4gIDwvbGk+XFxuPC9vbD4nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICBleHBlY3QodHJhbnNmb3JtLnRyYW5zZm9ybShkZWx0YSkpLnRvLmVxdWFsKHJlc3VsdCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZvcm1hdCB1bm9yZGVyZWQgbGlzdHMnLCAoKSA9PiB7XG4gICAgY29uc3QgZGVsdGEgPSB7b3BzOiBbe1xuICAgICAgaW5zZXJ0OiAnd29yZCcsXG4gICAgfSwge1xuICAgICAgaW5zZXJ0OiAnXFxuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgYnVsbGV0OiB0cnVlLFxuICAgICAgfSxcbiAgICB9XX07XG4gICAgY29uc3QgcmVzdWx0ID0gJzx1bD5cXG4gIDxsaT5cXG4gICAgPHNwYW4+d29yZDwvc3Bhbj5cXG4gIDwvbGk+XFxuPC91bD4nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICBleHBlY3QodHJhbnNmb3JtLnRyYW5zZm9ybShkZWx0YSkpLnRvLmVxdWFsKHJlc3VsdCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZvcm1hdCBwYXJhZ3JhcGhzJywgKCkgPT4ge1xuICAgIGNvbnN0IGRlbHRhID0ge29wczogW3tcbiAgICAgIGluc2VydDogJ3dvcmRcXG4nLFxuICAgIH1dfTtcbiAgICBjb25zdCByZXN1bHQgPSAnPHA+XFxuICA8c3Bhbj53b3JkPC9zcGFuPlxcbjwvcD4nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICBleHBlY3QodHJhbnNmb3JtLnRyYW5zZm9ybShkZWx0YSkpLnRvLmVxdWFsKHJlc3VsdCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZvcm1hdCBzdHJpa2V0aHJvdWdoJywgKCkgPT4ge1xuICAgIGNvbnN0IGRlbHRhID0ge29wczogW3tcbiAgICAgIGluc2VydDogJ3dvcmRcXG4nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBzdHJpa2U6IHRydWUsXG4gICAgICB9LFxuICAgIH1dfTtcbiAgICBjb25zdCByZXN1bHQgPSAnPHA+XFxuICA8cz5cXG4gICAgPHNwYW4+d29yZDwvc3Bhbj5cXG4gIDwvcz5cXG48L3A+JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgZXhwZWN0KHRyYW5zZm9ybS50cmFuc2Zvcm0oZGVsdGEpKS50by5lcXVhbChyZXN1bHQpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmb3JtYXQgc3VwZXJzY3JpcHQnLCAoKSA9PiB7XG4gICAgY29uc3QgZGVsdGEgPSB7b3BzOiBbe1xuICAgICAgaW5zZXJ0OiAnd29yZFxcbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHN1cGVyOiB0cnVlLFxuICAgICAgfSxcbiAgICB9XX07XG4gICAgY29uc3QgcmVzdWx0ID0gJzxwPlxcbiAgPHN1cD5cXG4gICAgPHNwYW4+d29yZDwvc3Bhbj5cXG4gIDwvc3VwPlxcbjwvcD4nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICBleHBlY3QodHJhbnNmb3JtLnRyYW5zZm9ybShkZWx0YSkpLnRvLmVxdWFsKHJlc3VsdCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZvcm1hdCBzdWJzY3JpcHQnLCAoKSA9PiB7XG4gICAgY29uc3QgZGVsdGEgPSB7b3BzOiBbe1xuICAgICAgaW5zZXJ0OiAnd29yZFxcbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHN1YjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfV19O1xuICAgIGNvbnN0IHJlc3VsdCA9ICc8cD5cXG4gIDxzdWI+XFxuICAgIDxzcGFuPndvcmQ8L3NwYW4+XFxuICA8L3N1Yj5cXG48L3A+JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgZXhwZWN0KHRyYW5zZm9ybS50cmFuc2Zvcm0oZGVsdGEpKS50by5lcXVhbChyZXN1bHQpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmb3JtYXQgdW5kZXJsaW5lcycsICgpID0+IHtcbiAgICBjb25zdCBkZWx0YSA9IHtvcHM6IFt7XG4gICAgICBpbnNlcnQ6ICd3b3JkXFxuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgdW5kZXJsaW5lOiB0cnVlLFxuICAgICAgfSxcbiAgICB9XX07XG4gICAgY29uc3QgcmVzdWx0ID0gJzxwPlxcbiAgPHU+XFxuICAgIDxzcGFuPndvcmQ8L3NwYW4+XFxuICA8L3U+XFxuPC9wPic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIGV4cGVjdCh0cmFuc2Zvcm0udHJhbnNmb3JtKGRlbHRhKSkudG8uZXF1YWwocmVzdWx0KTtcbiAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
