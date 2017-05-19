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

var LinkNode = function (_SpanNode) {
  _inherits(LinkNode, _SpanNode);

  function LinkNode() {
    _classCallCheck(this, LinkNode);

    return _possibleConstructorReturn(this, (LinkNode.__proto__ || Object.getPrototypeOf(LinkNode)).apply(this, arguments));
  }

  _createClass(LinkNode, [{
    key: 'openTag',
    value: function openTag() {
      return '<a target="_blank" href="' + this.attributes.link + '">';
    }
  }, {
    key: 'closeTag',
    value: function closeTag() {
      return '</a>';
    }
  }], [{
    key: 'matches',
    value: function matches() {
      var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return token.attributes && token.attributes.link;
    }
  }]);

  return LinkNode;
}(_span2.default);

exports.default = LinkNode;


LinkNode.priority = 11;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vbGluay5qcyJdLCJuYW1lcyI6WyJMaW5rTm9kZSIsImF0dHJpYnV0ZXMiLCJsaW5rIiwidG9rZW4iLCJwcmlvcml0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs4QkFDVDtBQUNSLDJDQUFtQyxLQUFLQyxVQUFMLENBQWdCQyxJQUFuRDtBQUNEOzs7K0JBQ1U7QUFDVCxhQUFPLE1BQVA7QUFDRDs7OzhCQUMwQjtBQUFBLFVBQVpDLEtBQVksdUVBQUosRUFBSTs7QUFDekIsYUFBUUEsTUFBTUYsVUFBTixJQUFvQkUsTUFBTUYsVUFBTixDQUFpQkMsSUFBN0M7QUFDRDs7Ozs7O2tCQVRrQkYsUTs7O0FBWXJCQSxTQUFTSSxRQUFULEdBQW9CLEVBQXBCIiwiZmlsZSI6Im1pbmlET00vbGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGFuTm9kZSBmcm9tICcuL3NwYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rTm9kZSBleHRlbmRzIFNwYW5Ob2RlIHtcbiAgb3BlblRhZygpIHtcbiAgICByZXR1cm4gYDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke3RoaXMuYXR0cmlidXRlcy5saW5rfVwiPmA7XG4gIH1cbiAgY2xvc2VUYWcoKSB7XG4gICAgcmV0dXJuICc8L2E+JztcbiAgfVxuICBzdGF0aWMgbWF0Y2hlcyh0b2tlbiA9IHt9KSB7XG4gICAgcmV0dXJuICh0b2tlbi5hdHRyaWJ1dGVzICYmIHRva2VuLmF0dHJpYnV0ZXMubGluayk7XG4gIH1cbn1cblxuTGlua05vZGUucHJpb3JpdHkgPSAxMTtcbiJdfQ==
