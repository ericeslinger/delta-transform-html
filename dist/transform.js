'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerNodeType = registerNodeType;
exports.getNodeType = getNodeType;
exports.transform = transform;
exports.testDeltas = testDeltas;

var _registry = require('./registry');

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerNodeType(type, nodeType) {
  _registry.Registry[type] = nodeType;
}

function getNodeType(type) {
  return _registry.Registry[type];
}

registerNodeType('bold', _bold2.default);
registerNodeType('italic', _italic2.default);
registerNodeType('link', _link2.default);
registerNodeType('listItem', _listItem2.default);
registerNodeType('ordered', _orderedList2.default);
registerNodeType('paragraph', _paragraph2.default);
registerNodeType('text', _text2.default);
registerNodeType('TreeNode', _treeNode2.default);
registerNodeType('RootNode', _root2.default);
registerNodeType('bullet', _unorderedList2.default);

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
  var retVal = [];
  var currentBlock = null;
  tokens.forEach(function (token) {
    if (currentBlock === null) {
      currentBlock = { type: 'unknown', children: [] };
    }
    if (token.type === 'linebreak') {
      if (token.attributes.list === 'bullet') {
        currentBlock.type = 'bullet';
      } else if (token.attributes.list === 'ordered') {
        currentBlock.type = 'ordered';
      } else {
        currentBlock.type = 'paragraph';
      }
      retVal.push(currentBlock);
      currentBlock = null;
    } else {
      currentBlock.children.push(token);
    }
  });
  return retVal;
}

function assembleLines(blocks) {
  var retVal = new _root2.default();
  blocks.forEach(function (block) {
    var blockNode = new _registry.Registry[block.type](block);
    retVal.absorb(blockNode);
    block.children.forEach(function (child) {
      blockNode.appendChild(_treeNode2.default.build(child));
    });
  });
  return retVal;
}

function transform(delta) {
  return assembleLines(createBlocks(tokenize(delta.ops))).toHTML();
}

function testDeltas() {
  var testVal = {
    ops: [{ insert: 'multiline \n value' }, { insert: '\n' }, { insert: 'bulleted list one', attributes: { link: 'linkTarget' } }, { insert: '\n', attributes: { list: 'bullet' } }, { insert: 'bulleted list two' }, { insert: '\n', attributes: { list: 'bullet' } }, { insert: 'bulleted list three' }, { insert: '\n', attributes: { list: 'bullet' } }, { insert: 'numbered list one' }, { insert: '\n', attributes: { list: 'ordered' } }, { insert: 'numbered list two' }, { insert: '\n', attributes: { list: 'ordered' } }, { insert: 'numbered list three' }, { insert: '\n', attributes: { list: 'ordered' } }, { insert: 'bold multiline\nvalue', attributes: { bold: true } }, { insert: 'italic value', attributes: { italic: true } }, { insert: 'bold-italic value', attributes: { bold: true, italic: true } }, { insert: '\n' }]
  };
  console.log(transform(testVal));
}
//# sourceMappingURL=data:application/json;base64,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bUJBQVIsRUFBNkIsWUFBWSxFQUFDLE1BQU0sWUFBTixFQUFiLEVBSDNCLEVBSUgsRUFBQyxRQUFRLElBQVIsRUFBYyxZQUFZLEVBQUMsTUFBTSxRQUFOLEVBQWIsRUFKWixFQUtILEVBQUMsUUFBUSxtQkFBUixFQUxFLEVBTUgsRUFBQyxRQUFRLElBQVIsRUFBYyxZQUFZLEVBQUMsTUFBTSxRQUFOLEVBQWIsRUFOWixFQU9ILEVBQUMsUUFBUSxxQkFBUixFQVBFLEVBUUgsRUFBQyxRQUFRLElBQVIsRUFBYyxZQUFZLEVBQUMsTUFBTSxRQUFOLEVBQWIsRUFSWixFQVNILEVBQUMsUUFBUSxtQkFBUixFQVRFLEVBVUgsRUFBQyxRQUFRLElBQVIsRUFBYyxZQUFZLEVBQUMsTUFBTSxTQUFOLEVBQWIsRUFWWixFQVdILEVBQUMsUUFBUSxtQkFBUixFQVhFLEVBWUgsRUFBQyxRQUFRLElBQVIsRUFBYyxZQUFZLEVBQUMsTUFBTSxTQUFOLEVBQWIsRUFaWixFQWFILEVBQUMsUUFBUSxxQkFBUixFQWJFLEVBY0gsRUFBQyxRQUFRLElBQVIsRUFBYyxZQUFZLEVBQUMsTUFBTSxTQUFOLEVBQWIsRUFkWixFQWVILEVBQUMsUUFBUSx1QkFBUixFQUFpQyxZQUFZLEVBQUMsTUFBTSxJQUFOLEVBQWIsRUFmL0IsRUFnQkgsRUFBQyxRQUFRLGNBQVIsRUFBd0IsWUFBWSxFQUFDLFFBQVEsSUFBUixFQUFiLEVBaEJ0QixFQWlCSCxFQUFDLFFBQVEsbUJBQVIsRUFBNkIsWUFBWSxFQUFDLE1BQU0sSUFBTixFQUFZLFFBQVEsSUFBUixFQUF6QixFQWpCM0IsRUFrQkgsRUFBQyxRQUFRLElBQVIsRUFsQkUsQ0FBTDtHQURJLENBRHFCO0FBdUIzQixVQUFRLEdBQVIsQ0FBWSxVQUFVLE9BQVYsQ0FBWixFQXZCMkI7Q0FBdEIiLCJmaWxlIjoidHJhbnNmb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVnaXN0cnkgfSBmcm9tICcuL3JlZ2lzdHJ5JztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTm9kZVR5cGUodHlwZSwgbm9kZVR5cGUpIHtcbiAgUmVnaXN0cnlbdHlwZV0gPSBub2RlVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vZGVUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIFJlZ2lzdHJ5W3R5cGVdO1xufVxuXG5pbXBvcnQgQm9sZE5vZGUgZnJvbSAnLi9taW5pRE9NL2JvbGQnO1xuaW1wb3J0IEl0YWxpY05vZGUgZnJvbSAnLi9taW5pRE9NL2l0YWxpYyc7XG5pbXBvcnQgTGlua05vZGUgZnJvbSAnLi9taW5pRE9NL2xpbmsnO1xuaW1wb3J0IExpc3RJdGVtTm9kZSBmcm9tICcuL21pbmlET00vbGlzdEl0ZW0nO1xuaW1wb3J0IE9yZGVyZWRMaXN0Tm9kZSBmcm9tICcuL21pbmlET00vb3JkZXJlZExpc3QnO1xuaW1wb3J0IFBhcmFncmFwaE5vZGUgZnJvbSAnLi9taW5pRE9NL3BhcmFncmFwaCc7XG5pbXBvcnQgVGV4dE5vZGUgZnJvbSAnLi9taW5pRE9NL3RleHQnO1xuaW1wb3J0IFRyZWVOb2RlIGZyb20gJy4vbWluaURPTS90cmVlTm9kZSc7XG5pbXBvcnQgUm9vdE5vZGUgZnJvbSAnLi9taW5pRE9NL3Jvb3QnO1xuaW1wb3J0IFVub3JkZXJlZExpc3ROb2RlIGZyb20gJy4vbWluaURPTS91bm9yZGVyZWRMaXN0JztcblxucmVnaXN0ZXJOb2RlVHlwZSgnYm9sZCcsIEJvbGROb2RlKTtcbnJlZ2lzdGVyTm9kZVR5cGUoJ2l0YWxpYycsIEl0YWxpY05vZGUpO1xucmVnaXN0ZXJOb2RlVHlwZSgnbGluaycsIExpbmtOb2RlKTtcbnJlZ2lzdGVyTm9kZVR5cGUoJ2xpc3RJdGVtJywgTGlzdEl0ZW1Ob2RlKTtcbnJlZ2lzdGVyTm9kZVR5cGUoJ29yZGVyZWQnLCBPcmRlcmVkTGlzdE5vZGUpO1xucmVnaXN0ZXJOb2RlVHlwZSgncGFyYWdyYXBoJywgUGFyYWdyYXBoTm9kZSk7XG5yZWdpc3Rlck5vZGVUeXBlKCd0ZXh0JywgVGV4dE5vZGUpO1xucmVnaXN0ZXJOb2RlVHlwZSgnVHJlZU5vZGUnLCBUcmVlTm9kZSk7XG5yZWdpc3Rlck5vZGVUeXBlKCdSb290Tm9kZScsIFJvb3ROb2RlKTtcbnJlZ2lzdGVyTm9kZVR5cGUoJ2J1bGxldCcsIFVub3JkZXJlZExpc3ROb2RlKTtcblxuZnVuY3Rpb24gdG9rZW5pemUob3BzKSB7XG4gIGNvbnN0IHJldFZhbCA9IFtdO1xuICBvcHMuZm9yRWFjaCgob3ApID0+IHtcbiAgICBpZiAodHlwZW9mIG9wLmluc2VydCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBjb250ZW50czogb3AuaW5zZXJ0LFxuICAgICAgICBhdHRyaWJ1dGVzOiBvcC5hdHRyaWJ1dGVzIHx8IHt9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChvcC5pbnNlcnQgPT09ICdcXG4nKSB7XG4gICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgIHR5cGU6ICdsaW5lYnJlYWsnLFxuICAgICAgICBhdHRyaWJ1dGVzOiBvcC5hdHRyaWJ1dGVzIHx8IHt9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChvcC5pbnNlcnQuaW5kZXhPZignXFxuJykgPCAwKSB7XG4gICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgY29udGVudHM6IG9wLmluc2VydCxcbiAgICAgICAgYXR0cmlidXRlczogb3AuYXR0cmlidXRlcyB8fCB7fSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcC5pbnNlcnQuc3BsaXQoJ1xcbicpLmZvckVhY2goKHN1YlRleHQsIGksIGFyeSkgPT4ge1xuICAgICAgICBpZiAoc3ViVGV4dCA9PT0gJycpIHtcbiAgICAgICAgICByZXR1cm47IC8vIGVuZCBvZiBsaW5lIHdhcyBcXG5cbiAgICAgICAgfVxuICAgICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIGNvbnRlbnRzOiBzdWJUZXh0LFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IG9wLmF0dHJpYnV0ZXMgfHwge30sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaSA8IChhcnkubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZWJyZWFrJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHt9LCAvLyBtaWQtaW5zZXJ0IGxpbmVicmVha3MgaGF2ZSBubyBsaW5lLWxldmVsIHN0eWxpbmdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJldFZhbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQmxvY2tzKHRva2Vucykge1xuICBjb25zdCByZXRWYWwgPSBbXTtcbiAgbGV0IGN1cnJlbnRCbG9jayA9IG51bGw7XG4gIHRva2Vucy5mb3JFYWNoKCh0b2tlbikgPT4ge1xuICAgIGlmIChjdXJyZW50QmxvY2sgPT09IG51bGwpIHtcbiAgICAgIGN1cnJlbnRCbG9jayA9IHt0eXBlOiAndW5rbm93bicsIGNoaWxkcmVuOiBbXX07XG4gICAgfVxuICAgIGlmICh0b2tlbi50eXBlID09PSAnbGluZWJyZWFrJykge1xuICAgICAgaWYgKHRva2VuLmF0dHJpYnV0ZXMubGlzdCA9PT0gJ2J1bGxldCcpIHtcbiAgICAgICAgY3VycmVudEJsb2NrLnR5cGUgPSAnYnVsbGV0JztcbiAgICAgIH0gZWxzZSBpZiAodG9rZW4uYXR0cmlidXRlcy5saXN0ID09PSAnb3JkZXJlZCcpIHtcbiAgICAgICAgY3VycmVudEJsb2NrLnR5cGUgPSAnb3JkZXJlZCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50QmxvY2sudHlwZSA9ICdwYXJhZ3JhcGgnO1xuICAgICAgfVxuICAgICAgcmV0VmFsLnB1c2goY3VycmVudEJsb2NrKTtcbiAgICAgIGN1cnJlbnRCbG9jayA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRCbG9jay5jaGlsZHJlbi5wdXNoKHRva2VuKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmV0VmFsO1xufVxuXG5mdW5jdGlvbiBhc3NlbWJsZUxpbmVzKGJsb2Nrcykge1xuICBjb25zdCByZXRWYWwgPSBuZXcgUm9vdE5vZGUoKTtcbiAgYmxvY2tzLmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgY29uc3QgYmxvY2tOb2RlID0gbmV3IFJlZ2lzdHJ5W2Jsb2NrLnR5cGVdKGJsb2NrKTtcbiAgICByZXRWYWwuYWJzb3JiKGJsb2NrTm9kZSk7XG4gICAgYmxvY2suY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGJsb2NrTm9kZS5hcHBlbmRDaGlsZChUcmVlTm9kZS5idWlsZChjaGlsZCkpO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHJldFZhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybShkZWx0YSkge1xuICByZXR1cm4gYXNzZW1ibGVMaW5lcyhjcmVhdGVCbG9ja3ModG9rZW5pemUoZGVsdGEub3BzKSkpLnRvSFRNTCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVzdERlbHRhcygpIHtcbiAgY29uc3QgdGVzdFZhbCA9IHtcbiAgICBvcHM6IFtcbiAgICAgIHtpbnNlcnQ6ICdtdWx0aWxpbmUgXFxuIHZhbHVlJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuJ30sXG4gICAgICB7aW5zZXJ0OiAnYnVsbGV0ZWQgbGlzdCBvbmUnLCBhdHRyaWJ1dGVzOiB7bGluazogJ2xpbmtUYXJnZXQnfX0sXG4gICAgICB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2xpc3Q6ICdidWxsZXQnfX0sXG4gICAgICB7aW5zZXJ0OiAnYnVsbGV0ZWQgbGlzdCB0d28nfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nLCBhdHRyaWJ1dGVzOiB7bGlzdDogJ2J1bGxldCd9fSxcbiAgICAgIHtpbnNlcnQ6ICdidWxsZXRlZCBsaXN0IHRocmVlJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2xpc3Q6ICdidWxsZXQnfX0sXG4gICAgICB7aW5zZXJ0OiAnbnVtYmVyZWQgbGlzdCBvbmUnfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nLCBhdHRyaWJ1dGVzOiB7bGlzdDogJ29yZGVyZWQnfX0sXG4gICAgICB7aW5zZXJ0OiAnbnVtYmVyZWQgbGlzdCB0d28nfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nLCBhdHRyaWJ1dGVzOiB7bGlzdDogJ29yZGVyZWQnfX0sXG4gICAgICB7aW5zZXJ0OiAnbnVtYmVyZWQgbGlzdCB0aHJlZSd9LFxuICAgICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtsaXN0OiAnb3JkZXJlZCd9fSxcbiAgICAgIHtpbnNlcnQ6ICdib2xkIG11bHRpbGluZVxcbnZhbHVlJywgYXR0cmlidXRlczoge2JvbGQ6IHRydWV9fSxcbiAgICAgIHtpbnNlcnQ6ICdpdGFsaWMgdmFsdWUnLCBhdHRyaWJ1dGVzOiB7aXRhbGljOiB0cnVlfX0sXG4gICAgICB7aW5zZXJ0OiAnYm9sZC1pdGFsaWMgdmFsdWUnLCBhdHRyaWJ1dGVzOiB7Ym9sZDogdHJ1ZSwgaXRhbGljOiB0cnVlfX0sXG4gICAgICB7aW5zZXJ0OiAnXFxuJ30sXG4gICAgXSxcbiAgfTtcbiAgY29uc29sZS5sb2codHJhbnNmb3JtKHRlc3RWYWwpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
