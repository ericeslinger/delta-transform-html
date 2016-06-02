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
  it('should convert newlines into styled linebreaks');
  it('should convert inline newlines into multiple lines');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RzL3Rva2VuaXplci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLGVBQUssR0FBTDs7QUFFQSxJQUFNLFNBQVMsZUFBSyxNQUFMOztBQUVmLFNBQVMsV0FBVCxFQUFzQixZQUFNO0FBQzFCLEtBQUcscURBQUgsRUFBMEQsWUFBTTtBQUM5RCxRQUFNLE1BQU0sQ0FBQztBQUNYLGNBQVEsUUFBUjtLQURVLENBQU4sQ0FEd0Q7QUFJOUQsUUFBTSxTQUFTLENBQ2IsRUFBQyxNQUFNLE1BQU4sRUFBYyxVQUFVLE1BQVYsRUFBa0IsWUFBWSxFQUFaLEVBRHBCLEVBRWIsRUFBQyxNQUFNLFdBQU4sRUFBbUIsWUFBWSxFQUFaLEVBRlAsQ0FBVCxDQUp3RDtBQVE5RCxXQUFPLHdCQUFTLEdBQVQsQ0FBUCxFQUFzQixFQUF0QixDQUF5QixJQUF6QixDQUE4QixLQUE5QixDQUFvQyxNQUFwQyxFQVI4RDtHQUFOLENBQTFELENBRDBCO0FBVzFCLEtBQUcsZ0RBQUgsRUFYMEI7QUFZMUIsS0FBRyxvREFBSCxFQVowQjtDQUFOLENBQXRCIiwiZmlsZSI6InRlc3RzL3Rva2VuaXplci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgbm9kZSwgbW9jaGEqL1xuXG5pbXBvcnQgY2hhaSBmcm9tICdjaGFpJztcbmltcG9ydCBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcbmltcG9ydCB7IHRva2VuaXplIH0gZnJvbSAnLi4vb3BlcmF0aW9ucy90b2tlbml6ZSc7XG5cbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcblxuY29uc3QgZXhwZWN0ID0gY2hhaS5leHBlY3Q7XG5cbmRlc2NyaWJlKCd0b2tlbml6ZXInLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgY29udmVydCBzaW5nbGUgbGluZXMgaW50byBhIGxpbmUgYW5kIGEgYnJlYWsnLCAoKSA9PiB7XG4gICAgY29uc3Qgb3BzID0gW3tcbiAgICAgIGluc2VydDogJ3dvcmRcXG4nLFxuICAgIH1dO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtcbiAgICAgIHt0eXBlOiAndGV4dCcsIGNvbnRlbnRzOiAnd29yZCcsIGF0dHJpYnV0ZXM6IHt9fSxcbiAgICAgIHt0eXBlOiAnbGluZWJyZWFrJywgYXR0cmlidXRlczoge319LFxuICAgIF07XG4gICAgZXhwZWN0KHRva2VuaXplKG9wcykpLnRvLmRlZXAuZXF1YWwocmVzdWx0KTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgY29udmVydCBuZXdsaW5lcyBpbnRvIHN0eWxlZCBsaW5lYnJlYWtzJyk7XG4gIGl0KCdzaG91bGQgY29udmVydCBpbmxpbmUgbmV3bGluZXMgaW50byBtdWx0aXBsZSBsaW5lcycpO1xufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
