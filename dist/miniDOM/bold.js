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

var BoldNode = function (_SpanNode) {
  _inherits(BoldNode, _SpanNode);

  function BoldNode() {
    _classCallCheck(this, BoldNode);

    return _possibleConstructorReturn(this, (BoldNode.__proto__ || Object.getPrototypeOf(BoldNode)).apply(this, arguments));
  }

  _createClass(BoldNode, [{
    key: 'openTag',
    value: function openTag() {
      return '<strong>';
    }
  }, {
    key: 'closeTag',
    value: function closeTag() {
      return '</strong>';
    }
  }], [{
    key: 'matches',
    value: function matches() {
      var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return token.attributes && token.attributes.bold;
    }
  }]);

  return BoldNode;
}(_span2.default);

exports.default = BoldNode;


BoldNode.priority = 1;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vYm9sZC5qcyJdLCJuYW1lcyI6WyJCb2xkTm9kZSIsInRva2VuIiwiYXR0cmlidXRlcyIsImJvbGQiLCJwcmlvcml0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs4QkFDVDtBQUNSLGFBQU8sVUFBUDtBQUNEOzs7K0JBQ1U7QUFDVCxhQUFPLFdBQVA7QUFDRDs7OzhCQUMwQjtBQUFBLFVBQVpDLEtBQVksdUVBQUosRUFBSTs7QUFDekIsYUFBUUEsTUFBTUMsVUFBTixJQUFvQkQsTUFBTUMsVUFBTixDQUFpQkMsSUFBN0M7QUFDRDs7Ozs7O2tCQVRrQkgsUTs7O0FBWXJCQSxTQUFTSSxRQUFULEdBQW9CLENBQXBCIiwiZmlsZSI6Im1pbmlET00vYm9sZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGFuTm9kZSBmcm9tICcuL3NwYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2xkTm9kZSBleHRlbmRzIFNwYW5Ob2RlIHtcbiAgb3BlblRhZygpIHtcbiAgICByZXR1cm4gJzxzdHJvbmc+JztcbiAgfVxuICBjbG9zZVRhZygpIHtcbiAgICByZXR1cm4gJzwvc3Ryb25nPic7XG4gIH1cbiAgc3RhdGljIG1hdGNoZXModG9rZW4gPSB7fSkge1xuICAgIHJldHVybiAodG9rZW4uYXR0cmlidXRlcyAmJiB0b2tlbi5hdHRyaWJ1dGVzLmJvbGQpO1xuICB9XG59XG5cbkJvbGROb2RlLnByaW9yaXR5ID0gMTtcbiJdfQ==
