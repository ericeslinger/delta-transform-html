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

var StrikeThroughNode = function (_SpanNode) {
  _inherits(StrikeThroughNode, _SpanNode);

  function StrikeThroughNode() {
    _classCallCheck(this, StrikeThroughNode);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(StrikeThroughNode).apply(this, arguments));
  }

  _createClass(StrikeThroughNode, [{
    key: 'openTag',
    value: function openTag() {
      return '<s>';
    }
  }, {
    key: 'closeTag',
    value: function closeTag() {
      return '</s>';
    }
  }], [{
    key: 'matches',
    value: function matches() {
      var token = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return token.attributes && token.attributes.strike;
    }
  }]);

  return StrikeThroughNode;
}(_span2.default);

exports.default = StrikeThroughNode;


StrikeThroughNode.priority = 8;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vc3RyaWtldGhyb3VnaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUIsaUI7Ozs7Ozs7Ozs7OzhCQUNUO0FBQ1IsYUFBTyxLQUFQO0FBQ0Q7OzsrQkFDVTtBQUNULGFBQU8sTUFBUDtBQUNEOzs7OEJBQzBCO0FBQUEsVUFBWixLQUFZLHlEQUFKLEVBQUk7O0FBQ3pCLGFBQVEsTUFBTSxVQUFOLElBQW9CLE1BQU0sVUFBTixDQUFpQixNQUE3QztBQUNEOzs7Ozs7a0JBVGtCLGlCOzs7QUFZckIsa0JBQWtCLFFBQWxCLEdBQTZCLENBQTdCIiwiZmlsZSI6Im1pbmlET00vc3RyaWtldGhyb3VnaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGFuTm9kZSBmcm9tICcuL3NwYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpa2VUaHJvdWdoTm9kZSBleHRlbmRzIFNwYW5Ob2RlIHtcbiAgb3BlblRhZygpIHtcbiAgICByZXR1cm4gJzxzPic7XG4gIH1cbiAgY2xvc2VUYWcoKSB7XG4gICAgcmV0dXJuICc8L3M+JztcbiAgfVxuICBzdGF0aWMgbWF0Y2hlcyh0b2tlbiA9IHt9KSB7XG4gICAgcmV0dXJuICh0b2tlbi5hdHRyaWJ1dGVzICYmIHRva2VuLmF0dHJpYnV0ZXMuc3RyaWtlKTtcbiAgfVxufVxuXG5TdHJpa2VUaHJvdWdoTm9kZS5wcmlvcml0eSA9IDg7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
