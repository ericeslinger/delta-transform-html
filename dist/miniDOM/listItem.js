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
  }, {
    key: 'absorb',
    value: function absorb(child) {
      return child;
    }
  }, {
    key: 'plainTextAsync',
    value: function plainTextAsync() {
      return _get(Object.getPrototypeOf(ListItemNode.prototype), 'plainTextAsync', this).call(this).then(function (t) {
        return '* ' + t + '\n';
      });
    }
  }, {
    key: 'plainText',
    value: function plainText() {
      return '* ' + _get(Object.getPrototypeOf(ListItemNode.prototype), 'plainText', this).call(this) + '\n';
    }
  }], [{
    key: 'matches',
    value: function matches() {
      var token = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return false;
      // return (token.attributes && token.attributes.list);
    }
  }]);

  return ListItemNode;
}(_treeNode2.default);

exports.default = ListItemNode;


ListItemNode.priority = 20;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vbGlzdEl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUI7Ozs7Ozs7Ozs7OzhCQUNUO0FBQ1IsYUFBTyxNQUFQLENBRFE7Ozs7K0JBR0M7QUFDVCxhQUFPLE9BQVAsQ0FEUzs7OzsyQkFHSixPQUFPO0FBQ1osYUFBTyxLQUFQLENBRFk7Ozs7cUNBSUc7QUFDZixhQUFPLDJCQVpVLDJEQVlWLENBQ04sSUFETSxDQUNELFVBQUMsQ0FBRDtzQkFBWTtPQUFaLENBRE4sQ0FEZTs7OztnQ0FLTDtBQUNWLCtDQWpCaUIsNkRBaUJqQixDQURVOzs7OzhCQUllO1VBQVosOERBQVEsa0JBQUk7O0FBQ3pCLGFBQU8sS0FBUDs7QUFEeUI7OztTQXBCUjs7Ozs7O0FBMEJyQixhQUFhLFFBQWIsR0FBd0IsRUFBeEIiLCJmaWxlIjoibWluaURPTS9saXN0SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmVlTm9kZSBmcm9tICcuL3RyZWVOb2RlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdEl0ZW1Ob2RlIGV4dGVuZHMgVHJlZU5vZGUge1xuICBvcGVuVGFnKCkge1xuICAgIHJldHVybiAnPGxpPic7XG4gIH1cbiAgY2xvc2VUYWcoKSB7XG4gICAgcmV0dXJuICc8L2xpPic7XG4gIH1cbiAgYWJzb3JiKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG5cbiAgcGxhaW5UZXh0QXN5bmMoKSB7XG4gICAgcmV0dXJuIHN1cGVyLnBsYWluVGV4dEFzeW5jKClcbiAgICAudGhlbigodCkgPT4gYCogJHt0fVxcbmApO1xuICB9XG5cbiAgcGxhaW5UZXh0KCkge1xuICAgIHJldHVybiBgKiAke3N1cGVyLnBsYWluVGV4dCgpfVxcbmA7XG4gIH1cblxuICBzdGF0aWMgbWF0Y2hlcyh0b2tlbiA9IHt9KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICAgIC8vIHJldHVybiAodG9rZW4uYXR0cmlidXRlcyAmJiB0b2tlbi5hdHRyaWJ1dGVzLmxpc3QpO1xuICB9XG59XG5cbkxpc3RJdGVtTm9kZS5wcmlvcml0eSA9IDIwO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
