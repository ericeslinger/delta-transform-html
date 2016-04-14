'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _span = require('./span');

var _span2 = _interopRequireDefault(_span);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BoldNode = function (_SpanNode) {
  _inherits(BoldNode, _SpanNode);

  function BoldNode() {
    _classCallCheck(this, BoldNode);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BoldNode).apply(this, arguments));
  }

  _createClass(BoldNode, [{
    key: 'openTag',
    value: function openTag() {
      return '<strong>';
    }
  }, {
    key: 'closeTag',
    value: function closeTag() {
      return '</strong>';
    }
  }], [{
    key: 'matches',
    value: function matches() {
      var token = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return token.attributes && token.attributes.bold;
    }
  }]);

  return BoldNode;
}(_span2.default);

exports.default = BoldNode;


BoldNode.priority = 1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vYm9sZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUI7Ozs7Ozs7Ozs7OzhCQUNUO0FBQ1IsYUFBTyxVQUFQLENBRFE7Ozs7K0JBR0M7QUFDVCxhQUFPLFdBQVAsQ0FEUzs7Ozs4QkFHZ0I7VUFBWiw4REFBUSxrQkFBSTs7QUFDekIsYUFBUSxNQUFNLFVBQU4sSUFBb0IsTUFBTSxVQUFOLENBQWlCLElBQWpCLENBREg7Ozs7U0FQUjs7Ozs7O0FBWXJCLFNBQVMsUUFBVCxHQUFvQixDQUFwQiIsImZpbGUiOiJtaW5pRE9NL2JvbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3Bhbk5vZGUgZnJvbSAnLi9zcGFuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9sZE5vZGUgZXh0ZW5kcyBTcGFuTm9kZSB7XG4gIG9wZW5UYWcoKSB7XG4gICAgcmV0dXJuICc8c3Ryb25nPic7XG4gIH1cbiAgY2xvc2VUYWcoKSB7XG4gICAgcmV0dXJuICc8L3N0cm9uZz4nO1xuICB9XG4gIHN0YXRpYyBtYXRjaGVzKHRva2VuID0ge30pIHtcbiAgICByZXR1cm4gKHRva2VuLmF0dHJpYnV0ZXMgJiYgdG9rZW4uYXR0cmlidXRlcy5ib2xkKTtcbiAgfVxufVxuXG5Cb2xkTm9kZS5wcmlvcml0eSA9IDE7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
