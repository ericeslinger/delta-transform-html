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

var ItalicNode = function (_SpanNode) {
  _inherits(ItalicNode, _SpanNode);

  function ItalicNode() {
    _classCallCheck(this, ItalicNode);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ItalicNode).apply(this, arguments));
  }

  _createClass(ItalicNode, [{
    key: 'openTag',
    value: function openTag() {
      return '<em>';
    }
  }, {
    key: 'closeTag',
    value: function closeTag() {
      return '</em>';
    }
  }], [{
    key: 'matches',
    value: function matches() {
      var token = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return token.attributes && token.attributes.italic;
    }
  }]);

  return ItalicNode;
}(_span2.default);

exports.default = ItalicNode;


ItalicNode.priority = 2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vaXRhbGljLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQjs7Ozs7Ozs7Ozs7OEJBQ1Q7QUFDUixhQUFPLE1BQVAsQ0FEUTs7OzsrQkFHQztBQUNULGFBQU8sT0FBUCxDQURTOzs7OzhCQUdnQjtVQUFaLDhEQUFRLGtCQUFJOztBQUN6QixhQUFRLE1BQU0sVUFBTixJQUFvQixNQUFNLFVBQU4sQ0FBaUIsTUFBakIsQ0FESDs7OztTQVBSOzs7Ozs7QUFZckIsV0FBVyxRQUFYLEdBQXNCLENBQXRCIiwiZmlsZSI6Im1pbmlET00vaXRhbGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwYW5Ob2RlIGZyb20gJy4vc3Bhbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0YWxpY05vZGUgZXh0ZW5kcyBTcGFuTm9kZSB7XG4gIG9wZW5UYWcoKSB7XG4gICAgcmV0dXJuICc8ZW0+JztcbiAgfVxuICBjbG9zZVRhZygpIHtcbiAgICByZXR1cm4gJzwvZW0+JztcbiAgfVxuICBzdGF0aWMgbWF0Y2hlcyh0b2tlbiA9IHt9KSB7XG4gICAgcmV0dXJuICh0b2tlbi5hdHRyaWJ1dGVzICYmIHRva2VuLmF0dHJpYnV0ZXMuaXRhbGljKTtcbiAgfVxufVxuXG5JdGFsaWNOb2RlLnByaW9yaXR5ID0gMjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
