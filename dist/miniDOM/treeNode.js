'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TreeNode = exports.TreeNode = function () {
    function TreeNode() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, TreeNode);

        this.children = [];
        this.attributes = Object.assign({}, opts.attributes);
        this.type = this.constructor.name;
    }

    _createClass(TreeNode, [{
        key: 'dfsTraverse',
        value: function dfsTraverse() {
            return this.children.reduce(function (prev, curr) {
                return prev.concat(curr);
            }, [this]);
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
    }, {
        key: 'promiseContents',
        value: function promiseContents() {
            return Promise.resolve(this.contents || '');
        }
    }, {
        key: 'toHTMLAsync',
        value: function toHTMLAsync() {
            var _this = this;

            var indentLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (this.isLeaf()) {
                return this.promiseContents().then(function (contents) {
                    return '' + _this.openTag() + contents + _this.closeTag(); // eslint-disable-line max-len
                });
            } else {
                return Promise.all(this.children.map(function (c) {
                    return c.toHTMLAsync(0);
                })).then(function (childHTML) {
                    return '' + _this.openTag() + childHTML.join('') + _this.closeTag(); // eslint-disable-line max-len
                });
            }
        }
    }, {
        key: 'plainTextAsync',
        value: function plainTextAsync() {
            if (this.isLeaf()) {
                if (this.promisePlainContents) {
                    return this.promisePlainContents();
                } else {
                    return Promise.resolve(this.plainText());
                }
            } else {
                return Promise.all(this.children.map(function (c) {
                    return c.plainTextAsync();
                })).then(function (c) {
                    return c.join('');
                });
            }
        }
    }, {
        key: 'plainText',
        value: function plainText() {
            return this.children.map(function (c) {
                return c.plainText();
            }).join('');
        }
    }, {
        key: 'toHTML',
        value: function toHTML() {
            var indentLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (this.isLeaf()) {
                return '' + this.openTag() + this.contents + this.closeTag(); // eslint-disable-line max-len
            } else {
                return '' + this.openTag() + this.children.map(function (c) {
                    return c.toHTML(0);
                }).join('') + this.closeTag(); // eslint-disable-line max-len
            }
        }
    }, {
        key: 'isLeaf',
        value: function isLeaf() {
            return false;
        }
    }, {
        key: 'appendChild',
        value: function appendChild(child) {
            this.children.push(child);
        }
    }, {
        key: 'absorb',
        value: function absorb(child) {
            this.children.push(child);
            return null;
        }
    }, {
        key: 'toJSON',
        value: function toJSON() {
            return {
                type: this.type,
                level: this.level,
                children: this.children,
                attributes: this.attributes,
                contents: this.contents
            };
        }
    }, {
        key: 'priority',
        get: function get() {
            return this.constructor['priority'];
        }
    }], [{
        key: 'matches',
        value: function matches(token) {
            return false;
        }
    }]);

    return TreeNode;
}();

TreeNode.priority = -2;