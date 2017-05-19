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

    return _possibleConstructorReturn(this, (ParagraphNode.__proto__ || Object.getPrototypeOf(ParagraphNode)).apply(this, arguments));
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

      var indentLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.children.length === 0) {
        this.children.push(new _text2.default({ type: 'text', attributes: {}, contents: '' }));
      }
      return Promise.all(this.children.map(function (c) {
        return c.toHTMLAsync(0);
      })).then(function (childHTML) {
        return '' + _this2.openTag() + childHTML.join('') + _this2.closeTag(); // eslint-disable-line max-len
      });
    }
  }, {
    key: 'toHTML',
    value: function toHTML() {
      var indentLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.children.length === 0) {
        this.children.push(new _text2.default({ type: 'text', attributes: {}, contents: '' }));
      }
      // if (this.children.length === 0) {
      // return `${new Array(0).join(' ')}${this.openTag()}&nbsp;${this.closeTag()}`;
      // } else {
      return _get(ParagraphNode.prototype.__proto__ || Object.getPrototypeOf(ParagraphNode.prototype), 'toHTML', this).call(this, indentLevel);
      // }
    }
  }], [{
    key: 'matches',
    value: function matches() {
      var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return token.type === 'linebreak' && (!!token.attributes || token.attributes.list === undefined && token.attributes.header === undefined);
    }
  }]);

  return ParagraphNode;
}(_block2.default);

exports.default = ParagraphNode;


ParagraphNode.priority = 19;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vcGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbIlBhcmFncmFwaE5vZGUiLCJjaGlsZCIsImluZGVudExldmVsIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJwdXNoIiwidHlwZSIsImF0dHJpYnV0ZXMiLCJjb250ZW50cyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJjIiwidG9IVE1MQXN5bmMiLCJ0aGVuIiwiY2hpbGRIVE1MIiwib3BlblRhZyIsImpvaW4iLCJjbG9zZVRhZyIsInRva2VuIiwibGlzdCIsInVuZGVmaW5lZCIsImhlYWRlciIsInByaW9yaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxhOzs7Ozs7Ozs7Ozs4QkFDVDtBQUNSLGFBQU8sS0FBUDtBQUNEOzs7K0JBQ1U7QUFDVCxhQUFPLE1BQVA7QUFDRDs7OzJCQUNNQyxLLEVBQU87QUFDWixhQUFPQSxLQUFQO0FBQ0Q7OztrQ0FFNEI7QUFBQTs7QUFBQSxVQUFqQkMsV0FBaUIsdUVBQUgsQ0FBRzs7QUFDM0IsVUFBSSxLQUFLQyxRQUFMLENBQWNDLE1BQWQsS0FBeUIsQ0FBN0IsRUFBZ0M7QUFDOUIsYUFBS0QsUUFBTCxDQUFjRSxJQUFkLENBQW1CLG1CQUFhLEVBQUNDLE1BQU0sTUFBUCxFQUFlQyxZQUFZLEVBQTNCLEVBQStCQyxVQUFVLEVBQXpDLEVBQWIsQ0FBbkI7QUFDRDtBQUNELGFBQU9DLFFBQVFDLEdBQVIsQ0FBWSxLQUFLUCxRQUFMLENBQWNRLEdBQWQsQ0FBa0IsVUFBQ0MsQ0FBRDtBQUFBLGVBQU9BLEVBQUVDLFdBQUYsQ0FBYyxDQUFkLENBQVA7QUFBQSxPQUFsQixDQUFaLEVBQ05DLElBRE0sQ0FDRCxVQUFDQyxTQUFELEVBQWU7QUFDbkIsb0JBQVUsT0FBS0MsT0FBTCxFQUFWLEdBQTJCRCxVQUFVRSxJQUFWLENBQWUsRUFBZixDQUEzQixHQUFnRCxPQUFLQyxRQUFMLEVBQWhELENBRG1CLENBQ2dEO0FBQ3BFLE9BSE0sQ0FBUDtBQUlEOzs7NkJBRXVCO0FBQUEsVUFBakJoQixXQUFpQix1RUFBSCxDQUFHOztBQUN0QixVQUFJLEtBQUtDLFFBQUwsQ0FBY0MsTUFBZCxLQUF5QixDQUE3QixFQUFnQztBQUM5QixhQUFLRCxRQUFMLENBQWNFLElBQWQsQ0FBbUIsbUJBQWEsRUFBQ0MsTUFBTSxNQUFQLEVBQWVDLFlBQVksRUFBM0IsRUFBK0JDLFVBQVUsRUFBekMsRUFBYixDQUFuQjtBQUNEO0FBQ0Q7QUFDRTtBQUNGO0FBQ0Esa0lBQW9CTixXQUFwQjtBQUNBO0FBQ0Q7Ozs4QkFFMEI7QUFBQSxVQUFaaUIsS0FBWSx1RUFBSixFQUFJOztBQUN6QixhQUNHQSxNQUFNYixJQUFOLEtBQWUsV0FBaEIsS0FDRyxDQUFDLENBQUNhLE1BQU1aLFVBQVQsSUFFR1ksTUFBTVosVUFBTixDQUFpQmEsSUFBakIsS0FBMEJDLFNBQTNCLElBQ0NGLE1BQU1aLFVBQU4sQ0FBaUJlLE1BQWpCLEtBQTRCRCxTQUpqQyxDQURGO0FBU0Q7Ozs7OztrQkExQ2tCckIsYTs7O0FBNkNyQkEsY0FBY3VCLFFBQWQsR0FBeUIsRUFBekIiLCJmaWxlIjoibWluaURPTS9wYXJhZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxvY2tOb2RlIGZyb20gJy4vYmxvY2snO1xuaW1wb3J0IFRleHROb2RlIGZyb20gJy4vdGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFncmFwaE5vZGUgZXh0ZW5kcyBCbG9ja05vZGUge1xuICBvcGVuVGFnKCkge1xuICAgIHJldHVybiAnPHA+JztcbiAgfVxuICBjbG9zZVRhZygpIHtcbiAgICByZXR1cm4gJzwvcD4nO1xuICB9XG4gIGFic29yYihjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfVxuXG4gIHRvSFRNTEFzeW5jKGluZGVudExldmVsID0gMCkge1xuICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKG5ldyBUZXh0Tm9kZSh7dHlwZTogJ3RleHQnLCBhdHRyaWJ1dGVzOiB7fSwgY29udGVudHM6ICcnfSkpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5jaGlsZHJlbi5tYXAoKGMpID0+IGMudG9IVE1MQXN5bmMoMCkpKVxuICAgIC50aGVuKChjaGlsZEhUTUwpID0+IHtcbiAgICAgIHJldHVybiBgJHt0aGlzLm9wZW5UYWcoKX0ke2NoaWxkSFRNTC5qb2luKCcnKX0ke3RoaXMuY2xvc2VUYWcoKX1gOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICB9KTtcbiAgfVxuXG4gIHRvSFRNTChpbmRlbnRMZXZlbCA9IDApIHtcbiAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChuZXcgVGV4dE5vZGUoe3R5cGU6ICd0ZXh0JywgYXR0cmlidXRlczoge30sIGNvbnRlbnRzOiAnJ30pKTtcbiAgICB9XG4gICAgLy8gaWYgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyByZXR1cm4gYCR7bmV3IEFycmF5KDApLmpvaW4oJyAnKX0ke3RoaXMub3BlblRhZygpfSZuYnNwOyR7dGhpcy5jbG9zZVRhZygpfWA7XG4gICAgLy8gfSBlbHNlIHtcbiAgICByZXR1cm4gc3VwZXIudG9IVE1MKGluZGVudExldmVsKTtcbiAgICAvLyB9XG4gIH1cblxuICBzdGF0aWMgbWF0Y2hlcyh0b2tlbiA9IHt9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0b2tlbi50eXBlID09PSAnbGluZWJyZWFrJykgJiYgKFxuICAgICAgICAoISF0b2tlbi5hdHRyaWJ1dGVzKSB8fFxuICAgICAgICAoXG4gICAgICAgICAgKHRva2VuLmF0dHJpYnV0ZXMubGlzdCA9PT0gdW5kZWZpbmVkKSAmJlxuICAgICAgICAgICh0b2tlbi5hdHRyaWJ1dGVzLmhlYWRlciA9PT0gdW5kZWZpbmVkKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuXG5QYXJhZ3JhcGhOb2RlLnByaW9yaXR5ID0gMTk7XG4iXX0=
