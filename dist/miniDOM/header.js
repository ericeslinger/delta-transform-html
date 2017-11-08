'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HeaderNode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _block = require('./block');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderNode = exports.HeaderNode = function (_BlockNode) {
    _inherits(HeaderNode, _BlockNode);

    function HeaderNode() {
        _classCallCheck(this, HeaderNode);

        return _possibleConstructorReturn(this, (HeaderNode.__proto__ || Object.getPrototypeOf(HeaderNode)).apply(this, arguments));
    }

    _createClass(HeaderNode, [{
        key: 'openTag',
        value: function openTag() {
            return '<h' + this.attributes.header + '>';
        }
    }, {
        key: 'closeTag',
        value: function closeTag() {
            return '</h' + this.attributes.header + '>';
        }
    }, {
        key: 'absorb',
        value: function absorb(child) {
            return child;
        }
    }], [{
        key: 'matches',
        value: function matches(token) {
            return token.type === 'linebreak' && token.attributes.header;
        }
    }]);

    return HeaderNode;
}(_block.BlockNode);

HeaderNode.priority = 21;