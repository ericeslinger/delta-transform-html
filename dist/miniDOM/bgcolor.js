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

var BackgroundColorNode = function (_SpanNode) {
  _inherits(BackgroundColorNode, _SpanNode);

  function BackgroundColorNode() {
    _classCallCheck(this, BackgroundColorNode);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BackgroundColorNode).apply(this, arguments));
  }

  _createClass(BackgroundColorNode, [{
    key: 'openTag',
    value: function openTag() {
      return '<span style="background-color:' + this.attributes.bg + ';">';
    }
  }, {
    key: 'closeTag',
    value: function closeTag() {
      return '</span>';
    }
  }], [{
    key: 'matches',
    value: function matches() {
      var token = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return token.attributes && token.attributes.bg;
    }
  }]);

  return BackgroundColorNode;
}(_span2.default);

exports.default = BackgroundColorNode;


BackgroundColorNode.priority = 6;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vYmdjb2xvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUIsbUI7Ozs7Ozs7Ozs7OzhCQUNUO0FBQ1IsZ0RBQXdDLEtBQUssVUFBTCxDQUFnQixFQUF4RDtBQUNEOzs7K0JBQ1U7QUFDVCxhQUFPLFNBQVA7QUFDRDs7OzhCQUMwQjtBQUFBLFVBQVosS0FBWSx5REFBSixFQUFJOztBQUN6QixhQUFRLE1BQU0sVUFBTixJQUFvQixNQUFNLFVBQU4sQ0FBaUIsRUFBN0M7QUFDRDs7Ozs7O2tCQVRrQixtQjs7O0FBWXJCLG9CQUFvQixRQUFwQixHQUErQixDQUEvQiIsImZpbGUiOiJtaW5pRE9NL2JnY29sb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3Bhbk5vZGUgZnJvbSAnLi9zcGFuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja2dyb3VuZENvbG9yTm9kZSBleHRlbmRzIFNwYW5Ob2RlIHtcbiAgb3BlblRhZygpIHtcbiAgICByZXR1cm4gYDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjoke3RoaXMuYXR0cmlidXRlcy5iZ307XCI+YDtcbiAgfVxuICBjbG9zZVRhZygpIHtcbiAgICByZXR1cm4gJzwvc3Bhbj4nO1xuICB9XG4gIHN0YXRpYyBtYXRjaGVzKHRva2VuID0ge30pIHtcbiAgICByZXR1cm4gKHRva2VuLmF0dHJpYnV0ZXMgJiYgdG9rZW4uYXR0cmlidXRlcy5iZyk7XG4gIH1cbn1cblxuQmFja2dyb3VuZENvbG9yTm9kZS5wcmlvcml0eSA9IDY7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
