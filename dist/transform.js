'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Registry = undefined;
exports.tokenize = tokenize;
exports.createBlocks = createBlocks;
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
      var contents = op.insert;
      while (contents.length) {
        var nextNewline = contents.indexOf('\n');
        if (nextNewline === -1) {
          retVal.push({
            type: 'text',
            contents: contents,
            attributes: op.attributes || {}
          });
          contents = '';
        } else {
          retVal.push({
            type: 'text',
            contents: contents.slice(0, nextNewline),
            attributes: op.attributes || {}
          });
          retVal.push({
            type: 'linebreak',
            attributes: {} });
          // mid-insert linebreaks have no line-level styling
          contents = contents.slice(nextNewline + 1);
        }
      }
    }
  });
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
//# sourceMappingURL=data:application/json;base64,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QUFDLFFBQVEsY0FBUixFQUF3QixZQUFZLEVBQUMsUUFBUSxJQUFSLEVBQWIsRUEvQ3RCLEVBZ0RILEVBQUMsUUFBUSxtQkFBUixFQUE2QixZQUFZLEVBQUMsTUFBTSxJQUFOLEVBQVksUUFBUSxJQUFSLEVBQXpCLEVBaEQzQixFQWlESCxFQUFDLFFBQVEsSUFBUixFQWpERSxDQUFMO0dBREksQ0FEcUI7QUFzRDNCLFVBQVEsR0FBUixDQUFZLGlDQUFaLEVBdEQyQjtBQXVEM0IsV0FBUyxlQUFULEdBdkQyQjtBQXdEM0IsVUFBUSxHQUFSLENBQVksVUFBVSxPQUFWLENBQVosRUF4RDJCO0FBeUQzQixVQUFRLEdBQVIsQ0FBWSxnQkFBWixFQXpEMkI7QUEwRDNCLFVBQVEsR0FBUixDQUFZLFVBQVUsT0FBVixDQUFaLEVBMUQyQjtBQTJEM0IsaUJBQWUsT0FBZixFQUNDLElBREQsQ0FDTSxVQUFDLElBQUQsRUFBVTtBQUNkLFlBQVEsR0FBUixDQUFZLGlCQUFaLEVBRGM7QUFFZCxZQUFRLEdBQVIsQ0FBWSxJQUFaLEVBRmM7R0FBVixDQUROLENBM0QyQjtBQWdFM0IsaUJBQWUsT0FBZixFQUNDLElBREQsQ0FDTSxVQUFDLEVBQUQsRUFBUTtBQUNaLFlBQVEsR0FBUixDQUFZLGFBQVosRUFEWTtBQUVaLFlBQVEsR0FBUixDQUFZLEVBQVosRUFGWTtHQUFSLENBRE4sQ0FoRTJCO0NBQXRCIiwiZmlsZSI6InRyYW5zZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlZyBmcm9tICcuL3JlZ2lzdHJ5JztcblxuZXhwb3J0IGNvbnN0IFJlZ2lzdHJ5ID0gUmVnO1xuXG5pbXBvcnQgQm9sZE5vZGUgZnJvbSAnLi9taW5pRE9NL2JvbGQnO1xuaW1wb3J0IEl0YWxpY05vZGUgZnJvbSAnLi9taW5pRE9NL2l0YWxpYyc7XG5pbXBvcnQgTGlua05vZGUgZnJvbSAnLi9taW5pRE9NL2xpbmsnO1xuaW1wb3J0IExpc3RJdGVtTm9kZSBmcm9tICcuL21pbmlET00vbGlzdEl0ZW0nO1xuaW1wb3J0IE9yZGVyZWRMaXN0Tm9kZSBmcm9tICcuL21pbmlET00vb3JkZXJlZExpc3QnO1xuaW1wb3J0IFBhcmFncmFwaE5vZGUgZnJvbSAnLi9taW5pRE9NL3BhcmFncmFwaCc7XG5pbXBvcnQgVGV4dE5vZGUgZnJvbSAnLi9taW5pRE9NL3RleHQnO1xuaW1wb3J0IFRyZWVOb2RlIGZyb20gJy4vbWluaURPTS90cmVlTm9kZSc7XG5pbXBvcnQgUm9vdE5vZGUgZnJvbSAnLi9taW5pRE9NL3Jvb3QnO1xuaW1wb3J0IFVub3JkZXJlZExpc3ROb2RlIGZyb20gJy4vbWluaURPTS91bm9yZGVyZWRMaXN0JztcbmltcG9ydCBIZWFkZXJOb2RlIGZyb20gJy4vbWluaURPTS9oZWFkZXInO1xuaW1wb3J0IFVuZGVybGluZU5vZGUgZnJvbSAnLi9taW5pRE9NL3VuZGVybGluZSc7XG5pbXBvcnQgU3RyaWtldGhyb3VnaE5vZGUgZnJvbSAnLi9taW5pRE9NL3N0cmlrZXRocm91Z2gnO1xuaW1wb3J0IENvbG9yTm9kZSBmcm9tICcuL21pbmlET00vY29sb3InO1xuaW1wb3J0IEJhY2tncm91bmRDb2xvck5vZGUgZnJvbSAnLi9taW5pRE9NL2JnY29sb3InO1xuaW1wb3J0IFN1cGVyc2NyaXB0Tm9kZSBmcm9tICcuL21pbmlET00vc3VwZXJzY3JpcHQnO1xuaW1wb3J0IFN1YnNjcmlwdE5vZGUgZnJvbSAnLi9taW5pRE9NL3N1YnNjcmlwdCc7XG5pbXBvcnQgU3Bhbk5vZGUgZnJvbSAnLi9taW5pRE9NL3NwYW4nO1xuaW1wb3J0IEJsb2NrTm9kZSBmcm9tICcuL21pbmlET00vYmxvY2snO1xuaW1wb3J0IEltYWdlTm9kZSBmcm9tICcuL21pbmlET00vaW1hZ2UnO1xuXG5SZWdpc3RyeS5hZGQoJ2JvbGQnLCBCb2xkTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2l0YWxpYycsIEl0YWxpY05vZGUpO1xuUmVnaXN0cnkuYWRkKCdsaW5rJywgTGlua05vZGUpO1xuUmVnaXN0cnkuYWRkKCdsaXN0SXRlbScsIExpc3RJdGVtTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ29yZGVyZWQnLCBPcmRlcmVkTGlzdE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdwYXJhZ3JhcGgnLCBQYXJhZ3JhcGhOb2RlKTtcblJlZ2lzdHJ5LmFkZCgndGV4dCcsIFRleHROb2RlKTtcblJlZ2lzdHJ5LmFkZCgnVHJlZU5vZGUnLCBUcmVlTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ1Jvb3ROb2RlJywgUm9vdE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdidWxsZXQnLCBVbm9yZGVyZWRMaXN0Tm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2hlYWRlcicsIEhlYWRlck5vZGUpO1xuUmVnaXN0cnkuYWRkKCd1bmRlcmxpbmUnLCBVbmRlcmxpbmVOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnc3RyaWtldGhyb3VnaCcsIFN0cmlrZXRocm91Z2hOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnY29sb3InLCBDb2xvck5vZGUpO1xuUmVnaXN0cnkuYWRkKCdiZ2NvbG9yJywgQmFja2dyb3VuZENvbG9yTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ3N1YnNjcmlwdCcsIFN1cGVyc2NyaXB0Tm9kZSk7XG5SZWdpc3RyeS5hZGQoJ3N1cGVyc2NyaXB0JywgU3Vic2NyaXB0Tm9kZSk7XG5SZWdpc3RyeS5hZGQoJ1NwYW5Ob2RlJywgU3Bhbk5vZGUpO1xuUmVnaXN0cnkuYWRkKCdCbG9ja05vZGUnLCBCbG9ja05vZGUpO1xuUmVnaXN0cnkuYWRkKCdpbWFnZScsIEltYWdlTm9kZSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZShvcHMpIHtcbiAgY29uc3QgcmV0VmFsID0gW107XG4gIG9wcy5mb3JFYWNoKChvcCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygb3AuaW5zZXJ0ICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0VmFsLnB1c2goe1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGNvbnRlbnRzOiBvcC5pbnNlcnQsXG4gICAgICAgIGF0dHJpYnV0ZXM6IG9wLmF0dHJpYnV0ZXMgfHwge30sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG9wLmluc2VydCA9PT0gJ1xcbicpIHtcbiAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2xpbmVicmVhaycsXG4gICAgICAgIGF0dHJpYnV0ZXM6IG9wLmF0dHJpYnV0ZXMgfHwge30sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG9wLmluc2VydC5pbmRleE9mKCdcXG4nKSA8IDApIHtcbiAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBjb250ZW50czogb3AuaW5zZXJ0LFxuICAgICAgICBhdHRyaWJ1dGVzOiBvcC5hdHRyaWJ1dGVzIHx8IHt9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjb250ZW50cyA9IG9wLmluc2VydDtcbiAgICAgIHdoaWxlIChjb250ZW50cy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgbmV4dE5ld2xpbmUgPSBjb250ZW50cy5pbmRleE9mKCdcXG4nKTtcbiAgICAgICAgaWYgKG5leHROZXdsaW5lID09PSAtMSkge1xuICAgICAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIGNvbnRlbnRzOiBjb250ZW50cyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IG9wLmF0dHJpYnV0ZXMgfHwge30sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29udGVudHMgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICBjb250ZW50czogY29udGVudHMuc2xpY2UoMCwgbmV4dE5ld2xpbmUpLFxuICAgICAgICAgICAgYXR0cmlidXRlczogb3AuYXR0cmlidXRlcyB8fCB7fSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZWJyZWFrJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHt9LCAvLyBtaWQtaW5zZXJ0IGxpbmVicmVha3MgaGF2ZSBubyBsaW5lLWxldmVsIHN0eWxpbmdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb250ZW50cyA9IGNvbnRlbnRzLnNsaWNlKG5leHROZXdsaW5lICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmV0VmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQmxvY2tzKHRva2Vucykge1xuICBjb25zdCByZXRWYWwgPSBuZXcgUm9vdE5vZGUoKTtcbiAgbGV0IGNoaWxkTGlzdCA9IFtdO1xuICB0b2tlbnMuZm9yRWFjaCgodG9rZW4pID0+IHtcbiAgICBpZiAodG9rZW4udHlwZSA9PT0gJ2xpbmVicmVhaycpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRCbG9jayA9IG5ldyAoUmVnaXN0cnkubGlzdEZvcm1hdHMoKS5maWx0ZXIoKGYpID0+IGYubWF0Y2hlcyh0b2tlbikpWzBdKSh0b2tlbik7XG4gICAgICBjaGlsZExpc3QuZm9yRWFjaCgoY2hpbGQpID0+IGN1cnJlbnRCbG9jay5hcHBlbmRDaGlsZChUcmVlTm9kZS5idWlsZChjaGlsZCkpKTtcbiAgICAgIHJldFZhbC5hYnNvcmIoY3VycmVudEJsb2NrKTtcbiAgICAgIGNoaWxkTGlzdCA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZExpc3QucHVzaCh0b2tlbik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJldFZhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybShkZWx0YSkge1xuICByZXR1cm4gY3JlYXRlQmxvY2tzKHRva2VuaXplKGRlbHRhLm9wcykpLnRvSFRNTCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtQXN5bmMoZGVsdGEpIHtcbiAgcmV0dXJuIGNyZWF0ZUJsb2Nrcyh0b2tlbml6ZShkZWx0YS5vcHMpKS50b0hUTUxBc3luYygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhaW5UZXh0KGRlbHRhKSB7XG4gIHJldHVybiBjcmVhdGVCbG9ja3ModG9rZW5pemUoZGVsdGEub3BzKSkucGxhaW5UZXh0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGFpblRleHRBc3luYyhkZWx0YSkge1xuICByZXR1cm4gY3JlYXRlQmxvY2tzKHRva2VuaXplKGRlbHRhLm9wcykpLnBsYWluVGV4dEFzeW5jKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0RGVsdGFzKCkge1xuICBjb25zdCB0ZXN0VmFsID0ge1xuICAgIG9wczogW1xuICAgICAge2luc2VydDogJ211bHRpbGluZSBcXG4gdmFsdWUnfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nfSxcbiAgICAgIHtpbnNlcnQ6ICdzaW1wbGUgdGV4dCd9LFxuICAgICAge2luc2VydDogJyB3aXRoIGFcXG4nfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG5mb2xsb3dpbmcgdGV4dFxcblxcbid9LFxuICAgICAge2luc2VydDogJ2J1bGxldGVkIGxpc3Qgb25lJywgYXR0cmlidXRlczoge2xpbms6ICdsaW5rVGFyZ2V0J319LFxuICAgICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtsaXN0OiAnYnVsbGV0J319LFxuICAgICAge2luc2VydDogJ2J1bGxldGVkIGxpc3QgdHdvJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2xpc3Q6ICdidWxsZXQnfX0sXG4gICAgICB7aW5zZXJ0OiAnYnVsbGV0ZWQgbGlzdCB0aHJlZSd9LFxuICAgICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtsaXN0OiAnYnVsbGV0J319LFxuICAgICAge2luc2VydDogJ251bWJlcmVkIGxpc3Qgb25lJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2xpc3Q6ICdvcmRlcmVkJ319LFxuICAgICAge2luc2VydDogJ251bWJlcmVkIGxpc3QgdHdvJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge29yZGVyZWQ6IHRydWV9fSxcbiAgICAgIHtpbnNlcnQ6ICdudW1iZXJlZCBsaXN0IHRocmVlJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2xpc3Q6ICdvcmRlcmVkJ319LFxuICAgICAge2luc2VydDogJ2hlYWRlciB0d28nfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nLCBhdHRyaWJ1dGVzOiB7aGVhZGVyOiAyfX0sXG4gICAgICB7aW5zZXJ0OiAndW5kZXJsaW5lZCBoZWFkZXIgb25lJywgYXR0cmlidXRlczoge3VuZGVybGluZTogdHJ1ZX19LFxuICAgICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtoZWFkZXI6IDF9fSxcbiAgICAgIHtpbnNlcnQ6ICdyZWQnLCBhdHRyaWJ1dGVzOiB7Y29sb3I6ICdyZWQnfX0sXG4gICAgICB7aW5zZXJ0OiAnYmdyZWQnLCBhdHRyaWJ1dGVzOiB7Ymc6ICdyZWQnfX0sXG4gICAgICB7aW5zZXJ0OiAnc3RyaWtldGhydScsIGF0dHJpYnV0ZXM6IHtzdHJpa2U6IHRydWV9fSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nfSxcbiAgICAgIHtpbnNlcnQ6IHtpbWFnZTogJ0lNQUdFVVJMJ319LFxuICAgICAge2luc2VydDogJ2VzY2FwZWQgSFRNTCAmIDwgPiBcIiBcXCcgJid9LFxuICAgICAge2luc2VydDogJ1xcbid9LFxuICAgICAge2luc2VydDogJ2VtcHR5IG5ld2xpbmUgc2hvdWxkIGhhdmUgbmJzcCAoZm91ciBhZnRlciB0aGlzKVxcblxcblxcbid9LFxuICAgICAge2luc2VydDogJ1xcbid9LFxuICAgICAge2luc2VydDogJ1xcbid9LFxuICAgICAge2luc2VydDogJ29sZCBpbWFnZSBzdHlsZTonfSxcbiAgICAgIHtpbnNlcnQ6ICcxJywgYXR0cmlidXRlczoge2ltYWdlOiAnSU1BR0VVUkwnfX0sXG4gICAgICB7aW5zZXJ0OiAnXFxuJ30sXG4gICAgICB7aW5zZXJ0OiAnZ29pbmcgTlVUUycsIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgaXRhbGljOiB0cnVlLFxuICAgICAgICBib2xkOiB0cnVlLFxuICAgICAgICBzdWI6IHRydWUsXG4gICAgICAgIHN1cGVyOiB0cnVlLFxuICAgICAgICBiZzogJyMwMDAwMDAnLFxuICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICBzdHJpa2U6IHRydWUsXG4gICAgICAgIHVuZGVybGluZTogdHJ1ZSxcbiAgICAgIH19LFxuICAgICAge2luc2VydDogJ1xcbid9LFxuICAgICAge2luc2VydDogJ2JvbGQgbXVsdGlsaW5lXFxudmFsdWUnLCBhdHRyaWJ1dGVzOiB7Ym9sZDogdHJ1ZX19LFxuICAgICAge2luc2VydDogJ2l0YWxpYyB2YWx1ZScsIGF0dHJpYnV0ZXM6IHtpdGFsaWM6IHRydWV9fSxcbiAgICAgIHtpbnNlcnQ6ICdib2xkLWl0YWxpYyB2YWx1ZScsIGF0dHJpYnV0ZXM6IHtib2xkOiB0cnVlLCBpdGFsaWM6IHRydWV9fSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nfSxcbiAgICBdLFxuICB9O1xuICBjb25zb2xlLmxvZygndGVzdGluZyB1bmlxdWVuZXNzIG9uIHNvcnQga2V5cycpO1xuICBSZWdpc3RyeS5jaGVja1ByaW9yaXRpZXMoKTtcbiAgY29uc29sZS5sb2codHJhbnNmb3JtKHRlc3RWYWwpKTtcbiAgY29uc29sZS5sb2coJ3BsYWluIHRleHQgYWx0Jyk7XG4gIGNvbnNvbGUubG9nKHBsYWluVGV4dCh0ZXN0VmFsKSk7XG4gIHRyYW5zZm9ybUFzeW5jKHRlc3RWYWwpXG4gIC50aGVuKChodG1sKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2FzeW5jIHRyYW5zZm9ybScpO1xuICAgIGNvbnNvbGUubG9nKGh0bWwpO1xuICB9KTtcbiAgcGxhaW5UZXh0QXN5bmModGVzdFZhbClcbiAgLnRoZW4oKHB0KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2FzeW5jIHBsYWluJyk7XG4gICAgY29uc29sZS5sb2cocHQpO1xuICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
