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

    return _possibleConstructorReturn(this, (StrikeThroughNode.__proto__ || Object.getPrototypeOf(StrikeThroughNode)).apply(this, arguments));
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
      var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return token.attributes && token.attributes.strike;
    }
  }]);

  return StrikeThroughNode;
}(_span2.default);

exports.default = StrikeThroughNode;


StrikeThroughNode.priority = 8;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vc3RyaWtldGhyb3VnaC5qcyJdLCJuYW1lcyI6WyJTdHJpa2VUaHJvdWdoTm9kZSIsInRva2VuIiwiYXR0cmlidXRlcyIsInN0cmlrZSIsInByaW9yaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGlCOzs7Ozs7Ozs7Ozs4QkFDVDtBQUNSLGFBQU8sS0FBUDtBQUNEOzs7K0JBQ1U7QUFDVCxhQUFPLE1BQVA7QUFDRDs7OzhCQUMwQjtBQUFBLFVBQVpDLEtBQVksdUVBQUosRUFBSTs7QUFDekIsYUFBUUEsTUFBTUMsVUFBTixJQUFvQkQsTUFBTUMsVUFBTixDQUFpQkMsTUFBN0M7QUFDRDs7Ozs7O2tCQVRrQkgsaUI7OztBQVlyQkEsa0JBQWtCSSxRQUFsQixHQUE2QixDQUE3QiIsImZpbGUiOiJtaW5pRE9NL3N0cmlrZXRocm91Z2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3Bhbk5vZGUgZnJvbSAnLi9zcGFuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyaWtlVGhyb3VnaE5vZGUgZXh0ZW5kcyBTcGFuTm9kZSB7XG4gIG9wZW5UYWcoKSB7XG4gICAgcmV0dXJuICc8cz4nO1xuICB9XG4gIGNsb3NlVGFnKCkge1xuICAgIHJldHVybiAnPC9zPic7XG4gIH1cbiAgc3RhdGljIG1hdGNoZXModG9rZW4gPSB7fSkge1xuICAgIHJldHVybiAodG9rZW4uYXR0cmlidXRlcyAmJiB0b2tlbi5hdHRyaWJ1dGVzLnN0cmlrZSk7XG4gIH1cbn1cblxuU3RyaWtlVGhyb3VnaE5vZGUucHJpb3JpdHkgPSA4O1xuIl19
