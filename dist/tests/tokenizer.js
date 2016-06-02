'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _tokenize = require('../operations/tokenize');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiAsPromised2.default); /* eslint-env node, mocha*/

var expect = _chai2.default.expect;

describe('tokenizer', function () {
  it('should convert single lines into a line and a break', function () {
    var ops = [{
      insert: 'word\n'
    }];
    var result = [{ type: 'text', contents: 'word', attributes: {} }, { type: 'linebreak', attributes: {} }];
    expect((0, _tokenize.tokenize)(ops)).to.deep.equal(result);
  });

  it('should convert newlines into styled linebreaks', function () {
    var ops = [{
      insert: 'listitem'
    }, {
      insert: '\n',
      attributes: {
        bullet: true
      }
    }];
    var result = [{ type: 'text', contents: 'listitem', attributes: {} }, { type: 'linebreak', attributes: { bullet: true } }];
    expect((0, _tokenize.tokenize)(ops)).to.deep.equal(result);
  });

  it('should convert inline newlines into multiple lines', function () {
    var ops = [{
      insert: 'word\nword\n\nword\n'
    }];
    var result = [{ type: 'text', contents: 'word', attributes: {} }, { type: 'linebreak', attributes: {} }, { type: 'text', contents: 'word', attributes: {} }, { type: 'linebreak', attributes: {} }, { type: 'linebreak', attributes: {} }, { type: 'text', contents: 'word', attributes: {} }, { type: 'linebreak', attributes: {} }];
    expect((0, _tokenize.tokenize)(ops)).to.deep.equal(result);
  });

  it('should handle inline newlines at the start of the line', function () {
    var ops = [{
      insert: '\nword\n\nword'
    }];
    var result = [{ type: 'linebreak', attributes: {} }, { type: 'text', contents: 'word', attributes: {} }, { type: 'linebreak', attributes: {} }, { type: 'linebreak', attributes: {} }, { type: 'text', contents: 'word', attributes: {} }];
    expect((0, _tokenize.tokenize)(ops)).to.deep.equal(result);
  });
});
//# sourceMappingURL=data:application/json;base64,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QyxNQUFwQyxFQVhpRTtHQUFOLENBQTdELENBNUMwQjtDQUFOLENBQXRCIiwiZmlsZSI6InRlc3RzL3Rva2VuaXplci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgbm9kZSwgbW9jaGEqL1xuXG5pbXBvcnQgY2hhaSBmcm9tICdjaGFpJztcbmltcG9ydCBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcbmltcG9ydCB7IHRva2VuaXplIH0gZnJvbSAnLi4vb3BlcmF0aW9ucy90b2tlbml6ZSc7XG5cbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcblxuY29uc3QgZXhwZWN0ID0gY2hhaS5leHBlY3Q7XG5cbmRlc2NyaWJlKCd0b2tlbml6ZXInLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgY29udmVydCBzaW5nbGUgbGluZXMgaW50byBhIGxpbmUgYW5kIGEgYnJlYWsnLCAoKSA9PiB7XG4gICAgY29uc3Qgb3BzID0gW3tcbiAgICAgIGluc2VydDogJ3dvcmRcXG4nLFxuICAgIH1dO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtcbiAgICAgIHt0eXBlOiAndGV4dCcsIGNvbnRlbnRzOiAnd29yZCcsIGF0dHJpYnV0ZXM6IHt9fSxcbiAgICAgIHt0eXBlOiAnbGluZWJyZWFrJywgYXR0cmlidXRlczoge319LFxuICAgIF07XG4gICAgZXhwZWN0KHRva2VuaXplKG9wcykpLnRvLmRlZXAuZXF1YWwocmVzdWx0KTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBjb252ZXJ0IG5ld2xpbmVzIGludG8gc3R5bGVkIGxpbmVicmVha3MnLCAoKSA9PiB7XG4gICAgY29uc3Qgb3BzID0gW3tcbiAgICAgIGluc2VydDogJ2xpc3RpdGVtJyxcbiAgICB9LCB7XG4gICAgICBpbnNlcnQ6ICdcXG4nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBidWxsZXQ6IHRydWUsXG4gICAgICB9LFxuICAgIH1dO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtcbiAgICAgIHt0eXBlOiAndGV4dCcsIGNvbnRlbnRzOiAnbGlzdGl0ZW0nLCBhdHRyaWJ1dGVzOiB7fX0sXG4gICAgICB7dHlwZTogJ2xpbmVicmVhaycsIGF0dHJpYnV0ZXM6IHtidWxsZXQ6IHRydWV9fSxcbiAgICBdO1xuICAgIGV4cGVjdCh0b2tlbml6ZShvcHMpKS50by5kZWVwLmVxdWFsKHJlc3VsdCk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgY29udmVydCBpbmxpbmUgbmV3bGluZXMgaW50byBtdWx0aXBsZSBsaW5lcycsICgpID0+IHtcbiAgICBjb25zdCBvcHMgPSBbe1xuICAgICAgaW5zZXJ0OiAnd29yZFxcbndvcmRcXG5cXG53b3JkXFxuJyxcbiAgICB9XTtcbiAgICBjb25zdCByZXN1bHQgPSBbXG4gICAgICB7dHlwZTogJ3RleHQnLCBjb250ZW50czogJ3dvcmQnLCBhdHRyaWJ1dGVzOiB7fX0sXG4gICAgICB7dHlwZTogJ2xpbmVicmVhaycsIGF0dHJpYnV0ZXM6IHt9fSxcbiAgICAgIHt0eXBlOiAndGV4dCcsIGNvbnRlbnRzOiAnd29yZCcsIGF0dHJpYnV0ZXM6IHt9fSxcbiAgICAgIHt0eXBlOiAnbGluZWJyZWFrJywgYXR0cmlidXRlczoge319LFxuICAgICAge3R5cGU6ICdsaW5lYnJlYWsnLCBhdHRyaWJ1dGVzOiB7fX0sXG4gICAgICB7dHlwZTogJ3RleHQnLCBjb250ZW50czogJ3dvcmQnLCBhdHRyaWJ1dGVzOiB7fX0sXG4gICAgICB7dHlwZTogJ2xpbmVicmVhaycsIGF0dHJpYnV0ZXM6IHt9fSxcbiAgICBdO1xuICAgIGV4cGVjdCh0b2tlbml6ZShvcHMpKS50by5kZWVwLmVxdWFsKHJlc3VsdCk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgaGFuZGxlIGlubGluZSBuZXdsaW5lcyBhdCB0aGUgc3RhcnQgb2YgdGhlIGxpbmUnLCAoKSA9PiB7XG4gICAgY29uc3Qgb3BzID0gW3tcbiAgICAgIGluc2VydDogJ1xcbndvcmRcXG5cXG53b3JkJyxcbiAgICB9XTtcbiAgICBjb25zdCByZXN1bHQgPSBbXG4gICAgICB7dHlwZTogJ2xpbmVicmVhaycsIGF0dHJpYnV0ZXM6IHt9fSxcbiAgICAgIHt0eXBlOiAndGV4dCcsIGNvbnRlbnRzOiAnd29yZCcsIGF0dHJpYnV0ZXM6IHt9fSxcbiAgICAgIHt0eXBlOiAnbGluZWJyZWFrJywgYXR0cmlidXRlczoge319LFxuICAgICAge3R5cGU6ICdsaW5lYnJlYWsnLCBhdHRyaWJ1dGVzOiB7fX0sXG4gICAgICB7dHlwZTogJ3RleHQnLCBjb250ZW50czogJ3dvcmQnLCBhdHRyaWJ1dGVzOiB7fX0sXG4gICAgXTtcbiAgICBleHBlY3QodG9rZW5pemUob3BzKSkudG8uZGVlcC5lcXVhbChyZXN1bHQpO1xuICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
