'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerFormat = registerFormat;
exports.parseDelta = parseDelta;
exports.testDeltas = testDeltas;

var _registry = require('./registry');

var _bold = require('./bold');

_registry.Registry.bold = _bold.BoldFormat;

function registerFormat(type, formatter) {
  _registry.Registry[type] = formatter;
}

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

function assembleLines(tokens) {
  var retVal = [];
  var currentLine = [];
  tokens.forEach(function (token) {
    if (token.type === 'linebreak') {
      retVal.push({
        lineAttributes: token.attributes,
        elements: currentLine
      });
      currentLine = [];
    } else {
      currentLine.push(token);
    }
  });
  if (currentLine.length) {
    retVal.push({
      lineAttributes: {},
      elements: currentLine
    });
  }
  return retVal;
}

function parseDelta(delta) {
  if (!delta.ops) {
    throw new Error('Not a delta');
  }
  var returnValue = '';
  delta.ops.forEach(function (op) {
    if (typeof op.insert === 'string') {
      (function () {
        var formatStack = [];
        if (op.attributes) {
          Object.keys(op.attributes).forEach(function (attr) {
            if (_registry.Registry[attr] && op.attributes[attr]) {
              formatStack.push(new _registry.Registry[attr](op));
            }
          });
        }
        formatStack.forEach(function (f) {
          returnValue += f.openTag();
        });
        returnValue += op.insert;
        formatStack.reverse().forEach(function (f) {
          returnValue += f.closeTag();
        });
      })();
    }
  });
  return returnValue;
}

function testDeltas() {
  var testVal = {
    ops: [{ insert: 'multiline \n value' }, { insert: '\n' }, { insert: 'bulleted list one' }, { insert: '\n', attributes: { list: 'bullet' } }, { insert: 'bulleted list two' }, { insert: '\n', attributes: { list: 'bullet' } }, { insert: 'bulleted list three' }, { insert: '\n', attributes: { list: 'bullet' } }, { insert: 'numbered list one' }, { insert: '\n', attributes: { list: 'ordered' } }, { insert: 'numbered list two' }, { insert: '\n', attributes: { list: 'ordered' } }, { insert: 'numbered list three' }, { insert: '\n', attributes: { list: 'ordered' } }, { insert: 'bold multiline\nvalue', attributes: { bold: true } }, { insert: 'italic value', attributes: { italic: true } }, { insert: 'bold-italic value', attributes: { bold: true, italic: true } }, { insert: '\n' }]
  };
  console.log(JSON.stringify(assembleLines(tokenize(testVal.ops)), null, 2));
  console.log(parseDelta(testVal));
}

testDeltas();
//# sourceMappingURL=data:application/json;base64,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QU0sUUFBTixFQUFiLEVBUlosRUFTSCxFQUFDLFFBQVEsbUJBQVIsRUFURSxFQVVILEVBQUMsUUFBUSxJQUFSLEVBQWMsWUFBWSxFQUFDLE1BQU0sU0FBTixFQUFiLEVBVlosRUFXSCxFQUFDLFFBQVEsbUJBQVIsRUFYRSxFQVlILEVBQUMsUUFBUSxJQUFSLEVBQWMsWUFBWSxFQUFDLE1BQU0sU0FBTixFQUFiLEVBWlosRUFhSCxFQUFDLFFBQVEscUJBQVIsRUFiRSxFQWNILEVBQUMsUUFBUSxJQUFSLEVBQWMsWUFBWSxFQUFDLE1BQU0sU0FBTixFQUFiLEVBZFosRUFlSCxFQUFDLFFBQVEsdUJBQVIsRUFBaUMsWUFBWSxFQUFDLE1BQU0sSUFBTixFQUFiLEVBZi9CLEVBZ0JILEVBQUMsUUFBUSxjQUFSLEVBQXdCLFlBQVksRUFBQyxRQUFRLElBQVIsRUFBYixFQWhCdEIsRUFpQkgsRUFBQyxRQUFRLG1CQUFSLEVBQTZCLFlBQVksRUFBQyxNQUFNLElBQU4sRUFBWSxRQUFRLElBQVIsRUFBekIsRUFqQjNCLEVBa0JILEVBQUMsUUFBUSxJQUFSLEVBbEJFLENBQUw7R0FESSxDQURxQjtBQXVCM0IsVUFBUSxHQUFSLENBQVksS0FBSyxTQUFMLENBQWUsY0FBYyxTQUFTLFFBQVEsR0FBUixDQUF2QixDQUFmLEVBQXFELElBQXJELEVBQTJELENBQTNELENBQVosRUF2QjJCO0FBd0IzQixVQUFRLEdBQVIsQ0FBWSxXQUFXLE9BQVgsQ0FBWixFQXhCMkI7Q0FBdEI7O0FBMkJQIiwiZmlsZSI6InRyYW5zZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlZ2lzdHJ5IH0gZnJvbSAnLi9yZWdpc3RyeSc7XG5cbmltcG9ydCB7IEJvbGRGb3JtYXQgfSBmcm9tICcuL2JvbGQnO1xuXG5SZWdpc3RyeS5ib2xkID0gQm9sZEZvcm1hdDtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyRm9ybWF0KHR5cGUsIGZvcm1hdHRlcikge1xuICBSZWdpc3RyeVt0eXBlXSA9IGZvcm1hdHRlcjtcbn1cblxuZnVuY3Rpb24gdG9rZW5pemUob3BzKSB7XG4gIGNvbnN0IHJldFZhbCA9IFtdO1xuICBvcHMuZm9yRWFjaCgob3ApID0+IHtcbiAgICBpZiAodHlwZW9mIG9wLmluc2VydCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBjb250ZW50czogb3AuaW5zZXJ0LFxuICAgICAgICBhdHRyaWJ1dGVzOiBvcC5hdHRyaWJ1dGVzIHx8IHt9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChvcC5pbnNlcnQgPT09ICdcXG4nKSB7XG4gICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgIHR5cGU6ICdsaW5lYnJlYWsnLFxuICAgICAgICBhdHRyaWJ1dGVzOiBvcC5hdHRyaWJ1dGVzIHx8IHt9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChvcC5pbnNlcnQuaW5kZXhPZignXFxuJykgPCAwKSB7XG4gICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgY29udGVudHM6IG9wLmluc2VydCxcbiAgICAgICAgYXR0cmlidXRlczogb3AuYXR0cmlidXRlcyB8fCB7fSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcC5pbnNlcnQuc3BsaXQoJ1xcbicpLmZvckVhY2goKHN1YlRleHQsIGksIGFyeSkgPT4ge1xuICAgICAgICBpZiAoc3ViVGV4dCA9PT0gJycpIHtcbiAgICAgICAgICByZXR1cm47IC8vIGVuZCBvZiBsaW5lIHdhcyBcXG5cbiAgICAgICAgfVxuICAgICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIGNvbnRlbnRzOiBzdWJUZXh0LFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IG9wLmF0dHJpYnV0ZXMgfHwge30sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaSA8IChhcnkubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZWJyZWFrJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHt9LCAvLyBtaWQtaW5zZXJ0IGxpbmVicmVha3MgaGF2ZSBubyBsaW5lLWxldmVsIHN0eWxpbmdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJldFZhbDtcbn1cblxuZnVuY3Rpb24gYXNzZW1ibGVMaW5lcyh0b2tlbnMpIHtcbiAgY29uc3QgcmV0VmFsID0gW107XG4gIGxldCBjdXJyZW50TGluZSA9IFtdO1xuICB0b2tlbnMuZm9yRWFjaCgodG9rZW4pID0+IHtcbiAgICBpZiAodG9rZW4udHlwZSA9PT0gJ2xpbmVicmVhaycpIHtcbiAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgbGluZUF0dHJpYnV0ZXM6IHRva2VuLmF0dHJpYnV0ZXMsXG4gICAgICAgIGVsZW1lbnRzOiBjdXJyZW50TGluZSxcbiAgICAgIH0pO1xuICAgICAgY3VycmVudExpbmUgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudExpbmUucHVzaCh0b2tlbik7XG4gICAgfVxuICB9KTtcbiAgaWYgKGN1cnJlbnRMaW5lLmxlbmd0aCkge1xuICAgIHJldFZhbC5wdXNoKHtcbiAgICAgIGxpbmVBdHRyaWJ1dGVzOiB7fSxcbiAgICAgIGVsZW1lbnRzOiBjdXJyZW50TGluZSxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmV0VmFsO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZURlbHRhKGRlbHRhKSB7XG4gIGlmICghZGVsdGEub3BzKSB7IHRocm93IG5ldyBFcnJvcignTm90IGEgZGVsdGEnKTsgfVxuICBsZXQgcmV0dXJuVmFsdWUgPSAnJztcbiAgZGVsdGEub3BzLmZvckVhY2goKG9wKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBvcC5pbnNlcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBmb3JtYXRTdGFjayA9IFtdO1xuICAgICAgaWYgKG9wLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMob3AuYXR0cmlidXRlcykuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICAgIGlmICgoUmVnaXN0cnlbYXR0cl0pICYmIChvcC5hdHRyaWJ1dGVzW2F0dHJdKSkge1xuICAgICAgICAgICAgZm9ybWF0U3RhY2sucHVzaChuZXcgUmVnaXN0cnlbYXR0cl0ob3ApKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZm9ybWF0U3RhY2suZm9yRWFjaCgoZikgPT4ge1xuICAgICAgICByZXR1cm5WYWx1ZSArPSBmLm9wZW5UYWcoKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuVmFsdWUgKz0gb3AuaW5zZXJ0O1xuICAgICAgZm9ybWF0U3RhY2sucmV2ZXJzZSgpLmZvckVhY2goKGYpID0+IHtcbiAgICAgICAgcmV0dXJuVmFsdWUgKz0gZi5jbG9zZVRhZygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJldHVyblZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVzdERlbHRhcygpIHtcbiAgY29uc3QgdGVzdFZhbCA9IHtcbiAgICBvcHM6IFtcbiAgICAgIHtpbnNlcnQ6ICdtdWx0aWxpbmUgXFxuIHZhbHVlJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuJ30sXG4gICAgICB7aW5zZXJ0OiAnYnVsbGV0ZWQgbGlzdCBvbmUnfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nLCBhdHRyaWJ1dGVzOiB7bGlzdDogJ2J1bGxldCd9fSxcbiAgICAgIHtpbnNlcnQ6ICdidWxsZXRlZCBsaXN0IHR3byd9LFxuICAgICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtsaXN0OiAnYnVsbGV0J319LFxuICAgICAge2luc2VydDogJ2J1bGxldGVkIGxpc3QgdGhyZWUnfSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nLCBhdHRyaWJ1dGVzOiB7bGlzdDogJ2J1bGxldCd9fSxcbiAgICAgIHtpbnNlcnQ6ICdudW1iZXJlZCBsaXN0IG9uZSd9LFxuICAgICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtsaXN0OiAnb3JkZXJlZCd9fSxcbiAgICAgIHtpbnNlcnQ6ICdudW1iZXJlZCBsaXN0IHR3byd9LFxuICAgICAge2luc2VydDogJ1xcbicsIGF0dHJpYnV0ZXM6IHtsaXN0OiAnb3JkZXJlZCd9fSxcbiAgICAgIHtpbnNlcnQ6ICdudW1iZXJlZCBsaXN0IHRocmVlJ30sXG4gICAgICB7aW5zZXJ0OiAnXFxuJywgYXR0cmlidXRlczoge2xpc3Q6ICdvcmRlcmVkJ319LFxuICAgICAge2luc2VydDogJ2JvbGQgbXVsdGlsaW5lXFxudmFsdWUnLCBhdHRyaWJ1dGVzOiB7Ym9sZDogdHJ1ZX19LFxuICAgICAge2luc2VydDogJ2l0YWxpYyB2YWx1ZScsIGF0dHJpYnV0ZXM6IHtpdGFsaWM6IHRydWV9fSxcbiAgICAgIHtpbnNlcnQ6ICdib2xkLWl0YWxpYyB2YWx1ZScsIGF0dHJpYnV0ZXM6IHtib2xkOiB0cnVlLCBpdGFsaWM6IHRydWV9fSxcbiAgICAgIHtpbnNlcnQ6ICdcXG4nfSxcbiAgICBdLFxuICB9O1xuICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShhc3NlbWJsZUxpbmVzKHRva2VuaXplKHRlc3RWYWwub3BzKSksIG51bGwsIDIpKTtcbiAgY29uc29sZS5sb2cocGFyc2VEZWx0YSh0ZXN0VmFsKSk7XG59XG5cbnRlc3REZWx0YXMoKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
