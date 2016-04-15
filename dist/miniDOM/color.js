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

var ColorNode = function (_SpanNode) {
  _inherits(ColorNode, _SpanNode);

  function ColorNode() {
    _classCallCheck(this, ColorNode);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ColorNode).apply(this, arguments));
  }

  _createClass(ColorNode, [{
    key: 'openTag',
    value: function openTag() {
      return '<span style="color:' + this.attributes.color + ';">';
    }
  }, {
    key: 'closeTag',
    value: function closeTag() {
      return '</span>';
    }
  }], [{
    key: 'matches',
    value: function matches() {
      var token = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return token.attributes && token.attributes.color;
    }
  }]);

  return ColorNode;
}(_span2.default);

exports.default = ColorNode;


ColorNode.priority = 5;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vY29sb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCOzs7Ozs7Ozs7Ozs4QkFDVDtBQUNSLHFDQUE2QixLQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsUUFBN0IsQ0FEUTs7OzsrQkFHQztBQUNULGFBQU8sU0FBUCxDQURTOzs7OzhCQUdnQjtVQUFaLDhEQUFRLGtCQUFJOztBQUN6QixhQUFRLE1BQU0sVUFBTixJQUFvQixNQUFNLFVBQU4sQ0FBaUIsS0FBakIsQ0FESDs7OztTQVBSOzs7Ozs7QUFZckIsVUFBVSxRQUFWLEdBQXFCLENBQXJCIiwiZmlsZSI6Im1pbmlET00vY29sb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3Bhbk5vZGUgZnJvbSAnLi9zcGFuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3JOb2RlIGV4dGVuZHMgU3Bhbk5vZGUge1xuICBvcGVuVGFnKCkge1xuICAgIHJldHVybiBgPHNwYW4gc3R5bGU9XCJjb2xvcjoke3RoaXMuYXR0cmlidXRlcy5jb2xvcn07XCI+YDtcbiAgfVxuICBjbG9zZVRhZygpIHtcbiAgICByZXR1cm4gJzwvc3Bhbj4nO1xuICB9XG4gIHN0YXRpYyBtYXRjaGVzKHRva2VuID0ge30pIHtcbiAgICByZXR1cm4gKHRva2VuLmF0dHJpYnV0ZXMgJiYgdG9rZW4uYXR0cmlidXRlcy5jb2xvcik7XG4gIH1cbn1cblxuQ29sb3JOb2RlLnByaW9yaXR5ID0gNTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
