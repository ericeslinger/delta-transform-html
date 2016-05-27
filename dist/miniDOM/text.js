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

    _this.unescapedContents = opts.contents;
    _this.contents = (opts.contents || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    if (_this.contents.trim() === '') {
      _this.contents = '&nbsp;';
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vdGV4dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUI7OztBQUVuQixXQUZtQixRQUVuQixHQUF1QjtRQUFYLDZEQUFPLGtCQUFJOzswQkFGSixVQUVJOzt1RUFGSixxQkFHWCxPQURlOztBQUVyQixVQUFLLGlCQUFMLEdBQXlCLEtBQUssUUFBTCxDQUZKO0FBR3JCLFVBQUssUUFBTCxHQUFnQixDQUFDLEtBQUssUUFBTCxJQUFpQixFQUFqQixDQUFELENBQ2YsT0FEZSxDQUNQLElBRE8sRUFDRCxPQURDLEVBRWYsT0FGZSxDQUVQLElBRk8sRUFFRCxNQUZDLEVBR2YsT0FIZSxDQUdQLElBSE8sRUFHRCxNQUhDLEVBSWYsT0FKZSxDQUlQLElBSk8sRUFJRCxRQUpDLEVBS2YsT0FMZSxDQUtQLElBTE8sRUFLRCxPQUxDLENBQWhCLENBSHFCO0FBU3JCLFFBQUksTUFBSyxRQUFMLENBQWMsSUFBZCxPQUF5QixFQUF6QixFQUE2QjtBQUMvQixZQUFLLFFBQUwsR0FBZ0IsUUFBaEIsQ0FEK0I7S0FBakM7aUJBVHFCO0dBQXZCOztlQUZtQjs7Z0NBZ0JQO0FBQ1YsYUFBTyxLQUFLLGlCQUFMLENBREc7Ozs7OEJBSUY7QUFDUixhQUFPLFFBQVAsQ0FEUTs7OzsrQkFJQztBQUNULGFBQU8sU0FBUCxDQURTOzs7O2tDQUlHO0FBQ1osWUFBTSxJQUFJLEtBQUosQ0FBVSw4QkFBVixDQUFOLENBRFk7Ozs7NkJBSUw7QUFDUCxhQUFPLElBQVAsQ0FETzs7Ozs4QkFJa0I7VUFBWiw4REFBUSxrQkFBSTs7QUFDekIsYUFBUSxLQUFDLENBQU0sUUFBTixJQUFvQixPQUFPLE1BQU0sUUFBTixLQUFtQixRQUExQixDQURKOzs7O1NBcENSOzs7Ozs7QUF5Q3JCLFNBQVMsUUFBVCxHQUFvQixDQUFwQiIsImZpbGUiOiJtaW5pRE9NL3RleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3Bhbk5vZGUgZnJvbSAnLi9zcGFuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dE5vZGUgZXh0ZW5kcyBTcGFuTm9kZSB7XG5cbiAgY29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG4gICAgdGhpcy51bmVzY2FwZWRDb250ZW50cyA9IG9wdHMuY29udGVudHM7XG4gICAgdGhpcy5jb250ZW50cyA9IChvcHRzLmNvbnRlbnRzIHx8ICcnKVxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcbiAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG4gICAgLnJlcGxhY2UoLycvZywgJyYjMzk7Jyk7XG4gICAgaWYgKHRoaXMuY29udGVudHMudHJpbSgpID09PSAnJykge1xuICAgICAgdGhpcy5jb250ZW50cyA9ICcmbmJzcDsnO1xuICAgIH1cbiAgfVxuXG4gIHBsYWluVGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy51bmVzY2FwZWRDb250ZW50cztcbiAgfVxuXG4gIG9wZW5UYWcoKSB7XG4gICAgcmV0dXJuICc8c3Bhbj4nO1xuICB9XG5cbiAgY2xvc2VUYWcoKSB7XG4gICAgcmV0dXJuICc8L3NwYW4+JztcbiAgfVxuXG4gIGFwcGVuZENoaWxkKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignVGV4dE5vZGUgY2Fubm90IGhhdmUgY2hsZHJlbicpO1xuICB9XG5cbiAgaXNMZWFmKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3RhdGljIG1hdGNoZXModG9rZW4gPSB7fSkge1xuICAgIHJldHVybiAoKHRva2VuLmNvbnRlbnRzKSAmJiAodHlwZW9mIHRva2VuLmNvbnRlbnRzID09PSAnc3RyaW5nJykpO1xuICB9XG59XG5cblRleHROb2RlLnByaW9yaXR5ID0gMDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
