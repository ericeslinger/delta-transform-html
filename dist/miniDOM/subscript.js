'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SubscriptNode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _span = require('./span');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubscriptNode = exports.SubscriptNode = function (_SpanNode) {
    _inherits(SubscriptNode, _SpanNode);

    function SubscriptNode() {
        _classCallCheck(this, SubscriptNode);

        return _possibleConstructorReturn(this, (SubscriptNode.__proto__ || Object.getPrototypeOf(SubscriptNode)).apply(this, arguments));
    }

    _createClass(SubscriptNode, [{
        key: 'openTag',
        value: function openTag() {
            return '<sub>';
        }
    }, {
        key: 'closeTag',
        value: function closeTag() {
            return '</sub>';
        }
    }], [{
        key: 'matches',
        value: function matches(token) {
            return token.attributes && token.attributes.sub;
        }
    }]);

    return SubscriptNode;
}(_span.SpanNode);

SubscriptNode.priority = 9;