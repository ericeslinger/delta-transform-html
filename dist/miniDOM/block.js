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

var BlockNode = function (_TreeNode) {
  _inherits(BlockNode, _TreeNode);

  function BlockNode(opts) {
    _classCallCheck(this, BlockNode);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BlockNode).call(this, opts));

    _this.level = 'block';
    return _this;
  }

  _createClass(BlockNode, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vYmxvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCOzs7QUFDbkIsV0FEbUIsU0FDbkIsQ0FBWSxJQUFaLEVBQWtCOzBCQURDLFdBQ0Q7O3VFQURDLHNCQUVYLE9BRFU7O0FBRWhCLFVBQUssS0FBTCxHQUFhLE9BQWIsQ0FGZ0I7O0dBQWxCOztlQURtQjs7Z0NBS1AsT0FBTztBQUNqQixVQUFJLEtBQUssUUFBTCxDQUFjLE1BQWQsS0FBeUIsQ0FBekIsRUFBNEI7QUFDOUIsYUFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixLQUFuQixFQUQ4QjtPQUFoQyxNQUVPO0FBQ0wsWUFBTSxVQUFVLEtBQUssUUFBTCxDQUFjLEtBQUssUUFBTCxDQUFjLE1BQWQsR0FBdUIsQ0FBdkIsQ0FBZCxDQUF3QyxNQUF4QyxDQUErQyxLQUEvQyxDQUFWLENBREQ7QUFFTCxZQUFJLFlBQVksSUFBWixFQUFrQjtBQUNwQixlQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLE9BQW5CLEVBRG9CO1NBQXRCO09BSkY7Ozs7U0FOaUIiLCJmaWxlIjoibWluaURPTS9ibG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmVlTm9kZSBmcm9tICcuL3RyZWVOb2RlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tOb2RlIGV4dGVuZHMgVHJlZU5vZGUge1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG4gICAgdGhpcy5sZXZlbCA9ICdibG9jayc7XG4gIH1cbiAgYXBwZW5kQ2hpbGQoY2hpbGQpIHtcbiAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlbWFpbnMgPSB0aGlzLmNoaWxkcmVuW3RoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMV0uYWJzb3JiKGNoaWxkKTtcbiAgICAgIGlmIChyZW1haW5zICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChyZW1haW5zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
