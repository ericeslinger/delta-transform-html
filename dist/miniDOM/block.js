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


BlockNode.priority = 101;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vYmxvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCOzs7QUFDbkIsV0FEbUIsU0FDbkIsQ0FBWSxJQUFaLEVBQWtCOzBCQURDLFdBQ0Q7O3VFQURDLHNCQUVYLE9BRFU7O0FBRWhCLFVBQUssS0FBTCxHQUFhLE9BQWIsQ0FGZ0I7O0dBQWxCOztlQURtQjs7Z0NBS1AsT0FBTztBQUNqQixVQUFJLEtBQUssUUFBTCxDQUFjLE1BQWQsS0FBeUIsQ0FBekIsRUFBNEI7QUFDOUIsYUFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixLQUFuQixFQUQ4QjtPQUFoQyxNQUVPO0FBQ0wsWUFBTSxVQUFVLEtBQUssUUFBTCxDQUFjLEtBQUssUUFBTCxDQUFjLE1BQWQsR0FBdUIsQ0FBdkIsQ0FBZCxDQUF3QyxNQUF4QyxDQUErQyxLQUEvQyxDQUFWLENBREQ7QUFFTCxZQUFJLFlBQVksSUFBWixFQUFrQjtBQUNwQixlQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLE9BQW5CLEVBRG9CO1NBQXRCO09BSkY7Ozs7U0FOaUI7Ozs7OztBQWlCckIsVUFBVSxRQUFWLEdBQXFCLEdBQXJCIiwiZmlsZSI6Im1pbmlET00vYmxvY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJlZU5vZGUgZnJvbSAnLi90cmVlTm9kZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrTm9kZSBleHRlbmRzIFRyZWVOb2RlIHtcbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKG9wdHMpO1xuICAgIHRoaXMubGV2ZWwgPSAnYmxvY2snO1xuICB9XG4gIGFwcGVuZENoaWxkKGNoaWxkKSB7XG4gICAgaWYgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZW1haW5zID0gdGhpcy5jaGlsZHJlblt0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDFdLmFic29yYihjaGlsZCk7XG4gICAgICBpZiAocmVtYWlucyAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2gocmVtYWlucyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkJsb2NrTm9kZS5wcmlvcml0eSA9IDEwMTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
