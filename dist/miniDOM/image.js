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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vaW1hZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCLFM7OztBQUNuQix1QkFBdUI7QUFBQSxRQUFYLElBQVcseURBQUosRUFBSTs7QUFBQTs7QUFBQSw2RkFDZixJQURlOztBQUVyQixRQUFJLEtBQUssUUFBTCxJQUFpQixLQUFLLFFBQUwsQ0FBYyxLQUFuQyxFQUEwQztBQUN4QyxZQUFLLFFBQUwsR0FBZ0IsS0FBSyxRQUFMLENBQWMsS0FBOUI7QUFDRCxLQUZELE1BRU87QUFDTCxZQUFLLFFBQUwsR0FBZ0IsS0FBSyxVQUFMLENBQWdCLEtBQWhDO0FBQ0Q7QUFDRCxVQUFLLFFBQUwsa0JBQTZCLE1BQUssUUFBbEM7QUFQcUI7QUFRdEI7Ozs7Z0NBQ1c7QUFDVix5QkFBaUIsS0FBSyxRQUF0QjtBQUNEOzs7NkJBQ1E7QUFDUCxhQUFPLElBQVA7QUFDRDs7OzhCQUNTO0FBQ1IsYUFBTyxFQUFQO0FBQ0Q7OzsrQkFDVTtBQUNULGFBQU8sRUFBUDtBQUNEOzs7OEJBQzBCO0FBQUEsVUFBWixLQUFZLHlEQUFKLEVBQUk7O0FBQ3pCLGFBQ0csTUFBTSxRQUFOLElBQWtCLE1BQU0sUUFBTixDQUFlLEtBQWxDLElBQ0MsTUFBTSxVQUFOLElBQW9CLE1BQU0sVUFBTixDQUFpQixLQUZ4QztBQUlEOzs7Ozs7a0JBM0JrQixTOzs7QUE4QnJCLFVBQVUsUUFBVixHQUFxQixFQUFyQiIsImZpbGUiOiJtaW5pRE9NL2ltYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwYW5Ob2RlIGZyb20gJy4vc3Bhbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlTm9kZSBleHRlbmRzIFNwYW5Ob2RlIHtcbiAgY29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG4gICAgaWYgKG9wdHMuY29udGVudHMgJiYgb3B0cy5jb250ZW50cy5pbWFnZSkge1xuICAgICAgdGhpcy5pbWFnZVVybCA9IG9wdHMuY29udGVudHMuaW1hZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW1hZ2VVcmwgPSBvcHRzLmF0dHJpYnV0ZXMuaW1hZ2U7XG4gICAgfVxuICAgIHRoaXMuY29udGVudHMgPSBgPGltZyBzcmM9XCIke3RoaXMuaW1hZ2VVcmx9XCI+YDtcbiAgfVxuICBwbGFpblRleHQoKSB7XG4gICAgcmV0dXJuIGBJTUFHRTogJHt0aGlzLmltYWdlVXJsfWA7XG4gIH1cbiAgaXNMZWFmKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIG9wZW5UYWcoKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGNsb3NlVGFnKCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBzdGF0aWMgbWF0Y2hlcyh0b2tlbiA9IHt9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0b2tlbi5jb250ZW50cyAmJiB0b2tlbi5jb250ZW50cy5pbWFnZSkgfHxcbiAgICAgICh0b2tlbi5hdHRyaWJ1dGVzICYmIHRva2VuLmF0dHJpYnV0ZXMuaW1hZ2UpXG4gICAgKTtcbiAgfVxufVxuXG5JbWFnZU5vZGUucHJpb3JpdHkgPSA5OTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
