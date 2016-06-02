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

var RootNode = function (_TreeNode) {
  _inherits(RootNode, _TreeNode);

  function RootNode() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, RootNode);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(RootNode).call(this, opts));
  }

  _createClass(RootNode, [{
    key: 'absorb',
    value: function absorb(child) {
      var remains = child;
      if (this.children.length > 0) {
        remains = this.children[this.children.length - 1].absorb(child);
      }
      if (remains !== null) {
        this.children.push(remains);
      }
      return null;
    }
  }]);

  return RootNode;
}(_treeNode2.default);

exports.default = RootNode;


RootNode.priority = -1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vcm9vdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUIsUTs7O0FBQ25CLHNCQUF1QjtBQUFBLFFBQVgsSUFBVyx5REFBSixFQUFJOztBQUFBOztBQUFBLHVGQUNmLElBRGU7QUFFdEI7Ozs7MkJBQ00sSyxFQUFPO0FBQ1osVUFBSSxVQUFVLEtBQWQ7QUFDQSxVQUFJLEtBQUssUUFBTCxDQUFjLE1BQWQsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDNUIsa0JBQVUsS0FBSyxRQUFMLENBQWMsS0FBSyxRQUFMLENBQWMsTUFBZCxHQUF1QixDQUFyQyxFQUF3QyxNQUF4QyxDQUErQyxLQUEvQyxDQUFWO0FBQ0Q7QUFDRCxVQUFJLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsYUFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixPQUFuQjtBQUNEO0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7Ozs7OztrQkFia0IsUTs7O0FBZ0JyQixTQUFTLFFBQVQsR0FBb0IsQ0FBQyxDQUFyQiIsImZpbGUiOiJtaW5pRE9NL3Jvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJlZU5vZGUgZnJvbSAnLi90cmVlTm9kZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvb3ROb2RlIGV4dGVuZHMgVHJlZU5vZGUge1xuICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcbiAgfVxuICBhYnNvcmIoY2hpbGQpIHtcbiAgICBsZXQgcmVtYWlucyA9IGNoaWxkO1xuICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIHJlbWFpbnMgPSB0aGlzLmNoaWxkcmVuW3RoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMV0uYWJzb3JiKGNoaWxkKTtcbiAgICB9XG4gICAgaWYgKHJlbWFpbnMgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChyZW1haW5zKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuUm9vdE5vZGUucHJpb3JpdHkgPSAtMTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
