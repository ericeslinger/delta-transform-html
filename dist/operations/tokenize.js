'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tokenize = tokenize;
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
        } else if (nextNewline === 0) {
          retVal.push({
            type: 'linebreak',
            attributes: {} });
          // mid-insert linebreaks have no line-level styling
          contents = contents.slice(nextNewline + 1);
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
  if (retVal.length > 0 && retVal.slice(-1)[0].type !== 'linebreak') {
    retVal.push({
      type: 'linebreak',
      attributes: {} });
  }
  // mid-insert linebreaks have no line-level styling
  return retVal;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZXJhdGlvbnMvdG9rZW5pemUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFBZ0I7QUFBVCxTQUFTLFFBQVQsQ0FBa0IsR0FBbEIsRUFBdUI7QUFDNUIsTUFBTSxTQUFTLEVBQVQsQ0FEc0I7QUFFNUIsTUFBSSxPQUFKLENBQVksVUFBQyxFQUFELEVBQVE7QUFDbEIsUUFBSSxPQUFPLEdBQUcsTUFBSCxLQUFjLFFBQXJCLEVBQStCO0FBQ2pDLGFBQU8sSUFBUCxDQUFZO0FBQ1YsY0FBTSxNQUFOO0FBQ0Esa0JBQVUsR0FBRyxNQUFIO0FBQ1Ysb0JBQVksR0FBRyxVQUFILElBQWlCLEVBQWpCO09BSGQsRUFEaUM7S0FBbkMsTUFNTyxJQUFJLEdBQUcsTUFBSCxLQUFjLElBQWQsRUFBb0I7QUFDN0IsYUFBTyxJQUFQLENBQVk7QUFDVixjQUFNLFdBQU47QUFDQSxvQkFBWSxHQUFHLFVBQUgsSUFBaUIsRUFBakI7T0FGZCxFQUQ2QjtLQUF4QixNQUtBLElBQUksR0FBRyxNQUFILENBQVUsT0FBVixDQUFrQixJQUFsQixJQUEwQixDQUExQixFQUE2QjtBQUN0QyxhQUFPLElBQVAsQ0FBWTtBQUNWLGNBQU0sTUFBTjtBQUNBLGtCQUFVLEdBQUcsTUFBSDtBQUNWLG9CQUFZLEdBQUcsVUFBSCxJQUFpQixFQUFqQjtPQUhkLEVBRHNDO0tBQWpDLE1BTUE7QUFDTCxVQUFJLFdBQVcsR0FBRyxNQUFILENBRFY7QUFFTCxhQUFPLFNBQVMsTUFBVCxFQUFpQjtBQUN0QixZQUFNLGNBQWMsU0FBUyxPQUFULENBQWlCLElBQWpCLENBQWQsQ0FEZ0I7QUFFdEIsWUFBSSxnQkFBZ0IsQ0FBQyxDQUFELEVBQUk7QUFDdEIsaUJBQU8sSUFBUCxDQUFZO0FBQ1Ysa0JBQU0sTUFBTjtBQUNBLHNCQUFVLFFBQVY7QUFDQSx3QkFBWSxHQUFHLFVBQUgsSUFBaUIsRUFBakI7V0FIZCxFQURzQjtBQU10QixxQkFBVyxFQUFYLENBTnNCO1NBQXhCLE1BT08sSUFBSSxnQkFBZ0IsQ0FBaEIsRUFBbUI7QUFDNUIsaUJBQU8sSUFBUCxDQUFZO0FBQ1Ysa0JBQU0sV0FBTjtBQUNBLHdCQUFZLEVBQVosRUFGRixFQUQ0Qjs7QUFLNUIscUJBQVcsU0FBUyxLQUFULENBQWUsY0FBYyxDQUFkLENBQTFCLENBTDRCO1NBQXZCLE1BTUE7QUFDTCxpQkFBTyxJQUFQLENBQVk7QUFDVixrQkFBTSxNQUFOO0FBQ0Esc0JBQVUsU0FBUyxLQUFULENBQWUsQ0FBZixFQUFrQixXQUFsQixDQUFWO0FBQ0Esd0JBQVksR0FBRyxVQUFILElBQWlCLEVBQWpCO1dBSGQsRUFESztBQU1MLGlCQUFPLElBQVAsQ0FBWTtBQUNWLGtCQUFNLFdBQU47QUFDQSx3QkFBWSxFQUFaLEVBRkYsRUFOSzs7QUFVTCxxQkFBVyxTQUFTLEtBQVQsQ0FBZSxjQUFjLENBQWQsQ0FBMUIsQ0FWSztTQU5BO09BVFQ7S0FSSztHQVpHLENBQVosQ0FGNEI7QUFvRDVCLE1BQUksTUFBQyxDQUFPLE1BQVAsR0FBZ0IsQ0FBaEIsSUFBdUIsT0FBTyxLQUFQLENBQWEsQ0FBQyxDQUFELENBQWIsQ0FBaUIsQ0FBakIsRUFBb0IsSUFBcEIsS0FBNkIsV0FBN0IsRUFBMkM7QUFDckUsV0FBTyxJQUFQLENBQVk7QUFDVixZQUFNLFdBQU47QUFDQSxrQkFBWSxFQUFaLEVBRkYsRUFEcUU7R0FBdkU7O0FBTUEsU0FBTyxNQUFQLENBMUQ0QjtDQUF2QiIsImZpbGUiOiJvcGVyYXRpb25zL3Rva2VuaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplKG9wcykge1xuICBjb25zdCByZXRWYWwgPSBbXTtcbiAgb3BzLmZvckVhY2goKG9wKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBvcC5pbnNlcnQgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgY29udGVudHM6IG9wLmluc2VydCxcbiAgICAgICAgYXR0cmlidXRlczogb3AuYXR0cmlidXRlcyB8fCB7fSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAob3AuaW5zZXJ0ID09PSAnXFxuJykge1xuICAgICAgcmV0VmFsLnB1c2goe1xuICAgICAgICB0eXBlOiAnbGluZWJyZWFrJyxcbiAgICAgICAgYXR0cmlidXRlczogb3AuYXR0cmlidXRlcyB8fCB7fSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAob3AuaW5zZXJ0LmluZGV4T2YoJ1xcbicpIDwgMCkge1xuICAgICAgcmV0VmFsLnB1c2goe1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGNvbnRlbnRzOiBvcC5pbnNlcnQsXG4gICAgICAgIGF0dHJpYnV0ZXM6IG9wLmF0dHJpYnV0ZXMgfHwge30sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNvbnRlbnRzID0gb3AuaW5zZXJ0O1xuICAgICAgd2hpbGUgKGNvbnRlbnRzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBuZXh0TmV3bGluZSA9IGNvbnRlbnRzLmluZGV4T2YoJ1xcbicpO1xuICAgICAgICBpZiAobmV4dE5ld2xpbmUgPT09IC0xKSB7XG4gICAgICAgICAgcmV0VmFsLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgY29udGVudHM6IGNvbnRlbnRzLFxuICAgICAgICAgICAgYXR0cmlidXRlczogb3AuYXR0cmlidXRlcyB8fCB7fSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb250ZW50cyA9ICcnO1xuICAgICAgICB9IGVsc2UgaWYgKG5leHROZXdsaW5lID09PSAwKSB7XG4gICAgICAgICAgcmV0VmFsLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2xpbmVicmVhaycsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7fSwgLy8gbWlkLWluc2VydCBsaW5lYnJlYWtzIGhhdmUgbm8gbGluZS1sZXZlbCBzdHlsaW5nXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29udGVudHMgPSBjb250ZW50cy5zbGljZShuZXh0TmV3bGluZSArIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIGNvbnRlbnRzOiBjb250ZW50cy5zbGljZSgwLCBuZXh0TmV3bGluZSksXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBvcC5hdHRyaWJ1dGVzIHx8IHt9LFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lYnJlYWsnLFxuICAgICAgICAgICAgYXR0cmlidXRlczoge30sIC8vIG1pZC1pbnNlcnQgbGluZWJyZWFrcyBoYXZlIG5vIGxpbmUtbGV2ZWwgc3R5bGluZ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnRlbnRzID0gY29udGVudHMuc2xpY2UobmV4dE5ld2xpbmUgKyAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGlmICgocmV0VmFsLmxlbmd0aCA+IDApICYmIChyZXRWYWwuc2xpY2UoLTEpWzBdLnR5cGUgIT09ICdsaW5lYnJlYWsnKSkge1xuICAgIHJldFZhbC5wdXNoKHtcbiAgICAgIHR5cGU6ICdsaW5lYnJlYWsnLFxuICAgICAgYXR0cmlidXRlczoge30sIC8vIG1pZC1pbnNlcnQgbGluZWJyZWFrcyBoYXZlIG5vIGxpbmUtbGV2ZWwgc3R5bGluZ1xuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXRWYWw7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
