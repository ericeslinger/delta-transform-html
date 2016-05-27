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
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, ImageNode);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImageNode).call(this, opts));

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
      var token = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return token.contents && token.contents.image || token.attributes && token.attributes.image;
    }
  }]);

  return ImageNode;
}(_span2.default);

exports.default = ImageNode;


ImageNode.priority = 99;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vaW1hZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCOzs7QUFDbkIsV0FEbUIsU0FDbkIsR0FBdUI7UUFBWCw2REFBTyxrQkFBSTs7MEJBREosV0FDSTs7dUVBREosc0JBRVgsT0FEZTs7QUFFckIsUUFBSSxLQUFLLFFBQUwsSUFBaUIsS0FBSyxRQUFMLENBQWMsS0FBZCxFQUFxQjtBQUN4QyxZQUFLLFFBQUwsR0FBZ0IsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUR3QjtLQUExQyxNQUVPO0FBQ0wsWUFBSyxRQUFMLEdBQWdCLEtBQUssVUFBTCxDQUFnQixLQUFoQixDQURYO0tBRlA7QUFLQSxVQUFLLFFBQUwsa0JBQTZCLE1BQUssUUFBTCxPQUE3QixDQVBxQjs7R0FBdkI7O2VBRG1COztnQ0FVUDtBQUNWLHlCQUFpQixLQUFLLFFBQUwsQ0FEUDs7Ozs2QkFHSDtBQUNQLGFBQU8sSUFBUCxDQURPOzs7OzhCQUdDO0FBQ1IsYUFBTyxFQUFQLENBRFE7Ozs7K0JBR0M7QUFDVCxhQUFPLEVBQVAsQ0FEUzs7Ozs4QkFHZ0I7VUFBWiw4REFBUSxrQkFBSTs7QUFDekIsYUFDRSxLQUFDLENBQU0sUUFBTixJQUFrQixNQUFNLFFBQU4sQ0FBZSxLQUFmLElBQ2xCLE1BQU0sVUFBTixJQUFvQixNQUFNLFVBQU4sQ0FBaUIsS0FBakIsQ0FIRTs7OztTQXRCUjs7Ozs7O0FBOEJyQixVQUFVLFFBQVYsR0FBcUIsRUFBckIiLCJmaWxlIjoibWluaURPTS9pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGFuTm9kZSBmcm9tICcuL3NwYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZU5vZGUgZXh0ZW5kcyBTcGFuTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuICAgIGlmIChvcHRzLmNvbnRlbnRzICYmIG9wdHMuY29udGVudHMuaW1hZ2UpIHtcbiAgICAgIHRoaXMuaW1hZ2VVcmwgPSBvcHRzLmNvbnRlbnRzLmltYWdlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmltYWdlVXJsID0gb3B0cy5hdHRyaWJ1dGVzLmltYWdlO1xuICAgIH1cbiAgICB0aGlzLmNvbnRlbnRzID0gYDxpbWcgc3JjPVwiJHt0aGlzLmltYWdlVXJsfVwiPmA7XG4gIH1cbiAgcGxhaW5UZXh0KCkge1xuICAgIHJldHVybiBgSU1BR0U6ICR7dGhpcy5pbWFnZVVybH1gO1xuICB9XG4gIGlzTGVhZigpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBvcGVuVGFnKCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBjbG9zZVRhZygpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgc3RhdGljIG1hdGNoZXModG9rZW4gPSB7fSkge1xuICAgIHJldHVybiAoXG4gICAgICAodG9rZW4uY29udGVudHMgJiYgdG9rZW4uY29udGVudHMuaW1hZ2UpIHx8XG4gICAgICAodG9rZW4uYXR0cmlidXRlcyAmJiB0b2tlbi5hdHRyaWJ1dGVzLmltYWdlKVxuICAgICk7XG4gIH1cbn1cblxuSW1hZ2VOb2RlLnByaW9yaXR5ID0gOTk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
