'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TextNode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _span = require('./span');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextNode = exports.TextNode = function (_SpanNode) {
    _inherits(TextNode, _SpanNode);

    function TextNode() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, TextNode);

        var _this = _possibleConstructorReturn(this, (TextNode.__proto__ || Object.getPrototypeOf(TextNode)).call(this, opts));

        _this.unescapedContents = opts.contents || '';
        return _this;
    }

    _createClass(TextNode, [{
        key: 'plainText',
        value: function plainText() {
            return this.unescapedContents;
        }
    }, {
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
    }, {
        key: 'absorb',
        value: function absorb(child) {
            if (child.type === this.type) {
                this.unescapedContents = this.unescapedContents.concat(child.unescapedContents);
                return null;
            } else {
                return child;
            }
        }
    }, {
        key: 'escape',
        value: function escape(contents) {
            return contents.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        }
    }, {
        key: 'contents',
        get: function get() {
            if (this.unescapedContents.trim() === '') {
                return '&nbsp;';
            } else {
                return this.escape(this.unescapedContents);
            }
        }
    }], [{
        key: 'matches',
        value: function matches(token) {
            return token.type === 'text' && (token.contents === '' || token.contents) && typeof token.contents === 'string' && (token.attributes === undefined || token.attributes.image === undefined);
        }
    }]);

    return TextNode;
}(_span.SpanNode);

TextNode.priority = 0;