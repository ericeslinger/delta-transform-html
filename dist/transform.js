'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Registry = undefined;
exports.transform = transform;
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

function plainText(delta) {
  return createBlocks(tokenize(delta.ops)).plainText();
}

function testDeltas() {
  var testVal = {
    ops: [{ insert: 'multiline \n value' }, { insert: '\n' }, { insert: 'simple text' }, { insert: '\nfollowing text\n\n' }, { insert: 'bulleted list one', attributes: { link: 'linkTarget' } }, { insert: '\n', attributes: { list: 'bullet' } }, { insert: 'bulleted list two' }, { insert: '\n', attributes: { list: 'bullet' } }, { insert: 'bulleted list three' }, { insert: '\n', attributes: { list: 'bullet' } }, { insert: 'numbered list one' }, { insert: '\n', attributes: { list: 'ordered' } }, { insert: 'numbered list two' }, { insert: '\n', attributes: { list: 'ordered' } }, { insert: 'numbered list three' }, { insert: '\n', attributes: { list: 'ordered' } }, { insert: 'header two' }, { insert: '\n', attributes: { header: 2 } }, { insert: 'underlined header one', attributes: { underline: true } }, { insert: '\n', attributes: { header: 1 } }, { insert: 'red', attributes: { color: 'red' } }, { insert: 'bgred', attributes: { bg: 'red' } }, { insert: 'strikethru', attributes: { strike: true } }, { insert: '\n' }, { insert: { image: 'IMAGEURL' } }, { insert: 'escaped HTML & < > " \' &' }, { insert: '\n' }, { insert: 'empty newline should have nbsp\n\n\n' }, { insert: '\n' }, { insert: '\n' }, { insert: 'going NUTS', attributes: {
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
}
//# sourceMappingURL=data:application/json;base64,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QkFBUixFQTFCRSxFQTJCSCxFQUFDLFFBQVEsSUFBUixFQTNCRSxFQTRCSCxFQUFDLFFBQVEsc0NBQVIsRUE1QkUsRUE2QkgsRUFBQyxRQUFRLElBQVIsRUE3QkUsRUE4QkgsRUFBQyxRQUFRLElBQVIsRUE5QkUsRUErQkgsRUFBQyxRQUFRLFlBQVIsRUFBc0IsWUFBWTtBQUNqQyxnQkFBUSxJQUFSO0FBQ0EsY0FBTSxJQUFOO0FBQ0EsYUFBSyxJQUFMO0FBQ0EsZUFBTyxJQUFQO0FBQ0EsWUFBSSxTQUFKO0FBQ0EsZUFBTyxTQUFQO0FBQ0EsZ0JBQVEsSUFBUjtBQUNBLG1CQUFXLElBQVg7T0FScUIsRUEvQnBCLEVBeUNILEVBQUMsUUFBUSxJQUFSLEVBekNFLEVBMENILEVBQUMsUUFBUSx1QkFBUixFQUFpQyxZQUFZLEVBQUMsTUFBTSxJQUFOLEVBQWIsRUExQy9CLEVBMkNILEVBQUMsUUFBUSxjQUFSLEVBQXdCLFlBQVksRUFBQyxRQUFRLElBQVIsRUFBYixFQTNDdEIsRUE0Q0gsRUFBQyxRQUFRLG1CQUFSLEVBQTZCLFlBQVksRUFBQyxNQUFNLElBQU4sRUFBWSxRQUFRLElBQVIsRUFBekIsRUE1QzNCLEVBNkNILEVBQUMsUUFBUSxJQUFSLEVBN0NFLENBQUw7R0FESSxDQURxQjtBQWtEM0IsVUFBUSxHQUFSLENBQVksaUNBQVosRUFsRDJCO0FBbUQzQixXQUFTLGVBQVQsR0FuRDJCO0FBb0QzQixVQUFRLEdBQVIsQ0FBWSxVQUFVLE9BQVYsQ0FBWixFQXBEMkI7QUFxRDNCLFVBQVEsR0FBUixDQUFZLGdCQUFaLEVBckQyQjtBQXNEM0IsVUFBUSxHQUFSLENBQVksVUFBVSxPQUFWLENBQVosRUF0RDJCO0NBQXRCIiwiZmlsZSI6InRyYW5zZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlZyBmcm9tICcuL3JlZ2lzdHJ5JztcblxuZXhwb3J0IGNvbnN0IFJlZ2lzdHJ5ID0gUmVnO1xuXG5pbXBvcnQgQm9sZE5vZGUgZnJvbSAnLi9taW5pRE9NL2JvbGQnO1xuaW1wb3J0IEl0YWxpY05vZGUgZnJvbSAnLi9taW5pRE9NL2l0YWxpYyc7XG5pbXBvcnQgTGlua05vZGUgZnJvbSAnLi9taW5pRE9NL2xpbmsnO1xuaW1wb3J0IExpc3RJdGVtTm9kZSBmcm9tICcuL21pbmlET00vbGlzdEl0ZW0nO1xuaW1wb3J0IE9yZGVyZWRMaXN0Tm9kZSBmcm9tICcuL21pbmlET00vb3JkZXJlZExpc3QnO1xuaW1wb3J0IFBhcmFncmFwaE5vZGUgZnJvbSAnLi9taW5pRE9NL3BhcmFncmFwaCc7XG5pbXBvcnQgVGV4dE5vZGUgZnJvbSAnLi9taW5pRE9NL3RleHQnO1xuaW1wb3J0IFRyZWVOb2RlIGZyb20gJy4vbWluaURPTS90cmVlTm9kZSc7XG5pbXBvcnQgUm9vdE5vZGUgZnJvbSAnLi9taW5pRE9NL3Jvb3QnO1xuaW1wb3J0IFVub3JkZXJlZExpc3ROb2RlIGZyb20gJy4vbWluaURPTS91bm9yZGVyZWRMaXN0JztcbmltcG9ydCBIZWFkZXJOb2RlIGZyb20gJy4vbWluaURPTS9oZWFkZXInO1xuaW1wb3J0IFVuZGVybGluZU5vZGUgZnJvbSAnLi9taW5pRE9NL3VuZGVybGluZSc7XG5pbXBvcnQgU3RyaWtldGhyb3VnaE5vZGUgZnJvbSAnLi9taW5pRE9NL3N0cmlrZXRocm91Z2gnO1xuaW1wb3J0IENvbG9yTm9kZSBmcm9tICcuL21pbmlET00vY29sb3InO1xuaW1wb3J0IEJhY2tncm91bmRDb2xvck5vZGUgZnJvbSAnLi9taW5pRE9NL2JnY29sb3InO1xuaW1wb3J0IFN1cGVyc2NyaXB0Tm9kZSBmcm9tICcuL21pbmlET00vc3VwZXJzY3JpcHQnO1xuaW1wb3J0IFN1YnNjcmlwdE5vZGUgZnJvbSAnLi9taW5pRE9NL3N1YnNjcmlwdCc7XG5pbXBvcnQgU3Bhbk5vZGUgZnJvbSAnLi9taW5pRE9NL3NwYW4nO1xuaW1wb3J0IEJsb2NrTm9kZSBmcm9tICcuL21pbmlET00vYmxvY2snO1xuaW1wb3J0IEltYWdlTm9kZSBmcm9tICcuL21pbmlET00vaW1hZ2UnO1xuXG5SZWdpc3RyeS5hZGQoJ2JvbGQnLCBCb2xkTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2l0YWxpYycsIEl0YWxpY05vZGUpO1xuUmVnaXN0cnkuYWRkKCdsaW5rJywgTGlua05vZGUpO1xuUmVnaXN0cnkuYWRkKCdsaXN0SXRlbScsIExpc3RJdGVtTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ29yZGVyZWQnLCBPcmRlcmVkTGlzdE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdwYXJhZ3JhcGgnLCBQYXJhZ3JhcGhOb2RlKTtcblJlZ2lzdHJ5LmFkZCgndGV4dCcsIFRleHROb2RlKTtcblJlZ2lzdHJ5LmFkZCgnVHJlZU5vZGUnLCBUcmVlTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ1Jvb3ROb2RlJywgUm9vdE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdidWxsZXQnLCBVbm9yZGVyZWRMaXN0Tm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2hlYWRlcicsIEhlYWRlck5vZGUpO1xuUmVnaXN0cnkuYWRkKCd1bmRlcmxpbmUnLCBVbmRlcmxpbmVOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnc3RyaWtldGhyb3VnaCcsIFN0cmlrZXRocm91Z2hOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnY29sb3InLCBDb2xvck5vZGUpO1xuUmVnaXN0cnkuYWRkKCdiZ2NvbG9yJywgQmFja2dyb3VuZENvbG9yTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ3N1YnNjcmlwdCcsIFN1cGVyc2NyaXB0Tm9kZSk7XG5SZWdpc3RyeS5hZGQoJ3N1cGVyc2NyaXB0JywgU3Vic2NyaXB0Tm9kZSk7XG5SZWdpc3RyeS5hZGQoJ1NwYW5Ob2RlJywgU3Bhbk5vZGUpO1xuUmVnaXN0cnkuYWRkKCdCbG9ja05vZGUnLCBCbG9ja05vZGUpO1xuUmVnaXN0cnkuYWRkKCdpbWFnZScsIEltYWdlTm9kZSk7XG5cbmZ1bmN0aW9uIHRva2VuaXplKG9wcykge1xuICBjb25zdCByZXRWYWwgPSBbXTtcbiAgb3BzLmZvckVhY2goKG9wKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBvcC5pbnNlcnQgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgY29udGVudHM6IG9wLmluc2VydCxcbiAgICAgICAgYXR0cmlidXRlczogb3AuYXR0cmlidXRlcyB8fCB7fSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAob3AuaW5zZXJ0ID09PSAnXFxuJykge1xuICAgICAgcmV0VmFsLnB1c2goe1xuICAgICAgICB0eXBlOiAnbGluZWJyZWFrJyxcbiAgICAgICAgYXR0cmlidXRlczogb3AuYXR0cmlidXRlcyB8fCB7fSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAob3AuaW5zZXJ0LmluZGV4T2YoJ1xcbicpIDwgMCkge1xuICAgICAgcmV0VmFsLnB1c2goe1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGNvbnRlbnRzOiBvcC5pbnNlcnQsXG4gICAgICAgIGF0dHJpYnV0ZXM6IG9wLmF0dHJpYnV0ZXMgfHwge30sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3AuaW5zZXJ0LnNwbGl0KCdcXG4nKS5mb3JFYWNoKChzdWJUZXh0LCBpLCBhcnkpID0+IHtcbiAgICAgICAgaWYgKHN1YlRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIGNvbnRlbnRzOiBzdWJUZXh0LFxuICAgICAgICAgICAgYXR0cmlidXRlczogb3AuYXR0cmlidXRlcyB8fCB7fSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA8IChhcnkubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZWJyZWFrJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHt9LCAvLyBtaWQtaW5zZXJ0IGxpbmVicmVha3MgaGF2ZSBubyBsaW5lLWxldmVsIHN0eWxpbmdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJldFZhbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQmxvY2tzKHRva2Vucykge1xuICBjb25zdCByZXRWYWwgPSBuZXcgUm9vdE5vZGUoKTtcbiAgbGV0IGNoaWxkTGlzdCA9IFtdO1xuICB0b2tlbnMuZm9yRWFjaCgodG9rZW4pID0+IHtcbiAgICBpZiAodG9rZW4udHlwZSA9PT0gJ2xpbmVicmVhaycpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRCbG9jayA9IG5ldyAoUmVnaXN0cnkubGlzdEZvcm1hdHMoKS5maWx0ZXIoKGYpID0+IGYubWF0Y2hlcyh0b2tlbikpWzBdKSh0b2tlbik7XG4gICAgICBjaGlsZExpc3QuZm9yRWFjaCgoY2hpbGQpID0+IGN1cnJlbnRCbG9jay5hcHBlbmRDaGlsZChUcmVlTm9kZS5idWlsZChjaGlsZCkpKTtcbiAgICAgIHJldFZhbC5hYnNvcmIoY3VycmVudEJsb2NrKTtcbiAgICAgIGNoaWxkTGlzdCA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZExpc3QucHVzaCh0b2tlbik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJldFZhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybShkZWx0YSkge1xuICByZXR1cm4gY3JlYXRlQmxvY2tzKHRva2VuaXplKGRlbHRhLm9wcykpLnRvSFRNTCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhaW5UZXh0KGRlbHRhKSB7XG4gIHJldHVybiBjcmVhdGVCbG9ja3ModG9rZW5pemUoZGVsdGEub3BzKSkucGxhaW5UZXh0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0RGVsdGFzKCkge1xuICBjb25zdCB0ZXN0VmFsID0ge1xuICAgIG9wczogW1xuICAgICAge2luc2VydDogJ211bHRpbGluZSBcXG4gdmFsdWUnfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nfSxcbiAgICAgIHtpbnNlcnQ6ICdzaW1wbGUgdGV4dCd9LFxuICAgICAge2luc2VydDogJ1xcbmZvbGxvd2luZyB0ZXh0XFxuXFxuJ30sXG4gICAgICB7aW5zZXJ0OiAnYnVsbGV0ZWQgbGlzdCBvbmUnLCBhdHRyaWJ1dGVzOiB7bGluazogJ2xpbmtUYXJnZXQnfX0sXG4gICAgICB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2xpc3Q6ICdidWxsZXQnfX0sXG4gICAgICB7aW5zZXJ0OiAnYnVsbGV0ZWQgbGlzdCB0d28nfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nLCBhdHRyaWJ1dGVzOiB7bGlzdDogJ2J1bGxldCd9fSxcbiAgICAgIHtpbnNlcnQ6ICdidWxsZXRlZCBsaXN0IHRocmVlJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2xpc3Q6ICdidWxsZXQnfX0sXG4gICAgICB7aW5zZXJ0OiAnbnVtYmVyZWQgbGlzdCBvbmUnfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nLCBhdHRyaWJ1dGVzOiB7bGlzdDogJ29yZGVyZWQnfX0sXG4gICAgICB7aW5zZXJ0OiAnbnVtYmVyZWQgbGlzdCB0d28nfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nLCBhdHRyaWJ1dGVzOiB7bGlzdDogJ29yZGVyZWQnfX0sXG4gICAgICB7aW5zZXJ0OiAnbnVtYmVyZWQgbGlzdCB0aHJlZSd9LFxuICAgICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtsaXN0OiAnb3JkZXJlZCd9fSxcbiAgICAgIHtpbnNlcnQ6ICdoZWFkZXIgdHdvJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2hlYWRlcjogMn19LFxuICAgICAge2luc2VydDogJ3VuZGVybGluZWQgaGVhZGVyIG9uZScsIGF0dHJpYnV0ZXM6IHt1bmRlcmxpbmU6IHRydWV9fSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nLCBhdHRyaWJ1dGVzOiB7aGVhZGVyOiAxfX0sXG4gICAgICB7aW5zZXJ0OiAncmVkJywgYXR0cmlidXRlczoge2NvbG9yOiAncmVkJ319LFxuICAgICAge2luc2VydDogJ2JncmVkJywgYXR0cmlidXRlczoge2JnOiAncmVkJ319LFxuICAgICAge2luc2VydDogJ3N0cmlrZXRocnUnLCBhdHRyaWJ1dGVzOiB7c3RyaWtlOiB0cnVlfX0sXG4gICAgICB7aW5zZXJ0OiAnXFxuJ30sXG4gICAgICB7aW5zZXJ0OiB7aW1hZ2U6ICdJTUFHRVVSTCd9fSxcbiAgICAgIHtpbnNlcnQ6ICdlc2NhcGVkIEhUTUwgJiA8ID4gXCIgXFwnICYnfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nfSxcbiAgICAgIHtpbnNlcnQ6ICdlbXB0eSBuZXdsaW5lIHNob3VsZCBoYXZlIG5ic3BcXG5cXG5cXG4nfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nfSxcbiAgICAgIHtpbnNlcnQ6ICdnb2luZyBOVVRTJywgYXR0cmlidXRlczoge1xuICAgICAgICBpdGFsaWM6IHRydWUsXG4gICAgICAgIGJvbGQ6IHRydWUsXG4gICAgICAgIHN1YjogdHJ1ZSxcbiAgICAgICAgc3VwZXI6IHRydWUsXG4gICAgICAgIGJnOiAnIzAwMDAwMCcsXG4gICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIHN0cmlrZTogdHJ1ZSxcbiAgICAgICAgdW5kZXJsaW5lOiB0cnVlLFxuICAgICAgfX0sXG4gICAgICB7aW5zZXJ0OiAnXFxuJ30sXG4gICAgICB7aW5zZXJ0OiAnYm9sZCBtdWx0aWxpbmVcXG52YWx1ZScsIGF0dHJpYnV0ZXM6IHtib2xkOiB0cnVlfX0sXG4gICAgICB7aW5zZXJ0OiAnaXRhbGljIHZhbHVlJywgYXR0cmlidXRlczoge2l0YWxpYzogdHJ1ZX19LFxuICAgICAge2luc2VydDogJ2JvbGQtaXRhbGljIHZhbHVlJywgYXR0cmlidXRlczoge2JvbGQ6IHRydWUsIGl0YWxpYzogdHJ1ZX19LFxuICAgICAge2luc2VydDogJ1xcbid9LFxuICAgIF0sXG4gIH07XG4gIGNvbnNvbGUubG9nKCd0ZXN0aW5nIHVuaXF1ZW5lc3Mgb24gc29ydCBrZXlzJyk7XG4gIFJlZ2lzdHJ5LmNoZWNrUHJpb3JpdGllcygpO1xuICBjb25zb2xlLmxvZyh0cmFuc2Zvcm0odGVzdFZhbCkpO1xuICBjb25zb2xlLmxvZygncGxhaW4gdGV4dCBhbHQnKTtcbiAgY29uc29sZS5sb2cocGxhaW5UZXh0KHRlc3RWYWwpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
