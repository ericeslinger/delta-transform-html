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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZXJhdGlvbnMvdG9rZW5pemUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFBZ0IsUSxHQUFBLFE7QUFBVCxTQUFTLFFBQVQsQ0FBa0IsR0FBbEIsRUFBdUI7QUFDNUIsTUFBTSxTQUFTLEVBQWY7QUFDQSxNQUFJLE9BQUosQ0FBWSxVQUFDLEVBQUQsRUFBUTtBQUNsQixRQUFJLE9BQU8sR0FBRyxNQUFWLEtBQXFCLFFBQXpCLEVBQW1DO0FBQ2pDLGFBQU8sSUFBUCxDQUFZO0FBQ1YsY0FBTSxNQURJO0FBRVYsa0JBQVUsR0FBRyxNQUZIO0FBR1Ysb0JBQVksR0FBRyxVQUFILElBQWlCO0FBSG5CLE9BQVo7QUFLRCxLQU5ELE1BTU8sSUFBSSxHQUFHLE1BQUgsS0FBYyxJQUFsQixFQUF3QjtBQUM3QixhQUFPLElBQVAsQ0FBWTtBQUNWLGNBQU0sV0FESTtBQUVWLG9CQUFZLEdBQUcsVUFBSCxJQUFpQjtBQUZuQixPQUFaO0FBSUQsS0FMTSxNQUtBLElBQUksR0FBRyxNQUFILENBQVUsT0FBVixDQUFrQixJQUFsQixJQUEwQixDQUE5QixFQUFpQztBQUN0QyxhQUFPLElBQVAsQ0FBWTtBQUNWLGNBQU0sTUFESTtBQUVWLGtCQUFVLEdBQUcsTUFGSDtBQUdWLG9CQUFZLEdBQUcsVUFBSCxJQUFpQjtBQUhuQixPQUFaO0FBS0QsS0FOTSxNQU1BO0FBQ0wsVUFBSSxXQUFXLEdBQUcsTUFBbEI7QUFDQSxhQUFPLFNBQVMsTUFBaEIsRUFBd0I7QUFDdEIsWUFBTSxjQUFjLFNBQVMsT0FBVCxDQUFpQixJQUFqQixDQUFwQjtBQUNBLFlBQUksZ0JBQWdCLENBQUMsQ0FBckIsRUFBd0I7QUFDdEIsaUJBQU8sSUFBUCxDQUFZO0FBQ1Ysa0JBQU0sTUFESTtBQUVWLHNCQUFVLFFBRkE7QUFHVix3QkFBWSxHQUFHLFVBQUgsSUFBaUI7QUFIbkIsV0FBWjtBQUtBLHFCQUFXLEVBQVg7QUFDRCxTQVBELE1BT08sSUFBSSxnQkFBZ0IsQ0FBcEIsRUFBdUI7QUFDNUIsaUJBQU8sSUFBUCxDQUFZO0FBQ1Ysa0JBQU0sV0FESTtBQUVWLHdCQUFZLEVBRkYsRUFBWjs7QUFJQSxxQkFBVyxTQUFTLEtBQVQsQ0FBZSxjQUFjLENBQTdCLENBQVg7QUFDRCxTQU5NLE1BTUE7QUFDTCxpQkFBTyxJQUFQLENBQVk7QUFDVixrQkFBTSxNQURJO0FBRVYsc0JBQVUsU0FBUyxLQUFULENBQWUsQ0FBZixFQUFrQixXQUFsQixDQUZBO0FBR1Ysd0JBQVksR0FBRyxVQUFILElBQWlCO0FBSG5CLFdBQVo7QUFLQSxpQkFBTyxJQUFQLENBQVk7QUFDVixrQkFBTSxXQURJO0FBRVYsd0JBQVksRUFGRixFQUFaOztBQUlBLHFCQUFXLFNBQVMsS0FBVCxDQUFlLGNBQWMsQ0FBN0IsQ0FBWDtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEdBakREO0FBa0RBLE1BQUssT0FBTyxNQUFQLEdBQWdCLENBQWpCLElBQXdCLE9BQU8sS0FBUCxDQUFhLENBQUMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixJQUFwQixLQUE2QixXQUF6RCxFQUF1RTtBQUNyRSxXQUFPLElBQVAsQ0FBWTtBQUNWLFlBQU0sV0FESTtBQUVWLGtCQUFZLEVBRkYsRUFBWjtBQUlEOztBQUNELFNBQU8sTUFBUDtBQUNEIiwiZmlsZSI6Im9wZXJhdGlvbnMvdG9rZW5pemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdG9rZW5pemUob3BzKSB7XG4gIGNvbnN0IHJldFZhbCA9IFtdO1xuICBvcHMuZm9yRWFjaCgob3ApID0+IHtcbiAgICBpZiAodHlwZW9mIG9wLmluc2VydCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBjb250ZW50czogb3AuaW5zZXJ0LFxuICAgICAgICBhdHRyaWJ1dGVzOiBvcC5hdHRyaWJ1dGVzIHx8IHt9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChvcC5pbnNlcnQgPT09ICdcXG4nKSB7XG4gICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgIHR5cGU6ICdsaW5lYnJlYWsnLFxuICAgICAgICBhdHRyaWJ1dGVzOiBvcC5hdHRyaWJ1dGVzIHx8IHt9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChvcC5pbnNlcnQuaW5kZXhPZignXFxuJykgPCAwKSB7XG4gICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgY29udGVudHM6IG9wLmluc2VydCxcbiAgICAgICAgYXR0cmlidXRlczogb3AuYXR0cmlidXRlcyB8fCB7fSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY29udGVudHMgPSBvcC5pbnNlcnQ7XG4gICAgICB3aGlsZSAoY29udGVudHMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IG5leHROZXdsaW5lID0gY29udGVudHMuaW5kZXhPZignXFxuJyk7XG4gICAgICAgIGlmIChuZXh0TmV3bGluZSA9PT0gLTEpIHtcbiAgICAgICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICBjb250ZW50czogY29udGVudHMsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBvcC5hdHRyaWJ1dGVzIHx8IHt9LFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnRlbnRzID0gJyc7XG4gICAgICAgIH0gZWxzZSBpZiAobmV4dE5ld2xpbmUgPT09IDApIHtcbiAgICAgICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZWJyZWFrJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHt9LCAvLyBtaWQtaW5zZXJ0IGxpbmVicmVha3MgaGF2ZSBubyBsaW5lLWxldmVsIHN0eWxpbmdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb250ZW50cyA9IGNvbnRlbnRzLnNsaWNlKG5leHROZXdsaW5lICsgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0VmFsLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgY29udGVudHM6IGNvbnRlbnRzLnNsaWNlKDAsIG5leHROZXdsaW5lKSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IG9wLmF0dHJpYnV0ZXMgfHwge30sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0VmFsLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2xpbmVicmVhaycsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7fSwgLy8gbWlkLWluc2VydCBsaW5lYnJlYWtzIGhhdmUgbm8gbGluZS1sZXZlbCBzdHlsaW5nXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29udGVudHMgPSBjb250ZW50cy5zbGljZShuZXh0TmV3bGluZSArIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgaWYgKChyZXRWYWwubGVuZ3RoID4gMCkgJiYgKHJldFZhbC5zbGljZSgtMSlbMF0udHlwZSAhPT0gJ2xpbmVicmVhaycpKSB7XG4gICAgcmV0VmFsLnB1c2goe1xuICAgICAgdHlwZTogJ2xpbmVicmVhaycsXG4gICAgICBhdHRyaWJ1dGVzOiB7fSwgLy8gbWlkLWluc2VydCBsaW5lYnJlYWtzIGhhdmUgbm8gbGluZS1sZXZlbCBzdHlsaW5nXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJldFZhbDtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
