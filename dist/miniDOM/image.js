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

    _this.contents = '<img src="' + opts.contents.image + '">';
    return _this;
  }

  _createClass(ImageNode, [{
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

      return token.contents && token.contents.image;
    }
  }]);

  return ImageNode;
}(_span2.default);

exports.default = ImageNode;


ImageNode.priority = 99;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vaW1hZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCOzs7QUFDbkIsV0FEbUIsU0FDbkIsR0FBdUI7UUFBWCw2REFBTyxrQkFBSTs7MEJBREosV0FDSTs7dUVBREosc0JBRVgsT0FEZTs7QUFFckIsVUFBSyxRQUFMLGtCQUE2QixLQUFLLFFBQUwsQ0FBYyxLQUFkLE9BQTdCLENBRnFCOztHQUF2Qjs7ZUFEbUI7OzZCQUtWO0FBQ1AsYUFBTyxJQUFQLENBRE87Ozs7OEJBR0M7QUFDUixhQUFPLEVBQVAsQ0FEUTs7OzsrQkFHQztBQUNULGFBQU8sRUFBUCxDQURTOzs7OzhCQUdnQjtVQUFaLDhEQUFRLGtCQUFJOztBQUN6QixhQUFRLE1BQU0sUUFBTixJQUFrQixNQUFNLFFBQU4sQ0FBZSxLQUFmLENBREQ7Ozs7U0FkUjs7Ozs7O0FBbUJyQixVQUFVLFFBQVYsR0FBcUIsRUFBckIiLCJmaWxlIjoibWluaURPTS9pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGFuTm9kZSBmcm9tICcuL3NwYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZU5vZGUgZXh0ZW5kcyBTcGFuTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuICAgIHRoaXMuY29udGVudHMgPSBgPGltZyBzcmM9XCIke29wdHMuY29udGVudHMuaW1hZ2V9XCI+YDtcbiAgfVxuICBpc0xlYWYoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgb3BlblRhZygpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgY2xvc2VUYWcoKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHN0YXRpYyBtYXRjaGVzKHRva2VuID0ge30pIHtcbiAgICByZXR1cm4gKHRva2VuLmNvbnRlbnRzICYmIHRva2VuLmNvbnRlbnRzLmltYWdlKTtcbiAgfVxufVxuXG5JbWFnZU5vZGUucHJpb3JpdHkgPSA5OTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
