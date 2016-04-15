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

      return token.type === 'linebreak' && (!!token.attributes || token.attributes.list === undefined && token.attributes.header === undefined);
    }
  }]);

  return ParagraphNode;
}(_block2.default);

exports.default = ParagraphNode;


ParagraphNode.priority = 19;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vcGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQjs7Ozs7Ozs7Ozs7OEJBQ1Q7QUFDUixhQUFPLEtBQVAsQ0FEUTs7OzsrQkFHQztBQUNULGFBQU8sTUFBUCxDQURTOzs7OzJCQUdKLE9BQU87QUFDWixhQUFPLEtBQVAsQ0FEWTs7Ozs4QkFHYTtVQUFaLDhEQUFRLGtCQUFJOztBQUN6QixhQUNFLEtBQUMsQ0FBTSxJQUFOLEtBQWUsV0FBZixLQUNDLENBQUUsQ0FBQyxNQUFNLFVBQU4sSUFFRCxLQUFDLENBQU0sVUFBTixDQUFpQixJQUFqQixLQUEwQixTQUExQixJQUNBLE1BQU0sVUFBTixDQUFpQixNQUFqQixLQUE0QixTQUE1QixDQUpMLENBRnVCOzs7O1NBVlI7Ozs7OztBQXVCckIsY0FBYyxRQUFkLEdBQXlCLEVBQXpCIiwiZmlsZSI6Im1pbmlET00vcGFyYWdyYXBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2NrTm9kZSBmcm9tICcuL2Jsb2NrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyYWdyYXBoTm9kZSBleHRlbmRzIEJsb2NrTm9kZSB7XG4gIG9wZW5UYWcoKSB7XG4gICAgcmV0dXJuICc8cD4nO1xuICB9XG4gIGNsb3NlVGFnKCkge1xuICAgIHJldHVybiAnPC9wPic7XG4gIH1cbiAgYWJzb3JiKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG4gIHN0YXRpYyBtYXRjaGVzKHRva2VuID0ge30pIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRva2VuLnR5cGUgPT09ICdsaW5lYnJlYWsnKSAmJiAoXG4gICAgICAgICghIXRva2VuLmF0dHJpYnV0ZXMpIHx8XG4gICAgICAgIChcbiAgICAgICAgICAodG9rZW4uYXR0cmlidXRlcy5saXN0ID09PSB1bmRlZmluZWQpICYmXG4gICAgICAgICAgKHRva2VuLmF0dHJpYnV0ZXMuaGVhZGVyID09PSB1bmRlZmluZWQpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG59XG5cblBhcmFncmFwaE5vZGUucHJpb3JpdHkgPSAxOTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
