'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _treeNode = require('./treeNode');

var _treeNode2 = _interopRequireDefault(_treeNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlockNode = function (_TreeNode) {
  _inherits(BlockNode, _TreeNode);

  function BlockNode(opts) {
    _classCallCheck(this, BlockNode);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BlockNode).call(this, opts));

    _this.level = 'block';
    return _this;
  }

  _createClass(BlockNode, [{
    key: 'plainTextAsync',
    value: function plainTextAsync() {
      return Promise.all(this.children.map(function (child) {
        return child.plainTextAsync();
      })).then(function (c) {
        return c.join('') + '\n';
      });
    }
  }, {
    key: 'plainText',
    value: function plainText() {
      return _get(Object.getPrototypeOf(BlockNode.prototype), 'plainText', this).call(this) + '\n';
    }
  }, {
    key: 'appendChild',
    value: function appendChild(child) {
      if (this.children.length === 0) {
        this.children.push(child);
      } else {
        var remains = this.children[this.children.length - 1].absorb(child);
        if (remains !== null) {
          this.children.push(remains);
        }
      }
    }
  }]);

  return BlockNode;
}(_treeNode2.default);

exports.default = BlockNode;


BlockNode.priority = 101;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vYmxvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUIsUzs7O0FBQ25CLHFCQUFZLElBQVosRUFBa0I7QUFBQTs7QUFBQSw2RkFDVixJQURVOztBQUVoQixVQUFLLEtBQUwsR0FBYSxPQUFiO0FBRmdCO0FBR2pCOzs7O3FDQUVnQjtBQUNmLGFBQU8sUUFBUSxHQUFSLENBQVksS0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixVQUFDLEtBQUQ7QUFBQSxlQUFXLE1BQU0sY0FBTixFQUFYO0FBQUEsT0FBbEIsQ0FBWixFQUNOLElBRE0sQ0FDRCxVQUFDLENBQUQ7QUFBQSxlQUFVLEVBQUUsSUFBRixDQUFPLEVBQVAsQ0FBVjtBQUFBLE9BREMsQ0FBUDtBQUVEOzs7Z0NBRVc7QUFDVjtBQUNEOzs7Z0NBQ1csSyxFQUFPO0FBQ2pCLFVBQUksS0FBSyxRQUFMLENBQWMsTUFBZCxLQUF5QixDQUE3QixFQUFnQztBQUM5QixhQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLEtBQW5CO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBTSxVQUFVLEtBQUssUUFBTCxDQUFjLEtBQUssUUFBTCxDQUFjLE1BQWQsR0FBdUIsQ0FBckMsRUFBd0MsTUFBeEMsQ0FBK0MsS0FBL0MsQ0FBaEI7QUFDQSxZQUFJLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsZUFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixPQUFuQjtBQUNEO0FBQ0Y7QUFDRjs7Ozs7O2tCQXZCa0IsUzs7O0FBMEJyQixVQUFVLFFBQVYsR0FBcUIsR0FBckIiLCJmaWxlIjoibWluaURPTS9ibG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmVlTm9kZSBmcm9tICcuL3RyZWVOb2RlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tOb2RlIGV4dGVuZHMgVHJlZU5vZGUge1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG4gICAgdGhpcy5sZXZlbCA9ICdibG9jayc7XG4gIH1cblxuICBwbGFpblRleHRBc3luYygpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiBjaGlsZC5wbGFpblRleHRBc3luYygpKSlcbiAgICAudGhlbigoYykgPT4gYCR7Yy5qb2luKCcnKX1cXG5gKTtcbiAgfVxuXG4gIHBsYWluVGV4dCgpIHtcbiAgICByZXR1cm4gYCR7c3VwZXIucGxhaW5UZXh0KCl9XFxuYDtcbiAgfVxuICBhcHBlbmRDaGlsZChjaGlsZCkge1xuICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVtYWlucyA9IHRoaXMuY2hpbGRyZW5bdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxXS5hYnNvcmIoY2hpbGQpO1xuICAgICAgaWYgKHJlbWFpbnMgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHJlbWFpbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5CbG9ja05vZGUucHJpb3JpdHkgPSAxMDE7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
