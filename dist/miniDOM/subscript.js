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

var SubscriptNode = function (_SpanNode) {
  _inherits(SubscriptNode, _SpanNode);

  function SubscriptNode() {
    _classCallCheck(this, SubscriptNode);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SubscriptNode).apply(this, arguments));
  }

  _createClass(SubscriptNode, [{
    key: 'openTag',
    value: function openTag() {
      return '<sub>';
    }
  }, {
    key: 'closeTag',
    value: function closeTag() {
      return '</sub>';
    }
  }], [{
    key: 'matches',
    value: function matches() {
      var token = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return token.attributes && token.attributes.sub;
    }
  }]);

  return SubscriptNode;
}(_span2.default);

exports.default = SubscriptNode;


SubscriptNode.priority = 9;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vc3Vic2NyaXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQjs7Ozs7Ozs7Ozs7OEJBQ1Q7QUFDUixhQUFPLE9BQVAsQ0FEUTs7OzsrQkFHQztBQUNULGFBQU8sUUFBUCxDQURTOzs7OzhCQUdnQjtVQUFaLDhEQUFRLGtCQUFJOztBQUN6QixhQUFRLE1BQU0sVUFBTixJQUFvQixNQUFNLFVBQU4sQ0FBaUIsR0FBakIsQ0FESDs7OztTQVBSOzs7Ozs7QUFZckIsY0FBYyxRQUFkLEdBQXlCLENBQXpCIiwiZmlsZSI6Im1pbmlET00vc3Vic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwYW5Ob2RlIGZyb20gJy4vc3Bhbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnNjcmlwdE5vZGUgZXh0ZW5kcyBTcGFuTm9kZSB7XG4gIG9wZW5UYWcoKSB7XG4gICAgcmV0dXJuICc8c3ViPic7XG4gIH1cbiAgY2xvc2VUYWcoKSB7XG4gICAgcmV0dXJuICc8L3N1Yj4nO1xuICB9XG4gIHN0YXRpYyBtYXRjaGVzKHRva2VuID0ge30pIHtcbiAgICByZXR1cm4gKHRva2VuLmF0dHJpYnV0ZXMgJiYgdG9rZW4uYXR0cmlidXRlcy5zdWIpO1xuICB9XG59XG5cblN1YnNjcmlwdE5vZGUucHJpb3JpdHkgPSA5O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
