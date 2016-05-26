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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vcGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCOzs7Ozs7Ozs7Ozs4QkFDVDtBQUNSLGFBQU8sS0FBUCxDQURROzs7OytCQUdDO0FBQ1QsYUFBTyxNQUFQLENBRFM7Ozs7MkJBR0osT0FBTztBQUNaLGFBQU8sS0FBUCxDQURZOzs7OzZCQUlVO1VBQWpCLG9FQUFjLGlCQUFHOztBQUN0QixVQUFJLEtBQUssUUFBTCxDQUFjLE1BQWQsS0FBeUIsQ0FBekIsRUFBNEI7QUFDOUIsb0JBQVUsSUFBSSxLQUFKLENBQVUsY0FBYyxDQUFkLENBQVYsQ0FBMkIsSUFBM0IsQ0FBZ0MsR0FBaEMsSUFBdUMsS0FBSyxPQUFMLGdCQUF1QixLQUFLLFFBQUwsRUFBeEUsQ0FEOEI7T0FBaEMsTUFFTztBQUNMLDBDQWZlLHFEQWVLLFlBQXBCLENBREs7T0FGUDs7Ozs4QkFReUI7VUFBWiw4REFBUSxrQkFBSTs7QUFDekIsYUFDRSxLQUFDLENBQU0sSUFBTixLQUFlLFdBQWYsS0FDQyxDQUFFLENBQUMsTUFBTSxVQUFOLElBRUQsS0FBQyxDQUFNLFVBQU4sQ0FBaUIsSUFBakIsS0FBMEIsU0FBMUIsSUFDQSxNQUFNLFVBQU4sQ0FBaUIsTUFBakIsS0FBNEIsU0FBNUIsQ0FKTCxDQUZ1Qjs7OztTQXBCUjs7Ozs7O0FBaUNyQixjQUFjLFFBQWQsR0FBeUIsRUFBekIiLCJmaWxlIjoibWluaURPTS9wYXJhZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxvY2tOb2RlIGZyb20gJy4vYmxvY2snO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJhZ3JhcGhOb2RlIGV4dGVuZHMgQmxvY2tOb2RlIHtcbiAgb3BlblRhZygpIHtcbiAgICByZXR1cm4gJzxwPic7XG4gIH1cbiAgY2xvc2VUYWcoKSB7XG4gICAgcmV0dXJuICc8L3A+JztcbiAgfVxuICBhYnNvcmIoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH1cblxuICB0b0hUTUwoaW5kZW50TGV2ZWwgPSAwKSB7XG4gICAgaWYgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYCR7bmV3IEFycmF5KGluZGVudExldmVsICsgMSkuam9pbignICcpfSR7dGhpcy5vcGVuVGFnKCl9Jm5ic3A7JHt0aGlzLmNsb3NlVGFnKCl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN1cGVyLnRvSFRNTChpbmRlbnRMZXZlbCk7XG4gICAgfVxuICB9XG5cblxuICBzdGF0aWMgbWF0Y2hlcyh0b2tlbiA9IHt9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0b2tlbi50eXBlID09PSAnbGluZWJyZWFrJykgJiYgKFxuICAgICAgICAoISF0b2tlbi5hdHRyaWJ1dGVzKSB8fFxuICAgICAgICAoXG4gICAgICAgICAgKHRva2VuLmF0dHJpYnV0ZXMubGlzdCA9PT0gdW5kZWZpbmVkKSAmJlxuICAgICAgICAgICh0b2tlbi5hdHRyaWJ1dGVzLmhlYWRlciA9PT0gdW5kZWZpbmVkKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuXG5QYXJhZ3JhcGhOb2RlLnByaW9yaXR5ID0gMTk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
