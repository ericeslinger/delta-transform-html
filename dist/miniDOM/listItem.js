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

    return _possibleConstructorReturn(this, (ListItemNode.__proto__ || Object.getPrototypeOf(ListItemNode)).apply(this, arguments));
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
      return _get(ListItemNode.prototype.__proto__ || Object.getPrototypeOf(ListItemNode.prototype), 'plainTextAsync', this).call(this).then(function (t) {
        return '* ' + t + '\n';
      });
    }
  }, {
    key: 'plainText',
    value: function plainText() {
      return '* ' + _get(ListItemNode.prototype.__proto__ || Object.getPrototypeOf(ListItemNode.prototype), 'plainText', this).call(this) + '\n';
    }
  }], [{
    key: 'matches',
    value: function matches() {
      var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return false;
      // return (token.attributes && token.attributes.list);
    }
  }]);

  return ListItemNode;
}(_treeNode2.default);

exports.default = ListItemNode;


ListItemNode.priority = 20;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vbGlzdEl0ZW0uanMiXSwibmFtZXMiOlsiTGlzdEl0ZW1Ob2RlIiwiY2hpbGQiLCJ0aGVuIiwidCIsInRva2VuIiwicHJpb3JpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7Ozs7Ozs7Ozs4QkFDVDtBQUNSLGFBQU8sTUFBUDtBQUNEOzs7K0JBQ1U7QUFDVCxhQUFPLE9BQVA7QUFDRDs7OzJCQUNNQyxLLEVBQU87QUFDWixhQUFPQSxLQUFQO0FBQ0Q7OztxQ0FFZ0I7QUFDZixhQUFPLDJIQUNOQyxJQURNLENBQ0QsVUFBQ0MsQ0FBRDtBQUFBLHNCQUFZQSxDQUFaO0FBQUEsT0FEQyxDQUFQO0FBRUQ7OztnQ0FFVztBQUNWO0FBQ0Q7Ozs4QkFFMEI7QUFBQSxVQUFaQyxLQUFZLHVFQUFKLEVBQUk7O0FBQ3pCLGFBQU8sS0FBUDtBQUNBO0FBQ0Q7Ozs7OztrQkF2QmtCSixZOzs7QUEwQnJCQSxhQUFhSyxRQUFiLEdBQXdCLEVBQXhCIiwiZmlsZSI6Im1pbmlET00vbGlzdEl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJlZU5vZGUgZnJvbSAnLi90cmVlTm9kZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RJdGVtTm9kZSBleHRlbmRzIFRyZWVOb2RlIHtcbiAgb3BlblRhZygpIHtcbiAgICByZXR1cm4gJzxsaT4nO1xuICB9XG4gIGNsb3NlVGFnKCkge1xuICAgIHJldHVybiAnPC9saT4nO1xuICB9XG4gIGFic29yYihjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfVxuXG4gIHBsYWluVGV4dEFzeW5jKCkge1xuICAgIHJldHVybiBzdXBlci5wbGFpblRleHRBc3luYygpXG4gICAgLnRoZW4oKHQpID0+IGAqICR7dH1cXG5gKTtcbiAgfVxuXG4gIHBsYWluVGV4dCgpIHtcbiAgICByZXR1cm4gYCogJHtzdXBlci5wbGFpblRleHQoKX1cXG5gO1xuICB9XG5cbiAgc3RhdGljIG1hdGNoZXModG9rZW4gPSB7fSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgICAvLyByZXR1cm4gKHRva2VuLmF0dHJpYnV0ZXMgJiYgdG9rZW4uYXR0cmlidXRlcy5saXN0KTtcbiAgfVxufVxuXG5MaXN0SXRlbU5vZGUucHJpb3JpdHkgPSAyMDtcbiJdfQ==
