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

var ListItemNode = function (_TreeNode) {
  _inherits(ListItemNode, _TreeNode);

  function ListItemNode() {
    _classCallCheck(this, ListItemNode);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ListItemNode).apply(this, arguments));
  }

  _createClass(ListItemNode, [{
    key: 'openTag',
    value: function openTag() {
      return '<li>';
    }
  }, {
    key: 'closeTag',
    value: function closeTag() {
      return '</li>';
    }
  }]);

  return ListItemNode;
}(_treeNode2.default);

exports.default = ListItemNode;


ListItemNode.priority = 20;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vTGlzdEl0ZW1Ob2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQjs7Ozs7Ozs7Ozs7OEJBQ1Q7QUFDUixhQUFPLE1BQVAsQ0FEUTs7OzsrQkFHQztBQUNULGFBQU8sT0FBUCxDQURTOzs7O1NBSlE7Ozs7OztBQVNyQixhQUFhLFFBQWIsR0FBd0IsRUFBeEIiLCJmaWxlIjoibWluaURPTS9MaXN0SXRlbU5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJlZU5vZGUgZnJvbSAnLi90cmVlTm9kZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RJdGVtTm9kZSBleHRlbmRzIFRyZWVOb2RlIHtcbiAgb3BlblRhZygpIHtcbiAgICByZXR1cm4gJzxsaT4nO1xuICB9XG4gIGNsb3NlVGFnKCkge1xuICAgIHJldHVybiAnPC9saT4nO1xuICB9XG59XG5cbkxpc3RJdGVtTm9kZS5wcmlvcml0eSA9IDIwO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
