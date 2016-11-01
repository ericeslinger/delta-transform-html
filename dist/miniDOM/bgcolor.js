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

var BackgroundColorNode = function (_SpanNode) {
  _inherits(BackgroundColorNode, _SpanNode);

  function BackgroundColorNode() {
    _classCallCheck(this, BackgroundColorNode);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BackgroundColorNode).apply(this, arguments));
  }

  _createClass(BackgroundColorNode, [{
    key: 'openTag',
    value: function openTag() {
      return '<span style="background-color:' + this.attributes.bg + ';">';
    }
  }, {
    key: 'closeTag',
    value: function closeTag() {
      return '</span>';
    }
  }], [{
    key: 'matches',
    value: function matches() {
      var token = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return token.attributes && token.attributes.bg;
    }
  }]);

  return BackgroundColorNode;
}(_span2.default);

exports.default = BackgroundColorNode;


BackgroundColorNode.priority = 6;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vYmdjb2xvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUI7Ozs7Ozs7Ozs7OzhCQUNUO0FBQ1IsZ0RBQXdDLEtBQUssVUFBTCxDQUFnQixFQUFoQixRQUF4QyxDQURROzs7OytCQUdDO0FBQ1QsYUFBTyxTQUFQLENBRFM7Ozs7OEJBR2dCO1VBQVosOERBQVEsa0JBQUk7O0FBQ3pCLGFBQVEsTUFBTSxVQUFOLElBQW9CLE1BQU0sVUFBTixDQUFpQixFQUFqQixDQURIOzs7O1NBUFI7Ozs7OztBQVlyQixvQkFBb0IsUUFBcEIsR0FBK0IsQ0FBL0IiLCJmaWxlIjoibWluaURPTS9iZ2NvbG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwYW5Ob2RlIGZyb20gJy4vc3Bhbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmRDb2xvck5vZGUgZXh0ZW5kcyBTcGFuTm9kZSB7XG4gIG9wZW5UYWcoKSB7XG4gICAgcmV0dXJuIGA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6JHt0aGlzLmF0dHJpYnV0ZXMuYmd9O1wiPmA7XG4gIH1cbiAgY2xvc2VUYWcoKSB7XG4gICAgcmV0dXJuICc8L3NwYW4+JztcbiAgfVxuICBzdGF0aWMgbWF0Y2hlcyh0b2tlbiA9IHt9KSB7XG4gICAgcmV0dXJuICh0b2tlbi5hdHRyaWJ1dGVzICYmIHRva2VuLmF0dHJpYnV0ZXMuYmcpO1xuICB9XG59XG5cbkJhY2tncm91bmRDb2xvck5vZGUucHJpb3JpdHkgPSA2O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
