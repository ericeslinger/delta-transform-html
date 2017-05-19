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

var ImageNode = function (_SpanNode) {
  _inherits(ImageNode, _SpanNode);

  function ImageNode() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ImageNode);

    var _this = _possibleConstructorReturn(this, (ImageNode.__proto__ || Object.getPrototypeOf(ImageNode)).call(this, opts));

    if (opts.contents && opts.contents.image) {
      _this.imageUrl = opts.contents.image;
    } else {
      _this.imageUrl = opts.attributes.image;
    }
    _this.contents = '<img src="' + _this.imageUrl + '">';
    return _this;
  }

  _createClass(ImageNode, [{
    key: 'plainText',
    value: function plainText() {
      return 'IMAGE: ' + this.imageUrl;
    }
  }, {
    key: 'isLeaf',
    value: function isLeaf() {
      return true;
    }
  }, {
    key: 'openTag',
    value: function openTag() {
      return '';
    }
  }, {
    key: 'closeTag',
    value: function closeTag() {
      return '';
    }
  }], [{
    key: 'matches',
    value: function matches() {
      var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return token.contents && token.contents.image || token.attributes && token.attributes.image;
    }
  }]);

  return ImageNode;
}(_span2.default);

exports.default = ImageNode;


ImageNode.priority = 99;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vaW1hZ2UuanMiXSwibmFtZXMiOlsiSW1hZ2VOb2RlIiwib3B0cyIsImNvbnRlbnRzIiwiaW1hZ2UiLCJpbWFnZVVybCIsImF0dHJpYnV0ZXMiLCJ0b2tlbiIsInByaW9yaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7OztBQUNuQix1QkFBdUI7QUFBQSxRQUFYQyxJQUFXLHVFQUFKLEVBQUk7O0FBQUE7O0FBQUEsc0hBQ2ZBLElBRGU7O0FBRXJCLFFBQUlBLEtBQUtDLFFBQUwsSUFBaUJELEtBQUtDLFFBQUwsQ0FBY0MsS0FBbkMsRUFBMEM7QUFDeEMsWUFBS0MsUUFBTCxHQUFnQkgsS0FBS0MsUUFBTCxDQUFjQyxLQUE5QjtBQUNELEtBRkQsTUFFTztBQUNMLFlBQUtDLFFBQUwsR0FBZ0JILEtBQUtJLFVBQUwsQ0FBZ0JGLEtBQWhDO0FBQ0Q7QUFDRCxVQUFLRCxRQUFMLGtCQUE2QixNQUFLRSxRQUFsQztBQVBxQjtBQVF0Qjs7OztnQ0FDVztBQUNWLHlCQUFpQixLQUFLQSxRQUF0QjtBQUNEOzs7NkJBQ1E7QUFDUCxhQUFPLElBQVA7QUFDRDs7OzhCQUNTO0FBQ1IsYUFBTyxFQUFQO0FBQ0Q7OzsrQkFDVTtBQUNULGFBQU8sRUFBUDtBQUNEOzs7OEJBQzBCO0FBQUEsVUFBWkUsS0FBWSx1RUFBSixFQUFJOztBQUN6QixhQUNHQSxNQUFNSixRQUFOLElBQWtCSSxNQUFNSixRQUFOLENBQWVDLEtBQWxDLElBQ0NHLE1BQU1ELFVBQU4sSUFBb0JDLE1BQU1ELFVBQU4sQ0FBaUJGLEtBRnhDO0FBSUQ7Ozs7OztrQkEzQmtCSCxTOzs7QUE4QnJCQSxVQUFVTyxRQUFWLEdBQXFCLEVBQXJCIiwiZmlsZSI6Im1pbmlET00vaW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3Bhbk5vZGUgZnJvbSAnLi9zcGFuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VOb2RlIGV4dGVuZHMgU3Bhbk5vZGUge1xuICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcbiAgICBpZiAob3B0cy5jb250ZW50cyAmJiBvcHRzLmNvbnRlbnRzLmltYWdlKSB7XG4gICAgICB0aGlzLmltYWdlVXJsID0gb3B0cy5jb250ZW50cy5pbWFnZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbWFnZVVybCA9IG9wdHMuYXR0cmlidXRlcy5pbWFnZTtcbiAgICB9XG4gICAgdGhpcy5jb250ZW50cyA9IGA8aW1nIHNyYz1cIiR7dGhpcy5pbWFnZVVybH1cIj5gO1xuICB9XG4gIHBsYWluVGV4dCgpIHtcbiAgICByZXR1cm4gYElNQUdFOiAke3RoaXMuaW1hZ2VVcmx9YDtcbiAgfVxuICBpc0xlYWYoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgb3BlblRhZygpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgY2xvc2VUYWcoKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHN0YXRpYyBtYXRjaGVzKHRva2VuID0ge30pIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRva2VuLmNvbnRlbnRzICYmIHRva2VuLmNvbnRlbnRzLmltYWdlKSB8fFxuICAgICAgKHRva2VuLmF0dHJpYnV0ZXMgJiYgdG9rZW4uYXR0cmlidXRlcy5pbWFnZSlcbiAgICApO1xuICB9XG59XG5cbkltYWdlTm9kZS5wcmlvcml0eSA9IDk5O1xuIl19
