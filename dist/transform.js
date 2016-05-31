'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Registry = undefined;
exports.transform = transform;
exports.transformAsync = transformAsync;
exports.plainText = plainText;
exports.plainTextAsync = plainTextAsync;
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
      op.insert.split('\n').forEach(function (subText) {
        if (subText.length > 0) {
          retVal.push({
            type: 'text',
            contents: subText,
            attributes: op.attributes || {}
          });
        } else {
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

function plainTextAsync(delta) {
  return createBlocks(tokenize(delta.ops)).plainTextAsync();
}

function testDeltas() {
  var testVal = {
    ops: [{ insert: 'multiline \n value' }, { insert: '\n' }, { insert: 'simple text' }, { insert: ' with a\n' }, { insert: '\nfollowing text\n\n' }, { insert: 'bulleted list one', attributes: { link: 'linkTarget' } }, { insert: '\n', attributes: { list: 'bullet' } }, { insert: 'bulleted list two' }, { insert: '\n', attributes: { list: 'bullet' } }, { insert: 'bulleted list three' }, { insert: '\n', attributes: { list: 'bullet' } }, { insert: 'numbered list one' }, { insert: '\n', attributes: { list: 'ordered' } }, { insert: 'numbered list two' }, { insert: '\n', attributes: { ordered: true } }, { insert: 'numbered list three' }, { insert: '\n', attributes: { list: 'ordered' } }, { insert: 'header two' }, { insert: '\n', attributes: { header: 2 } }, { insert: 'underlined header one', attributes: { underline: true } }, { insert: '\n', attributes: { header: 1 } }, { insert: 'red', attributes: { color: 'red' } }, { insert: 'bgred', attributes: { bg: 'red' } }, { insert: 'strikethru', attributes: { strike: true } }, { insert: '\n' }, { insert: { image: 'IMAGEURL' } }, { insert: 'escaped HTML & < > " \' &' }, { insert: '\n' }, { insert: 'empty newline should have nbsp (four after this)\n\n\n' }, { insert: '\n' }, { insert: '\n' }, { insert: 'old image style:' }, { insert: '1', attributes: { image: 'IMAGEURL' } }, { insert: '\n' }, { insert: 'going NUTS', attributes: {
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
  // console.log('plain text alt');
  // console.log(plainText(testVal));
  // transformAsync(testVal)
  // .then((html) => {
  //   console.log('async transform');
  //   console.log(html);
  // });
  // plainTextAsync(testVal)
  // .then((pt) => {
  //   console.log('async plain');
  //   console.log(pt);
  // });
}
//# sourceMappingURL=data:application/json;base64,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MkI7QUF3RDNCLFVBQVEsR0FBUixDQUFZLFVBQVUsT0FBVixDQUFaOzs7Ozs7Ozs7Ozs7O0FBeEQyQixDQUF0QiIsImZpbGUiOiJ0cmFuc2Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWcgZnJvbSAnLi9yZWdpc3RyeSc7XG5cbmV4cG9ydCBjb25zdCBSZWdpc3RyeSA9IFJlZztcblxuaW1wb3J0IEJvbGROb2RlIGZyb20gJy4vbWluaURPTS9ib2xkJztcbmltcG9ydCBJdGFsaWNOb2RlIGZyb20gJy4vbWluaURPTS9pdGFsaWMnO1xuaW1wb3J0IExpbmtOb2RlIGZyb20gJy4vbWluaURPTS9saW5rJztcbmltcG9ydCBMaXN0SXRlbU5vZGUgZnJvbSAnLi9taW5pRE9NL2xpc3RJdGVtJztcbmltcG9ydCBPcmRlcmVkTGlzdE5vZGUgZnJvbSAnLi9taW5pRE9NL29yZGVyZWRMaXN0JztcbmltcG9ydCBQYXJhZ3JhcGhOb2RlIGZyb20gJy4vbWluaURPTS9wYXJhZ3JhcGgnO1xuaW1wb3J0IFRleHROb2RlIGZyb20gJy4vbWluaURPTS90ZXh0JztcbmltcG9ydCBUcmVlTm9kZSBmcm9tICcuL21pbmlET00vdHJlZU5vZGUnO1xuaW1wb3J0IFJvb3ROb2RlIGZyb20gJy4vbWluaURPTS9yb290JztcbmltcG9ydCBVbm9yZGVyZWRMaXN0Tm9kZSBmcm9tICcuL21pbmlET00vdW5vcmRlcmVkTGlzdCc7XG5pbXBvcnQgSGVhZGVyTm9kZSBmcm9tICcuL21pbmlET00vaGVhZGVyJztcbmltcG9ydCBVbmRlcmxpbmVOb2RlIGZyb20gJy4vbWluaURPTS91bmRlcmxpbmUnO1xuaW1wb3J0IFN0cmlrZXRocm91Z2hOb2RlIGZyb20gJy4vbWluaURPTS9zdHJpa2V0aHJvdWdoJztcbmltcG9ydCBDb2xvck5vZGUgZnJvbSAnLi9taW5pRE9NL2NvbG9yJztcbmltcG9ydCBCYWNrZ3JvdW5kQ29sb3JOb2RlIGZyb20gJy4vbWluaURPTS9iZ2NvbG9yJztcbmltcG9ydCBTdXBlcnNjcmlwdE5vZGUgZnJvbSAnLi9taW5pRE9NL3N1cGVyc2NyaXB0JztcbmltcG9ydCBTdWJzY3JpcHROb2RlIGZyb20gJy4vbWluaURPTS9zdWJzY3JpcHQnO1xuaW1wb3J0IFNwYW5Ob2RlIGZyb20gJy4vbWluaURPTS9zcGFuJztcbmltcG9ydCBCbG9ja05vZGUgZnJvbSAnLi9taW5pRE9NL2Jsb2NrJztcbmltcG9ydCBJbWFnZU5vZGUgZnJvbSAnLi9taW5pRE9NL2ltYWdlJztcblxuUmVnaXN0cnkuYWRkKCdib2xkJywgQm9sZE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdpdGFsaWMnLCBJdGFsaWNOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnbGluaycsIExpbmtOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnbGlzdEl0ZW0nLCBMaXN0SXRlbU5vZGUpO1xuUmVnaXN0cnkuYWRkKCdvcmRlcmVkJywgT3JkZXJlZExpc3ROb2RlKTtcblJlZ2lzdHJ5LmFkZCgncGFyYWdyYXBoJywgUGFyYWdyYXBoTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ3RleHQnLCBUZXh0Tm9kZSk7XG5SZWdpc3RyeS5hZGQoJ1RyZWVOb2RlJywgVHJlZU5vZGUpO1xuUmVnaXN0cnkuYWRkKCdSb290Tm9kZScsIFJvb3ROb2RlKTtcblJlZ2lzdHJ5LmFkZCgnYnVsbGV0JywgVW5vcmRlcmVkTGlzdE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdoZWFkZXInLCBIZWFkZXJOb2RlKTtcblJlZ2lzdHJ5LmFkZCgndW5kZXJsaW5lJywgVW5kZXJsaW5lTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ3N0cmlrZXRocm91Z2gnLCBTdHJpa2V0aHJvdWdoTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2NvbG9yJywgQ29sb3JOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnYmdjb2xvcicsIEJhY2tncm91bmRDb2xvck5vZGUpO1xuUmVnaXN0cnkuYWRkKCdzdWJzY3JpcHQnLCBTdXBlcnNjcmlwdE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdzdXBlcnNjcmlwdCcsIFN1YnNjcmlwdE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdTcGFuTm9kZScsIFNwYW5Ob2RlKTtcblJlZ2lzdHJ5LmFkZCgnQmxvY2tOb2RlJywgQmxvY2tOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnaW1hZ2UnLCBJbWFnZU5vZGUpO1xuXG5mdW5jdGlvbiB0b2tlbml6ZShvcHMpIHtcbiAgY29uc3QgcmV0VmFsID0gW107XG4gIG9wcy5mb3JFYWNoKChvcCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygb3AuaW5zZXJ0ICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0VmFsLnB1c2goe1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGNvbnRlbnRzOiBvcC5pbnNlcnQsXG4gICAgICAgIGF0dHJpYnV0ZXM6IG9wLmF0dHJpYnV0ZXMgfHwge30sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG9wLmluc2VydCA9PT0gJ1xcbicpIHtcbiAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2xpbmVicmVhaycsXG4gICAgICAgIGF0dHJpYnV0ZXM6IG9wLmF0dHJpYnV0ZXMgfHwge30sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG9wLmluc2VydC5pbmRleE9mKCdcXG4nKSA8IDApIHtcbiAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBjb250ZW50czogb3AuaW5zZXJ0LFxuICAgICAgICBhdHRyaWJ1dGVzOiBvcC5hdHRyaWJ1dGVzIHx8IHt9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wLmluc2VydC5zcGxpdCgnXFxuJykuZm9yRWFjaCgoc3ViVGV4dCkgPT4ge1xuICAgICAgICBpZiAoc3ViVGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0VmFsLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgY29udGVudHM6IHN1YlRleHQsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBvcC5hdHRyaWJ1dGVzIHx8IHt9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lYnJlYWsnLFxuICAgICAgICAgICAgYXR0cmlidXRlczoge30sIC8vIG1pZC1pbnNlcnQgbGluZWJyZWFrcyBoYXZlIG5vIGxpbmUtbGV2ZWwgc3R5bGluZ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXRWYWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJsb2Nrcyh0b2tlbnMpIHtcbiAgY29uc3QgcmV0VmFsID0gbmV3IFJvb3ROb2RlKCk7XG4gIGxldCBjaGlsZExpc3QgPSBbXTtcbiAgdG9rZW5zLmZvckVhY2goKHRva2VuKSA9PiB7XG4gICAgaWYgKHRva2VuLnR5cGUgPT09ICdsaW5lYnJlYWsnKSB7XG4gICAgICBjb25zdCBjdXJyZW50QmxvY2sgPSBuZXcgKFJlZ2lzdHJ5Lmxpc3RGb3JtYXRzKCkuZmlsdGVyKChmKSA9PiBmLm1hdGNoZXModG9rZW4pKVswXSkodG9rZW4pO1xuICAgICAgY2hpbGRMaXN0LmZvckVhY2goKGNoaWxkKSA9PiBjdXJyZW50QmxvY2suYXBwZW5kQ2hpbGQoVHJlZU5vZGUuYnVpbGQoY2hpbGQpKSk7XG4gICAgICByZXRWYWwuYWJzb3JiKGN1cnJlbnRCbG9jayk7XG4gICAgICBjaGlsZExpc3QgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGRMaXN0LnB1c2godG9rZW4pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXRWYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0oZGVsdGEpIHtcbiAgcmV0dXJuIGNyZWF0ZUJsb2Nrcyh0b2tlbml6ZShkZWx0YS5vcHMpKS50b0hUTUwoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUFzeW5jKGRlbHRhKSB7XG4gIHJldHVybiBjcmVhdGVCbG9ja3ModG9rZW5pemUoZGVsdGEub3BzKSkudG9IVE1MQXN5bmMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYWluVGV4dChkZWx0YSkge1xuICByZXR1cm4gY3JlYXRlQmxvY2tzKHRva2VuaXplKGRlbHRhLm9wcykpLnBsYWluVGV4dCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhaW5UZXh0QXN5bmMoZGVsdGEpIHtcbiAgcmV0dXJuIGNyZWF0ZUJsb2Nrcyh0b2tlbml6ZShkZWx0YS5vcHMpKS5wbGFpblRleHRBc3luYygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVzdERlbHRhcygpIHtcbiAgY29uc3QgdGVzdFZhbCA9IHtcbiAgICBvcHM6IFtcbiAgICAgIHtpbnNlcnQ6ICdtdWx0aWxpbmUgXFxuIHZhbHVlJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuJ30sXG4gICAgICB7aW5zZXJ0OiAnc2ltcGxlIHRleHQnfSxcbiAgICAgIHtpbnNlcnQ6ICcgd2l0aCBhXFxuJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuZm9sbG93aW5nIHRleHRcXG5cXG4nfSxcbiAgICAgIHtpbnNlcnQ6ICdidWxsZXRlZCBsaXN0IG9uZScsIGF0dHJpYnV0ZXM6IHtsaW5rOiAnbGlua1RhcmdldCd9fSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nLCBhdHRyaWJ1dGVzOiB7bGlzdDogJ2J1bGxldCd9fSxcbiAgICAgIHtpbnNlcnQ6ICdidWxsZXRlZCBsaXN0IHR3byd9LFxuICAgICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtsaXN0OiAnYnVsbGV0J319LFxuICAgICAge2luc2VydDogJ2J1bGxldGVkIGxpc3QgdGhyZWUnfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nLCBhdHRyaWJ1dGVzOiB7bGlzdDogJ2J1bGxldCd9fSxcbiAgICAgIHtpbnNlcnQ6ICdudW1iZXJlZCBsaXN0IG9uZSd9LFxuICAgICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtsaXN0OiAnb3JkZXJlZCd9fSxcbiAgICAgIHtpbnNlcnQ6ICdudW1iZXJlZCBsaXN0IHR3byd9LFxuICAgICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtvcmRlcmVkOiB0cnVlfX0sXG4gICAgICB7aW5zZXJ0OiAnbnVtYmVyZWQgbGlzdCB0aHJlZSd9LFxuICAgICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtsaXN0OiAnb3JkZXJlZCd9fSxcbiAgICAgIHtpbnNlcnQ6ICdoZWFkZXIgdHdvJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2hlYWRlcjogMn19LFxuICAgICAge2luc2VydDogJ3VuZGVybGluZWQgaGVhZGVyIG9uZScsIGF0dHJpYnV0ZXM6IHt1bmRlcmxpbmU6IHRydWV9fSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nLCBhdHRyaWJ1dGVzOiB7aGVhZGVyOiAxfX0sXG4gICAgICB7aW5zZXJ0OiAncmVkJywgYXR0cmlidXRlczoge2NvbG9yOiAncmVkJ319LFxuICAgICAge2luc2VydDogJ2JncmVkJywgYXR0cmlidXRlczoge2JnOiAncmVkJ319LFxuICAgICAge2luc2VydDogJ3N0cmlrZXRocnUnLCBhdHRyaWJ1dGVzOiB7c3RyaWtlOiB0cnVlfX0sXG4gICAgICB7aW5zZXJ0OiAnXFxuJ30sXG4gICAgICB7aW5zZXJ0OiB7aW1hZ2U6ICdJTUFHRVVSTCd9fSxcbiAgICAgIHtpbnNlcnQ6ICdlc2NhcGVkIEhUTUwgJiA8ID4gXCIgXFwnICYnfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nfSxcbiAgICAgIHtpbnNlcnQ6ICdlbXB0eSBuZXdsaW5lIHNob3VsZCBoYXZlIG5ic3AgKGZvdXIgYWZ0ZXIgdGhpcylcXG5cXG5cXG4nfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nfSxcbiAgICAgIHtpbnNlcnQ6ICdvbGQgaW1hZ2Ugc3R5bGU6J30sXG4gICAgICB7aW5zZXJ0OiAnMScsIGF0dHJpYnV0ZXM6IHtpbWFnZTogJ0lNQUdFVVJMJ319LFxuICAgICAge2luc2VydDogJ1xcbid9LFxuICAgICAge2luc2VydDogJ2dvaW5nIE5VVFMnLCBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGl0YWxpYzogdHJ1ZSxcbiAgICAgICAgYm9sZDogdHJ1ZSxcbiAgICAgICAgc3ViOiB0cnVlLFxuICAgICAgICBzdXBlcjogdHJ1ZSxcbiAgICAgICAgYmc6ICcjMDAwMDAwJyxcbiAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgc3RyaWtlOiB0cnVlLFxuICAgICAgICB1bmRlcmxpbmU6IHRydWUsXG4gICAgICB9fSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nfSxcbiAgICAgIHtpbnNlcnQ6ICdib2xkIG11bHRpbGluZVxcbnZhbHVlJywgYXR0cmlidXRlczoge2JvbGQ6IHRydWV9fSxcbiAgICAgIHtpbnNlcnQ6ICdpdGFsaWMgdmFsdWUnLCBhdHRyaWJ1dGVzOiB7aXRhbGljOiB0cnVlfX0sXG4gICAgICB7aW5zZXJ0OiAnYm9sZC1pdGFsaWMgdmFsdWUnLCBhdHRyaWJ1dGVzOiB7Ym9sZDogdHJ1ZSwgaXRhbGljOiB0cnVlfX0sXG4gICAgICB7aW5zZXJ0OiAnXFxuJ30sXG4gICAgXSxcbiAgfTtcbiAgY29uc29sZS5sb2coJ3Rlc3RpbmcgdW5pcXVlbmVzcyBvbiBzb3J0IGtleXMnKTtcbiAgUmVnaXN0cnkuY2hlY2tQcmlvcml0aWVzKCk7XG4gIGNvbnNvbGUubG9nKHRyYW5zZm9ybSh0ZXN0VmFsKSk7XG4gIC8vIGNvbnNvbGUubG9nKCdwbGFpbiB0ZXh0IGFsdCcpO1xuICAvLyBjb25zb2xlLmxvZyhwbGFpblRleHQodGVzdFZhbCkpO1xuICAvLyB0cmFuc2Zvcm1Bc3luYyh0ZXN0VmFsKVxuICAvLyAudGhlbigoaHRtbCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKCdhc3luYyB0cmFuc2Zvcm0nKTtcbiAgLy8gICBjb25zb2xlLmxvZyhodG1sKTtcbiAgLy8gfSk7XG4gIC8vIHBsYWluVGV4dEFzeW5jKHRlc3RWYWwpXG4gIC8vIC50aGVuKChwdCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKCdhc3luYyBwbGFpbicpO1xuICAvLyAgIGNvbnNvbGUubG9nKHB0KTtcbiAgLy8gfSk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
