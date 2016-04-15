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
        if (subText === '') {
          return; // end of line was \n
        }
        retVal.push({
          type: 'text',
          contents: subText,
          attributes: op.attributes || {}
        });
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

// function assembleLines(blocks) {
//   blocks.forEach((block) => {
//     const blockNode = new block.Type(block); // eslint-disable-line new-cap
//     retVal.absorb(blockNode);
//     block.children.forEach((child) => {
//       blockNode.appendChild(TreeNode.build(child));
//     });
//   });
//   return retVal;
// }

function transform(delta) {
  return createBlocks(tokenize(delta.ops)).toHTML();
}

function testDeltas() {
  var testVal = {
    ops: [{ insert: 'multiline \n value' }, { insert: '\n' }, { insert: 'bulleted list one', attributes: { link: 'linkTarget' } }, { insert: '\n', attributes: { list: 'bullet' } }, { insert: 'bulleted list two' }, { insert: '\n', attributes: { list: 'bullet' } }, { insert: 'bulleted list three' }, { insert: '\n', attributes: { list: 'bullet' } }, { insert: 'numbered list one' }, { insert: '\n', attributes: { list: 'ordered' } }, { insert: 'numbered list two' }, { insert: '\n', attributes: { list: 'ordered' } }, { insert: 'numbered list three' }, { insert: '\n', attributes: { list: 'ordered' } }, { insert: 'header two' }, { insert: '\n', attributes: { header: 2 } }, { insert: 'underlined header one', attributes: { underline: true } }, { insert: '\n', attributes: { header: 1 } }, { insert: 'red', attributes: { color: 'red' } }, { insert: 'bgred', attributes: { bg: 'red' } }, { insert: 'strikethru', attributes: { strike: true } }, { insert: '\n' }, { insert: 'escaped HTML & < > " \' &' }, { insert: '\n' }, { insert: 'going NUTS', attributes: {
        italic: true,
        bold: true,
        sub: true,
        super: true,
        bg: '#000000',
        color: '#ffffff',
        strike: true,
        underline: true
      } }, { insert: '\n' }, { insert: 'bold multiline\nvalue', attributes: { bold: true } }, { insert: 'italic value', attributes: { italic: true } }, { insert: 'bold-italic value', attributes: { bold: true, italic: true } }, { insert: '\n' }]
  };
  console.log('testing uniqueness on sort keys');
  Registry.checkPriorities();
  console.log(transform(testVal));
}
//# sourceMappingURL=data:application/json;base64,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L0IsRUFxQ0gsRUFBQyxRQUFRLGNBQVIsRUFBd0IsWUFBWSxFQUFDLFFBQVEsSUFBUixFQUFiLEVBckN0QixFQXNDSCxFQUFDLFFBQVEsbUJBQVIsRUFBNkIsWUFBWSxFQUFDLE1BQU0sSUFBTixFQUFZLFFBQVEsSUFBUixFQUF6QixFQXRDM0IsRUF1Q0gsRUFBQyxRQUFRLElBQVIsRUF2Q0UsQ0FBTDtHQURJLENBRHFCO0FBNEMzQixVQUFRLEdBQVIsQ0FBWSxpQ0FBWixFQTVDMkI7QUE2QzNCLFdBQVMsZUFBVCxHQTdDMkI7QUE4QzNCLFVBQVEsR0FBUixDQUFZLFVBQVUsT0FBVixDQUFaLEVBOUMyQjtDQUF0QiIsImZpbGUiOiJ0cmFuc2Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWcgZnJvbSAnLi9yZWdpc3RyeSc7XG5cbmV4cG9ydCBjb25zdCBSZWdpc3RyeSA9IFJlZztcblxuaW1wb3J0IEJvbGROb2RlIGZyb20gJy4vbWluaURPTS9ib2xkJztcbmltcG9ydCBJdGFsaWNOb2RlIGZyb20gJy4vbWluaURPTS9pdGFsaWMnO1xuaW1wb3J0IExpbmtOb2RlIGZyb20gJy4vbWluaURPTS9saW5rJztcbmltcG9ydCBMaXN0SXRlbU5vZGUgZnJvbSAnLi9taW5pRE9NL2xpc3RJdGVtJztcbmltcG9ydCBPcmRlcmVkTGlzdE5vZGUgZnJvbSAnLi9taW5pRE9NL29yZGVyZWRMaXN0JztcbmltcG9ydCBQYXJhZ3JhcGhOb2RlIGZyb20gJy4vbWluaURPTS9wYXJhZ3JhcGgnO1xuaW1wb3J0IFRleHROb2RlIGZyb20gJy4vbWluaURPTS90ZXh0JztcbmltcG9ydCBUcmVlTm9kZSBmcm9tICcuL21pbmlET00vdHJlZU5vZGUnO1xuaW1wb3J0IFJvb3ROb2RlIGZyb20gJy4vbWluaURPTS9yb290JztcbmltcG9ydCBVbm9yZGVyZWRMaXN0Tm9kZSBmcm9tICcuL21pbmlET00vdW5vcmRlcmVkTGlzdCc7XG5pbXBvcnQgSGVhZGVyTm9kZSBmcm9tICcuL21pbmlET00vaGVhZGVyJztcbmltcG9ydCBVbmRlcmxpbmVOb2RlIGZyb20gJy4vbWluaURPTS91bmRlcmxpbmUnO1xuaW1wb3J0IFN0cmlrZXRocm91Z2hOb2RlIGZyb20gJy4vbWluaURPTS9zdHJpa2V0aHJvdWdoJztcbmltcG9ydCBDb2xvck5vZGUgZnJvbSAnLi9taW5pRE9NL2NvbG9yJztcbmltcG9ydCBCYWNrZ3JvdW5kQ29sb3JOb2RlIGZyb20gJy4vbWluaURPTS9iZ2NvbG9yJztcbmltcG9ydCBTdXBlcnNjcmlwdE5vZGUgZnJvbSAnLi9taW5pRE9NL3N1cGVyc2NyaXB0JztcbmltcG9ydCBTdWJzY3JpcHROb2RlIGZyb20gJy4vbWluaURPTS9zdWJzY3JpcHQnO1xuXG5SZWdpc3RyeS5hZGQoJ2JvbGQnLCBCb2xkTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2l0YWxpYycsIEl0YWxpY05vZGUpO1xuUmVnaXN0cnkuYWRkKCdsaW5rJywgTGlua05vZGUpO1xuUmVnaXN0cnkuYWRkKCdsaXN0SXRlbScsIExpc3RJdGVtTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ29yZGVyZWQnLCBPcmRlcmVkTGlzdE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdwYXJhZ3JhcGgnLCBQYXJhZ3JhcGhOb2RlKTtcblJlZ2lzdHJ5LmFkZCgndGV4dCcsIFRleHROb2RlKTtcblJlZ2lzdHJ5LmFkZCgnVHJlZU5vZGUnLCBUcmVlTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ1Jvb3ROb2RlJywgUm9vdE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdidWxsZXQnLCBVbm9yZGVyZWRMaXN0Tm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2hlYWRlcicsIEhlYWRlck5vZGUpO1xuUmVnaXN0cnkuYWRkKCd1bmRlcmxpbmUnLCBVbmRlcmxpbmVOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnc3RyaWtldGhyb3VnaCcsIFN0cmlrZXRocm91Z2hOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnY29sb3InLCBDb2xvck5vZGUpO1xuUmVnaXN0cnkuYWRkKCdiZ2NvbG9yJywgQmFja2dyb3VuZENvbG9yTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ3N1YnNjcmlwdCcsIFN1cGVyc2NyaXB0Tm9kZSk7XG5SZWdpc3RyeS5hZGQoJ3N1cGVyc2NyaXB0JywgU3Vic2NyaXB0Tm9kZSk7XG5cbmZ1bmN0aW9uIHRva2VuaXplKG9wcykge1xuICBjb25zdCByZXRWYWwgPSBbXTtcbiAgb3BzLmZvckVhY2goKG9wKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBvcC5pbnNlcnQgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgY29udGVudHM6IG9wLmluc2VydCxcbiAgICAgICAgYXR0cmlidXRlczogb3AuYXR0cmlidXRlcyB8fCB7fSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAob3AuaW5zZXJ0ID09PSAnXFxuJykge1xuICAgICAgcmV0VmFsLnB1c2goe1xuICAgICAgICB0eXBlOiAnbGluZWJyZWFrJyxcbiAgICAgICAgYXR0cmlidXRlczogb3AuYXR0cmlidXRlcyB8fCB7fSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAob3AuaW5zZXJ0LmluZGV4T2YoJ1xcbicpIDwgMCkge1xuICAgICAgcmV0VmFsLnB1c2goe1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGNvbnRlbnRzOiBvcC5pbnNlcnQsXG4gICAgICAgIGF0dHJpYnV0ZXM6IG9wLmF0dHJpYnV0ZXMgfHwge30sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3AuaW5zZXJ0LnNwbGl0KCdcXG4nKS5mb3JFYWNoKChzdWJUZXh0LCBpLCBhcnkpID0+IHtcbiAgICAgICAgaWYgKHN1YlRleHQgPT09ICcnKSB7XG4gICAgICAgICAgcmV0dXJuOyAvLyBlbmQgb2YgbGluZSB3YXMgXFxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0VmFsLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICBjb250ZW50czogc3ViVGV4dCxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBvcC5hdHRyaWJ1dGVzIHx8IHt9LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGkgPCAoYXJ5Lmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgcmV0VmFsLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2xpbmVicmVhaycsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7fSwgLy8gbWlkLWluc2VydCBsaW5lYnJlYWtzIGhhdmUgbm8gbGluZS1sZXZlbCBzdHlsaW5nXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXRWYWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJsb2Nrcyh0b2tlbnMpIHtcbiAgY29uc3QgcmV0VmFsID0gbmV3IFJvb3ROb2RlKCk7XG4gIGxldCBjaGlsZExpc3QgPSBbXTtcbiAgdG9rZW5zLmZvckVhY2goKHRva2VuKSA9PiB7XG4gICAgaWYgKHRva2VuLnR5cGUgPT09ICdsaW5lYnJlYWsnKSB7XG4gICAgICBjb25zdCBjdXJyZW50QmxvY2sgPSBuZXcgKFJlZ2lzdHJ5Lmxpc3RGb3JtYXRzKCkuZmlsdGVyKChmKSA9PiBmLm1hdGNoZXModG9rZW4pKVswXSkodG9rZW4pO1xuICAgICAgY2hpbGRMaXN0LmZvckVhY2goKGNoaWxkKSA9PiBjdXJyZW50QmxvY2suYXBwZW5kQ2hpbGQoVHJlZU5vZGUuYnVpbGQoY2hpbGQpKSk7XG4gICAgICByZXRWYWwuYWJzb3JiKGN1cnJlbnRCbG9jayk7XG4gICAgICBjaGlsZExpc3QgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGRMaXN0LnB1c2godG9rZW4pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXRWYWw7XG59XG5cbi8vIGZ1bmN0aW9uIGFzc2VtYmxlTGluZXMoYmxvY2tzKSB7XG4vLyAgIGJsb2Nrcy5mb3JFYWNoKChibG9jaykgPT4ge1xuLy8gICAgIGNvbnN0IGJsb2NrTm9kZSA9IG5ldyBibG9jay5UeXBlKGJsb2NrKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXG4vLyAgICAgcmV0VmFsLmFic29yYihibG9ja05vZGUpO1xuLy8gICAgIGJsb2NrLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4vLyAgICAgICBibG9ja05vZGUuYXBwZW5kQ2hpbGQoVHJlZU5vZGUuYnVpbGQoY2hpbGQpKTtcbi8vICAgICB9KTtcbi8vICAgfSk7XG4vLyAgIHJldHVybiByZXRWYWw7XG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0oZGVsdGEpIHtcbiAgcmV0dXJuIGNyZWF0ZUJsb2Nrcyh0b2tlbml6ZShkZWx0YS5vcHMpKS50b0hUTUwoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlc3REZWx0YXMoKSB7XG4gIGNvbnN0IHRlc3RWYWwgPSB7XG4gICAgb3BzOiBbXG4gICAgICB7aW5zZXJ0OiAnbXVsdGlsaW5lIFxcbiB2YWx1ZSd9LFxuICAgICAge2luc2VydDogJ1xcbid9LFxuICAgICAge2luc2VydDogJ2J1bGxldGVkIGxpc3Qgb25lJywgYXR0cmlidXRlczoge2xpbms6ICdsaW5rVGFyZ2V0J319LFxuICAgICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtsaXN0OiAnYnVsbGV0J319LFxuICAgICAge2luc2VydDogJ2J1bGxldGVkIGxpc3QgdHdvJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2xpc3Q6ICdidWxsZXQnfX0sXG4gICAgICB7aW5zZXJ0OiAnYnVsbGV0ZWQgbGlzdCB0aHJlZSd9LFxuICAgICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtsaXN0OiAnYnVsbGV0J319LFxuICAgICAge2luc2VydDogJ251bWJlcmVkIGxpc3Qgb25lJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2xpc3Q6ICdvcmRlcmVkJ319LFxuICAgICAge2luc2VydDogJ251bWJlcmVkIGxpc3QgdHdvJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2xpc3Q6ICdvcmRlcmVkJ319LFxuICAgICAge2luc2VydDogJ251bWJlcmVkIGxpc3QgdGhyZWUnfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nLCBhdHRyaWJ1dGVzOiB7bGlzdDogJ29yZGVyZWQnfX0sXG4gICAgICB7aW5zZXJ0OiAnaGVhZGVyIHR3byd9LFxuICAgICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtoZWFkZXI6IDJ9fSxcbiAgICAgIHtpbnNlcnQ6ICd1bmRlcmxpbmVkIGhlYWRlciBvbmUnLCBhdHRyaWJ1dGVzOiB7dW5kZXJsaW5lOiB0cnVlfX0sXG4gICAgICB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2hlYWRlcjogMX19LFxuICAgICAge2luc2VydDogJ3JlZCcsIGF0dHJpYnV0ZXM6IHtjb2xvcjogJ3JlZCd9fSxcbiAgICAgIHtpbnNlcnQ6ICdiZ3JlZCcsIGF0dHJpYnV0ZXM6IHtiZzogJ3JlZCd9fSxcbiAgICAgIHtpbnNlcnQ6ICdzdHJpa2V0aHJ1JywgYXR0cmlidXRlczoge3N0cmlrZTogdHJ1ZX19LFxuICAgICAge2luc2VydDogJ1xcbid9LFxuICAgICAge2luc2VydDogJ2VzY2FwZWQgSFRNTCAmIDwgPiBcIiBcXCcgJid9LFxuICAgICAge2luc2VydDogJ1xcbid9LFxuICAgICAge2luc2VydDogJ2dvaW5nIE5VVFMnLCBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGl0YWxpYzogdHJ1ZSxcbiAgICAgICAgYm9sZDogdHJ1ZSxcbiAgICAgICAgc3ViOiB0cnVlLFxuICAgICAgICBzdXBlcjogdHJ1ZSxcbiAgICAgICAgYmc6ICcjMDAwMDAwJyxcbiAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgc3RyaWtlOiB0cnVlLFxuICAgICAgICB1bmRlcmxpbmU6IHRydWUsXG4gICAgICB9fSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nfSxcbiAgICAgIHtpbnNlcnQ6ICdib2xkIG11bHRpbGluZVxcbnZhbHVlJywgYXR0cmlidXRlczoge2JvbGQ6IHRydWV9fSxcbiAgICAgIHtpbnNlcnQ6ICdpdGFsaWMgdmFsdWUnLCBhdHRyaWJ1dGVzOiB7aXRhbGljOiB0cnVlfX0sXG4gICAgICB7aW5zZXJ0OiAnYm9sZC1pdGFsaWMgdmFsdWUnLCBhdHRyaWJ1dGVzOiB7Ym9sZDogdHJ1ZSwgaXRhbGljOiB0cnVlfX0sXG4gICAgICB7aW5zZXJ0OiAnXFxuJ30sXG4gICAgXSxcbiAgfTtcbiAgY29uc29sZS5sb2coJ3Rlc3RpbmcgdW5pcXVlbmVzcyBvbiBzb3J0IGtleXMnKTtcbiAgUmVnaXN0cnkuY2hlY2tQcmlvcml0aWVzKCk7XG4gIGNvbnNvbGUubG9nKHRyYW5zZm9ybSh0ZXN0VmFsKSk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
