'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RootNode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _treeNode = require('./treeNode');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RootNode = exports.RootNode = function (_TreeNode) {
    _inherits(RootNode, _TreeNode);

    function RootNode() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, RootNode);

        return _possibleConstructorReturn(this, (RootNode.__proto__ || Object.getPrototypeOf(RootNode)).call(this, opts));
    }

    _createClass(RootNode, [{
        key: 'absorb',
        value: function absorb(child) {
            var remains = child;
            if (this.children.length > 0) {
                remains = this.children[this.children.length - 1].absorb(child);
            }
            if (remains !== null) {
                this.children.push(remains);
            }
            return null;
        }
    }, {
        key: 'toHTML',
        value: function toHTML() {
            return this.children.map(function (c) {
                return c.toHTML(0);
            }).join(''); // eslint-disable-line max-len
        }
    }, {
        key: 'toHTMLAsync',
        value: function toHTMLAsync() {
            return Promise.all(this.children.map(function (c) {
                return c.toHTMLAsync(0);
            })).then(function (childHTML) {
                return childHTML.join(''); // eslint-disable-line max-len
            });
        }
    }]);

    return RootNode;
}(_treeNode.TreeNode);

RootNode.priority = -1;