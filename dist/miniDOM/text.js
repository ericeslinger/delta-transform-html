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
  return contents.replace(/&/g, '&amp;').replace(/{/g, '&#123;').replace(/}/g, '&#125;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
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
        this.unescapedContents = this.unescapedContents.concat(child.unescapedContents);
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

      return (token.contents === '' || token.contents) && typeof token.contents === 'string' && (token.attributes === undefined || token.attributes.image === undefined);
    }
  }]);

  return TextNode;
}(_span2.default);

exports.default = TextNode;


TextNode.priority = 0;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vdGV4dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFDQSxTQUFTLE1BQVQsQ0FBZ0IsUUFBaEIsRUFBMEI7QUFDeEIsU0FBTyxTQUNOLE9BRE0sQ0FDRSxJQURGLEVBQ1EsT0FEUixFQUVOLE9BRk0sQ0FFRSxJQUZGLEVBRVEsUUFGUixFQUdOLE9BSE0sQ0FHRSxJQUhGLEVBR1EsUUFIUixFQUlOLE9BSk0sQ0FJRSxJQUpGLEVBSVEsTUFKUixFQUtOLE9BTE0sQ0FLRSxJQUxGLEVBS1EsTUFMUixFQU1OLE9BTk0sQ0FNRSxJQU5GLEVBTVEsUUFOUixFQU9OLE9BUE0sQ0FPRSxJQVBGLEVBT1EsT0FQUixDQUFQLENBRHdCO0NBQTFCOztJQVdxQjs7O0FBRW5CLFdBRm1CLFFBRW5CLEdBQXVCO1FBQVgsNkRBQU8sa0JBQUk7OzBCQUZKLFVBRUk7O3VFQUZKLHFCQUdYLE9BRGU7O0FBRXJCLFVBQUssaUJBQUwsR0FBeUIsS0FBSyxRQUFMLElBQWlCLEVBQWpCLENBRko7O0dBQXZCOztlQUZtQjs7Z0NBZVA7QUFDVixhQUFPLEtBQUssaUJBQUwsQ0FERzs7Ozs4QkFJRjtBQUNSLGFBQU8sUUFBUCxDQURROzs7OytCQUlDO0FBQ1QsYUFBTyxTQUFQLENBRFM7Ozs7a0NBSUc7QUFDWixZQUFNLElBQUksS0FBSixDQUFVLDhCQUFWLENBQU4sQ0FEWTs7Ozs2QkFJTDtBQUNQLGFBQU8sSUFBUCxDQURPOzs7OzJCQUlGLE9BQU87QUFDWixVQUFJLE1BQU0sSUFBTixLQUFlLEtBQUssSUFBTCxFQUFXO0FBQzVCLGFBQUssaUJBQUwsR0FBeUIsS0FBSyxpQkFBTCxDQUF1QixNQUF2QixDQUE4QixNQUFNLGlCQUFOLENBQXZELENBRDRCO0FBRTVCLGVBQU8sSUFBUCxDQUY0QjtPQUE5QixNQUdPO0FBQ0wsZUFBTyxLQUFQLENBREs7T0FIUDs7Ozt3QkE3QmE7QUFDYixVQUFJLEtBQUssaUJBQUwsQ0FBdUIsSUFBdkIsT0FBa0MsRUFBbEMsRUFBc0M7QUFDeEMsZUFBTyxRQUFQLENBRHdDO09BQTFDLE1BRU87QUFDTCxlQUFPLE9BQU8sS0FBSyxpQkFBTCxDQUFkLENBREs7T0FGUDs7Ozs4QkFvQ3lCO1VBQVosOERBQVEsa0JBQUk7O0FBQ3pCLGFBQ0UsQ0FBQyxLQUFDLENBQU0sUUFBTixLQUFtQixFQUFuQixJQUEyQixNQUFNLFFBQU4sQ0FBN0IsSUFDQyxPQUFPLE1BQU0sUUFBTixLQUFtQixRQUExQixLQUNBLEtBQUMsQ0FBTSxVQUFOLEtBQXFCLFNBQXJCLElBQW9DLE1BQU0sVUFBTixDQUFpQixLQUFqQixLQUEyQixTQUEzQixDQUZ0QyxDQUZ1Qjs7OztTQTVDUjs7Ozs7O0FBcURyQixTQUFTLFFBQVQsR0FBb0IsQ0FBcEIiLCJmaWxlIjoibWluaURPTS90ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwYW5Ob2RlIGZyb20gJy4vc3Bhbic7XG5mdW5jdGlvbiBlc2NhcGUoY29udGVudHMpIHtcbiAgcmV0dXJuIGNvbnRlbnRzXG4gIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gIC5yZXBsYWNlKC97L2csICcmIzEyMzsnKVxuICAucmVwbGFjZSgvfS9nLCAnJiMxMjU7JylcbiAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JylcbiAgLnJlcGxhY2UoLycvZywgJyYjMzk7Jyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHROb2RlIGV4dGVuZHMgU3Bhbk5vZGUge1xuXG4gIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuICAgIHRoaXMudW5lc2NhcGVkQ29udGVudHMgPSBvcHRzLmNvbnRlbnRzIHx8ICcnO1xuICB9XG5cbiAgZ2V0IGNvbnRlbnRzKCkge1xuICAgIGlmICh0aGlzLnVuZXNjYXBlZENvbnRlbnRzLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgIHJldHVybiAnJm5ic3A7JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVzY2FwZSh0aGlzLnVuZXNjYXBlZENvbnRlbnRzKTtcbiAgICB9XG4gIH1cblxuICBwbGFpblRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5lc2NhcGVkQ29udGVudHM7XG4gIH1cblxuICBvcGVuVGFnKCkge1xuICAgIHJldHVybiAnPHNwYW4+JztcbiAgfVxuXG4gIGNsb3NlVGFnKCkge1xuICAgIHJldHVybiAnPC9zcGFuPic7XG4gIH1cblxuICBhcHBlbmRDaGlsZCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RleHROb2RlIGNhbm5vdCBoYXZlIGNobGRyZW4nKTtcbiAgfVxuXG4gIGlzTGVhZigpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGFic29yYihjaGlsZCkge1xuICAgIGlmIChjaGlsZC50eXBlID09PSB0aGlzLnR5cGUpIHtcbiAgICAgIHRoaXMudW5lc2NhcGVkQ29udGVudHMgPSB0aGlzLnVuZXNjYXBlZENvbnRlbnRzLmNvbmNhdChjaGlsZC51bmVzY2FwZWRDb250ZW50cyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBtYXRjaGVzKHRva2VuID0ge30pIHtcbiAgICByZXR1cm4gKFxuICAgICAgKCh0b2tlbi5jb250ZW50cyA9PT0gJycpIHx8ICh0b2tlbi5jb250ZW50cykpICYmXG4gICAgICAodHlwZW9mIHRva2VuLmNvbnRlbnRzID09PSAnc3RyaW5nJykgJiZcbiAgICAgICgodG9rZW4uYXR0cmlidXRlcyA9PT0gdW5kZWZpbmVkKSB8fCAodG9rZW4uYXR0cmlidXRlcy5pbWFnZSA9PT0gdW5kZWZpbmVkKSlcbiAgICApO1xuICB9XG59XG5cblRleHROb2RlLnByaW9yaXR5ID0gMDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
