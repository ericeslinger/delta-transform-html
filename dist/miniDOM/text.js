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

function escape(contents) {
  return contents.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

var TextNode = function (_SpanNode) {
  _inherits(TextNode, _SpanNode);

  function TextNode() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, TextNode);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextNode).call(this, opts));

    _this.unescapedContents = opts.contents || '';
    return _this;
  }

  _createClass(TextNode, [{
    key: 'plainText',
    value: function plainText() {
      return this.unescapedContents;
    }
  }, {
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
  }, {
    key: 'absorb',
    value: function absorb(child) {
      if (child.type === this.type) {
        this.unescapedContents = this.unescapedContents.concat(child.contents);
        return null;
      } else {
        return child;
      }
    }
  }, {
    key: 'contents',
    get: function get() {
      if (this.unescapedContents.trim() === '') {
        return '&nbsp;';
      } else {
        return escape(this.unescapedContents);
      }
    }
  }], [{
    key: 'matches',
    value: function matches() {
      var token = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return token.contents && typeof token.contents === 'string' && (token.attributes === undefined || token.attributes.image === undefined);
    }
  }]);

  return TextNode;
}(_span2.default);

exports.default = TextNode;


TextNode.priority = 0;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vdGV4dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFDQSxTQUFTLE1BQVQsQ0FBZ0IsUUFBaEIsRUFBMEI7QUFDeEIsU0FBTyxTQUNOLE9BRE0sQ0FDRSxJQURGLEVBQ1EsT0FEUixFQUVOLE9BRk0sQ0FFRSxJQUZGLEVBRVEsTUFGUixFQUdOLE9BSE0sQ0FHRSxJQUhGLEVBR1EsTUFIUixFQUlOLE9BSk0sQ0FJRSxJQUpGLEVBSVEsUUFKUixFQUtOLE9BTE0sQ0FLRSxJQUxGLEVBS1EsT0FMUixDQUFQLENBRHdCO0NBQTFCOztJQVNxQjs7O0FBRW5CLFdBRm1CLFFBRW5CLEdBQXVCO1FBQVgsNkRBQU8sa0JBQUk7OzBCQUZKLFVBRUk7O3VFQUZKLHFCQUdYLE9BRGU7O0FBRXJCLFVBQUssaUJBQUwsR0FBeUIsS0FBSyxRQUFMLElBQWlCLEVBQWpCLENBRko7O0dBQXZCOztlQUZtQjs7Z0NBZ0JQO0FBQ1YsYUFBTyxLQUFLLGlCQUFMLENBREc7Ozs7OEJBSUY7QUFDUixhQUFPLFFBQVAsQ0FEUTs7OzsrQkFJQztBQUNULGFBQU8sU0FBUCxDQURTOzs7O2tDQUlHO0FBQ1osWUFBTSxJQUFJLEtBQUosQ0FBVSw4QkFBVixDQUFOLENBRFk7Ozs7NkJBSUw7QUFDUCxhQUFPLElBQVAsQ0FETzs7OzsyQkFJRixPQUFPO0FBQ1osVUFBSSxNQUFNLElBQU4sS0FBZSxLQUFLLElBQUwsRUFBVztBQUM1QixhQUFLLGlCQUFMLEdBQXlCLEtBQUssaUJBQUwsQ0FBdUIsTUFBdkIsQ0FBOEIsTUFBTSxRQUFOLENBQXZELENBRDRCO0FBRTVCLGVBQU8sSUFBUCxDQUY0QjtPQUE5QixNQUdPO0FBQ0wsZUFBTyxLQUFQLENBREs7T0FIUDs7Ozt3QkE5QmE7QUFDYixVQUFJLEtBQUssaUJBQUwsQ0FBdUIsSUFBdkIsT0FBa0MsRUFBbEMsRUFBc0M7QUFDeEMsZUFBTyxRQUFQLENBRHdDO09BQTFDLE1BRU87QUFDTCxlQUFPLE9BQU8sS0FBSyxpQkFBTCxDQUFkLENBREs7T0FGUDs7Ozs4QkFxQ3lCO1VBQVosOERBQVEsa0JBQUk7O0FBQ3pCLGFBQ0UsS0FBQyxDQUFNLFFBQU4sSUFDQSxPQUFPLE1BQU0sUUFBTixLQUFtQixRQUExQixLQUNBLEtBQUMsQ0FBTSxVQUFOLEtBQXFCLFNBQXJCLElBQW9DLE1BQU0sVUFBTixDQUFpQixLQUFqQixLQUEyQixTQUEzQixDQUZ0QyxDQUZ1Qjs7OztTQTdDUjs7Ozs7O0FBc0RyQixTQUFTLFFBQVQsR0FBb0IsQ0FBcEIiLCJmaWxlIjoibWluaURPTS90ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwYW5Ob2RlIGZyb20gJy4vc3Bhbic7XG5mdW5jdGlvbiBlc2NhcGUoY29udGVudHMpIHtcbiAgcmV0dXJuIGNvbnRlbnRzXG4gIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG4gIC5yZXBsYWNlKC8nL2csICcmIzM5OycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0Tm9kZSBleHRlbmRzIFNwYW5Ob2RlIHtcblxuICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcbiAgICB0aGlzLnVuZXNjYXBlZENvbnRlbnRzID0gb3B0cy5jb250ZW50cyB8fCAnJztcbiAgfVxuXG4gIGdldCBjb250ZW50cygpIHtcbiAgICBpZiAodGhpcy51bmVzY2FwZWRDb250ZW50cy50cmltKCkgPT09ICcnKSB7XG4gICAgICByZXR1cm4gJyZuYnNwOyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlc2NhcGUodGhpcy51bmVzY2FwZWRDb250ZW50cyk7XG4gICAgfVxuICB9XG5cblxuICBwbGFpblRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5lc2NhcGVkQ29udGVudHM7XG4gIH1cblxuICBvcGVuVGFnKCkge1xuICAgIHJldHVybiAnPHNwYW4+JztcbiAgfVxuXG4gIGNsb3NlVGFnKCkge1xuICAgIHJldHVybiAnPC9zcGFuPic7XG4gIH1cblxuICBhcHBlbmRDaGlsZCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RleHROb2RlIGNhbm5vdCBoYXZlIGNobGRyZW4nKTtcbiAgfVxuXG4gIGlzTGVhZigpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGFic29yYihjaGlsZCkge1xuICAgIGlmIChjaGlsZC50eXBlID09PSB0aGlzLnR5cGUpIHtcbiAgICAgIHRoaXMudW5lc2NhcGVkQ29udGVudHMgPSB0aGlzLnVuZXNjYXBlZENvbnRlbnRzLmNvbmNhdChjaGlsZC5jb250ZW50cyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBtYXRjaGVzKHRva2VuID0ge30pIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRva2VuLmNvbnRlbnRzKSAmJlxuICAgICAgKHR5cGVvZiB0b2tlbi5jb250ZW50cyA9PT0gJ3N0cmluZycpICYmXG4gICAgICAoKHRva2VuLmF0dHJpYnV0ZXMgPT09IHVuZGVmaW5lZCkgfHwgKHRva2VuLmF0dHJpYnV0ZXMuaW1hZ2UgPT09IHVuZGVmaW5lZCkpXG4gICAgKTtcbiAgfVxufVxuXG5UZXh0Tm9kZS5wcmlvcml0eSA9IDA7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
