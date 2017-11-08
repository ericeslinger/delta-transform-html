'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OrderedListNode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _block = require('./block');

var _listItem = require('./listItem');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderedListNode = exports.OrderedListNode = function (_BlockNode) {
    _inherits(OrderedListNode, _BlockNode);

    function OrderedListNode(opts) {
        _classCallCheck(this, OrderedListNode);

        var _this = _possibleConstructorReturn(this, (OrderedListNode.__proto__ || Object.getPrototypeOf(OrderedListNode)).call(this, opts));

        _this.children = [new _listItem.ListItemNode(opts)];
        return _this;
    }

    _createClass(OrderedListNode, [{
        key: 'appendChild',
        value: function appendChild(node) {
            this.children[0].appendChild(node);
        }
    }, {
        key: 'openTag',
        value: function openTag() {
            return '<ol>';
        }
    }, {
        key: 'closeTag',
        value: function closeTag() {
            return '</ol>';
        }
    }, {
        key: 'absorb',
        value: function absorb(child) {
            if (child.type === this.type) {
                this.children = this.children.concat(child.children);
                return null;
            } else {
                return child;
            }
        }
    }], [{
        key: 'matches',
        value: function matches(token) {
            return token.type === 'linebreak' && token.attributes && (token.attributes.list === 'ordered' || token.attributes.ordered === true);
        }
    }]);

    return OrderedListNode;
}(_block.BlockNode);

OrderedListNode.priority = 30;