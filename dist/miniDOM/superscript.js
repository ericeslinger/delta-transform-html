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

var SuperscriptNode = function (_SpanNode) {
  _inherits(SuperscriptNode, _SpanNode);

  function SuperscriptNode() {
    _classCallCheck(this, SuperscriptNode);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SuperscriptNode).apply(this, arguments));
  }

  _createClass(SuperscriptNode, [{
    key: 'openTag',
    value: function openTag() {
      return '<sup>';
    }
  }, {
    key: 'closeTag',
    value: function closeTag() {
      return '</sup>';
    }
  }], [{
    key: 'matches',
    value: function matches() {
      var token = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return token.attributes && token.attributes.super;
    }
  }]);

  return SuperscriptNode;
}(_span2.default);

exports.default = SuperscriptNode;


SuperscriptNode.priority = 10;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vc3VwZXJzY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCOzs7Ozs7Ozs7Ozs4QkFDVDtBQUNSLGFBQU8sT0FBUCxDQURROzs7OytCQUdDO0FBQ1QsYUFBTyxRQUFQLENBRFM7Ozs7OEJBR2dCO1VBQVosOERBQVEsa0JBQUk7O0FBQ3pCLGFBQVEsTUFBTSxVQUFOLElBQW9CLE1BQU0sVUFBTixDQUFpQixLQUFqQixDQURIOzs7O1NBUFI7Ozs7OztBQVlyQixnQkFBZ0IsUUFBaEIsR0FBMkIsRUFBM0IiLCJmaWxlIjoibWluaURPTS9zdXBlcnNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGFuTm9kZSBmcm9tICcuL3NwYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdXBlcnNjcmlwdE5vZGUgZXh0ZW5kcyBTcGFuTm9kZSB7XG4gIG9wZW5UYWcoKSB7XG4gICAgcmV0dXJuICc8c3VwPic7XG4gIH1cbiAgY2xvc2VUYWcoKSB7XG4gICAgcmV0dXJuICc8L3N1cD4nO1xuICB9XG4gIHN0YXRpYyBtYXRjaGVzKHRva2VuID0ge30pIHtcbiAgICByZXR1cm4gKHRva2VuLmF0dHJpYnV0ZXMgJiYgdG9rZW4uYXR0cmlidXRlcy5zdXBlcik7XG4gIH1cbn1cblxuU3VwZXJzY3JpcHROb2RlLnByaW9yaXR5ID0gMTA7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
