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
    ops: [{ insert: 'multiline \n value' }, { insert: '\n' }, { insert: 'bulleted list one', attributes: { link: 'linkTarget' } }, { insert: '\n', attributes: { list: 'bullet' } }, { insert: 'bulleted list two' }, { insert: '\n', attributes: { list: 'bullet' } }, { insert: 'bulleted list three' }, { insert: '\n', attributes: { list: 'bullet' } }, { insert: 'numbered list one' }, { insert: '\n', attributes: { list: 'ordered' } }, { insert: 'numbered list two' }, { insert: '\n', attributes: { list: 'ordered' } }, { insert: 'numbered list three' }, { insert: '\n', attributes: { list: 'ordered' } }, { insert: 'header two' }, { insert: '\n', attributes: { header: 2 } }, { insert: 'underlined header one', attributes: { underline: true } }, { insert: '\n', attributes: { header: 1 } }, { insert: 'red', attributes: { color: 'red' } }, { insert: 'bgred', attributes: { bg: 'red' } }, { insert: 'strikethru', attributes: { strike: true } }, { insert: '\n' }, { insert: 'going NUTS', attributes: {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zZm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7UUE2R2dCO1FBSUE7O0FBakhoQjs7SUFBWTs7QUFJWjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQWxCTyxJQUFNLDhCQUFXLEdBQVg7O0FBb0JiLFNBQVMsR0FBVCxDQUFhLE1BQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxRQUFiO0FBQ0EsU0FBUyxHQUFULENBQWEsTUFBYjtBQUNBLFNBQVMsR0FBVCxDQUFhLFVBQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxTQUFiO0FBQ0EsU0FBUyxHQUFULENBQWEsV0FBYjtBQUNBLFNBQVMsR0FBVCxDQUFhLE1BQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxVQUFiO0FBQ0EsU0FBUyxHQUFULENBQWEsVUFBYjtBQUNBLFNBQVMsR0FBVCxDQUFhLFFBQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxRQUFiO0FBQ0EsU0FBUyxHQUFULENBQWEsV0FBYjtBQUNBLFNBQVMsR0FBVCxDQUFhLGVBQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxPQUFiO0FBQ0EsU0FBUyxHQUFULENBQWEsU0FBYjtBQUNBLFNBQVMsR0FBVCxDQUFhLFdBQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxhQUFiOztBQUVBLFNBQVMsUUFBVCxDQUFrQixHQUFsQixFQUF1QjtBQUNyQixNQUFNLFNBQVMsRUFBVCxDQURlO0FBRXJCLE1BQUksT0FBSixDQUFZLFVBQUMsRUFBRCxFQUFRO0FBQ2xCLFFBQUksT0FBTyxHQUFHLE1BQUgsS0FBYyxRQUFyQixFQUErQjtBQUNqQyxhQUFPLElBQVAsQ0FBWTtBQUNWLGNBQU0sTUFBTjtBQUNBLGtCQUFVLEdBQUcsTUFBSDtBQUNWLG9CQUFZLEdBQUcsVUFBSCxJQUFpQixFQUFqQjtPQUhkLEVBRGlDO0tBQW5DLE1BTU8sSUFBSSxHQUFHLE1BQUgsS0FBYyxJQUFkLEVBQW9CO0FBQzdCLGFBQU8sSUFBUCxDQUFZO0FBQ1YsY0FBTSxXQUFOO0FBQ0Esb0JBQVksR0FBRyxVQUFILElBQWlCLEVBQWpCO09BRmQsRUFENkI7S0FBeEIsTUFLQSxJQUFJLEdBQUcsTUFBSCxDQUFVLE9BQVYsQ0FBa0IsSUFBbEIsSUFBMEIsQ0FBMUIsRUFBNkI7QUFDdEMsYUFBTyxJQUFQLENBQVk7QUFDVixjQUFNLE1BQU47QUFDQSxrQkFBVSxHQUFHLE1BQUg7QUFDVixvQkFBWSxHQUFHLFVBQUgsSUFBaUIsRUFBakI7T0FIZCxFQURzQztLQUFqQyxNQU1BO0FBQ0wsU0FBRyxNQUFILENBQVUsS0FBVixDQUFnQixJQUFoQixFQUFzQixPQUF0QixDQUE4QixVQUFDLE9BQUQsRUFBVSxDQUFWLEVBQWEsR0FBYixFQUFxQjtBQUNqRCxZQUFJLFlBQVksRUFBWixFQUFnQjtBQUNsQjtBQURrQixTQUFwQjtBQUdBLGVBQU8sSUFBUCxDQUFZO0FBQ1YsZ0JBQU0sTUFBTjtBQUNBLG9CQUFVLE9BQVY7QUFDQSxzQkFBWSxHQUFHLFVBQUgsSUFBaUIsRUFBakI7U0FIZCxFQUppRDtBQVNqRCxZQUFJLElBQUssSUFBSSxNQUFKLEdBQWEsQ0FBYixFQUFpQjtBQUN4QixpQkFBTyxJQUFQLENBQVk7QUFDVixrQkFBTSxXQUFOO0FBQ0Esd0JBQVksRUFBWixFQUZGLEVBRHdCO1NBQTFCO09BVDRCLENBQTlCLENBREs7S0FOQTtHQVpHLENBQVosQ0FGcUI7O0FBdUNyQixTQUFPLE1BQVAsQ0F2Q3FCO0NBQXZCOztBQTBDQSxTQUFTLFlBQVQsQ0FBc0IsTUFBdEIsRUFBOEI7QUFDNUIsTUFBTSxTQUFTLG9CQUFULENBRHNCO0FBRTVCLE1BQUksWUFBWSxFQUFaLENBRndCO0FBRzVCLFNBQU8sT0FBUCxDQUFlLFVBQUMsS0FBRCxFQUFXO0FBQ3hCLFFBQUksTUFBTSxJQUFOLEtBQWUsV0FBZixFQUE0Qjs7QUFDOUIsWUFBTSxlQUFlLEtBQUssU0FBUyxXQUFULEdBQXVCLE1BQXZCLENBQThCLFVBQUMsQ0FBRDtpQkFBTyxFQUFFLE9BQUYsQ0FBVSxLQUFWO1NBQVAsQ0FBOUIsQ0FBdUQsQ0FBdkQsRUFBTCxDQUFnRSxLQUFoRSxDQUFmO0FBQ04sa0JBQVUsT0FBVixDQUFrQixVQUFDLEtBQUQ7aUJBQVcsYUFBYSxXQUFiLENBQXlCLG1CQUFTLEtBQVQsQ0FBZSxLQUFmLENBQXpCO1NBQVgsQ0FBbEI7QUFDQSxlQUFPLE1BQVAsQ0FBYyxZQUFkO0FBQ0Esb0JBQVksRUFBWjtXQUo4QjtLQUFoQyxNQUtPO0FBQ0wsZ0JBQVUsSUFBVixDQUFlLEtBQWYsRUFESztLQUxQO0dBRGEsQ0FBZixDQUg0QjtBQWE1QixTQUFPLE1BQVAsQ0FiNEI7Q0FBOUI7Ozs7Ozs7Ozs7Ozs7QUEyQk8sU0FBUyxTQUFULENBQW1CLEtBQW5CLEVBQTBCO0FBQy9CLFNBQU8sYUFBYSxTQUFTLE1BQU0sR0FBTixDQUF0QixFQUFrQyxNQUFsQyxFQUFQLENBRCtCO0NBQTFCOztBQUlBLFNBQVMsVUFBVCxHQUFzQjtBQUMzQixNQUFNLFVBQVU7QUFDZCxTQUFLLENBQ0gsRUFBQyxRQUFRLG9CQUFSLEVBREUsRUFFSCxFQUFDLFFBQVEsSUFBUixFQUZFLEVBR0gsRUFBQyxRQUFRLG1CQUFSLEVBQTZCLFlBQVksRUFBQyxNQUFNLFlBQU4sRUFBYixFQUgzQixFQUlILEVBQUMsUUFBUSxJQUFSLEVBQWMsWUFBWSxFQUFDLE1BQU0sUUFBTixFQUFiLEVBSlosRUFLSCxFQUFDLFFBQVEsbUJBQVIsRUFMRSxFQU1ILEVBQUMsUUFBUSxJQUFSLEVBQWMsWUFBWSxFQUFDLE1BQU0sUUFBTixFQUFiLEVBTlosRUFPSCxFQUFDLFFBQVEscUJBQVIsRUFQRSxFQVFILEVBQUMsUUFBUSxJQUFSLEVBQWMsWUFBWSxFQUFDLE1BQU0sUUFBTixFQUFiLEVBUlosRUFTSCxFQUFDLFFBQVEsbUJBQVIsRUFURSxFQVVILEVBQUMsUUFBUSxJQUFSLEVBQWMsWUFBWSxFQUFDLE1BQU0sU0FBTixFQUFiLEVBVlosRUFXSCxFQUFDLFFBQVEsbUJBQVIsRUFYRSxFQVlILEVBQUMsUUFBUSxJQUFSLEVBQWMsWUFBWSxFQUFDLE1BQU0sU0FBTixFQUFiLEVBWlosRUFhSCxFQUFDLFFBQVEscUJBQVIsRUFiRSxFQWNILEVBQUMsUUFBUSxJQUFSLEVBQWMsWUFBWSxFQUFDLE1BQU0sU0FBTixFQUFiLEVBZFosRUFlSCxFQUFDLFFBQVEsWUFBUixFQWZFLEVBZ0JILEVBQUMsUUFBUSxJQUFSLEVBQWMsWUFBWSxFQUFDLFFBQVEsQ0FBUixFQUFiLEVBaEJaLEVBaUJILEVBQUMsUUFBUSx1QkFBUixFQUFpQyxZQUFZLEVBQUMsV0FBVyxJQUFYLEVBQWIsRUFqQi9CLEVBa0JILEVBQUMsUUFBUSxJQUFSLEVBQWMsWUFBWSxFQUFDLFFBQVEsQ0FBUixFQUFiLEVBbEJaLEVBbUJILEVBQUMsUUFBUSxLQUFSLEVBQWUsWUFBWSxFQUFDLE9BQU8sS0FBUCxFQUFiLEVBbkJiLEVBb0JILEVBQUMsUUFBUSxPQUFSLEVBQWlCLFlBQVksRUFBQyxJQUFJLEtBQUosRUFBYixFQXBCZixFQXFCSCxFQUFDLFFBQVEsWUFBUixFQUFzQixZQUFZLEVBQUMsUUFBUSxJQUFSLEVBQWIsRUFyQnBCLEVBc0JILEVBQUMsUUFBUSxJQUFSLEVBdEJFLEVBdUJILEVBQUMsUUFBUSxZQUFSLEVBQXNCLFlBQVk7QUFDakMsZ0JBQVEsSUFBUjtBQUNBLGNBQU0sSUFBTjtBQUNBLGFBQUssSUFBTDtBQUNBLGVBQU8sSUFBUDtBQUNBLFlBQUksU0FBSjtBQUNBLGVBQU8sU0FBUDtBQUNBLGdCQUFRLElBQVI7QUFDQSxtQkFBVyxJQUFYO09BUnFCLEVBdkJwQixFQWlDSCxFQUFDLFFBQVEsSUFBUixFQWpDRSxFQWtDSCxFQUFDLFFBQVEsdUJBQVIsRUFBaUMsWUFBWSxFQUFDLE1BQU0sSUFBTixFQUFiLEVBbEMvQixFQW1DSCxFQUFDLFFBQVEsY0FBUixFQUF3QixZQUFZLEVBQUMsUUFBUSxJQUFSLEVBQWIsRUFuQ3RCLEVBb0NILEVBQUMsUUFBUSxtQkFBUixFQUE2QixZQUFZLEVBQUMsTUFBTSxJQUFOLEVBQVksUUFBUSxJQUFSLEVBQXpCLEVBcEMzQixFQXFDSCxFQUFDLFFBQVEsSUFBUixFQXJDRSxDQUFMO0dBREksQ0FEcUI7QUEwQzNCLFVBQVEsR0FBUixDQUFZLGlDQUFaLEVBMUMyQjtBQTJDM0IsV0FBUyxlQUFULEdBM0MyQjtBQTRDM0IsVUFBUSxHQUFSLENBQVksVUFBVSxPQUFWLENBQVosRUE1QzJCO0NBQXRCIiwiZmlsZSI6InRyYW5zZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlZyBmcm9tICcuL3JlZ2lzdHJ5JztcblxuZXhwb3J0IGNvbnN0IFJlZ2lzdHJ5ID0gUmVnO1xuXG5pbXBvcnQgQm9sZE5vZGUgZnJvbSAnLi9taW5pRE9NL2JvbGQnO1xuaW1wb3J0IEl0YWxpY05vZGUgZnJvbSAnLi9taW5pRE9NL2l0YWxpYyc7XG5pbXBvcnQgTGlua05vZGUgZnJvbSAnLi9taW5pRE9NL2xpbmsnO1xuaW1wb3J0IExpc3RJdGVtTm9kZSBmcm9tICcuL21pbmlET00vbGlzdEl0ZW0nO1xuaW1wb3J0IE9yZGVyZWRMaXN0Tm9kZSBmcm9tICcuL21pbmlET00vb3JkZXJlZExpc3QnO1xuaW1wb3J0IFBhcmFncmFwaE5vZGUgZnJvbSAnLi9taW5pRE9NL3BhcmFncmFwaCc7XG5pbXBvcnQgVGV4dE5vZGUgZnJvbSAnLi9taW5pRE9NL3RleHQnO1xuaW1wb3J0IFRyZWVOb2RlIGZyb20gJy4vbWluaURPTS90cmVlTm9kZSc7XG5pbXBvcnQgUm9vdE5vZGUgZnJvbSAnLi9taW5pRE9NL3Jvb3QnO1xuaW1wb3J0IFVub3JkZXJlZExpc3ROb2RlIGZyb20gJy4vbWluaURPTS91bm9yZGVyZWRMaXN0JztcbmltcG9ydCBIZWFkZXJOb2RlIGZyb20gJy4vbWluaURPTS9oZWFkZXInO1xuaW1wb3J0IFVuZGVybGluZU5vZGUgZnJvbSAnLi9taW5pRE9NL3VuZGVybGluZSc7XG5pbXBvcnQgU3RyaWtldGhyb3VnaE5vZGUgZnJvbSAnLi9taW5pRE9NL3N0cmlrZXRocm91Z2gnO1xuaW1wb3J0IENvbG9yTm9kZSBmcm9tICcuL21pbmlET00vY29sb3InO1xuaW1wb3J0IEJhY2tncm91bmRDb2xvck5vZGUgZnJvbSAnLi9taW5pRE9NL2JnY29sb3InO1xuaW1wb3J0IFN1cGVyc2NyaXB0Tm9kZSBmcm9tICcuL21pbmlET00vc3VwZXJzY3JpcHQnO1xuaW1wb3J0IFN1YnNjcmlwdE5vZGUgZnJvbSAnLi9taW5pRE9NL3N1YnNjcmlwdCc7XG5cblJlZ2lzdHJ5LmFkZCgnYm9sZCcsIEJvbGROb2RlKTtcblJlZ2lzdHJ5LmFkZCgnaXRhbGljJywgSXRhbGljTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2xpbmsnLCBMaW5rTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2xpc3RJdGVtJywgTGlzdEl0ZW1Ob2RlKTtcblJlZ2lzdHJ5LmFkZCgnb3JkZXJlZCcsIE9yZGVyZWRMaXN0Tm9kZSk7XG5SZWdpc3RyeS5hZGQoJ3BhcmFncmFwaCcsIFBhcmFncmFwaE5vZGUpO1xuUmVnaXN0cnkuYWRkKCd0ZXh0JywgVGV4dE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdUcmVlTm9kZScsIFRyZWVOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnUm9vdE5vZGUnLCBSb290Tm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2J1bGxldCcsIFVub3JkZXJlZExpc3ROb2RlKTtcblJlZ2lzdHJ5LmFkZCgnaGVhZGVyJywgSGVhZGVyTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ3VuZGVybGluZScsIFVuZGVybGluZU5vZGUpO1xuUmVnaXN0cnkuYWRkKCdzdHJpa2V0aHJvdWdoJywgU3RyaWtldGhyb3VnaE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdjb2xvcicsIENvbG9yTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2JnY29sb3InLCBCYWNrZ3JvdW5kQ29sb3JOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnc3Vic2NyaXB0JywgU3VwZXJzY3JpcHROb2RlKTtcblJlZ2lzdHJ5LmFkZCgnc3VwZXJzY3JpcHQnLCBTdWJzY3JpcHROb2RlKTtcblxuZnVuY3Rpb24gdG9rZW5pemUob3BzKSB7XG4gIGNvbnN0IHJldFZhbCA9IFtdO1xuICBvcHMuZm9yRWFjaCgob3ApID0+IHtcbiAgICBpZiAodHlwZW9mIG9wLmluc2VydCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBjb250ZW50czogb3AuaW5zZXJ0LFxuICAgICAgICBhdHRyaWJ1dGVzOiBvcC5hdHRyaWJ1dGVzIHx8IHt9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChvcC5pbnNlcnQgPT09ICdcXG4nKSB7XG4gICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgIHR5cGU6ICdsaW5lYnJlYWsnLFxuICAgICAgICBhdHRyaWJ1dGVzOiBvcC5hdHRyaWJ1dGVzIHx8IHt9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChvcC5pbnNlcnQuaW5kZXhPZignXFxuJykgPCAwKSB7XG4gICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgY29udGVudHM6IG9wLmluc2VydCxcbiAgICAgICAgYXR0cmlidXRlczogb3AuYXR0cmlidXRlcyB8fCB7fSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcC5pbnNlcnQuc3BsaXQoJ1xcbicpLmZvckVhY2goKHN1YlRleHQsIGksIGFyeSkgPT4ge1xuICAgICAgICBpZiAoc3ViVGV4dCA9PT0gJycpIHtcbiAgICAgICAgICByZXR1cm47IC8vIGVuZCBvZiBsaW5lIHdhcyBcXG5cbiAgICAgICAgfVxuICAgICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIGNvbnRlbnRzOiBzdWJUZXh0LFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IG9wLmF0dHJpYnV0ZXMgfHwge30sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaSA8IChhcnkubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZWJyZWFrJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHt9LCAvLyBtaWQtaW5zZXJ0IGxpbmVicmVha3MgaGF2ZSBubyBsaW5lLWxldmVsIHN0eWxpbmdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJldFZhbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQmxvY2tzKHRva2Vucykge1xuICBjb25zdCByZXRWYWwgPSBuZXcgUm9vdE5vZGUoKTtcbiAgbGV0IGNoaWxkTGlzdCA9IFtdO1xuICB0b2tlbnMuZm9yRWFjaCgodG9rZW4pID0+IHtcbiAgICBpZiAodG9rZW4udHlwZSA9PT0gJ2xpbmVicmVhaycpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRCbG9jayA9IG5ldyAoUmVnaXN0cnkubGlzdEZvcm1hdHMoKS5maWx0ZXIoKGYpID0+IGYubWF0Y2hlcyh0b2tlbikpWzBdKSh0b2tlbik7XG4gICAgICBjaGlsZExpc3QuZm9yRWFjaCgoY2hpbGQpID0+IGN1cnJlbnRCbG9jay5hcHBlbmRDaGlsZChUcmVlTm9kZS5idWlsZChjaGlsZCkpKTtcbiAgICAgIHJldFZhbC5hYnNvcmIoY3VycmVudEJsb2NrKTtcbiAgICAgIGNoaWxkTGlzdCA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZExpc3QucHVzaCh0b2tlbik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJldFZhbDtcbn1cblxuLy8gZnVuY3Rpb24gYXNzZW1ibGVMaW5lcyhibG9ja3MpIHtcbi8vICAgYmxvY2tzLmZvckVhY2goKGJsb2NrKSA9PiB7XG4vLyAgICAgY29uc3QgYmxvY2tOb2RlID0gbmV3IGJsb2NrLlR5cGUoYmxvY2spOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcbi8vICAgICByZXRWYWwuYWJzb3JiKGJsb2NrTm9kZSk7XG4vLyAgICAgYmxvY2suY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbi8vICAgICAgIGJsb2NrTm9kZS5hcHBlbmRDaGlsZChUcmVlTm9kZS5idWlsZChjaGlsZCkpO1xuLy8gICAgIH0pO1xuLy8gICB9KTtcbi8vICAgcmV0dXJuIHJldFZhbDtcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybShkZWx0YSkge1xuICByZXR1cm4gY3JlYXRlQmxvY2tzKHRva2VuaXplKGRlbHRhLm9wcykpLnRvSFRNTCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVzdERlbHRhcygpIHtcbiAgY29uc3QgdGVzdFZhbCA9IHtcbiAgICBvcHM6IFtcbiAgICAgIHtpbnNlcnQ6ICdtdWx0aWxpbmUgXFxuIHZhbHVlJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuJ30sXG4gICAgICB7aW5zZXJ0OiAnYnVsbGV0ZWQgbGlzdCBvbmUnLCBhdHRyaWJ1dGVzOiB7bGluazogJ2xpbmtUYXJnZXQnfX0sXG4gICAgICB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2xpc3Q6ICdidWxsZXQnfX0sXG4gICAgICB7aW5zZXJ0OiAnYnVsbGV0ZWQgbGlzdCB0d28nfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nLCBhdHRyaWJ1dGVzOiB7bGlzdDogJ2J1bGxldCd9fSxcbiAgICAgIHtpbnNlcnQ6ICdidWxsZXRlZCBsaXN0IHRocmVlJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2xpc3Q6ICdidWxsZXQnfX0sXG4gICAgICB7aW5zZXJ0OiAnbnVtYmVyZWQgbGlzdCBvbmUnfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nLCBhdHRyaWJ1dGVzOiB7bGlzdDogJ29yZGVyZWQnfX0sXG4gICAgICB7aW5zZXJ0OiAnbnVtYmVyZWQgbGlzdCB0d28nfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nLCBhdHRyaWJ1dGVzOiB7bGlzdDogJ29yZGVyZWQnfX0sXG4gICAgICB7aW5zZXJ0OiAnbnVtYmVyZWQgbGlzdCB0aHJlZSd9LFxuICAgICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtsaXN0OiAnb3JkZXJlZCd9fSxcbiAgICAgIHtpbnNlcnQ6ICdoZWFkZXIgdHdvJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2hlYWRlcjogMn19LFxuICAgICAge2luc2VydDogJ3VuZGVybGluZWQgaGVhZGVyIG9uZScsIGF0dHJpYnV0ZXM6IHt1bmRlcmxpbmU6IHRydWV9fSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nLCBhdHRyaWJ1dGVzOiB7aGVhZGVyOiAxfX0sXG4gICAgICB7aW5zZXJ0OiAncmVkJywgYXR0cmlidXRlczoge2NvbG9yOiAncmVkJ319LFxuICAgICAge2luc2VydDogJ2JncmVkJywgYXR0cmlidXRlczoge2JnOiAncmVkJ319LFxuICAgICAge2luc2VydDogJ3N0cmlrZXRocnUnLCBhdHRyaWJ1dGVzOiB7c3RyaWtlOiB0cnVlfX0sXG4gICAgICB7aW5zZXJ0OiAnXFxuJ30sXG4gICAgICB7aW5zZXJ0OiAnZ29pbmcgTlVUUycsIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgaXRhbGljOiB0cnVlLFxuICAgICAgICBib2xkOiB0cnVlLFxuICAgICAgICBzdWI6IHRydWUsXG4gICAgICAgIHN1cGVyOiB0cnVlLFxuICAgICAgICBiZzogJyMwMDAwMDAnLFxuICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICBzdHJpa2U6IHRydWUsXG4gICAgICAgIHVuZGVybGluZTogdHJ1ZSxcbiAgICAgIH19LFxuICAgICAge2luc2VydDogJ1xcbid9LFxuICAgICAge2luc2VydDogJ2JvbGQgbXVsdGlsaW5lXFxudmFsdWUnLCBhdHRyaWJ1dGVzOiB7Ym9sZDogdHJ1ZX19LFxuICAgICAge2luc2VydDogJ2l0YWxpYyB2YWx1ZScsIGF0dHJpYnV0ZXM6IHtpdGFsaWM6IHRydWV9fSxcbiAgICAgIHtpbnNlcnQ6ICdib2xkLWl0YWxpYyB2YWx1ZScsIGF0dHJpYnV0ZXM6IHtib2xkOiB0cnVlLCBpdGFsaWM6IHRydWV9fSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nfSxcbiAgICBdLFxuICB9O1xuICBjb25zb2xlLmxvZygndGVzdGluZyB1bmlxdWVuZXNzIG9uIHNvcnQga2V5cycpO1xuICBSZWdpc3RyeS5jaGVja1ByaW9yaXRpZXMoKTtcbiAgY29uc29sZS5sb2codHJhbnNmb3JtKHRlc3RWYWwpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
