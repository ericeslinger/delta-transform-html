'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Registry = undefined;
exports.transform = transform;
exports.testDeltas = testDeltas;

var _registry = require('./registry');

var Reg = _interopRequireWildcard(_registry);

var _bold = require('./miniDOM/bold');

var _bold2 = _interopRequireDefault(_bold);

var _italic = require('./miniDOM/italic');

var _italic2 = _interopRequireDefault(_italic);

var _link = require('./miniDOM/link');

var _link2 = _interopRequireDefault(_link);

var _listItem = require('./miniDOM/listItem');

var _listItem2 = _interopRequireDefault(_listItem);

var _orderedList = require('./miniDOM/orderedList');

var _orderedList2 = _interopRequireDefault(_orderedList);

var _paragraph = require('./miniDOM/paragraph');

var _paragraph2 = _interopRequireDefault(_paragraph);

var _text = require('./miniDOM/text');

var _text2 = _interopRequireDefault(_text);

var _treeNode = require('./miniDOM/treeNode');

var _treeNode2 = _interopRequireDefault(_treeNode);

var _root = require('./miniDOM/root');

var _root2 = _interopRequireDefault(_root);

var _unorderedList = require('./miniDOM/unorderedList');

var _unorderedList2 = _interopRequireDefault(_unorderedList);

var _header = require('./miniDOM/header');

var _header2 = _interopRequireDefault(_header);

var _underline = require('./miniDOM/underline');

var _underline2 = _interopRequireDefault(_underline);

var _strikethrough = require('./miniDOM/strikethrough');

var _strikethrough2 = _interopRequireDefault(_strikethrough);

var _color = require('./miniDOM/color');

var _color2 = _interopRequireDefault(_color);

var _bgcolor = require('./miniDOM/bgcolor');

var _bgcolor2 = _interopRequireDefault(_bgcolor);

var _superscript = require('./miniDOM/superscript');

var _superscript2 = _interopRequireDefault(_superscript);

var _subscript = require('./miniDOM/subscript');

var _subscript2 = _interopRequireDefault(_subscript);

var _span = require('./miniDOM/span');

var _span2 = _interopRequireDefault(_span);

var _block = require('./miniDOM/block');

var _block2 = _interopRequireDefault(_block);

var _image = require('./miniDOM/image');

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Registry = exports.Registry = Reg;

Registry.add('bold', _bold2.default);
Registry.add('italic', _italic2.default);
Registry.add('link', _link2.default);
Registry.add('listItem', _listItem2.default);
Registry.add('ordered', _orderedList2.default);
Registry.add('paragraph', _paragraph2.default);
Registry.add('text', _text2.default);
Registry.add('TreeNode', _treeNode2.default);
Registry.add('RootNode', _root2.default);
Registry.add('bullet', _unorderedList2.default);
Registry.add('header', _header2.default);
Registry.add('underline', _underline2.default);
Registry.add('strikethrough', _strikethrough2.default);
Registry.add('color', _color2.default);
Registry.add('bgcolor', _bgcolor2.default);
Registry.add('subscript', _superscript2.default);
Registry.add('superscript', _subscript2.default);
Registry.add('SpanNode', _span2.default);
Registry.add('BlockNode', _block2.default);
Registry.add('image', _image2.default);

function tokenize(ops) {
  var retVal = [];
  ops.forEach(function (op) {
    if (typeof op.insert !== 'string') {
      retVal.push({
        type: 'text',
        contents: op.insert,
        attributes: op.attributes || {}
      });
    } else if (op.insert === '\n') {
      retVal.push({
        type: 'linebreak',
        attributes: op.attributes || {}
      });
    } else if (op.insert.indexOf('\n') < 0) {
      retVal.push({
        type: 'text',
        contents: op.insert,
        attributes: op.attributes || {}
      });
    } else {
      op.insert.split('\n').forEach(function (subText, i, ary) {
        console.log('TEXT: -' + subText + '-');
        if (subText.length > 0) {
          retVal.push({
            type: 'text',
            contents: subText,
            attributes: op.attributes || {}
          });
        }
        if (i < ary.length - 1) {
          retVal.push({
            type: 'linebreak',
            attributes: {} });
        }
      });
    }
  });
  // mid-insert linebreaks have no line-level styling
  return retVal;
}

function createBlocks(tokens) {
  var retVal = new _root2.default();
  var childList = [];
  tokens.forEach(function (token) {
    if (token.type === 'linebreak') {
      (function () {
        var currentBlock = new (Registry.listFormats().filter(function (f) {
          return f.matches(token);
        })[0])(token);
        childList.forEach(function (child) {
          return currentBlock.appendChild(_treeNode2.default.build(child));
        });
        retVal.absorb(currentBlock);
        childList = [];
      })();
    } else {
      childList.push(token);
    }
  });
  return retVal;
}

function transform(delta) {
  return createBlocks(tokenize(delta.ops)).toHTML();
}

function testDeltas() {
  var testVal = {
    ops: [{ insert: 'multiline \n value' }, { insert: '\n' }, { insert: 'simple text' }, { insert: '\nfollowing text\n\n' },
    // {insert: 'bulleted list one', attributes: {link: 'linkTarget'}},
    // {insert: '\n', attributes: {list: 'bullet'}},
    // {insert: 'bulleted list two'},
    // {insert: '\n', attributes: {list: 'bullet'}},
    // {insert: 'bulleted list three'},
    // {insert: '\n', attributes: {list: 'bullet'}},
    // {insert: 'numbered list one'},
    // {insert: '\n', attributes: {list: 'ordered'}},
    // {insert: 'numbered list two'},
    // {insert: '\n', attributes: {list: 'ordered'}},
    // {insert: 'numbered list three'},
    // {insert: '\n', attributes: {list: 'ordered'}},
    // {insert: 'header two'},
    // {insert: '\n', attributes: {header: 2}},
    // {insert: 'underlined header one', attributes: {underline: true}},
    // {insert: '\n', attributes: {header: 1}},
    // {insert: 'red', attributes: {color: 'red'}},
    // {insert: 'bgred', attributes: {bg: 'red'}},
    // {insert: 'strikethru', attributes: {strike: true}},
    // {insert: '\n'},
    // {insert: {image: 'IMAGEURL'}},
    // {insert: 'escaped HTML & < > " \' &'},
    // {insert: '\n'},
    // {insert: 'going NUTS', attributes: {
    //   italic: true,
    //   bold: true,
    //   sub: true,
    //   super: true,
    //   bg: '#000000',
    //   color: '#ffffff',
    //   strike: true,
    //   underline: true,
    // }},
    // {insert: '\n'},
    // {insert: 'bold multiline\nvalue', attributes: {bold: true}},
    // {insert: 'italic value', attributes: {italic: true}},
    { insert: 'bold-italic value', attributes: { bold: true, italic: true } }, { insert: '\n' }]
  };
  console.log('testing uniqueness on sort keys');
  Registry.checkPriorities();
  console.log(transform(testVal));
}
//# sourceMappingURL=data:application/json;base64,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RHFCO0FBK0MzQixVQUFRLEdBQVIsQ0FBWSxpQ0FBWixFQS9DMkI7QUFnRDNCLFdBQVMsZUFBVCxHQWhEMkI7QUFpRDNCLFVBQVEsR0FBUixDQUFZLFVBQVUsT0FBVixDQUFaLEVBakQyQjtDQUF0QiIsImZpbGUiOiJ0cmFuc2Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWcgZnJvbSAnLi9yZWdpc3RyeSc7XG5cbmV4cG9ydCBjb25zdCBSZWdpc3RyeSA9IFJlZztcblxuaW1wb3J0IEJvbGROb2RlIGZyb20gJy4vbWluaURPTS9ib2xkJztcbmltcG9ydCBJdGFsaWNOb2RlIGZyb20gJy4vbWluaURPTS9pdGFsaWMnO1xuaW1wb3J0IExpbmtOb2RlIGZyb20gJy4vbWluaURPTS9saW5rJztcbmltcG9ydCBMaXN0SXRlbU5vZGUgZnJvbSAnLi9taW5pRE9NL2xpc3RJdGVtJztcbmltcG9ydCBPcmRlcmVkTGlzdE5vZGUgZnJvbSAnLi9taW5pRE9NL29yZGVyZWRMaXN0JztcbmltcG9ydCBQYXJhZ3JhcGhOb2RlIGZyb20gJy4vbWluaURPTS9wYXJhZ3JhcGgnO1xuaW1wb3J0IFRleHROb2RlIGZyb20gJy4vbWluaURPTS90ZXh0JztcbmltcG9ydCBUcmVlTm9kZSBmcm9tICcuL21pbmlET00vdHJlZU5vZGUnO1xuaW1wb3J0IFJvb3ROb2RlIGZyb20gJy4vbWluaURPTS9yb290JztcbmltcG9ydCBVbm9yZGVyZWRMaXN0Tm9kZSBmcm9tICcuL21pbmlET00vdW5vcmRlcmVkTGlzdCc7XG5pbXBvcnQgSGVhZGVyTm9kZSBmcm9tICcuL21pbmlET00vaGVhZGVyJztcbmltcG9ydCBVbmRlcmxpbmVOb2RlIGZyb20gJy4vbWluaURPTS91bmRlcmxpbmUnO1xuaW1wb3J0IFN0cmlrZXRocm91Z2hOb2RlIGZyb20gJy4vbWluaURPTS9zdHJpa2V0aHJvdWdoJztcbmltcG9ydCBDb2xvck5vZGUgZnJvbSAnLi9taW5pRE9NL2NvbG9yJztcbmltcG9ydCBCYWNrZ3JvdW5kQ29sb3JOb2RlIGZyb20gJy4vbWluaURPTS9iZ2NvbG9yJztcbmltcG9ydCBTdXBlcnNjcmlwdE5vZGUgZnJvbSAnLi9taW5pRE9NL3N1cGVyc2NyaXB0JztcbmltcG9ydCBTdWJzY3JpcHROb2RlIGZyb20gJy4vbWluaURPTS9zdWJzY3JpcHQnO1xuaW1wb3J0IFNwYW5Ob2RlIGZyb20gJy4vbWluaURPTS9zcGFuJztcbmltcG9ydCBCbG9ja05vZGUgZnJvbSAnLi9taW5pRE9NL2Jsb2NrJztcbmltcG9ydCBJbWFnZU5vZGUgZnJvbSAnLi9taW5pRE9NL2ltYWdlJztcblxuUmVnaXN0cnkuYWRkKCdib2xkJywgQm9sZE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdpdGFsaWMnLCBJdGFsaWNOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnbGluaycsIExpbmtOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnbGlzdEl0ZW0nLCBMaXN0SXRlbU5vZGUpO1xuUmVnaXN0cnkuYWRkKCdvcmRlcmVkJywgT3JkZXJlZExpc3ROb2RlKTtcblJlZ2lzdHJ5LmFkZCgncGFyYWdyYXBoJywgUGFyYWdyYXBoTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ3RleHQnLCBUZXh0Tm9kZSk7XG5SZWdpc3RyeS5hZGQoJ1RyZWVOb2RlJywgVHJlZU5vZGUpO1xuUmVnaXN0cnkuYWRkKCdSb290Tm9kZScsIFJvb3ROb2RlKTtcblJlZ2lzdHJ5LmFkZCgnYnVsbGV0JywgVW5vcmRlcmVkTGlzdE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdoZWFkZXInLCBIZWFkZXJOb2RlKTtcblJlZ2lzdHJ5LmFkZCgndW5kZXJsaW5lJywgVW5kZXJsaW5lTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ3N0cmlrZXRocm91Z2gnLCBTdHJpa2V0aHJvdWdoTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2NvbG9yJywgQ29sb3JOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnYmdjb2xvcicsIEJhY2tncm91bmRDb2xvck5vZGUpO1xuUmVnaXN0cnkuYWRkKCdzdWJzY3JpcHQnLCBTdXBlcnNjcmlwdE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdzdXBlcnNjcmlwdCcsIFN1YnNjcmlwdE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdTcGFuTm9kZScsIFNwYW5Ob2RlKTtcblJlZ2lzdHJ5LmFkZCgnQmxvY2tOb2RlJywgQmxvY2tOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnaW1hZ2UnLCBJbWFnZU5vZGUpO1xuXG5mdW5jdGlvbiB0b2tlbml6ZShvcHMpIHtcbiAgY29uc3QgcmV0VmFsID0gW107XG4gIG9wcy5mb3JFYWNoKChvcCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygb3AuaW5zZXJ0ICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0VmFsLnB1c2goe1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGNvbnRlbnRzOiBvcC5pbnNlcnQsXG4gICAgICAgIGF0dHJpYnV0ZXM6IG9wLmF0dHJpYnV0ZXMgfHwge30sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG9wLmluc2VydCA9PT0gJ1xcbicpIHtcbiAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2xpbmVicmVhaycsXG4gICAgICAgIGF0dHJpYnV0ZXM6IG9wLmF0dHJpYnV0ZXMgfHwge30sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG9wLmluc2VydC5pbmRleE9mKCdcXG4nKSA8IDApIHtcbiAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBjb250ZW50czogb3AuaW5zZXJ0LFxuICAgICAgICBhdHRyaWJ1dGVzOiBvcC5hdHRyaWJ1dGVzIHx8IHt9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wLmluc2VydC5zcGxpdCgnXFxuJykuZm9yRWFjaCgoc3ViVGV4dCwgaSwgYXJ5KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBURVhUOiAtJHtzdWJUZXh0fS1gKTtcbiAgICAgICAgaWYgKHN1YlRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIGNvbnRlbnRzOiBzdWJUZXh0LFxuICAgICAgICAgICAgYXR0cmlidXRlczogb3AuYXR0cmlidXRlcyB8fCB7fSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA8IChhcnkubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZWJyZWFrJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHt9LCAvLyBtaWQtaW5zZXJ0IGxpbmVicmVha3MgaGF2ZSBubyBsaW5lLWxldmVsIHN0eWxpbmdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJldFZhbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQmxvY2tzKHRva2Vucykge1xuICBjb25zdCByZXRWYWwgPSBuZXcgUm9vdE5vZGUoKTtcbiAgbGV0IGNoaWxkTGlzdCA9IFtdO1xuICB0b2tlbnMuZm9yRWFjaCgodG9rZW4pID0+IHtcbiAgICBpZiAodG9rZW4udHlwZSA9PT0gJ2xpbmVicmVhaycpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRCbG9jayA9IG5ldyAoUmVnaXN0cnkubGlzdEZvcm1hdHMoKS5maWx0ZXIoKGYpID0+IGYubWF0Y2hlcyh0b2tlbikpWzBdKSh0b2tlbik7XG4gICAgICBjaGlsZExpc3QuZm9yRWFjaCgoY2hpbGQpID0+IGN1cnJlbnRCbG9jay5hcHBlbmRDaGlsZChUcmVlTm9kZS5idWlsZChjaGlsZCkpKTtcbiAgICAgIHJldFZhbC5hYnNvcmIoY3VycmVudEJsb2NrKTtcbiAgICAgIGNoaWxkTGlzdCA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZExpc3QucHVzaCh0b2tlbik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJldFZhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybShkZWx0YSkge1xuICByZXR1cm4gY3JlYXRlQmxvY2tzKHRva2VuaXplKGRlbHRhLm9wcykpLnRvSFRNTCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVzdERlbHRhcygpIHtcbiAgY29uc3QgdGVzdFZhbCA9IHtcbiAgICBvcHM6IFtcbiAgICAgIHtpbnNlcnQ6ICdtdWx0aWxpbmUgXFxuIHZhbHVlJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuJ30sXG4gICAgICB7aW5zZXJ0OiAnc2ltcGxlIHRleHQnfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG5mb2xsb3dpbmcgdGV4dFxcblxcbid9LFxuICAgICAgLy8ge2luc2VydDogJ2J1bGxldGVkIGxpc3Qgb25lJywgYXR0cmlidXRlczoge2xpbms6ICdsaW5rVGFyZ2V0J319LFxuICAgICAgLy8ge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtsaXN0OiAnYnVsbGV0J319LFxuICAgICAgLy8ge2luc2VydDogJ2J1bGxldGVkIGxpc3QgdHdvJ30sXG4gICAgICAvLyB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2xpc3Q6ICdidWxsZXQnfX0sXG4gICAgICAvLyB7aW5zZXJ0OiAnYnVsbGV0ZWQgbGlzdCB0aHJlZSd9LFxuICAgICAgLy8ge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtsaXN0OiAnYnVsbGV0J319LFxuICAgICAgLy8ge2luc2VydDogJ251bWJlcmVkIGxpc3Qgb25lJ30sXG4gICAgICAvLyB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2xpc3Q6ICdvcmRlcmVkJ319LFxuICAgICAgLy8ge2luc2VydDogJ251bWJlcmVkIGxpc3QgdHdvJ30sXG4gICAgICAvLyB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2xpc3Q6ICdvcmRlcmVkJ319LFxuICAgICAgLy8ge2luc2VydDogJ251bWJlcmVkIGxpc3QgdGhyZWUnfSxcbiAgICAgIC8vIHtpbnNlcnQ6ICdcXG4nLCBhdHRyaWJ1dGVzOiB7bGlzdDogJ29yZGVyZWQnfX0sXG4gICAgICAvLyB7aW5zZXJ0OiAnaGVhZGVyIHR3byd9LFxuICAgICAgLy8ge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtoZWFkZXI6IDJ9fSxcbiAgICAgIC8vIHtpbnNlcnQ6ICd1bmRlcmxpbmVkIGhlYWRlciBvbmUnLCBhdHRyaWJ1dGVzOiB7dW5kZXJsaW5lOiB0cnVlfX0sXG4gICAgICAvLyB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2hlYWRlcjogMX19LFxuICAgICAgLy8ge2luc2VydDogJ3JlZCcsIGF0dHJpYnV0ZXM6IHtjb2xvcjogJ3JlZCd9fSxcbiAgICAgIC8vIHtpbnNlcnQ6ICdiZ3JlZCcsIGF0dHJpYnV0ZXM6IHtiZzogJ3JlZCd9fSxcbiAgICAgIC8vIHtpbnNlcnQ6ICdzdHJpa2V0aHJ1JywgYXR0cmlidXRlczoge3N0cmlrZTogdHJ1ZX19LFxuICAgICAgLy8ge2luc2VydDogJ1xcbid9LFxuICAgICAgLy8ge2luc2VydDoge2ltYWdlOiAnSU1BR0VVUkwnfX0sXG4gICAgICAvLyB7aW5zZXJ0OiAnZXNjYXBlZCBIVE1MICYgPCA+IFwiIFxcJyAmJ30sXG4gICAgICAvLyB7aW5zZXJ0OiAnXFxuJ30sXG4gICAgICAvLyB7aW5zZXJ0OiAnZ29pbmcgTlVUUycsIGF0dHJpYnV0ZXM6IHtcbiAgICAgIC8vICAgaXRhbGljOiB0cnVlLFxuICAgICAgLy8gICBib2xkOiB0cnVlLFxuICAgICAgLy8gICBzdWI6IHRydWUsXG4gICAgICAvLyAgIHN1cGVyOiB0cnVlLFxuICAgICAgLy8gICBiZzogJyMwMDAwMDAnLFxuICAgICAgLy8gICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgLy8gICBzdHJpa2U6IHRydWUsXG4gICAgICAvLyAgIHVuZGVybGluZTogdHJ1ZSxcbiAgICAgIC8vIH19LFxuICAgICAgLy8ge2luc2VydDogJ1xcbid9LFxuICAgICAgLy8ge2luc2VydDogJ2JvbGQgbXVsdGlsaW5lXFxudmFsdWUnLCBhdHRyaWJ1dGVzOiB7Ym9sZDogdHJ1ZX19LFxuICAgICAgLy8ge2luc2VydDogJ2l0YWxpYyB2YWx1ZScsIGF0dHJpYnV0ZXM6IHtpdGFsaWM6IHRydWV9fSxcbiAgICAgIHtpbnNlcnQ6ICdib2xkLWl0YWxpYyB2YWx1ZScsIGF0dHJpYnV0ZXM6IHtib2xkOiB0cnVlLCBpdGFsaWM6IHRydWV9fSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nfSxcbiAgICBdLFxuICB9O1xuICBjb25zb2xlLmxvZygndGVzdGluZyB1bmlxdWVuZXNzIG9uIHNvcnQga2V5cycpO1xuICBSZWdpc3RyeS5jaGVja1ByaW9yaXRpZXMoKTtcbiAgY29uc29sZS5sb2codHJhbnNmb3JtKHRlc3RWYWwpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
