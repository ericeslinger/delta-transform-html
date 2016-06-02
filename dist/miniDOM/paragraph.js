'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _block = require('./block');

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParagraphNode = function (_BlockNode) {
  _inherits(ParagraphNode, _BlockNode);

  function ParagraphNode() {
    _classCallCheck(this, ParagraphNode);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ParagraphNode).apply(this, arguments));
  }

  _createClass(ParagraphNode, [{
    key: 'openTag',
    value: function openTag() {
      return '<p>';
    }
  }, {
    key: 'closeTag',
    value: function closeTag() {
      return '</p>';
    }
  }, {
    key: 'absorb',
    value: function absorb(child) {
      return child;
    }
  }, {
    key: 'toHTMLAsync',
    value: function toHTMLAsync() {
      var _this2 = this;

      var indentLevel = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      if (this.children.length === 0) {
        return Promise.resolve('' + new Array(indentLevel + 1).join(' ') + this.openTag() + '&nbsp;' + this.closeTag()); // eslint-disable-line max-len
      } else {
          return Promise.all(this.children.map(function (c) {
            return c.toHTMLAsync(indentLevel + 2);
          })).then(function (childHTML) {
            return '' + new Array(indentLevel + 1).join(' ') + _this2.openTag() + '\n' + childHTML.join('\n') + '\n' + new Array(indentLevel + 1).join(' ') + _this2.closeTag(); // eslint-disable-line max-len
          });
        }
    }
  }, {
    key: 'toHTML',
    value: function toHTML() {
      var indentLevel = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      if (this.children.length === 0) {
        return '' + new Array(indentLevel + 1).join(' ') + this.openTag() + '&nbsp;' + this.closeTag();
      } else {
        return _get(Object.getPrototypeOf(ParagraphNode.prototype), 'toHTML', this).call(this, indentLevel);
      }
    }
  }], [{
    key: 'matches',
    value: function matches() {
      var token = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return token.type === 'linebreak' && (!!token.attributes || token.attributes.list === undefined && token.attributes.header === undefined);
    }
  }]);

  return ParagraphNode;
}(_block2.default);

exports.default = ParagraphNode;


ParagraphNode.priority = 19;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vcGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCLGE7Ozs7Ozs7Ozs7OzhCQUNUO0FBQ1IsYUFBTyxLQUFQO0FBQ0Q7OzsrQkFDVTtBQUNULGFBQU8sTUFBUDtBQUNEOzs7MkJBQ00sSyxFQUFPO0FBQ1osYUFBTyxLQUFQO0FBQ0Q7OztrQ0FFNEI7QUFBQTs7QUFBQSxVQUFqQixXQUFpQix5REFBSCxDQUFHOztBQUMzQixVQUFJLEtBQUssUUFBTCxDQUFjLE1BQWQsS0FBeUIsQ0FBN0IsRUFBZ0M7QUFDOUIsZUFBTyxRQUFRLE9BQVIsTUFBbUIsSUFBSSxLQUFKLENBQVUsY0FBYyxDQUF4QixFQUEyQixJQUEzQixDQUFnQyxHQUFoQyxDQUFuQixHQUEwRCxLQUFLLE9BQUwsRUFBMUQsY0FBaUYsS0FBSyxRQUFMLEVBQWpGLENBQVAsQztBQUNELE9BRkQsTUFFTztBQUNMLGlCQUFPLFFBQVEsR0FBUixDQUFZLEtBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsVUFBQyxDQUFEO0FBQUEsbUJBQU8sRUFBRSxXQUFGLENBQWMsY0FBYyxDQUE1QixDQUFQO0FBQUEsV0FBbEIsQ0FBWixFQUNOLElBRE0sQ0FDRCxVQUFDLFNBQUQsRUFBZTtBQUNuQix3QkFBVSxJQUFJLEtBQUosQ0FBVSxjQUFjLENBQXhCLEVBQTJCLElBQTNCLENBQWdDLEdBQWhDLENBQVYsR0FBaUQsT0FBSyxPQUFMLEVBQWpELFVBQW9FLFVBQVUsSUFBVixDQUFlLElBQWYsQ0FBcEUsVUFBNkYsSUFBSSxLQUFKLENBQVUsY0FBYyxDQUF4QixFQUEyQixJQUEzQixDQUFnQyxHQUFoQyxDQUE3RixHQUFvSSxPQUFLLFFBQUwsRUFBcEksQztBQUNELFdBSE0sQ0FBUDtBQUlEO0FBQ0Y7Ozs2QkFFdUI7QUFBQSxVQUFqQixXQUFpQix5REFBSCxDQUFHOztBQUN0QixVQUFJLEtBQUssUUFBTCxDQUFjLE1BQWQsS0FBeUIsQ0FBN0IsRUFBZ0M7QUFDOUIsb0JBQVUsSUFBSSxLQUFKLENBQVUsY0FBYyxDQUF4QixFQUEyQixJQUEzQixDQUFnQyxHQUFoQyxDQUFWLEdBQWlELEtBQUssT0FBTCxFQUFqRCxjQUF3RSxLQUFLLFFBQUwsRUFBeEU7QUFDRCxPQUZELE1BRU87QUFDTCwrRkFBb0IsV0FBcEI7QUFDRDtBQUNGOzs7OEJBRTBCO0FBQUEsVUFBWixLQUFZLHlEQUFKLEVBQUk7O0FBQ3pCLGFBQ0csTUFBTSxJQUFOLEtBQWUsV0FBaEIsS0FDRyxDQUFDLENBQUMsTUFBTSxVQUFULElBRUcsTUFBTSxVQUFOLENBQWlCLElBQWpCLEtBQTBCLFNBQTNCLElBQ0MsTUFBTSxVQUFOLENBQWlCLE1BQWpCLEtBQTRCLFNBSmpDLENBREY7QUFTRDs7Ozs7O2tCQXhDa0IsYTs7O0FBMkNyQixjQUFjLFFBQWQsR0FBeUIsRUFBekIiLCJmaWxlIjoibWluaURPTS9wYXJhZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxvY2tOb2RlIGZyb20gJy4vYmxvY2snO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJhZ3JhcGhOb2RlIGV4dGVuZHMgQmxvY2tOb2RlIHtcbiAgb3BlblRhZygpIHtcbiAgICByZXR1cm4gJzxwPic7XG4gIH1cbiAgY2xvc2VUYWcoKSB7XG4gICAgcmV0dXJuICc8L3A+JztcbiAgfVxuICBhYnNvcmIoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH1cblxuICB0b0hUTUxBc3luYyhpbmRlbnRMZXZlbCA9IDApIHtcbiAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoYCR7bmV3IEFycmF5KGluZGVudExldmVsICsgMSkuam9pbignICcpfSR7dGhpcy5vcGVuVGFnKCl9Jm5ic3A7JHt0aGlzLmNsb3NlVGFnKCl9YCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5jaGlsZHJlbi5tYXAoKGMpID0+IGMudG9IVE1MQXN5bmMoaW5kZW50TGV2ZWwgKyAyKSkpXG4gICAgICAudGhlbigoY2hpbGRIVE1MKSA9PiB7XG4gICAgICAgIHJldHVybiBgJHtuZXcgQXJyYXkoaW5kZW50TGV2ZWwgKyAxKS5qb2luKCcgJyl9JHt0aGlzLm9wZW5UYWcoKX1cXG4ke2NoaWxkSFRNTC5qb2luKCdcXG4nKX1cXG4ke25ldyBBcnJheShpbmRlbnRMZXZlbCArIDEpLmpvaW4oJyAnKX0ke3RoaXMuY2xvc2VUYWcoKX1gOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHRvSFRNTChpbmRlbnRMZXZlbCA9IDApIHtcbiAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBgJHtuZXcgQXJyYXkoaW5kZW50TGV2ZWwgKyAxKS5qb2luKCcgJyl9JHt0aGlzLm9wZW5UYWcoKX0mbmJzcDske3RoaXMuY2xvc2VUYWcoKX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3VwZXIudG9IVE1MKGluZGVudExldmVsKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbWF0Y2hlcyh0b2tlbiA9IHt9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0b2tlbi50eXBlID09PSAnbGluZWJyZWFrJykgJiYgKFxuICAgICAgICAoISF0b2tlbi5hdHRyaWJ1dGVzKSB8fFxuICAgICAgICAoXG4gICAgICAgICAgKHRva2VuLmF0dHJpYnV0ZXMubGlzdCA9PT0gdW5kZWZpbmVkKSAmJlxuICAgICAgICAgICh0b2tlbi5hdHRyaWJ1dGVzLmhlYWRlciA9PT0gdW5kZWZpbmVkKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuXG5QYXJhZ3JhcGhOb2RlLnByaW9yaXR5ID0gMTk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
