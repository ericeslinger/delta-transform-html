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

  it('add a linebreak if there is not one at the end of input', function () {
    var ops = [{
      insert: 'word'
    }];
    var result = [{ type: 'text', contents: 'word', attributes: {} }, { type: 'linebreak', attributes: {} }];
    expect((0, _tokenize.tokenize)(ops)).to.deep.equal(result);
  });

  it('should handle inline newlines at the start of the line', function () {
    var ops = [{
      insert: '\nword\n\nword\n'
    }];
    var result = [{ type: 'linebreak', attributes: {} }, { type: 'text', contents: 'word', attributes: {} }, { type: 'linebreak', attributes: {} }, { type: 'linebreak', attributes: {} }, { type: 'text', contents: 'word', attributes: {} }, { type: 'linebreak', attributes: {} }];
    expect((0, _tokenize.tokenize)(ops)).to.deep.equal(result);
  });
});
//# sourceMappingURL=data:application/json;base64,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LE1BQU0sV0FBTixFQUFtQixZQUFZLEVBQVosRUFEUCxFQUViLEVBQUMsTUFBTSxNQUFOLEVBQWMsVUFBVSxNQUFWLEVBQWtCLFlBQVksRUFBWixFQUZwQixFQUdiLEVBQUMsTUFBTSxXQUFOLEVBQW1CLFlBQVksRUFBWixFQUhQLEVBSWIsRUFBQyxNQUFNLFdBQU4sRUFBbUIsWUFBWSxFQUFaLEVBSlAsRUFLYixFQUFDLE1BQU0sTUFBTixFQUFjLFVBQVUsTUFBVixFQUFrQixZQUFZLEVBQVosRUFMcEIsRUFNYixFQUFDLE1BQU0sV0FBTixFQUFtQixZQUFZLEVBQVosRUFOUCxDQUFULENBSjJEO0FBWWpFLFdBQU8sd0JBQVMsR0FBVCxDQUFQLEVBQXNCLEVBQXRCLENBQXlCLElBQXpCLENBQThCLEtBQTlCLENBQW9DLE1BQXBDLEVBWmlFO0dBQU4sQ0FBN0QsQ0F2RDBCO0NBQU4sQ0FBdEIiLCJmaWxlIjoidGVzdHMvdG9rZW5pemVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWVudiBub2RlLCBtb2NoYSovXG5cbmltcG9ydCBjaGFpIGZyb20gJ2NoYWknO1xuaW1wb3J0IGNoYWlBc1Byb21pc2VkIGZyb20gJ2NoYWktYXMtcHJvbWlzZWQnO1xuaW1wb3J0IHsgdG9rZW5pemUgfSBmcm9tICcuLi9vcGVyYXRpb25zL3Rva2VuaXplJztcblxuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xuXG5jb25zdCBleHBlY3QgPSBjaGFpLmV4cGVjdDtcblxuZGVzY3JpYmUoJ3Rva2VuaXplcicsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCBjb252ZXJ0IHNpbmdsZSBsaW5lcyBpbnRvIGEgbGluZSBhbmQgYSBicmVhaycsICgpID0+IHtcbiAgICBjb25zdCBvcHMgPSBbe1xuICAgICAgaW5zZXJ0OiAnd29yZFxcbicsXG4gICAgfV07XG4gICAgY29uc3QgcmVzdWx0ID0gW1xuICAgICAge3R5cGU6ICd0ZXh0JywgY29udGVudHM6ICd3b3JkJywgYXR0cmlidXRlczoge319LFxuICAgICAge3R5cGU6ICdsaW5lYnJlYWsnLCBhdHRyaWJ1dGVzOiB7fX0sXG4gICAgXTtcbiAgICBleHBlY3QodG9rZW5pemUob3BzKSkudG8uZGVlcC5lcXVhbChyZXN1bHQpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGNvbnZlcnQgbmV3bGluZXMgaW50byBzdHlsZWQgbGluZWJyZWFrcycsICgpID0+IHtcbiAgICBjb25zdCBvcHMgPSBbe1xuICAgICAgaW5zZXJ0OiAnbGlzdGl0ZW0nLFxuICAgIH0sIHtcbiAgICAgIGluc2VydDogJ1xcbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGJ1bGxldDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfV07XG4gICAgY29uc3QgcmVzdWx0ID0gW1xuICAgICAge3R5cGU6ICd0ZXh0JywgY29udGVudHM6ICdsaXN0aXRlbScsIGF0dHJpYnV0ZXM6IHt9fSxcbiAgICAgIHt0eXBlOiAnbGluZWJyZWFrJywgYXR0cmlidXRlczoge2J1bGxldDogdHJ1ZX19LFxuICAgIF07XG4gICAgZXhwZWN0KHRva2VuaXplKG9wcykpLnRvLmRlZXAuZXF1YWwocmVzdWx0KTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBjb252ZXJ0IGlubGluZSBuZXdsaW5lcyBpbnRvIG11bHRpcGxlIGxpbmVzJywgKCkgPT4ge1xuICAgIGNvbnN0IG9wcyA9IFt7XG4gICAgICBpbnNlcnQ6ICd3b3JkXFxud29yZFxcblxcbndvcmRcXG4nLFxuICAgIH1dO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtcbiAgICAgIHt0eXBlOiAndGV4dCcsIGNvbnRlbnRzOiAnd29yZCcsIGF0dHJpYnV0ZXM6IHt9fSxcbiAgICAgIHt0eXBlOiAnbGluZWJyZWFrJywgYXR0cmlidXRlczoge319LFxuICAgICAge3R5cGU6ICd0ZXh0JywgY29udGVudHM6ICd3b3JkJywgYXR0cmlidXRlczoge319LFxuICAgICAge3R5cGU6ICdsaW5lYnJlYWsnLCBhdHRyaWJ1dGVzOiB7fX0sXG4gICAgICB7dHlwZTogJ2xpbmVicmVhaycsIGF0dHJpYnV0ZXM6IHt9fSxcbiAgICAgIHt0eXBlOiAndGV4dCcsIGNvbnRlbnRzOiAnd29yZCcsIGF0dHJpYnV0ZXM6IHt9fSxcbiAgICAgIHt0eXBlOiAnbGluZWJyZWFrJywgYXR0cmlidXRlczoge319LFxuICAgIF07XG4gICAgZXhwZWN0KHRva2VuaXplKG9wcykpLnRvLmRlZXAuZXF1YWwocmVzdWx0KTtcbiAgfSk7XG5cbiAgaXQoJ2FkZCBhIGxpbmVicmVhayBpZiB0aGVyZSBpcyBub3Qgb25lIGF0IHRoZSBlbmQgb2YgaW5wdXQnLCAoKSA9PiB7XG4gICAgY29uc3Qgb3BzID0gW3tcbiAgICAgIGluc2VydDogJ3dvcmQnLFxuICAgIH1dO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtcbiAgICAgIHt0eXBlOiAndGV4dCcsIGNvbnRlbnRzOiAnd29yZCcsIGF0dHJpYnV0ZXM6IHt9fSxcbiAgICAgIHt0eXBlOiAnbGluZWJyZWFrJywgYXR0cmlidXRlczoge319LFxuICAgIF07XG4gICAgZXhwZWN0KHRva2VuaXplKG9wcykpLnRvLmRlZXAuZXF1YWwocmVzdWx0KTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBoYW5kbGUgaW5saW5lIG5ld2xpbmVzIGF0IHRoZSBzdGFydCBvZiB0aGUgbGluZScsICgpID0+IHtcbiAgICBjb25zdCBvcHMgPSBbe1xuICAgICAgaW5zZXJ0OiAnXFxud29yZFxcblxcbndvcmRcXG4nLFxuICAgIH1dO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtcbiAgICAgIHt0eXBlOiAnbGluZWJyZWFrJywgYXR0cmlidXRlczoge319LFxuICAgICAge3R5cGU6ICd0ZXh0JywgY29udGVudHM6ICd3b3JkJywgYXR0cmlidXRlczoge319LFxuICAgICAge3R5cGU6ICdsaW5lYnJlYWsnLCBhdHRyaWJ1dGVzOiB7fX0sXG4gICAgICB7dHlwZTogJ2xpbmVicmVhaycsIGF0dHJpYnV0ZXM6IHt9fSxcbiAgICAgIHt0eXBlOiAndGV4dCcsIGNvbnRlbnRzOiAnd29yZCcsIGF0dHJpYnV0ZXM6IHt9fSxcbiAgICAgIHt0eXBlOiAnbGluZWJyZWFrJywgYXR0cmlidXRlczoge319LFxuICAgIF07XG4gICAgZXhwZWN0KHRva2VuaXplKG9wcykpLnRvLmRlZXAuZXF1YWwocmVzdWx0KTtcbiAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
