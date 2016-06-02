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

      return token.contents && typeof token.contents === 'string' && (token.attributes === undefined || token.attributes.image === undefined);
    }
  }]);

  return TextNode;
}(_span2.default);

exports.default = TextNode;


TextNode.priority = 0;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vdGV4dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFDQSxTQUFTLE1BQVQsQ0FBZ0IsUUFBaEIsRUFBMEI7QUFDeEIsU0FBTyxTQUNOLE9BRE0sQ0FDRSxJQURGLEVBQ1EsT0FEUixFQUVOLE9BRk0sQ0FFRSxJQUZGLEVBRVEsTUFGUixFQUdOLE9BSE0sQ0FHRSxJQUhGLEVBR1EsTUFIUixFQUlOLE9BSk0sQ0FJRSxJQUpGLEVBSVEsUUFKUixFQUtOLE9BTE0sQ0FLRSxJQUxGLEVBS1EsT0FMUixDQUFQO0FBTUQ7O0lBRW9CLFE7OztBQUVuQixzQkFBdUI7QUFBQSxRQUFYLElBQVcseURBQUosRUFBSTs7QUFBQTs7QUFBQSw0RkFDZixJQURlOztBQUVyQixVQUFLLGlCQUFMLEdBQXlCLEtBQUssUUFBTCxJQUFpQixFQUExQztBQUZxQjtBQUd0Qjs7OztnQ0FVVztBQUNWLGFBQU8sS0FBSyxpQkFBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLFFBQVA7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxTQUFQO0FBQ0Q7OztrQ0FFYTtBQUNaLFlBQU0sSUFBSSxLQUFKLENBQVUsOEJBQVYsQ0FBTjtBQUNEOzs7NkJBRVE7QUFDUCxhQUFPLElBQVA7QUFDRDs7OzJCQUVNLEssRUFBTztBQUNaLFVBQUksTUFBTSxJQUFOLEtBQWUsS0FBSyxJQUF4QixFQUE4QjtBQUM1QixhQUFLLGlCQUFMLEdBQXlCLEtBQUssaUJBQUwsQ0FBdUIsTUFBdkIsQ0FBOEIsTUFBTSxpQkFBcEMsQ0FBekI7QUFDQSxlQUFPLElBQVA7QUFDRCxPQUhELE1BR087QUFDTCxlQUFPLEtBQVA7QUFDRDtBQUNGOzs7d0JBbkNjO0FBQ2IsVUFBSSxLQUFLLGlCQUFMLENBQXVCLElBQXZCLE9BQWtDLEVBQXRDLEVBQTBDO0FBQ3hDLGVBQU8sUUFBUDtBQUNELE9BRkQsTUFFTztBQUNMLGVBQU8sT0FBTyxLQUFLLGlCQUFaLENBQVA7QUFDRDtBQUNGOzs7OEJBK0IwQjtBQUFBLFVBQVosS0FBWSx5REFBSixFQUFJOztBQUN6QixhQUNHLE1BQU0sUUFBUCxJQUNDLE9BQU8sTUFBTSxRQUFiLEtBQTBCLFFBRDNCLEtBRUUsTUFBTSxVQUFOLEtBQXFCLFNBQXRCLElBQXFDLE1BQU0sVUFBTixDQUFpQixLQUFqQixLQUEyQixTQUZqRSxDQURGO0FBS0Q7Ozs7OztrQkFsRGtCLFE7OztBQXFEckIsU0FBUyxRQUFULEdBQW9CLENBQXBCIiwiZmlsZSI6Im1pbmlET00vdGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGFuTm9kZSBmcm9tICcuL3NwYW4nO1xuZnVuY3Rpb24gZXNjYXBlKGNvbnRlbnRzKSB7XG4gIHJldHVybiBjb250ZW50c1xuICAucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcbiAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxuICAucmVwbGFjZSgvJy9nLCAnJiMzOTsnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dE5vZGUgZXh0ZW5kcyBTcGFuTm9kZSB7XG5cbiAgY29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG4gICAgdGhpcy51bmVzY2FwZWRDb250ZW50cyA9IG9wdHMuY29udGVudHMgfHwgJyc7XG4gIH1cblxuICBnZXQgY29udGVudHMoKSB7XG4gICAgaWYgKHRoaXMudW5lc2NhcGVkQ29udGVudHMudHJpbSgpID09PSAnJykge1xuICAgICAgcmV0dXJuICcmbmJzcDsnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZXNjYXBlKHRoaXMudW5lc2NhcGVkQ29udGVudHMpO1xuICAgIH1cbiAgfVxuXG4gIHBsYWluVGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy51bmVzY2FwZWRDb250ZW50cztcbiAgfVxuXG4gIG9wZW5UYWcoKSB7XG4gICAgcmV0dXJuICc8c3Bhbj4nO1xuICB9XG5cbiAgY2xvc2VUYWcoKSB7XG4gICAgcmV0dXJuICc8L3NwYW4+JztcbiAgfVxuXG4gIGFwcGVuZENoaWxkKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignVGV4dE5vZGUgY2Fubm90IGhhdmUgY2hsZHJlbicpO1xuICB9XG5cbiAgaXNMZWFmKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgYWJzb3JiKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLnR5cGUgPT09IHRoaXMudHlwZSkge1xuICAgICAgdGhpcy51bmVzY2FwZWRDb250ZW50cyA9IHRoaXMudW5lc2NhcGVkQ29udGVudHMuY29uY2F0KGNoaWxkLnVuZXNjYXBlZENvbnRlbnRzKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG1hdGNoZXModG9rZW4gPSB7fSkge1xuICAgIHJldHVybiAoXG4gICAgICAodG9rZW4uY29udGVudHMpICYmXG4gICAgICAodHlwZW9mIHRva2VuLmNvbnRlbnRzID09PSAnc3RyaW5nJykgJiZcbiAgICAgICgodG9rZW4uYXR0cmlidXRlcyA9PT0gdW5kZWZpbmVkKSB8fCAodG9rZW4uYXR0cmlidXRlcy5pbWFnZSA9PT0gdW5kZWZpbmVkKSlcbiAgICApO1xuICB9XG59XG5cblRleHROb2RlLnByaW9yaXR5ID0gMDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
