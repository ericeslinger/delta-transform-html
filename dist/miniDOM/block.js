'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BlockNode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _treeNode = require('./treeNode');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlockNode = exports.BlockNode = function (_TreeNode) {
    _inherits(BlockNode, _TreeNode);

    function BlockNode(opts) {
        _classCallCheck(this, BlockNode);

        var _this = _possibleConstructorReturn(this, (BlockNode.__proto__ || Object.getPrototypeOf(BlockNode)).call(this, opts));

        _this.level = 'block';
        return _this;
    }

    _createClass(BlockNode, [{
        key: 'plainTextAsync',
        value: function plainTextAsync() {
            return Promise.all(this.children.map(function (child) {
                return child.plainTextAsync();
            })).then(function (c) {
                return c.join('') + '\n';
            });
        }
    }, {
        key: 'plainText',
        value: function plainText() {
            return _get(BlockNode.prototype.__proto__ || Object.getPrototypeOf(BlockNode.prototype), 'plainText', this).call(this) + '\n';
        }
    }, {
        key: 'appendChild',
        value: function appendChild(child) {
            if (this.children.length === 0) {
                this.children.push(child);
            } else {
                var remains = this.children[this.children.length - 1].absorb(child);
                if (remains !== null) {
                    this.children.push(remains);
                }
            }
        }
    }]);

    return BlockNode;
}(_treeNode.TreeNode);

BlockNode.priority = 101;