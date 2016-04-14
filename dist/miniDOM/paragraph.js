'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _block = require('./block');

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParagraphNode = function (_BlockNode) {
  _inherits(ParagraphNode, _BlockNode);

  function ParagraphNode() {
    _classCallCheck(this, ParagraphNode);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ParagraphNode).apply(this, arguments));
  }

  _createClass(ParagraphNode, [{
    key: 'openTag',
    value: function openTag() {
      return '<p>';
    }
  }, {
    key: 'closeTag',
    value: function closeTag() {
      return '</p>';
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

      return token.type === 'linebreak' && (!!token.attributes || token.attributes.list !== 'bullet' && token.attributes.list !== 'ordered');
    }
  }]);

  return ParagraphNode;
}(_block2.default);

exports.default = ParagraphNode;


ParagraphNode.priority = 19;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vcGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQjs7Ozs7Ozs7Ozs7OEJBQ1Q7QUFDUixhQUFPLEtBQVAsQ0FEUTs7OzsrQkFHQztBQUNULGFBQU8sTUFBUCxDQURTOzs7OzJCQUdKLE9BQU87QUFDWixhQUFPLEtBQVAsQ0FEWTs7Ozs4QkFHYTtVQUFaLDhEQUFRLGtCQUFJOztBQUN6QixhQUNFLEtBQUMsQ0FBTSxJQUFOLEtBQWUsV0FBZixLQUNDLENBQUUsQ0FBQyxNQUFNLFVBQU4sSUFDRixLQUFDLENBQU0sVUFBTixDQUFpQixJQUFqQixLQUEwQixRQUExQixJQUF3QyxNQUFNLFVBQU4sQ0FBaUIsSUFBakIsS0FBMEIsU0FBMUIsQ0FGNUMsQ0FGdUI7Ozs7U0FWUjs7Ozs7O0FBb0JyQixjQUFjLFFBQWQsR0FBeUIsRUFBekIiLCJmaWxlIjoibWluaURPTS9wYXJhZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxvY2tOb2RlIGZyb20gJy4vYmxvY2snO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJhZ3JhcGhOb2RlIGV4dGVuZHMgQmxvY2tOb2RlIHtcbiAgb3BlblRhZygpIHtcbiAgICByZXR1cm4gJzxwPic7XG4gIH1cbiAgY2xvc2VUYWcoKSB7XG4gICAgcmV0dXJuICc8L3A+JztcbiAgfVxuICBhYnNvcmIoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH1cbiAgc3RhdGljIG1hdGNoZXModG9rZW4gPSB7fSkge1xuICAgIHJldHVybiAoXG4gICAgICAodG9rZW4udHlwZSA9PT0gJ2xpbmVicmVhaycpICYmIChcbiAgICAgICAgKCEhdG9rZW4uYXR0cmlidXRlcykgfHxcbiAgICAgICAgKCh0b2tlbi5hdHRyaWJ1dGVzLmxpc3QgIT09ICdidWxsZXQnKSAmJiAodG9rZW4uYXR0cmlidXRlcy5saXN0ICE9PSAnb3JkZXJlZCcpKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cblxuUGFyYWdyYXBoTm9kZS5wcmlvcml0eSA9IDE5O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
