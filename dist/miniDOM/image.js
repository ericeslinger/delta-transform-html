'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ImageNode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _span = require('./span');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageNode = exports.ImageNode = function (_SpanNode) {
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
        value: function matches(token) {
            return token.type === 'image';
            //   (token.contents && token.contents.image) ||
            //   (token.attributes && token.attributes.image)
            // );
        }
    }]);

    return ImageNode;
}(_span.SpanNode);

ImageNode.priority = 99;