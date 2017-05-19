'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _span = require('./span');

var _span2 = _interopRequireDefault(_span);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SuperscriptNode = function (_SpanNode) {
  _inherits(SuperscriptNode, _SpanNode);

  function SuperscriptNode() {
    _classCallCheck(this, SuperscriptNode);

    return _possibleConstructorReturn(this, (SuperscriptNode.__proto__ || Object.getPrototypeOf(SuperscriptNode)).apply(this, arguments));
  }

  _createClass(SuperscriptNode, [{
    key: 'openTag',
    value: function openTag() {
      return '<sup>';
    }
  }, {
    key: 'closeTag',
    value: function closeTag() {
      return '</sup>';
    }
  }], [{
    key: 'matches',
    value: function matches() {
      var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return token.attributes && token.attributes.super;
    }
  }]);

  return SuperscriptNode;
}(_span2.default);

exports.default = SuperscriptNode;


SuperscriptNode.priority = 10;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vc3VwZXJzY3JpcHQuanMiXSwibmFtZXMiOlsiU3VwZXJzY3JpcHROb2RlIiwidG9rZW4iLCJhdHRyaWJ1dGVzIiwic3VwZXIiLCJwcmlvcml0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs4QkFDVDtBQUNSLGFBQU8sT0FBUDtBQUNEOzs7K0JBQ1U7QUFDVCxhQUFPLFFBQVA7QUFDRDs7OzhCQUMwQjtBQUFBLFVBQVpDLEtBQVksdUVBQUosRUFBSTs7QUFDekIsYUFBUUEsTUFBTUMsVUFBTixJQUFvQkQsTUFBTUMsVUFBTixDQUFpQkMsS0FBN0M7QUFDRDs7Ozs7O2tCQVRrQkgsZTs7O0FBWXJCQSxnQkFBZ0JJLFFBQWhCLEdBQTJCLEVBQTNCIiwiZmlsZSI6Im1pbmlET00vc3VwZXJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3Bhbk5vZGUgZnJvbSAnLi9zcGFuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VwZXJzY3JpcHROb2RlIGV4dGVuZHMgU3Bhbk5vZGUge1xuICBvcGVuVGFnKCkge1xuICAgIHJldHVybiAnPHN1cD4nO1xuICB9XG4gIGNsb3NlVGFnKCkge1xuICAgIHJldHVybiAnPC9zdXA+JztcbiAgfVxuICBzdGF0aWMgbWF0Y2hlcyh0b2tlbiA9IHt9KSB7XG4gICAgcmV0dXJuICh0b2tlbi5hdHRyaWJ1dGVzICYmIHRva2VuLmF0dHJpYnV0ZXMuc3VwZXIpO1xuICB9XG59XG5cblN1cGVyc2NyaXB0Tm9kZS5wcmlvcml0eSA9IDEwO1xuIl19
