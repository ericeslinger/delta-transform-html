'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoldFormat = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _format = require('./format');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BoldFormat = exports.BoldFormat = function (_Format) {
  _inherits(BoldFormat, _Format);

  function BoldFormat() {
    _classCallCheck(this, BoldFormat);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BoldFormat).apply(this, arguments));
  }

  _createClass(BoldFormat, [{
    key: 'openTag',
    value: function openTag() {
      return '<strong>';
    }
  }, {
    key: 'closeTag',
    value: function closeTag() {
      return '</strong>';
    }
  }]);

  return BoldFormat;
}(_format.Format);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0lBRWE7Ozs7Ozs7Ozs7OzhCQUNEO0FBQ1IsYUFBTyxVQUFQLENBRFE7Ozs7K0JBR0M7QUFDVCxhQUFPLFdBQVAsQ0FEUzs7OztTQUpBIiwiZmlsZSI6ImJvbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtYXQgfSBmcm9tICcuL2Zvcm1hdCc7XG5cbmV4cG9ydCBjbGFzcyBCb2xkRm9ybWF0IGV4dGVuZHMgRm9ybWF0IHtcbiAgb3BlblRhZygpIHtcbiAgICByZXR1cm4gJzxzdHJvbmc+JztcbiAgfVxuICBjbG9zZVRhZygpIHtcbiAgICByZXR1cm4gJzwvc3Ryb25nPic7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
