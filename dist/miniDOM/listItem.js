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
  }, {
    key: 'absorb',
    value: function absorb(child) {
      return child;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vbGlzdEl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCOzs7Ozs7Ozs7Ozs4QkFDVDtBQUNSLGFBQU8sTUFBUCxDQURROzs7OytCQUdDO0FBQ1QsYUFBTyxPQUFQLENBRFM7Ozs7MkJBR0osT0FBTztBQUNaLGFBQU8sS0FBUCxDQURZOzs7OzhCQUdhO1VBQVosOERBQVEsa0JBQUk7O0FBQ3pCLGFBQU8sS0FBUDs7QUFEeUI7OztTQVZSOzs7Ozs7QUFnQnJCLGFBQWEsUUFBYixHQUF3QixFQUF4QiIsImZpbGUiOiJtaW5pRE9NL2xpc3RJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyZWVOb2RlIGZyb20gJy4vdHJlZU5vZGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0SXRlbU5vZGUgZXh0ZW5kcyBUcmVlTm9kZSB7XG4gIG9wZW5UYWcoKSB7XG4gICAgcmV0dXJuICc8bGk+JztcbiAgfVxuICBjbG9zZVRhZygpIHtcbiAgICByZXR1cm4gJzwvbGk+JztcbiAgfVxuICBhYnNvcmIoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH1cbiAgc3RhdGljIG1hdGNoZXModG9rZW4gPSB7fSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgICAvLyByZXR1cm4gKHRva2VuLmF0dHJpYnV0ZXMgJiYgdG9rZW4uYXR0cmlidXRlcy5saXN0KTtcbiAgfVxufVxuXG5MaXN0SXRlbU5vZGUucHJpb3JpdHkgPSAyMDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
