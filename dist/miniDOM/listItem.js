'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListItemNode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _treeNode = require('./treeNode');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItemNode = exports.ListItemNode = function (_TreeNode) {
    _inherits(ListItemNode, _TreeNode);

    function ListItemNode() {
        _classCallCheck(this, ListItemNode);

        return _possibleConstructorReturn(this, (ListItemNode.__proto__ || Object.getPrototypeOf(ListItemNode)).apply(this, arguments));
    }

    _createClass(ListItemNode, [{
        key: 'openTag',
        value: function openTag() {
            return '<li>';
        }
    }, {
        key: 'closeTag',
        value: function closeTag() {
            return '</li>';
        }
    }, {
        key: 'absorb',
        value: function absorb(child) {
            return child;
        }
    }, {
        key: 'plainTextAsync',
        value: function plainTextAsync() {
            return _get(ListItemNode.prototype.__proto__ || Object.getPrototypeOf(ListItemNode.prototype), 'plainTextAsync', this).call(this).then(function (t) {
                return '* ' + t + '\n';
            });
        }
    }, {
        key: 'plainText',
        value: function plainText() {
            return '* ' + _get(ListItemNode.prototype.__proto__ || Object.getPrototypeOf(ListItemNode.prototype), 'plainText', this).call(this) + '\n';
        }
    }], [{
        key: 'matches',
        value: function matches() {
            var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return false;
            // return (token.attributes && token.attributes.list);
        }
    }]);

    return ListItemNode;
}(_treeNode.TreeNode);

ListItemNode.priority = 20;