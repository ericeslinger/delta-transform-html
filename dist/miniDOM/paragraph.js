'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _block = require('./block');

var _block2 = _interopRequireDefault(_block);

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

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
  }, {
    key: 'toHTMLAsync',
    value: function toHTMLAsync() {
      var _this2 = this;

      var indentLevel = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      if (this.children.length === 0) {
        this.children.push(new _text2.default({ type: 'text', attributes: {}, contents: '' }));
      }
      return Promise.all(this.children.map(function (c) {
        return c.toHTMLAsync(0);
      })).then(function (childHTML) {
        return '' + _this2.openTag() + childHTML.join('') + _this2.closeTag(); // eslint-disable-line max-len
      });
    }
  }, {
    key: 'toHTML',
    value: function toHTML() {
      var indentLevel = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      if (this.children.length === 0) {
        this.children.push(new _text2.default({ type: 'text', attributes: {}, contents: '' }));
      }
      // if (this.children.length === 0) {
      // return `${new Array(0).join(' ')}${this.openTag()}&nbsp;${this.closeTag()}`;
      // } else {
      return _get(Object.getPrototypeOf(ParagraphNode.prototype), 'toHTML', this).call(this, indentLevel);
      // }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vcGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUI7Ozs7Ozs7Ozs7OzhCQUNUO0FBQ1IsYUFBTyxLQUFQLENBRFE7Ozs7K0JBR0M7QUFDVCxhQUFPLE1BQVAsQ0FEUzs7OzsyQkFHSixPQUFPO0FBQ1osYUFBTyxLQUFQLENBRFk7Ozs7a0NBSWU7OztVQUFqQixvRUFBYyxpQkFBRzs7QUFDM0IsVUFBSSxLQUFLLFFBQUwsQ0FBYyxNQUFkLEtBQXlCLENBQXpCLEVBQTRCO0FBQzlCLGFBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsbUJBQWEsRUFBQyxNQUFNLE1BQU4sRUFBYyxZQUFZLEVBQVosRUFBZ0IsVUFBVSxFQUFWLEVBQTVDLENBQW5CLEVBRDhCO09BQWhDO0FBR0EsYUFBTyxRQUFRLEdBQVIsQ0FBWSxLQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFVBQUMsQ0FBRDtlQUFPLEVBQUUsV0FBRixDQUFjLENBQWQ7T0FBUCxDQUE5QixFQUNOLElBRE0sQ0FDRCxVQUFDLFNBQUQsRUFBZTtBQUNuQixvQkFBVSxPQUFLLE9BQUwsS0FBaUIsVUFBVSxJQUFWLENBQWUsRUFBZixJQUFxQixPQUFLLFFBQUwsRUFBaEQ7QUFEbUIsT0FBZixDQUROLENBSjJCOzs7OzZCQVVMO1VBQWpCLG9FQUFjLGlCQUFHOztBQUN0QixVQUFJLEtBQUssUUFBTCxDQUFjLE1BQWQsS0FBeUIsQ0FBekIsRUFBNEI7QUFDOUIsYUFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixtQkFBYSxFQUFDLE1BQU0sTUFBTixFQUFjLFlBQVksRUFBWixFQUFnQixVQUFVLEVBQVYsRUFBNUMsQ0FBbkIsRUFEOEI7T0FBaEM7Ozs7QUFEc0Isd0NBckJMLHFEQTRCRyxZQUFwQjs7QUFQc0I7Ozs4QkFXRztVQUFaLDhEQUFRLGtCQUFJOztBQUN6QixhQUNFLEtBQUMsQ0FBTSxJQUFOLEtBQWUsV0FBZixLQUNDLENBQUUsQ0FBQyxNQUFNLFVBQU4sSUFFRCxLQUFDLENBQU0sVUFBTixDQUFpQixJQUFqQixLQUEwQixTQUExQixJQUNBLE1BQU0sVUFBTixDQUFpQixNQUFqQixLQUE0QixTQUE1QixDQUpMLENBRnVCOzs7O1NBaENSOzs7Ozs7QUE2Q3JCLGNBQWMsUUFBZCxHQUF5QixFQUF6QiIsImZpbGUiOiJtaW5pRE9NL3BhcmFncmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbG9ja05vZGUgZnJvbSAnLi9ibG9jayc7XG5pbXBvcnQgVGV4dE5vZGUgZnJvbSAnLi90ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyYWdyYXBoTm9kZSBleHRlbmRzIEJsb2NrTm9kZSB7XG4gIG9wZW5UYWcoKSB7XG4gICAgcmV0dXJuICc8cD4nO1xuICB9XG4gIGNsb3NlVGFnKCkge1xuICAgIHJldHVybiAnPC9wPic7XG4gIH1cbiAgYWJzb3JiKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG5cbiAgdG9IVE1MQXN5bmMoaW5kZW50TGV2ZWwgPSAwKSB7XG4gICAgaWYgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2gobmV3IFRleHROb2RlKHt0eXBlOiAndGV4dCcsIGF0dHJpYnV0ZXM6IHt9LCBjb250ZW50czogJyd9KSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLmFsbCh0aGlzLmNoaWxkcmVuLm1hcCgoYykgPT4gYy50b0hUTUxBc3luYygwKSkpXG4gICAgLnRoZW4oKGNoaWxkSFRNTCkgPT4ge1xuICAgICAgcmV0dXJuIGAke3RoaXMub3BlblRhZygpfSR7Y2hpbGRIVE1MLmpvaW4oJycpfSR7dGhpcy5jbG9zZVRhZygpfWA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIH0pO1xuICB9XG5cbiAgdG9IVE1MKGluZGVudExldmVsID0gMCkge1xuICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKG5ldyBUZXh0Tm9kZSh7dHlwZTogJ3RleHQnLCBhdHRyaWJ1dGVzOiB7fSwgY29udGVudHM6ICcnfSkpO1xuICAgIH1cbiAgICAvLyBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIHJldHVybiBgJHtuZXcgQXJyYXkoMCkuam9pbignICcpfSR7dGhpcy5vcGVuVGFnKCl9Jm5ic3A7JHt0aGlzLmNsb3NlVGFnKCl9YDtcbiAgICAvLyB9IGVsc2Uge1xuICAgIHJldHVybiBzdXBlci50b0hUTUwoaW5kZW50TGV2ZWwpO1xuICAgIC8vIH1cbiAgfVxuXG4gIHN0YXRpYyBtYXRjaGVzKHRva2VuID0ge30pIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRva2VuLnR5cGUgPT09ICdsaW5lYnJlYWsnKSAmJiAoXG4gICAgICAgICghIXRva2VuLmF0dHJpYnV0ZXMpIHx8XG4gICAgICAgIChcbiAgICAgICAgICAodG9rZW4uYXR0cmlidXRlcy5saXN0ID09PSB1bmRlZmluZWQpICYmXG4gICAgICAgICAgKHRva2VuLmF0dHJpYnV0ZXMuaGVhZGVyID09PSB1bmRlZmluZWQpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG59XG5cblBhcmFncmFwaE5vZGUucHJpb3JpdHkgPSAxOTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
