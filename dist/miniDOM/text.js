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
    key: 'escape',
    value: function escape(contents) {
      return contents.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }
  }, {
    key: 'contents',
    get: function get() {
      if (this.unescapedContents.trim() === '') {
        return '&nbsp;';
      } else {
        return this.escape(this.unescapedContents);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vdGV4dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUI7OztBQUVuQixXQUZtQixRQUVuQixHQUF1QjtRQUFYLDZEQUFPLGtCQUFJOzswQkFGSixVQUVJOzt1RUFGSixxQkFHWCxPQURlOztBQUVyQixVQUFLLGlCQUFMLEdBQXlCLEtBQUssUUFBTCxJQUFpQixFQUFqQixDQUZKOztHQUF2Qjs7ZUFGbUI7O2dDQWVQO0FBQ1YsYUFBTyxLQUFLLGlCQUFMLENBREc7Ozs7OEJBSUY7QUFDUixhQUFPLFFBQVAsQ0FEUTs7OzsrQkFJQztBQUNULGFBQU8sU0FBUCxDQURTOzs7O2tDQUlHO0FBQ1osWUFBTSxJQUFJLEtBQUosQ0FBVSw4QkFBVixDQUFOLENBRFk7Ozs7NkJBSUw7QUFDUCxhQUFPLElBQVAsQ0FETzs7OzsyQkFJRixPQUFPO0FBQ1osVUFBSSxNQUFNLElBQU4sS0FBZSxLQUFLLElBQUwsRUFBVztBQUM1QixhQUFLLGlCQUFMLEdBQXlCLEtBQUssaUJBQUwsQ0FBdUIsTUFBdkIsQ0FBOEIsTUFBTSxpQkFBTixDQUF2RCxDQUQ0QjtBQUU1QixlQUFPLElBQVAsQ0FGNEI7T0FBOUIsTUFHTztBQUNMLGVBQU8sS0FBUCxDQURLO09BSFA7Ozs7MkJBUUssVUFBVTtBQUNmLGFBQU8sU0FDTixPQURNLENBQ0UsSUFERixFQUNRLE9BRFIsRUFFTixPQUZNLENBRUUsSUFGRixFQUVRLE1BRlIsRUFHTixPQUhNLENBR0UsSUFIRixFQUdRLE1BSFIsRUFJTixPQUpNLENBSUUsSUFKRixFQUlRLFFBSlIsRUFLTixPQUxNLENBS0UsSUFMRixFQUtRLE9BTFIsQ0FBUCxDQURlOzs7O3dCQXJDRjtBQUNiLFVBQUksS0FBSyxpQkFBTCxDQUF1QixJQUF2QixPQUFrQyxFQUFsQyxFQUFzQztBQUN4QyxlQUFPLFFBQVAsQ0FEd0M7T0FBMUMsTUFFTztBQUNMLGVBQU8sS0FBSyxNQUFMLENBQVksS0FBSyxpQkFBTCxDQUFuQixDQURLO09BRlA7Ozs7OEJBNkN5QjtVQUFaLDhEQUFRLGtCQUFJOztBQUN6QixhQUNFLENBQUMsS0FBQyxDQUFNLFFBQU4sS0FBbUIsRUFBbkIsSUFBMkIsTUFBTSxRQUFOLENBQTdCLElBQ0MsT0FBTyxNQUFNLFFBQU4sS0FBbUIsUUFBMUIsS0FDQSxLQUFDLENBQU0sVUFBTixLQUFxQixTQUFyQixJQUFvQyxNQUFNLFVBQU4sQ0FBaUIsS0FBakIsS0FBMkIsU0FBM0IsQ0FGdEMsQ0FGdUI7Ozs7U0FyRFI7Ozs7OztBQStEckIsU0FBUyxRQUFULEdBQW9CLENBQXBCIiwiZmlsZSI6Im1pbmlET00vdGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGFuTm9kZSBmcm9tICcuL3NwYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0Tm9kZSBleHRlbmRzIFNwYW5Ob2RlIHtcblxuICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcbiAgICB0aGlzLnVuZXNjYXBlZENvbnRlbnRzID0gb3B0cy5jb250ZW50cyB8fCAnJztcbiAgfVxuXG4gIGdldCBjb250ZW50cygpIHtcbiAgICBpZiAodGhpcy51bmVzY2FwZWRDb250ZW50cy50cmltKCkgPT09ICcnKSB7XG4gICAgICByZXR1cm4gJyZuYnNwOyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmVzY2FwZSh0aGlzLnVuZXNjYXBlZENvbnRlbnRzKTtcbiAgICB9XG4gIH1cblxuICBwbGFpblRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5lc2NhcGVkQ29udGVudHM7XG4gIH1cblxuICBvcGVuVGFnKCkge1xuICAgIHJldHVybiAnPHNwYW4+JztcbiAgfVxuXG4gIGNsb3NlVGFnKCkge1xuICAgIHJldHVybiAnPC9zcGFuPic7XG4gIH1cblxuICBhcHBlbmRDaGlsZCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RleHROb2RlIGNhbm5vdCBoYXZlIGNobGRyZW4nKTtcbiAgfVxuXG4gIGlzTGVhZigpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGFic29yYihjaGlsZCkge1xuICAgIGlmIChjaGlsZC50eXBlID09PSB0aGlzLnR5cGUpIHtcbiAgICAgIHRoaXMudW5lc2NhcGVkQ29udGVudHMgPSB0aGlzLnVuZXNjYXBlZENvbnRlbnRzLmNvbmNhdChjaGlsZC51bmVzY2FwZWRDb250ZW50cyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cbiAgfVxuXG4gIGVzY2FwZShjb250ZW50cykge1xuICAgIHJldHVybiBjb250ZW50c1xuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcbiAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG4gICAgLnJlcGxhY2UoLycvZywgJyYjMzk7Jyk7XG4gIH1cblxuICBzdGF0aWMgbWF0Y2hlcyh0b2tlbiA9IHt9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICgodG9rZW4uY29udGVudHMgPT09ICcnKSB8fCAodG9rZW4uY29udGVudHMpKSAmJlxuICAgICAgKHR5cGVvZiB0b2tlbi5jb250ZW50cyA9PT0gJ3N0cmluZycpICYmXG4gICAgICAoKHRva2VuLmF0dHJpYnV0ZXMgPT09IHVuZGVmaW5lZCkgfHwgKHRva2VuLmF0dHJpYnV0ZXMuaW1hZ2UgPT09IHVuZGVmaW5lZCkpXG4gICAgKTtcbiAgfVxuXG59XG5cblRleHROb2RlLnByaW9yaXR5ID0gMDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
