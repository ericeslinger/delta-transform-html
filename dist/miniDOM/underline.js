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

var UnderlineNode = function (_SpanNode) {
  _inherits(UnderlineNode, _SpanNode);

  function UnderlineNode() {
    _classCallCheck(this, UnderlineNode);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(UnderlineNode).apply(this, arguments));
  }

  _createClass(UnderlineNode, [{
    key: 'openTag',
    value: function openTag() {
      return '<u>';
    }
  }, {
    key: 'closeTag',
    value: function closeTag() {
      return '</u>';
    }
  }], [{
    key: 'matches',
    value: function matches() {
      var token = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return token.attributes && token.attributes.underline;
    }
  }]);

  return UnderlineNode;
}(_span2.default);

exports.default = UnderlineNode;


UnderlineNode.priority = 3;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vdW5kZXJsaW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQjs7Ozs7Ozs7Ozs7OEJBQ1Q7QUFDUixhQUFPLEtBQVAsQ0FEUTs7OzsrQkFHQztBQUNULGFBQU8sTUFBUCxDQURTOzs7OzhCQUdnQjtVQUFaLDhEQUFRLGtCQUFJOztBQUN6QixhQUFRLE1BQU0sVUFBTixJQUFvQixNQUFNLFVBQU4sQ0FBaUIsU0FBakIsQ0FESDs7OztTQVBSOzs7Ozs7QUFZckIsY0FBYyxRQUFkLEdBQXlCLENBQXpCIiwiZmlsZSI6Im1pbmlET00vdW5kZXJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwYW5Ob2RlIGZyb20gJy4vc3Bhbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuZGVybGluZU5vZGUgZXh0ZW5kcyBTcGFuTm9kZSB7XG4gIG9wZW5UYWcoKSB7XG4gICAgcmV0dXJuICc8dT4nO1xuICB9XG4gIGNsb3NlVGFnKCkge1xuICAgIHJldHVybiAnPC91Pic7XG4gIH1cbiAgc3RhdGljIG1hdGNoZXModG9rZW4gPSB7fSkge1xuICAgIHJldHVybiAodG9rZW4uYXR0cmlidXRlcyAmJiB0b2tlbi5hdHRyaWJ1dGVzLnVuZGVybGluZSk7XG4gIH1cbn1cblxuVW5kZXJsaW5lTm9kZS5wcmlvcml0eSA9IDM7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
