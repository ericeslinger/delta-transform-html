'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Registry = undefined;
exports.transform = transform;
exports.transformAsync = transformAsync;
exports.plainText = plainText;
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

function transformAsync(delta) {
  return createBlocks(tokenize(delta.ops)).toHTMLAsync();
}

function plainText(delta) {
  return createBlocks(tokenize(delta.ops)).plainText();
}

function testDeltas() {
  var testVal = {
    ops: [{ insert: 'multiline \n value' }, { insert: '\n' }, { insert: 'simple text' }, { insert: '\nfollowing text\n\n' }, { insert: 'bulleted list one', attributes: { link: 'linkTarget' } }, { insert: '\n', attributes: { list: 'bullet' } }, { insert: 'bulleted list two' }, { insert: '\n', attributes: { list: 'bullet' } }, { insert: 'bulleted list three' }, { insert: '\n', attributes: { list: 'bullet' } }, { insert: 'numbered list one' }, { insert: '\n', attributes: { list: 'ordered' } }, { insert: 'numbered list two' }, { insert: '\n', attributes: { ordered: true } }, { insert: 'numbered list three' }, { insert: '\n', attributes: { list: 'ordered' } }, { insert: 'header two' }, { insert: '\n', attributes: { header: 2 } }, { insert: 'underlined header one', attributes: { underline: true } }, { insert: '\n', attributes: { header: 1 } }, { insert: 'red', attributes: { color: 'red' } }, { insert: 'bgred', attributes: { bg: 'red' } }, { insert: 'strikethru', attributes: { strike: true } }, { insert: '\n' }, { insert: { image: 'IMAGEURL' } }, { insert: 'escaped HTML & < > " \' &' }, { insert: '\n' }, { insert: 'empty newline should have nbsp\n\n\n' }, { insert: '\n' }, { insert: '\n' }, { insert: 'old image style:' }, { insert: '1', attributes: { image: 'IMAGEURL' } }, { insert: '\n' }, { insert: 'going NUTS', attributes: {
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
  console.log('plain text alt');
  console.log(plainText(testVal));
  transformAsync(testVal).then(function (html) {
    console.log('async transform');
    console.log(html);
  });
}
//# sourceMappingURL=data:application/json;base64,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WixFQXhEMkI7QUF5RDNCLFVBQVEsR0FBUixDQUFZLFVBQVUsT0FBVixDQUFaLEVBekQyQjtBQTBEM0IsaUJBQWUsT0FBZixFQUNDLElBREQsQ0FDTSxVQUFDLElBQUQsRUFBVTtBQUNkLFlBQVEsR0FBUixDQUFZLGlCQUFaLEVBRGM7QUFFZCxZQUFRLEdBQVIsQ0FBWSxJQUFaLEVBRmM7R0FBVixDQUROLENBMUQyQjtDQUF0QiIsImZpbGUiOiJ0cmFuc2Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWcgZnJvbSAnLi9yZWdpc3RyeSc7XG5cbmV4cG9ydCBjb25zdCBSZWdpc3RyeSA9IFJlZztcblxuaW1wb3J0IEJvbGROb2RlIGZyb20gJy4vbWluaURPTS9ib2xkJztcbmltcG9ydCBJdGFsaWNOb2RlIGZyb20gJy4vbWluaURPTS9pdGFsaWMnO1xuaW1wb3J0IExpbmtOb2RlIGZyb20gJy4vbWluaURPTS9saW5rJztcbmltcG9ydCBMaXN0SXRlbU5vZGUgZnJvbSAnLi9taW5pRE9NL2xpc3RJdGVtJztcbmltcG9ydCBPcmRlcmVkTGlzdE5vZGUgZnJvbSAnLi9taW5pRE9NL29yZGVyZWRMaXN0JztcbmltcG9ydCBQYXJhZ3JhcGhOb2RlIGZyb20gJy4vbWluaURPTS9wYXJhZ3JhcGgnO1xuaW1wb3J0IFRleHROb2RlIGZyb20gJy4vbWluaURPTS90ZXh0JztcbmltcG9ydCBUcmVlTm9kZSBmcm9tICcuL21pbmlET00vdHJlZU5vZGUnO1xuaW1wb3J0IFJvb3ROb2RlIGZyb20gJy4vbWluaURPTS9yb290JztcbmltcG9ydCBVbm9yZGVyZWRMaXN0Tm9kZSBmcm9tICcuL21pbmlET00vdW5vcmRlcmVkTGlzdCc7XG5pbXBvcnQgSGVhZGVyTm9kZSBmcm9tICcuL21pbmlET00vaGVhZGVyJztcbmltcG9ydCBVbmRlcmxpbmVOb2RlIGZyb20gJy4vbWluaURPTS91bmRlcmxpbmUnO1xuaW1wb3J0IFN0cmlrZXRocm91Z2hOb2RlIGZyb20gJy4vbWluaURPTS9zdHJpa2V0aHJvdWdoJztcbmltcG9ydCBDb2xvck5vZGUgZnJvbSAnLi9taW5pRE9NL2NvbG9yJztcbmltcG9ydCBCYWNrZ3JvdW5kQ29sb3JOb2RlIGZyb20gJy4vbWluaURPTS9iZ2NvbG9yJztcbmltcG9ydCBTdXBlcnNjcmlwdE5vZGUgZnJvbSAnLi9taW5pRE9NL3N1cGVyc2NyaXB0JztcbmltcG9ydCBTdWJzY3JpcHROb2RlIGZyb20gJy4vbWluaURPTS9zdWJzY3JpcHQnO1xuaW1wb3J0IFNwYW5Ob2RlIGZyb20gJy4vbWluaURPTS9zcGFuJztcbmltcG9ydCBCbG9ja05vZGUgZnJvbSAnLi9taW5pRE9NL2Jsb2NrJztcbmltcG9ydCBJbWFnZU5vZGUgZnJvbSAnLi9taW5pRE9NL2ltYWdlJztcblxuUmVnaXN0cnkuYWRkKCdib2xkJywgQm9sZE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdpdGFsaWMnLCBJdGFsaWNOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnbGluaycsIExpbmtOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnbGlzdEl0ZW0nLCBMaXN0SXRlbU5vZGUpO1xuUmVnaXN0cnkuYWRkKCdvcmRlcmVkJywgT3JkZXJlZExpc3ROb2RlKTtcblJlZ2lzdHJ5LmFkZCgncGFyYWdyYXBoJywgUGFyYWdyYXBoTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ3RleHQnLCBUZXh0Tm9kZSk7XG5SZWdpc3RyeS5hZGQoJ1RyZWVOb2RlJywgVHJlZU5vZGUpO1xuUmVnaXN0cnkuYWRkKCdSb290Tm9kZScsIFJvb3ROb2RlKTtcblJlZ2lzdHJ5LmFkZCgnYnVsbGV0JywgVW5vcmRlcmVkTGlzdE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdoZWFkZXInLCBIZWFkZXJOb2RlKTtcblJlZ2lzdHJ5LmFkZCgndW5kZXJsaW5lJywgVW5kZXJsaW5lTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ3N0cmlrZXRocm91Z2gnLCBTdHJpa2V0aHJvdWdoTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2NvbG9yJywgQ29sb3JOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnYmdjb2xvcicsIEJhY2tncm91bmRDb2xvck5vZGUpO1xuUmVnaXN0cnkuYWRkKCdzdWJzY3JpcHQnLCBTdXBlcnNjcmlwdE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdzdXBlcnNjcmlwdCcsIFN1YnNjcmlwdE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdTcGFuTm9kZScsIFNwYW5Ob2RlKTtcblJlZ2lzdHJ5LmFkZCgnQmxvY2tOb2RlJywgQmxvY2tOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnaW1hZ2UnLCBJbWFnZU5vZGUpO1xuXG5mdW5jdGlvbiB0b2tlbml6ZShvcHMpIHtcbiAgY29uc3QgcmV0VmFsID0gW107XG4gIG9wcy5mb3JFYWNoKChvcCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygb3AuaW5zZXJ0ICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0VmFsLnB1c2goe1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGNvbnRlbnRzOiBvcC5pbnNlcnQsXG4gICAgICAgIGF0dHJpYnV0ZXM6IG9wLmF0dHJpYnV0ZXMgfHwge30sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG9wLmluc2VydCA9PT0gJ1xcbicpIHtcbiAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2xpbmVicmVhaycsXG4gICAgICAgIGF0dHJpYnV0ZXM6IG9wLmF0dHJpYnV0ZXMgfHwge30sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG9wLmluc2VydC5pbmRleE9mKCdcXG4nKSA8IDApIHtcbiAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBjb250ZW50czogb3AuaW5zZXJ0LFxuICAgICAgICBhdHRyaWJ1dGVzOiBvcC5hdHRyaWJ1dGVzIHx8IHt9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wLmluc2VydC5zcGxpdCgnXFxuJykuZm9yRWFjaCgoc3ViVGV4dCwgaSwgYXJ5KSA9PiB7XG4gICAgICAgIGlmIChzdWJUZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICBjb250ZW50czogc3ViVGV4dCxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IG9wLmF0dHJpYnV0ZXMgfHwge30sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPCAoYXJ5Lmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgcmV0VmFsLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2xpbmVicmVhaycsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7fSwgLy8gbWlkLWluc2VydCBsaW5lYnJlYWtzIGhhdmUgbm8gbGluZS1sZXZlbCBzdHlsaW5nXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXRWYWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJsb2Nrcyh0b2tlbnMpIHtcbiAgY29uc3QgcmV0VmFsID0gbmV3IFJvb3ROb2RlKCk7XG4gIGxldCBjaGlsZExpc3QgPSBbXTtcbiAgdG9rZW5zLmZvckVhY2goKHRva2VuKSA9PiB7XG4gICAgaWYgKHRva2VuLnR5cGUgPT09ICdsaW5lYnJlYWsnKSB7XG4gICAgICBjb25zdCBjdXJyZW50QmxvY2sgPSBuZXcgKFJlZ2lzdHJ5Lmxpc3RGb3JtYXRzKCkuZmlsdGVyKChmKSA9PiBmLm1hdGNoZXModG9rZW4pKVswXSkodG9rZW4pO1xuICAgICAgY2hpbGRMaXN0LmZvckVhY2goKGNoaWxkKSA9PiBjdXJyZW50QmxvY2suYXBwZW5kQ2hpbGQoVHJlZU5vZGUuYnVpbGQoY2hpbGQpKSk7XG4gICAgICByZXRWYWwuYWJzb3JiKGN1cnJlbnRCbG9jayk7XG4gICAgICBjaGlsZExpc3QgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGRMaXN0LnB1c2godG9rZW4pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXRWYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0oZGVsdGEpIHtcbiAgcmV0dXJuIGNyZWF0ZUJsb2Nrcyh0b2tlbml6ZShkZWx0YS5vcHMpKS50b0hUTUwoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUFzeW5jKGRlbHRhKSB7XG4gIHJldHVybiBjcmVhdGVCbG9ja3ModG9rZW5pemUoZGVsdGEub3BzKSkudG9IVE1MQXN5bmMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYWluVGV4dChkZWx0YSkge1xuICByZXR1cm4gY3JlYXRlQmxvY2tzKHRva2VuaXplKGRlbHRhLm9wcykpLnBsYWluVGV4dCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVzdERlbHRhcygpIHtcbiAgY29uc3QgdGVzdFZhbCA9IHtcbiAgICBvcHM6IFtcbiAgICAgIHtpbnNlcnQ6ICdtdWx0aWxpbmUgXFxuIHZhbHVlJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuJ30sXG4gICAgICB7aW5zZXJ0OiAnc2ltcGxlIHRleHQnfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG5mb2xsb3dpbmcgdGV4dFxcblxcbid9LFxuICAgICAge2luc2VydDogJ2J1bGxldGVkIGxpc3Qgb25lJywgYXR0cmlidXRlczoge2xpbms6ICdsaW5rVGFyZ2V0J319LFxuICAgICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtsaXN0OiAnYnVsbGV0J319LFxuICAgICAge2luc2VydDogJ2J1bGxldGVkIGxpc3QgdHdvJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2xpc3Q6ICdidWxsZXQnfX0sXG4gICAgICB7aW5zZXJ0OiAnYnVsbGV0ZWQgbGlzdCB0aHJlZSd9LFxuICAgICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtsaXN0OiAnYnVsbGV0J319LFxuICAgICAge2luc2VydDogJ251bWJlcmVkIGxpc3Qgb25lJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2xpc3Q6ICdvcmRlcmVkJ319LFxuICAgICAge2luc2VydDogJ251bWJlcmVkIGxpc3QgdHdvJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge29yZGVyZWQ6IHRydWV9fSxcbiAgICAgIHtpbnNlcnQ6ICdudW1iZXJlZCBsaXN0IHRocmVlJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2xpc3Q6ICdvcmRlcmVkJ319LFxuICAgICAge2luc2VydDogJ2hlYWRlciB0d28nfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nLCBhdHRyaWJ1dGVzOiB7aGVhZGVyOiAyfX0sXG4gICAgICB7aW5zZXJ0OiAndW5kZXJsaW5lZCBoZWFkZXIgb25lJywgYXR0cmlidXRlczoge3VuZGVybGluZTogdHJ1ZX19LFxuICAgICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtoZWFkZXI6IDF9fSxcbiAgICAgIHtpbnNlcnQ6ICdyZWQnLCBhdHRyaWJ1dGVzOiB7Y29sb3I6ICdyZWQnfX0sXG4gICAgICB7aW5zZXJ0OiAnYmdyZWQnLCBhdHRyaWJ1dGVzOiB7Ymc6ICdyZWQnfX0sXG4gICAgICB7aW5zZXJ0OiAnc3RyaWtldGhydScsIGF0dHJpYnV0ZXM6IHtzdHJpa2U6IHRydWV9fSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nfSxcbiAgICAgIHtpbnNlcnQ6IHtpbWFnZTogJ0lNQUdFVVJMJ319LFxuICAgICAge2luc2VydDogJ2VzY2FwZWQgSFRNTCAmIDwgPiBcIiBcXCcgJid9LFxuICAgICAge2luc2VydDogJ1xcbid9LFxuICAgICAge2luc2VydDogJ2VtcHR5IG5ld2xpbmUgc2hvdWxkIGhhdmUgbmJzcFxcblxcblxcbid9LFxuICAgICAge2luc2VydDogJ1xcbid9LFxuICAgICAge2luc2VydDogJ1xcbid9LFxuICAgICAge2luc2VydDogJ29sZCBpbWFnZSBzdHlsZTonfSxcbiAgICAgIHtpbnNlcnQ6ICcxJywgYXR0cmlidXRlczoge2ltYWdlOiAnSU1BR0VVUkwnfX0sXG4gICAgICB7aW5zZXJ0OiAnXFxuJ30sXG4gICAgICB7aW5zZXJ0OiAnZ29pbmcgTlVUUycsIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgaXRhbGljOiB0cnVlLFxuICAgICAgICBib2xkOiB0cnVlLFxuICAgICAgICBzdWI6IHRydWUsXG4gICAgICAgIHN1cGVyOiB0cnVlLFxuICAgICAgICBiZzogJyMwMDAwMDAnLFxuICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICBzdHJpa2U6IHRydWUsXG4gICAgICAgIHVuZGVybGluZTogdHJ1ZSxcbiAgICAgIH19LFxuICAgICAge2luc2VydDogJ1xcbid9LFxuICAgICAge2luc2VydDogJ2JvbGQgbXVsdGlsaW5lXFxudmFsdWUnLCBhdHRyaWJ1dGVzOiB7Ym9sZDogdHJ1ZX19LFxuICAgICAge2luc2VydDogJ2l0YWxpYyB2YWx1ZScsIGF0dHJpYnV0ZXM6IHtpdGFsaWM6IHRydWV9fSxcbiAgICAgIHtpbnNlcnQ6ICdib2xkLWl0YWxpYyB2YWx1ZScsIGF0dHJpYnV0ZXM6IHtib2xkOiB0cnVlLCBpdGFsaWM6IHRydWV9fSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nfSxcbiAgICBdLFxuICB9O1xuICBjb25zb2xlLmxvZygndGVzdGluZyB1bmlxdWVuZXNzIG9uIHNvcnQga2V5cycpO1xuICBSZWdpc3RyeS5jaGVja1ByaW9yaXRpZXMoKTtcbiAgY29uc29sZS5sb2codHJhbnNmb3JtKHRlc3RWYWwpKTtcbiAgY29uc29sZS5sb2coJ3BsYWluIHRleHQgYWx0Jyk7XG4gIGNvbnNvbGUubG9nKHBsYWluVGV4dCh0ZXN0VmFsKSk7XG4gIHRyYW5zZm9ybUFzeW5jKHRlc3RWYWwpXG4gIC50aGVuKChodG1sKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2FzeW5jIHRyYW5zZm9ybScpO1xuICAgIGNvbnNvbGUubG9nKGh0bWwpO1xuICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
