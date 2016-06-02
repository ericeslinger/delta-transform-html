'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _block = require('./block');

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderNode = function (_BlockNode) {
  _inherits(HeaderNode, _BlockNode);

  function HeaderNode() {
    _classCallCheck(this, HeaderNode);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HeaderNode).apply(this, arguments));
  }

  _createClass(HeaderNode, [{
    key: 'openTag',
    value: function openTag() {
      return '<h' + this.attributes.header + '>';
    }
  }, {
    key: 'closeTag',
    value: function closeTag() {
      return '</h' + this.attributes.header + '>';
    }
  }, {
    key: 'absorb',
    value: function absorb(child) {
      return child;
    }
  }], [{
    key: 'matches',
    value: function matches() {
      var token = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return token.type === 'linebreak' && token.attributes.header;
    }
  }]);

  return HeaderNode;
}(_block2.default);

exports.default = HeaderNode;


HeaderNode.priority = 21;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQjs7Ozs7Ozs7Ozs7OEJBQ1Q7QUFDUixvQkFBWSxLQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsTUFBWixDQURROzs7OytCQUdDO0FBQ1QscUJBQWEsS0FBSyxVQUFMLENBQWdCLE1BQWhCLE1BQWIsQ0FEUzs7OzsyQkFHSixPQUFPO0FBQ1osYUFBTyxLQUFQLENBRFk7Ozs7OEJBR2E7VUFBWiw4REFBUSxrQkFBSTs7QUFDekIsYUFDRSxLQUFDLENBQU0sSUFBTixLQUFlLFdBQWYsSUFBZ0MsTUFBTSxVQUFOLENBQWlCLE1BQWpCLENBRlY7Ozs7U0FWUjs7Ozs7O0FBaUJyQixXQUFXLFFBQVgsR0FBc0IsRUFBdEIiLCJmaWxlIjoibWluaURPTS9oZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxvY2tOb2RlIGZyb20gJy4vYmxvY2snO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJOb2RlIGV4dGVuZHMgQmxvY2tOb2RlIHtcbiAgb3BlblRhZygpIHtcbiAgICByZXR1cm4gYDxoJHt0aGlzLmF0dHJpYnV0ZXMuaGVhZGVyfT5gO1xuICB9XG4gIGNsb3NlVGFnKCkge1xuICAgIHJldHVybiBgPC9oJHt0aGlzLmF0dHJpYnV0ZXMuaGVhZGVyfT5gO1xuICB9XG4gIGFic29yYihjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfVxuICBzdGF0aWMgbWF0Y2hlcyh0b2tlbiA9IHt9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0b2tlbi50eXBlID09PSAnbGluZWJyZWFrJykgJiYgKHRva2VuLmF0dHJpYnV0ZXMuaGVhZGVyKVxuICAgICk7XG4gIH1cbn1cblxuSGVhZGVyTm9kZS5wcmlvcml0eSA9IDIxO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
