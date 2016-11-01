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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vYmxvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUI7OztBQUNuQixXQURtQixTQUNuQixDQUFZLElBQVosRUFBa0I7MEJBREMsV0FDRDs7dUVBREMsc0JBRVgsT0FEVTs7QUFFaEIsVUFBSyxLQUFMLEdBQWEsT0FBYixDQUZnQjs7R0FBbEI7O2VBRG1COztxQ0FNRjtBQUNmLGFBQU8sUUFBUSxHQUFSLENBQVksS0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixVQUFDLEtBQUQ7ZUFBVyxNQUFNLGNBQU47T0FBWCxDQUE5QixFQUNOLElBRE0sQ0FDRCxVQUFDLENBQUQ7ZUFBVSxFQUFFLElBQUYsQ0FBTyxFQUFQO09BQVYsQ0FETixDQURlOzs7O2dDQUtMO0FBQ1Ysd0NBWmlCLDBEQVlqQixDQURVOzs7O2dDQUdBLE9BQU87QUFDakIsVUFBSSxLQUFLLFFBQUwsQ0FBYyxNQUFkLEtBQXlCLENBQXpCLEVBQTRCO0FBQzlCLGFBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsS0FBbkIsRUFEOEI7T0FBaEMsTUFFTztBQUNMLFlBQU0sVUFBVSxLQUFLLFFBQUwsQ0FBYyxLQUFLLFFBQUwsQ0FBYyxNQUFkLEdBQXVCLENBQXZCLENBQWQsQ0FBd0MsTUFBeEMsQ0FBK0MsS0FBL0MsQ0FBVixDQUREO0FBRUwsWUFBSSxZQUFZLElBQVosRUFBa0I7QUFDcEIsZUFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixPQUFuQixFQURvQjtTQUF0QjtPQUpGOzs7O1NBZmlCOzs7Ozs7QUEwQnJCLFVBQVUsUUFBVixHQUFxQixHQUFyQiIsImZpbGUiOiJtaW5pRE9NL2Jsb2NrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyZWVOb2RlIGZyb20gJy4vdHJlZU5vZGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja05vZGUgZXh0ZW5kcyBUcmVlTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcihvcHRzKTtcbiAgICB0aGlzLmxldmVsID0gJ2Jsb2NrJztcbiAgfVxuXG4gIHBsYWluVGV4dEFzeW5jKCkge1xuICAgIHJldHVybiBQcm9taXNlLmFsbCh0aGlzLmNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGNoaWxkLnBsYWluVGV4dEFzeW5jKCkpKVxuICAgIC50aGVuKChjKSA9PiBgJHtjLmpvaW4oJycpfVxcbmApO1xuICB9XG5cbiAgcGxhaW5UZXh0KCkge1xuICAgIHJldHVybiBgJHtzdXBlci5wbGFpblRleHQoKX1cXG5gO1xuICB9XG4gIGFwcGVuZENoaWxkKGNoaWxkKSB7XG4gICAgaWYgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZW1haW5zID0gdGhpcy5jaGlsZHJlblt0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDFdLmFic29yYihjaGlsZCk7XG4gICAgICBpZiAocmVtYWlucyAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2gocmVtYWlucyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkJsb2NrTm9kZS5wcmlvcml0eSA9IDEwMTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
