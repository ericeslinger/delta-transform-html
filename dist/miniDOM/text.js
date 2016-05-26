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

var TextNode = function (_SpanNode) {
  _inherits(TextNode, _SpanNode);

  function TextNode() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, TextNode);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextNode).call(this, opts));

    _this.contents = (opts.contents || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    if (_this.contents.trim() === '') {
      _this.contents = '&nbsp;';
    }
    return _this;
  }

  _createClass(TextNode, [{
    key: 'openTag',
    value: function openTag() {
      return '<span>';
    }
  }, {
    key: 'closeTag',
    value: function closeTag() {
      return '</span>';
    }
  }, {
    key: 'appendChild',
    value: function appendChild() {
      throw new Error('TextNode cannot have chldren');
    }
  }, {
    key: 'isLeaf',
    value: function isLeaf() {
      return true;
    }
  }], [{
    key: 'matches',
    value: function matches() {
      var token = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return token.contents && typeof token.contents === 'string';
    }
  }]);

  return TextNode;
}(_span2.default);

exports.default = TextNode;


TextNode.priority = 0;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vdGV4dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUI7OztBQUVuQixXQUZtQixRQUVuQixHQUF1QjtRQUFYLDZEQUFPLGtCQUFJOzswQkFGSixVQUVJOzt1RUFGSixxQkFHWCxPQURlOztBQUVyQixVQUFLLFFBQUwsR0FBZ0IsQ0FBQyxLQUFLLFFBQUwsSUFBaUIsRUFBakIsQ0FBRCxDQUNmLE9BRGUsQ0FDUCxJQURPLEVBQ0QsT0FEQyxFQUVmLE9BRmUsQ0FFUCxJQUZPLEVBRUQsTUFGQyxFQUdmLE9BSGUsQ0FHUCxJQUhPLEVBR0QsTUFIQyxFQUlmLE9BSmUsQ0FJUCxJQUpPLEVBSUQsUUFKQyxFQUtmLE9BTGUsQ0FLUCxJQUxPLEVBS0QsT0FMQyxDQUFoQixDQUZxQjtBQVFyQixRQUFJLE1BQUssUUFBTCxDQUFjLElBQWQsT0FBeUIsRUFBekIsRUFBNkI7QUFDL0IsWUFBSyxRQUFMLEdBQWdCLFFBQWhCLENBRCtCO0tBQWpDO2lCQVJxQjtHQUF2Qjs7ZUFGbUI7OzhCQWVUO0FBQ1IsYUFBTyxRQUFQLENBRFE7Ozs7K0JBSUM7QUFDVCxhQUFPLFNBQVAsQ0FEUzs7OztrQ0FJRztBQUNaLFlBQU0sSUFBSSxLQUFKLENBQVUsOEJBQVYsQ0FBTixDQURZOzs7OzZCQUlMO0FBQ1AsYUFBTyxJQUFQLENBRE87Ozs7OEJBSWtCO1VBQVosOERBQVEsa0JBQUk7O0FBQ3pCLGFBQVEsS0FBQyxDQUFNLFFBQU4sSUFBb0IsT0FBTyxNQUFNLFFBQU4sS0FBbUIsUUFBMUIsQ0FESjs7OztTQS9CUjs7Ozs7O0FBb0NyQixTQUFTLFFBQVQsR0FBb0IsQ0FBcEIiLCJmaWxlIjoibWluaURPTS90ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwYW5Ob2RlIGZyb20gJy4vc3Bhbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHROb2RlIGV4dGVuZHMgU3Bhbk5vZGUge1xuXG4gIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuICAgIHRoaXMuY29udGVudHMgPSAob3B0cy5jb250ZW50cyB8fCAnJylcbiAgICAucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxuICAgIC5yZXBsYWNlKC8nL2csICcmIzM5OycpO1xuICAgIGlmICh0aGlzLmNvbnRlbnRzLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgIHRoaXMuY29udGVudHMgPSAnJm5ic3A7JztcbiAgICB9XG4gIH1cblxuICBvcGVuVGFnKCkge1xuICAgIHJldHVybiAnPHNwYW4+JztcbiAgfVxuXG4gIGNsb3NlVGFnKCkge1xuICAgIHJldHVybiAnPC9zcGFuPic7XG4gIH1cblxuICBhcHBlbmRDaGlsZCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RleHROb2RlIGNhbm5vdCBoYXZlIGNobGRyZW4nKTtcbiAgfVxuXG4gIGlzTGVhZigpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRpYyBtYXRjaGVzKHRva2VuID0ge30pIHtcbiAgICByZXR1cm4gKCh0b2tlbi5jb250ZW50cykgJiYgKHR5cGVvZiB0b2tlbi5jb250ZW50cyA9PT0gJ3N0cmluZycpKTtcbiAgfVxufVxuXG5UZXh0Tm9kZS5wcmlvcml0eSA9IDA7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
