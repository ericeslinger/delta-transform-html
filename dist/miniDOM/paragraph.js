'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _block = require('./block');

var _block2 = _interopRequireDefault(_block);

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

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
        this.children.push(new _text2.default({ type: 'text', attributes: {}, contents: '' }));
      }
      return Promise.all(this.children.map(function (c) {
        return c.toHTMLAsync(indentLevel + 2);
      })).then(function (childHTML) {
        return '' + new Array(indentLevel + 1).join(' ') + _this2.openTag() + '\n' + childHTML.join('\n') + '\n' + new Array(indentLevel + 1).join(' ') + _this2.closeTag(); // eslint-disable-line max-len
      });
    }
  }, {
    key: 'toHTML',
    value: function toHTML() {
      var indentLevel = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      if (this.children.length === 0) {
        this.children.push(new _text2.default({ type: 'text', attributes: {}, contents: '' }));
      }
      // if (this.children.length === 0) {
      // return `${new Array(indentLevel + 1).join(' ')}${this.openTag()}&nbsp;${this.closeTag()}`;
      // } else {
      return _get(Object.getPrototypeOf(ParagraphNode.prototype), 'toHTML', this).call(this, indentLevel);
      // }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vcGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUIsYTs7Ozs7Ozs7Ozs7OEJBQ1Q7QUFDUixhQUFPLEtBQVA7QUFDRDs7OytCQUNVO0FBQ1QsYUFBTyxNQUFQO0FBQ0Q7OzsyQkFDTSxLLEVBQU87QUFDWixhQUFPLEtBQVA7QUFDRDs7O2tDQUU0QjtBQUFBOztBQUFBLFVBQWpCLFdBQWlCLHlEQUFILENBQUc7O0FBQzNCLFVBQUksS0FBSyxRQUFMLENBQWMsTUFBZCxLQUF5QixDQUE3QixFQUFnQztBQUM5QixhQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLG1CQUFhLEVBQUMsTUFBTSxNQUFQLEVBQWUsWUFBWSxFQUEzQixFQUErQixVQUFVLEVBQXpDLEVBQWIsQ0FBbkI7QUFDRDtBQUNELGFBQU8sUUFBUSxHQUFSLENBQVksS0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixVQUFDLENBQUQ7QUFBQSxlQUFPLEVBQUUsV0FBRixDQUFjLGNBQWMsQ0FBNUIsQ0FBUDtBQUFBLE9BQWxCLENBQVosRUFDTixJQURNLENBQ0QsVUFBQyxTQUFELEVBQWU7QUFDbkIsb0JBQVUsSUFBSSxLQUFKLENBQVUsY0FBYyxDQUF4QixFQUEyQixJQUEzQixDQUFnQyxHQUFoQyxDQUFWLEdBQWlELE9BQUssT0FBTCxFQUFqRCxVQUFvRSxVQUFVLElBQVYsQ0FBZSxJQUFmLENBQXBFLFVBQTZGLElBQUksS0FBSixDQUFVLGNBQWMsQ0FBeEIsRUFBMkIsSUFBM0IsQ0FBZ0MsR0FBaEMsQ0FBN0YsR0FBb0ksT0FBSyxRQUFMLEVBQXBJLEM7QUFDRCxPQUhNLENBQVA7QUFJRDs7OzZCQUV1QjtBQUFBLFVBQWpCLFdBQWlCLHlEQUFILENBQUc7O0FBQ3RCLFVBQUksS0FBSyxRQUFMLENBQWMsTUFBZCxLQUF5QixDQUE3QixFQUFnQztBQUM5QixhQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLG1CQUFhLEVBQUMsTUFBTSxNQUFQLEVBQWUsWUFBWSxFQUEzQixFQUErQixVQUFVLEVBQXpDLEVBQWIsQ0FBbkI7QUFDRDs7OztBQUlDLDZGQUFvQixXQUFwQjs7QUFFSDs7OzhCQUUwQjtBQUFBLFVBQVosS0FBWSx5REFBSixFQUFJOztBQUN6QixhQUNHLE1BQU0sSUFBTixLQUFlLFdBQWhCLEtBQ0csQ0FBQyxDQUFDLE1BQU0sVUFBVCxJQUVHLE1BQU0sVUFBTixDQUFpQixJQUFqQixLQUEwQixTQUEzQixJQUNDLE1BQU0sVUFBTixDQUFpQixNQUFqQixLQUE0QixTQUpqQyxDQURGO0FBU0Q7Ozs7OztrQkExQ2tCLGE7OztBQTZDckIsY0FBYyxRQUFkLEdBQXlCLEVBQXpCIiwiZmlsZSI6Im1pbmlET00vcGFyYWdyYXBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2NrTm9kZSBmcm9tICcuL2Jsb2NrJztcbmltcG9ydCBUZXh0Tm9kZSBmcm9tICcuL3RleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJhZ3JhcGhOb2RlIGV4dGVuZHMgQmxvY2tOb2RlIHtcbiAgb3BlblRhZygpIHtcbiAgICByZXR1cm4gJzxwPic7XG4gIH1cbiAgY2xvc2VUYWcoKSB7XG4gICAgcmV0dXJuICc8L3A+JztcbiAgfVxuICBhYnNvcmIoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH1cblxuICB0b0hUTUxBc3luYyhpbmRlbnRMZXZlbCA9IDApIHtcbiAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChuZXcgVGV4dE5vZGUoe3R5cGU6ICd0ZXh0JywgYXR0cmlidXRlczoge30sIGNvbnRlbnRzOiAnJ30pKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHRoaXMuY2hpbGRyZW4ubWFwKChjKSA9PiBjLnRvSFRNTEFzeW5jKGluZGVudExldmVsICsgMikpKVxuICAgIC50aGVuKChjaGlsZEhUTUwpID0+IHtcbiAgICAgIHJldHVybiBgJHtuZXcgQXJyYXkoaW5kZW50TGV2ZWwgKyAxKS5qb2luKCcgJyl9JHt0aGlzLm9wZW5UYWcoKX1cXG4ke2NoaWxkSFRNTC5qb2luKCdcXG4nKX1cXG4ke25ldyBBcnJheShpbmRlbnRMZXZlbCArIDEpLmpvaW4oJyAnKX0ke3RoaXMuY2xvc2VUYWcoKX1gOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICB9KTtcbiAgfVxuXG4gIHRvSFRNTChpbmRlbnRMZXZlbCA9IDApIHtcbiAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChuZXcgVGV4dE5vZGUoe3R5cGU6ICd0ZXh0JywgYXR0cmlidXRlczoge30sIGNvbnRlbnRzOiAnJ30pKTtcbiAgICB9XG4gICAgLy8gaWYgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyByZXR1cm4gYCR7bmV3IEFycmF5KGluZGVudExldmVsICsgMSkuam9pbignICcpfSR7dGhpcy5vcGVuVGFnKCl9Jm5ic3A7JHt0aGlzLmNsb3NlVGFnKCl9YDtcbiAgICAvLyB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN1cGVyLnRvSFRNTChpbmRlbnRMZXZlbCk7XG4gICAgLy8gfVxuICB9XG5cbiAgc3RhdGljIG1hdGNoZXModG9rZW4gPSB7fSkge1xuICAgIHJldHVybiAoXG4gICAgICAodG9rZW4udHlwZSA9PT0gJ2xpbmVicmVhaycpICYmIChcbiAgICAgICAgKCEhdG9rZW4uYXR0cmlidXRlcykgfHxcbiAgICAgICAgKFxuICAgICAgICAgICh0b2tlbi5hdHRyaWJ1dGVzLmxpc3QgPT09IHVuZGVmaW5lZCkgJiZcbiAgICAgICAgICAodG9rZW4uYXR0cmlidXRlcy5oZWFkZXIgPT09IHVuZGVmaW5lZClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cblxuUGFyYWdyYXBoTm9kZS5wcmlvcml0eSA9IDE5O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
