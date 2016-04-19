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

var TextNode = function (_SpanNode) {
  _inherits(TextNode, _SpanNode);

  function TextNode() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, TextNode);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextNode).call(this, opts));

    _this.contents = (opts.contents || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39');
    return _this;
  }

  _createClass(TextNode, [{
    key: 'openTag',
    value: function openTag() {
      return '<span>';
    }
  }, {
    key: 'closeTag',
    value: function closeTag() {
      return '</span>';
    }
  }, {
    key: 'appendChild',
    value: function appendChild() {
      throw new Error('TextNode cannot have chldren');
    }
  }, {
    key: 'isLeaf',
    value: function isLeaf() {
      return true;
    }
  }], [{
    key: 'matches',
    value: function matches() {
      var token = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return token.contents && typeof token.contents === 'string';
    }
  }]);

  return TextNode;
}(_span2.default);

exports.default = TextNode;


TextNode.priority = 0;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vdGV4dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUI7OztBQUVuQixXQUZtQixRQUVuQixHQUF1QjtRQUFYLDZEQUFPLGtCQUFJOzswQkFGSixVQUVJOzt1RUFGSixxQkFHWCxPQURlOztBQUVyQixVQUFLLFFBQUwsR0FBZ0IsQ0FBQyxLQUFLLFFBQUwsSUFBaUIsRUFBakIsQ0FBRCxDQUNmLE9BRGUsQ0FDUCxJQURPLEVBQ0QsT0FEQyxFQUVmLE9BRmUsQ0FFUCxJQUZPLEVBRUQsTUFGQyxFQUdmLE9BSGUsQ0FHUCxJQUhPLEVBR0QsTUFIQyxFQUlmLE9BSmUsQ0FJUCxJQUpPLEVBSUQsUUFKQyxFQUtmLE9BTGUsQ0FLUCxJQUxPLEVBS0QsTUFMQyxDQUFoQixDQUZxQjs7R0FBdkI7O2VBRm1COzs4QkFZVDtBQUNSLGFBQU8sUUFBUCxDQURROzs7OytCQUlDO0FBQ1QsYUFBTyxTQUFQLENBRFM7Ozs7a0NBSUc7QUFDWixZQUFNLElBQUksS0FBSixDQUFVLDhCQUFWLENBQU4sQ0FEWTs7Ozs2QkFJTDtBQUNQLGFBQU8sSUFBUCxDQURPOzs7OzhCQUlrQjtVQUFaLDhEQUFRLGtCQUFJOztBQUN6QixhQUFRLEtBQUMsQ0FBTSxRQUFOLElBQW9CLE9BQU8sTUFBTSxRQUFOLEtBQW1CLFFBQTFCLENBREo7Ozs7U0E1QlI7Ozs7OztBQWlDckIsU0FBUyxRQUFULEdBQW9CLENBQXBCIiwiZmlsZSI6Im1pbmlET00vdGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGFuTm9kZSBmcm9tICcuL3NwYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0Tm9kZSBleHRlbmRzIFNwYW5Ob2RlIHtcblxuICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcbiAgICB0aGlzLmNvbnRlbnRzID0gKG9wdHMuY29udGVudHMgfHwgJycpXG4gICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JylcbiAgICAucmVwbGFjZSgvJy9nLCAnJiMzOScpO1xuICB9XG5cbiAgb3BlblRhZygpIHtcbiAgICByZXR1cm4gJzxzcGFuPic7XG4gIH1cblxuICBjbG9zZVRhZygpIHtcbiAgICByZXR1cm4gJzwvc3Bhbj4nO1xuICB9XG5cbiAgYXBwZW5kQ2hpbGQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUZXh0Tm9kZSBjYW5ub3QgaGF2ZSBjaGxkcmVuJyk7XG4gIH1cblxuICBpc0xlYWYoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0aWMgbWF0Y2hlcyh0b2tlbiA9IHt9KSB7XG4gICAgcmV0dXJuICgodG9rZW4uY29udGVudHMpICYmICh0eXBlb2YgdG9rZW4uY29udGVudHMgPT09ICdzdHJpbmcnKSk7XG4gIH1cbn1cblxuVGV4dE5vZGUucHJpb3JpdHkgPSAwO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
