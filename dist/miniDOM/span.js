'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _treeNode = require('./treeNode');

var _treeNode2 = _interopRequireDefault(_treeNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpanNode = function (_TreeNode) {
  _inherits(SpanNode, _TreeNode);

  function SpanNode(opts) {
    _classCallCheck(this, SpanNode);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SpanNode).call(this, opts));

    _this.level = 'span';
    return _this;
  }

  _createClass(SpanNode, [{
    key: 'absorb',
    value: function absorb(child) {
      if (child.type === this.type) {
        this.children = this.children.concat(child.children);
        return null;
      } else {
        return child;
      }
    }
  }]);

  return SpanNode;
}(_treeNode2.default);

exports.default = SpanNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vc3Bhbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUI7OztBQUNuQixXQURtQixRQUNuQixDQUFZLElBQVosRUFBa0I7MEJBREMsVUFDRDs7dUVBREMscUJBRVgsT0FEVTs7QUFFaEIsVUFBSyxLQUFMLEdBQWEsTUFBYixDQUZnQjs7R0FBbEI7O2VBRG1COzsyQkFLWixPQUFPO0FBQ1osVUFBSSxNQUFNLElBQU4sS0FBZSxLQUFLLElBQUwsRUFBVztBQUM1QixhQUFLLFFBQUwsR0FBZ0IsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixNQUFNLFFBQU4sQ0FBckMsQ0FENEI7QUFFNUIsZUFBTyxJQUFQLENBRjRCO09BQTlCLE1BR087QUFDTCxlQUFPLEtBQVAsQ0FESztPQUhQOzs7O1NBTmlCIiwiZmlsZSI6Im1pbmlET00vc3Bhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmVlTm9kZSBmcm9tICcuL3RyZWVOb2RlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Bhbk5vZGUgZXh0ZW5kcyBUcmVlTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcihvcHRzKTtcbiAgICB0aGlzLmxldmVsID0gJ3NwYW4nO1xuICB9XG4gIGFic29yYihjaGlsZCkge1xuICAgIGlmIChjaGlsZC50eXBlID09PSB0aGlzLnR5cGUpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLmNvbmNhdChjaGlsZC5jaGlsZHJlbik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
