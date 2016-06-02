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
      op.insert.split('\n').forEach(function (subText, idx, ary) {
        if (subText.length > 0) {
          retVal.push({
            type: 'text',
            contents: subText,
            attributes: op.attributes || {}
          });
          if (idx < ary.length - 1) {
            retVal.push({
              type: 'linebreak',
              attributes: {} });
          }
        } else // mid-insert linebreaks have no line-level styling
          {
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
  console.log('plain text alt');
  console.log(plainText(testVal));
  transformAsync(testVal).then(function (html) {
    console.log('async transform');
    console.log(html);
  });
  plainTextAsync(testVal).then(function (pt) {
    console.log('async plain');
    console.log(pt);
  });
}
//# sourceMappingURL=data:application/json;base64,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QUFQLEVBQWEsUUFBUSxJQUFyQixFQUExQyxFQWhERyxFQWlESCxFQUFDLFFBQVEsSUFBVCxFQWpERztBQURTLEdBQWhCO0FBcURBLFVBQVEsR0FBUixDQUFZLGlDQUFaO0FBQ0EsV0FBUyxlQUFUO0FBQ0EsVUFBUSxHQUFSLENBQVksVUFBVSxPQUFWLENBQVo7QUFDQSxVQUFRLEdBQVIsQ0FBWSxnQkFBWjtBQUNBLFVBQVEsR0FBUixDQUFZLFVBQVUsT0FBVixDQUFaO0FBQ0EsaUJBQWUsT0FBZixFQUNDLElBREQsQ0FDTSxVQUFDLElBQUQsRUFBVTtBQUNkLFlBQVEsR0FBUixDQUFZLGlCQUFaO0FBQ0EsWUFBUSxHQUFSLENBQVksSUFBWjtBQUNELEdBSkQ7QUFLQSxpQkFBZSxPQUFmLEVBQ0MsSUFERCxDQUNNLFVBQUMsRUFBRCxFQUFRO0FBQ1osWUFBUSxHQUFSLENBQVksYUFBWjtBQUNBLFlBQVEsR0FBUixDQUFZLEVBQVo7QUFDRCxHQUpEO0FBS0QiLCJmaWxlIjoidHJhbnNmb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVnIGZyb20gJy4vcmVnaXN0cnknO1xuXG5leHBvcnQgY29uc3QgUmVnaXN0cnkgPSBSZWc7XG5cbmltcG9ydCBCb2xkTm9kZSBmcm9tICcuL21pbmlET00vYm9sZCc7XG5pbXBvcnQgSXRhbGljTm9kZSBmcm9tICcuL21pbmlET00vaXRhbGljJztcbmltcG9ydCBMaW5rTm9kZSBmcm9tICcuL21pbmlET00vbGluayc7XG5pbXBvcnQgTGlzdEl0ZW1Ob2RlIGZyb20gJy4vbWluaURPTS9saXN0SXRlbSc7XG5pbXBvcnQgT3JkZXJlZExpc3ROb2RlIGZyb20gJy4vbWluaURPTS9vcmRlcmVkTGlzdCc7XG5pbXBvcnQgUGFyYWdyYXBoTm9kZSBmcm9tICcuL21pbmlET00vcGFyYWdyYXBoJztcbmltcG9ydCBUZXh0Tm9kZSBmcm9tICcuL21pbmlET00vdGV4dCc7XG5pbXBvcnQgVHJlZU5vZGUgZnJvbSAnLi9taW5pRE9NL3RyZWVOb2RlJztcbmltcG9ydCBSb290Tm9kZSBmcm9tICcuL21pbmlET00vcm9vdCc7XG5pbXBvcnQgVW5vcmRlcmVkTGlzdE5vZGUgZnJvbSAnLi9taW5pRE9NL3Vub3JkZXJlZExpc3QnO1xuaW1wb3J0IEhlYWRlck5vZGUgZnJvbSAnLi9taW5pRE9NL2hlYWRlcic7XG5pbXBvcnQgVW5kZXJsaW5lTm9kZSBmcm9tICcuL21pbmlET00vdW5kZXJsaW5lJztcbmltcG9ydCBTdHJpa2V0aHJvdWdoTm9kZSBmcm9tICcuL21pbmlET00vc3RyaWtldGhyb3VnaCc7XG5pbXBvcnQgQ29sb3JOb2RlIGZyb20gJy4vbWluaURPTS9jb2xvcic7XG5pbXBvcnQgQmFja2dyb3VuZENvbG9yTm9kZSBmcm9tICcuL21pbmlET00vYmdjb2xvcic7XG5pbXBvcnQgU3VwZXJzY3JpcHROb2RlIGZyb20gJy4vbWluaURPTS9zdXBlcnNjcmlwdCc7XG5pbXBvcnQgU3Vic2NyaXB0Tm9kZSBmcm9tICcuL21pbmlET00vc3Vic2NyaXB0JztcbmltcG9ydCBTcGFuTm9kZSBmcm9tICcuL21pbmlET00vc3Bhbic7XG5pbXBvcnQgQmxvY2tOb2RlIGZyb20gJy4vbWluaURPTS9ibG9jayc7XG5pbXBvcnQgSW1hZ2VOb2RlIGZyb20gJy4vbWluaURPTS9pbWFnZSc7XG5cblJlZ2lzdHJ5LmFkZCgnYm9sZCcsIEJvbGROb2RlKTtcblJlZ2lzdHJ5LmFkZCgnaXRhbGljJywgSXRhbGljTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2xpbmsnLCBMaW5rTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2xpc3RJdGVtJywgTGlzdEl0ZW1Ob2RlKTtcblJlZ2lzdHJ5LmFkZCgnb3JkZXJlZCcsIE9yZGVyZWRMaXN0Tm9kZSk7XG5SZWdpc3RyeS5hZGQoJ3BhcmFncmFwaCcsIFBhcmFncmFwaE5vZGUpO1xuUmVnaXN0cnkuYWRkKCd0ZXh0JywgVGV4dE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdUcmVlTm9kZScsIFRyZWVOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnUm9vdE5vZGUnLCBSb290Tm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2J1bGxldCcsIFVub3JkZXJlZExpc3ROb2RlKTtcblJlZ2lzdHJ5LmFkZCgnaGVhZGVyJywgSGVhZGVyTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ3VuZGVybGluZScsIFVuZGVybGluZU5vZGUpO1xuUmVnaXN0cnkuYWRkKCdzdHJpa2V0aHJvdWdoJywgU3RyaWtldGhyb3VnaE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdjb2xvcicsIENvbG9yTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2JnY29sb3InLCBCYWNrZ3JvdW5kQ29sb3JOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnc3Vic2NyaXB0JywgU3VwZXJzY3JpcHROb2RlKTtcblJlZ2lzdHJ5LmFkZCgnc3VwZXJzY3JpcHQnLCBTdWJzY3JpcHROb2RlKTtcblJlZ2lzdHJ5LmFkZCgnU3Bhbk5vZGUnLCBTcGFuTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ0Jsb2NrTm9kZScsIEJsb2NrTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2ltYWdlJywgSW1hZ2VOb2RlKTtcblxuZnVuY3Rpb24gdG9rZW5pemUob3BzKSB7XG4gIGNvbnN0IHJldFZhbCA9IFtdO1xuICBvcHMuZm9yRWFjaCgob3ApID0+IHtcbiAgICBpZiAodHlwZW9mIG9wLmluc2VydCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBjb250ZW50czogb3AuaW5zZXJ0LFxuICAgICAgICBhdHRyaWJ1dGVzOiBvcC5hdHRyaWJ1dGVzIHx8IHt9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChvcC5pbnNlcnQgPT09ICdcXG4nKSB7XG4gICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgIHR5cGU6ICdsaW5lYnJlYWsnLFxuICAgICAgICBhdHRyaWJ1dGVzOiBvcC5hdHRyaWJ1dGVzIHx8IHt9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChvcC5pbnNlcnQuaW5kZXhPZignXFxuJykgPCAwKSB7XG4gICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgY29udGVudHM6IG9wLmluc2VydCxcbiAgICAgICAgYXR0cmlidXRlczogb3AuYXR0cmlidXRlcyB8fCB7fSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcC5pbnNlcnQuc3BsaXQoJ1xcbicpLmZvckVhY2goKHN1YlRleHQsIGlkeCwgYXJ5KSA9PiB7XG4gICAgICAgIGlmIChzdWJUZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICBjb250ZW50czogc3ViVGV4dCxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IG9wLmF0dHJpYnV0ZXMgfHwge30sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGlkeCA8IGFyeS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICdsaW5lYnJlYWsnLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7fSwgLy8gbWlkLWluc2VydCBsaW5lYnJlYWtzIGhhdmUgbm8gbGluZS1sZXZlbCBzdHlsaW5nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0VmFsLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2xpbmVicmVhaycsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7fSwgLy8gbWlkLWluc2VydCBsaW5lYnJlYWtzIGhhdmUgbm8gbGluZS1sZXZlbCBzdHlsaW5nXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXRWYWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJsb2Nrcyh0b2tlbnMpIHtcbiAgY29uc3QgcmV0VmFsID0gbmV3IFJvb3ROb2RlKCk7XG4gIGxldCBjaGlsZExpc3QgPSBbXTtcbiAgdG9rZW5zLmZvckVhY2goKHRva2VuKSA9PiB7XG4gICAgaWYgKHRva2VuLnR5cGUgPT09ICdsaW5lYnJlYWsnKSB7XG4gICAgICBjb25zdCBjdXJyZW50QmxvY2sgPSBuZXcgKFJlZ2lzdHJ5Lmxpc3RGb3JtYXRzKCkuZmlsdGVyKChmKSA9PiBmLm1hdGNoZXModG9rZW4pKVswXSkodG9rZW4pO1xuICAgICAgY2hpbGRMaXN0LmZvckVhY2goKGNoaWxkKSA9PiBjdXJyZW50QmxvY2suYXBwZW5kQ2hpbGQoVHJlZU5vZGUuYnVpbGQoY2hpbGQpKSk7XG4gICAgICByZXRWYWwuYWJzb3JiKGN1cnJlbnRCbG9jayk7XG4gICAgICBjaGlsZExpc3QgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGRMaXN0LnB1c2godG9rZW4pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXRWYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0oZGVsdGEpIHtcbiAgcmV0dXJuIGNyZWF0ZUJsb2Nrcyh0b2tlbml6ZShkZWx0YS5vcHMpKS50b0hUTUwoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUFzeW5jKGRlbHRhKSB7XG4gIHJldHVybiBjcmVhdGVCbG9ja3ModG9rZW5pemUoZGVsdGEub3BzKSkudG9IVE1MQXN5bmMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYWluVGV4dChkZWx0YSkge1xuICByZXR1cm4gY3JlYXRlQmxvY2tzKHRva2VuaXplKGRlbHRhLm9wcykpLnBsYWluVGV4dCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhaW5UZXh0QXN5bmMoZGVsdGEpIHtcbiAgcmV0dXJuIGNyZWF0ZUJsb2Nrcyh0b2tlbml6ZShkZWx0YS5vcHMpKS5wbGFpblRleHRBc3luYygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVzdERlbHRhcygpIHtcbiAgY29uc3QgdGVzdFZhbCA9IHtcbiAgICBvcHM6IFtcbiAgICAgIHtpbnNlcnQ6ICdtdWx0aWxpbmUgXFxuIHZhbHVlJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuJ30sXG4gICAgICB7aW5zZXJ0OiAnc2ltcGxlIHRleHQnfSxcbiAgICAgIHtpbnNlcnQ6ICcgd2l0aCBhXFxuJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuZm9sbG93aW5nIHRleHRcXG5cXG4nfSxcbiAgICAgIHtpbnNlcnQ6ICdidWxsZXRlZCBsaXN0IG9uZScsIGF0dHJpYnV0ZXM6IHtsaW5rOiAnbGlua1RhcmdldCd9fSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nLCBhdHRyaWJ1dGVzOiB7bGlzdDogJ2J1bGxldCd9fSxcbiAgICAgIHtpbnNlcnQ6ICdidWxsZXRlZCBsaXN0IHR3byd9LFxuICAgICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtsaXN0OiAnYnVsbGV0J319LFxuICAgICAge2luc2VydDogJ2J1bGxldGVkIGxpc3QgdGhyZWUnfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nLCBhdHRyaWJ1dGVzOiB7bGlzdDogJ2J1bGxldCd9fSxcbiAgICAgIHtpbnNlcnQ6ICdudW1iZXJlZCBsaXN0IG9uZSd9LFxuICAgICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtsaXN0OiAnb3JkZXJlZCd9fSxcbiAgICAgIHtpbnNlcnQ6ICdudW1iZXJlZCBsaXN0IHR3byd9LFxuICAgICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtvcmRlcmVkOiB0cnVlfX0sXG4gICAgICB7aW5zZXJ0OiAnbnVtYmVyZWQgbGlzdCB0aHJlZSd9LFxuICAgICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtsaXN0OiAnb3JkZXJlZCd9fSxcbiAgICAgIHtpbnNlcnQ6ICdoZWFkZXIgdHdvJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2hlYWRlcjogMn19LFxuICAgICAge2luc2VydDogJ3VuZGVybGluZWQgaGVhZGVyIG9uZScsIGF0dHJpYnV0ZXM6IHt1bmRlcmxpbmU6IHRydWV9fSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nLCBhdHRyaWJ1dGVzOiB7aGVhZGVyOiAxfX0sXG4gICAgICB7aW5zZXJ0OiAncmVkJywgYXR0cmlidXRlczoge2NvbG9yOiAncmVkJ319LFxuICAgICAge2luc2VydDogJ2JncmVkJywgYXR0cmlidXRlczoge2JnOiAncmVkJ319LFxuICAgICAge2luc2VydDogJ3N0cmlrZXRocnUnLCBhdHRyaWJ1dGVzOiB7c3RyaWtlOiB0cnVlfX0sXG4gICAgICB7aW5zZXJ0OiAnXFxuJ30sXG4gICAgICB7aW5zZXJ0OiB7aW1hZ2U6ICdJTUFHRVVSTCd9fSxcbiAgICAgIHtpbnNlcnQ6ICdlc2NhcGVkIEhUTUwgJiA8ID4gXCIgXFwnICYnfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nfSxcbiAgICAgIHtpbnNlcnQ6ICdlbXB0eSBuZXdsaW5lIHNob3VsZCBoYXZlIG5ic3AgKGZvdXIgYWZ0ZXIgdGhpcylcXG5cXG5cXG4nfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nfSxcbiAgICAgIHtpbnNlcnQ6ICdvbGQgaW1hZ2Ugc3R5bGU6J30sXG4gICAgICB7aW5zZXJ0OiAnMScsIGF0dHJpYnV0ZXM6IHtpbWFnZTogJ0lNQUdFVVJMJ319LFxuICAgICAge2luc2VydDogJ1xcbid9LFxuICAgICAge2luc2VydDogJ2dvaW5nIE5VVFMnLCBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGl0YWxpYzogdHJ1ZSxcbiAgICAgICAgYm9sZDogdHJ1ZSxcbiAgICAgICAgc3ViOiB0cnVlLFxuICAgICAgICBzdXBlcjogdHJ1ZSxcbiAgICAgICAgYmc6ICcjMDAwMDAwJyxcbiAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgc3RyaWtlOiB0cnVlLFxuICAgICAgICB1bmRlcmxpbmU6IHRydWUsXG4gICAgICB9fSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nfSxcbiAgICAgIHtpbnNlcnQ6ICdib2xkIG11bHRpbGluZVxcbnZhbHVlJywgYXR0cmlidXRlczoge2JvbGQ6IHRydWV9fSxcbiAgICAgIHtpbnNlcnQ6ICdpdGFsaWMgdmFsdWUnLCBhdHRyaWJ1dGVzOiB7aXRhbGljOiB0cnVlfX0sXG4gICAgICB7aW5zZXJ0OiAnYm9sZC1pdGFsaWMgdmFsdWUnLCBhdHRyaWJ1dGVzOiB7Ym9sZDogdHJ1ZSwgaXRhbGljOiB0cnVlfX0sXG4gICAgICB7aW5zZXJ0OiAnXFxuJ30sXG4gICAgXSxcbiAgfTtcbiAgY29uc29sZS5sb2coJ3Rlc3RpbmcgdW5pcXVlbmVzcyBvbiBzb3J0IGtleXMnKTtcbiAgUmVnaXN0cnkuY2hlY2tQcmlvcml0aWVzKCk7XG4gIGNvbnNvbGUubG9nKHRyYW5zZm9ybSh0ZXN0VmFsKSk7XG4gIGNvbnNvbGUubG9nKCdwbGFpbiB0ZXh0IGFsdCcpO1xuICBjb25zb2xlLmxvZyhwbGFpblRleHQodGVzdFZhbCkpO1xuICB0cmFuc2Zvcm1Bc3luYyh0ZXN0VmFsKVxuICAudGhlbigoaHRtbCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdhc3luYyB0cmFuc2Zvcm0nKTtcbiAgICBjb25zb2xlLmxvZyhodG1sKTtcbiAgfSk7XG4gIHBsYWluVGV4dEFzeW5jKHRlc3RWYWwpXG4gIC50aGVuKChwdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdhc3luYyBwbGFpbicpO1xuICAgIGNvbnNvbGUubG9nKHB0KTtcbiAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
