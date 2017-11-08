'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ParagraphNode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _block = require('./block');

var _text = require('./text');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParagraphNode = exports.ParagraphNode = function (_BlockNode) {
    _inherits(ParagraphNode, _BlockNode);

    function ParagraphNode() {
        _classCallCheck(this, ParagraphNode);

        return _possibleConstructorReturn(this, (ParagraphNode.__proto__ || Object.getPrototypeOf(ParagraphNode)).apply(this, arguments));
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

            var indentLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (this.children.length === 0) {
                this.children.push(new _text.TextNode({ type: 'text', attributes: {}, contents: '' }));
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
            var indentLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (this.children.length === 0) {
                this.children.push(new _text.TextNode({ type: 'text', attributes: {}, contents: '' }));
            }
            // if (this.children.length === 0) {
            // return `${new Array(0).join(' ')}${this.openTag()}&nbsp;${this.closeTag()}`;
            // } else {
            return _get(ParagraphNode.prototype.__proto__ || Object.getPrototypeOf(ParagraphNode.prototype), 'toHTML', this).call(this, indentLevel);
            // }
        }
    }], [{
        key: 'matches',
        value: function matches(token) {
            return token.type === 'linebreak' && (!!token.attributes || token.attributes.list === undefined && token.attributes.header === undefined);
        }
    }]);

    return ParagraphNode;
}(_block.BlockNode);

ParagraphNode.priority = 19;