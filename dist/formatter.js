'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Formatter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _miniDOM = require('./miniDOM');

var MiniDOM = _interopRequireWildcard(_miniDOM);

var _tokenize = require('./tokenize');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Formatter = exports.Formatter = function () {
    function Formatter() {
        _classCallCheck(this, Formatter);

        this.formats = {
            bold: MiniDOM.BoldNode,
            italic: MiniDOM.ItalicNode,
            link: MiniDOM.LinkNode,
            listItem: MiniDOM.ListItemNode,
            ordered: MiniDOM.OrderedListNode,
            paragraph: MiniDOM.ParagraphNode,
            text: MiniDOM.TextNode,
            TreeNode: MiniDOM.TreeNode,
            RootNode: MiniDOM.RootNode,
            bullet: MiniDOM.UnorderedListNode,
            header: MiniDOM.HeaderNode,
            underline: MiniDOM.UnderlineNode,
            strikethrough: MiniDOM.StrikethroughNode,
            color: MiniDOM.ColorNode,
            bgcolor: MiniDOM.BackgroundColorNode,
            subscript: MiniDOM.SuperscriptNode,
            superscript: MiniDOM.SubscriptNode,
            SpanNode: MiniDOM.SpanNode,
            BlockNode: MiniDOM.BlockNode,
            image: MiniDOM.ImageNode
        };
        this.formatList = [];
        this.sortRegistry();
        this.checkPriorities();
    }

    _createClass(Formatter, [{
        key: 'sortRegistry',
        value: function sortRegistry() {
            var _this = this;

            this.formatList = Object.keys(this.formats).sort(function (a, b) {
                return _this.formats[b].priority - _this.formats[a].priority;
            }).map(function (n) {
                return _this.formats[n];
            });
        }
    }, {
        key: 'checkPriorities',
        value: function checkPriorities() {
            var _this2 = this;

            var seen = {};
            Object.keys(this.formats).forEach(function (key) {
                if (seen[_this2.formats[key].priority]) {
                    console.log('ERROR: conflict between ' + key + ' and ' + seen[_this2.formats[key].priority]);
                }
                seen[_this2.formats[key].priority] = key;
            });
        }
    }, {
        key: 'transform',
        value: function transform(delta) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var openTag = '';
            var closeTag = '';
            if (opts.rootNode) {
                if (opts.rootClass) {
                    openTag = '<' + opts.rootNode + ' class="' + opts.rootClass + '">';
                } else {
                    openTag = '<' + opts.rootNode + '>';
                }
                closeTag = '</' + opts.rootNode + '>';
            }
            return '' + openTag + this.blockize((0, _tokenize.tokenize)(delta.ops)).toHTML() + closeTag;
        }
    }, {
        key: 'build',
        value: function build(token) {
            var matchingFormats = this.formatList.filter(function (format) {
                return format.matches(token);
            }).map(function (N) {
                return new N(token);
            });
            if (matchingFormats.length === 0) {
                // console.log(`token ${JSON.stringify(token)} has no matching formats`);
                return new this.formats.TreeNode();
            }
            var retVal = matchingFormats.shift();
            matchingFormats.reduce(function (prev, curr) {
                prev.children = [curr]; // eslint-disable-line no-param-reassign
                return curr;
            }, retVal);
            return retVal;
        }
    }, {
        key: 'blockize',
        value: function blockize(tokens) {
            var _this3 = this;

            var RN = this.formats.RootNode;
            var retVal = new RN();
            var childList = [];
            tokens.forEach(function (token) {
                if (token.type === 'linebreak') {
                    var blockArray = _this3.formatList.filter(function (f) {
                        return f.matches(token);
                    });
                    var currentBlock = new blockArray[0](token);
                    childList.forEach(function (child) {
                        return currentBlock.appendChild(_this3.build(child));
                    });
                    retVal.absorb(currentBlock);
                    childList = [];
                } else {
                    childList.push(token);
                }
            });
            return retVal;
        }
    }, {
        key: 'transformAsync',
        value: function transformAsync(delta) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.blockize((0, _tokenize.tokenize)(delta.ops)).toHTMLAsync().then(function (v) {
                var openTag = '';
                var closeTag = '';
                if (opts.rootNode) {
                    if (opts.rootClass) {
                        openTag = '<' + opts.rootNode + ' class="' + opts.rootClass + '">';
                    } else {
                        openTag = '<' + opts.rootNode + '>';
                    }
                    closeTag = '</' + opts.rootNode + '>';
                }
                return '' + openTag + v + closeTag;
            });
        }
    }, {
        key: 'plainText',
        value: function plainText(delta) {
            return this.blockize((0, _tokenize.tokenize)(delta.ops)).plainText();
        }
    }, {
        key: 'plainTextAsync',
        value: function plainTextAsync(delta) {
            return this.blockize((0, _tokenize.tokenize)(delta.ops)).plainTextAsync();
        }
    }]);

    return Formatter;
}();