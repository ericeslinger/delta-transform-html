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

    _this.contents = opts.contents;
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

      return !!token.contents;
    }
  }]);

  return TextNode;
}(_span2.default);

exports.default = TextNode;


TextNode.priority = 0;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vdGV4dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUI7OztBQUVuQixXQUZtQixRQUVuQixHQUF1QjtRQUFYLDZEQUFPLGtCQUFJOzswQkFGSixVQUVJOzt1RUFGSixxQkFHWCxPQURlOztBQUVyQixVQUFLLFFBQUwsR0FBZ0IsS0FBSyxRQUFMLENBRks7O0dBQXZCOztlQUZtQjs7OEJBT1Q7QUFDUixhQUFPLFFBQVAsQ0FEUTs7OzsrQkFJQztBQUNULGFBQU8sU0FBUCxDQURTOzs7O2tDQUlHO0FBQ1osWUFBTSxJQUFJLEtBQUosQ0FBVSw4QkFBVixDQUFOLENBRFk7Ozs7NkJBSUw7QUFDUCxhQUFPLElBQVAsQ0FETzs7Ozs4QkFJa0I7VUFBWiw4REFBUSxrQkFBSTs7QUFDekIsYUFBTyxDQUFDLENBQUMsTUFBTSxRQUFOLENBRGdCOzs7O1NBdkJSOzs7Ozs7QUE0QnJCLFNBQVMsUUFBVCxHQUFvQixDQUFwQiIsImZpbGUiOiJtaW5pRE9NL3RleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3Bhbk5vZGUgZnJvbSAnLi9zcGFuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dE5vZGUgZXh0ZW5kcyBTcGFuTm9kZSB7XG5cbiAgY29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG4gICAgdGhpcy5jb250ZW50cyA9IG9wdHMuY29udGVudHM7XG4gIH1cblxuICBvcGVuVGFnKCkge1xuICAgIHJldHVybiAnPHNwYW4+JztcbiAgfVxuXG4gIGNsb3NlVGFnKCkge1xuICAgIHJldHVybiAnPC9zcGFuPic7XG4gIH1cblxuICBhcHBlbmRDaGlsZCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RleHROb2RlIGNhbm5vdCBoYXZlIGNobGRyZW4nKTtcbiAgfVxuXG4gIGlzTGVhZigpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRpYyBtYXRjaGVzKHRva2VuID0ge30pIHtcbiAgICByZXR1cm4gISF0b2tlbi5jb250ZW50cztcbiAgfVxufVxuXG5UZXh0Tm9kZS5wcmlvcml0eSA9IDA7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
