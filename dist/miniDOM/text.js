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
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, TextNode);

    var _this = _possibleConstructorReturn(this, (TextNode.__proto__ || Object.getPrototypeOf(TextNode)).call(this, opts));

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
      var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return (token.contents === '' || token.contents) && typeof token.contents === 'string' && (token.attributes === undefined || token.attributes.image === undefined);
    }
  }]);

  return TextNode;
}(_span2.default);

exports.default = TextNode;


TextNode.priority = 0;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vdGV4dC5qcyJdLCJuYW1lcyI6WyJUZXh0Tm9kZSIsIm9wdHMiLCJ1bmVzY2FwZWRDb250ZW50cyIsImNvbnRlbnRzIiwiRXJyb3IiLCJjaGlsZCIsInR5cGUiLCJjb25jYXQiLCJyZXBsYWNlIiwidHJpbSIsImVzY2FwZSIsInRva2VuIiwiYXR0cmlidXRlcyIsInVuZGVmaW5lZCIsImltYWdlIiwicHJpb3JpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7O0FBRW5CLHNCQUF1QjtBQUFBLFFBQVhDLElBQVcsdUVBQUosRUFBSTs7QUFBQTs7QUFBQSxvSEFDZkEsSUFEZTs7QUFFckIsVUFBS0MsaUJBQUwsR0FBeUJELEtBQUtFLFFBQUwsSUFBaUIsRUFBMUM7QUFGcUI7QUFHdEI7Ozs7Z0NBVVc7QUFDVixhQUFPLEtBQUtELGlCQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sUUFBUDtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLFNBQVA7QUFDRDs7O2tDQUVhO0FBQ1osWUFBTSxJQUFJRSxLQUFKLENBQVUsOEJBQVYsQ0FBTjtBQUNEOzs7NkJBRVE7QUFDUCxhQUFPLElBQVA7QUFDRDs7OzJCQUVNQyxLLEVBQU87QUFDWixVQUFJQSxNQUFNQyxJQUFOLEtBQWUsS0FBS0EsSUFBeEIsRUFBOEI7QUFDNUIsYUFBS0osaUJBQUwsR0FBeUIsS0FBS0EsaUJBQUwsQ0FBdUJLLE1BQXZCLENBQThCRixNQUFNSCxpQkFBcEMsQ0FBekI7QUFDQSxlQUFPLElBQVA7QUFDRCxPQUhELE1BR087QUFDTCxlQUFPRyxLQUFQO0FBQ0Q7QUFDRjs7OzJCQUVNRixRLEVBQVU7QUFDZixhQUFPQSxTQUNOSyxPQURNLENBQ0UsSUFERixFQUNRLE9BRFIsRUFFTkEsT0FGTSxDQUVFLElBRkYsRUFFUSxNQUZSLEVBR05BLE9BSE0sQ0FHRSxJQUhGLEVBR1EsTUFIUixFQUlOQSxPQUpNLENBSUUsSUFKRixFQUlRLFFBSlIsRUFLTkEsT0FMTSxDQUtFLElBTEYsRUFLUSxPQUxSLENBQVA7QUFNRDs7O3dCQTVDYztBQUNiLFVBQUksS0FBS04saUJBQUwsQ0FBdUJPLElBQXZCLE9BQWtDLEVBQXRDLEVBQTBDO0FBQ3hDLGVBQU8sUUFBUDtBQUNELE9BRkQsTUFFTztBQUNMLGVBQU8sS0FBS0MsTUFBTCxDQUFZLEtBQUtSLGlCQUFqQixDQUFQO0FBQ0Q7QUFDRjs7OzhCQXdDMEI7QUFBQSxVQUFaUyxLQUFZLHVFQUFKLEVBQUk7O0FBQ3pCLGFBQ0UsQ0FBRUEsTUFBTVIsUUFBTixLQUFtQixFQUFwQixJQUE0QlEsTUFBTVIsUUFBbkMsS0FDQyxPQUFPUSxNQUFNUixRQUFiLEtBQTBCLFFBRDNCLEtBRUVRLE1BQU1DLFVBQU4sS0FBcUJDLFNBQXRCLElBQXFDRixNQUFNQyxVQUFOLENBQWlCRSxLQUFqQixLQUEyQkQsU0FGakUsQ0FERjtBQUtEOzs7Ozs7a0JBM0RrQmIsUTs7O0FBK0RyQkEsU0FBU2UsUUFBVCxHQUFvQixDQUFwQiIsImZpbGUiOiJtaW5pRE9NL3RleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3Bhbk5vZGUgZnJvbSAnLi9zcGFuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dE5vZGUgZXh0ZW5kcyBTcGFuTm9kZSB7XG5cbiAgY29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG4gICAgdGhpcy51bmVzY2FwZWRDb250ZW50cyA9IG9wdHMuY29udGVudHMgfHwgJyc7XG4gIH1cblxuICBnZXQgY29udGVudHMoKSB7XG4gICAgaWYgKHRoaXMudW5lc2NhcGVkQ29udGVudHMudHJpbSgpID09PSAnJykge1xuICAgICAgcmV0dXJuICcmbmJzcDsnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5lc2NhcGUodGhpcy51bmVzY2FwZWRDb250ZW50cyk7XG4gICAgfVxuICB9XG5cbiAgcGxhaW5UZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnVuZXNjYXBlZENvbnRlbnRzO1xuICB9XG5cbiAgb3BlblRhZygpIHtcbiAgICByZXR1cm4gJzxzcGFuPic7XG4gIH1cblxuICBjbG9zZVRhZygpIHtcbiAgICByZXR1cm4gJzwvc3Bhbj4nO1xuICB9XG5cbiAgYXBwZW5kQ2hpbGQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUZXh0Tm9kZSBjYW5ub3QgaGF2ZSBjaGxkcmVuJyk7XG4gIH1cblxuICBpc0xlYWYoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBhYnNvcmIoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQudHlwZSA9PT0gdGhpcy50eXBlKSB7XG4gICAgICB0aGlzLnVuZXNjYXBlZENvbnRlbnRzID0gdGhpcy51bmVzY2FwZWRDb250ZW50cy5jb25jYXQoY2hpbGQudW5lc2NhcGVkQ29udGVudHMpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG4gIH1cblxuICBlc2NhcGUoY29udGVudHMpIHtcbiAgICByZXR1cm4gY29udGVudHNcbiAgICAucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxuICAgIC5yZXBsYWNlKC8nL2csICcmIzM5OycpO1xuICB9XG5cbiAgc3RhdGljIG1hdGNoZXModG9rZW4gPSB7fSkge1xuICAgIHJldHVybiAoXG4gICAgICAoKHRva2VuLmNvbnRlbnRzID09PSAnJykgfHwgKHRva2VuLmNvbnRlbnRzKSkgJiZcbiAgICAgICh0eXBlb2YgdG9rZW4uY29udGVudHMgPT09ICdzdHJpbmcnKSAmJlxuICAgICAgKCh0b2tlbi5hdHRyaWJ1dGVzID09PSB1bmRlZmluZWQpIHx8ICh0b2tlbi5hdHRyaWJ1dGVzLmltYWdlID09PSB1bmRlZmluZWQpKVxuICAgICk7XG4gIH1cblxufVxuXG5UZXh0Tm9kZS5wcmlvcml0eSA9IDA7XG4iXX0=
