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

var LinkNode = function (_SpanNode) {
  _inherits(LinkNode, _SpanNode);

  function LinkNode() {
    _classCallCheck(this, LinkNode);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(LinkNode).apply(this, arguments));
  }

  _createClass(LinkNode, [{
    key: 'openTag',
    value: function openTag() {
      return '<a target="_blank" href="' + this.attributes.link + '">';
    }
  }, {
    key: 'closeTag',
    value: function closeTag() {
      return '</a>';
    }
  }], [{
    key: 'matches',
    value: function matches() {
      var token = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return token.attributes && token.attributes.link;
    }
  }]);

  return LinkNode;
}(_span2.default);

exports.default = LinkNode;


LinkNode.priority = 11;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vbGluay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUI7Ozs7Ozs7Ozs7OzhCQUNUO0FBQ1IsMkNBQW1DLEtBQUssVUFBTCxDQUFnQixJQUFoQixPQUFuQyxDQURROzs7OytCQUdDO0FBQ1QsYUFBTyxNQUFQLENBRFM7Ozs7OEJBR2dCO1VBQVosOERBQVEsa0JBQUk7O0FBQ3pCLGFBQVEsTUFBTSxVQUFOLElBQW9CLE1BQU0sVUFBTixDQUFpQixJQUFqQixDQURIOzs7O1NBUFI7Ozs7OztBQVlyQixTQUFTLFFBQVQsR0FBb0IsRUFBcEIiLCJmaWxlIjoibWluaURPTS9saW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwYW5Ob2RlIGZyb20gJy4vc3Bhbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmtOb2RlIGV4dGVuZHMgU3Bhbk5vZGUge1xuICBvcGVuVGFnKCkge1xuICAgIHJldHVybiBgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIiR7dGhpcy5hdHRyaWJ1dGVzLmxpbmt9XCI+YDtcbiAgfVxuICBjbG9zZVRhZygpIHtcbiAgICByZXR1cm4gJzwvYT4nO1xuICB9XG4gIHN0YXRpYyBtYXRjaGVzKHRva2VuID0ge30pIHtcbiAgICByZXR1cm4gKHRva2VuLmF0dHJpYnV0ZXMgJiYgdG9rZW4uYXR0cmlidXRlcy5saW5rKTtcbiAgfVxufVxuXG5MaW5rTm9kZS5wcmlvcml0eSA9IDExO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
