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
    console.log('ADDING');
    console.log(JSON.stringify(retVal.slice(-1), null, 2));
    retVal.push({
      type: 'linebreak',
      attributes: {} });
  }
  // mid-insert linebreaks have no line-level styling
  return retVal;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZXJhdGlvbnMvdG9rZW5pemUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFBZ0IsUSxHQUFBLFE7QUFBVCxTQUFTLFFBQVQsQ0FBa0IsR0FBbEIsRUFBdUI7QUFDNUIsTUFBTSxTQUFTLEVBQWY7QUFDQSxNQUFJLE9BQUosQ0FBWSxVQUFDLEVBQUQsRUFBUTtBQUNsQixRQUFJLE9BQU8sR0FBRyxNQUFWLEtBQXFCLFFBQXpCLEVBQW1DO0FBQ2pDLGFBQU8sSUFBUCxDQUFZO0FBQ1YsY0FBTSxNQURJO0FBRVYsa0JBQVUsR0FBRyxNQUZIO0FBR1Ysb0JBQVksR0FBRyxVQUFILElBQWlCO0FBSG5CLE9BQVo7QUFLRCxLQU5ELE1BTU8sSUFBSSxHQUFHLE1BQUgsS0FBYyxJQUFsQixFQUF3QjtBQUM3QixhQUFPLElBQVAsQ0FBWTtBQUNWLGNBQU0sV0FESTtBQUVWLG9CQUFZLEdBQUcsVUFBSCxJQUFpQjtBQUZuQixPQUFaO0FBSUQsS0FMTSxNQUtBLElBQUksR0FBRyxNQUFILENBQVUsT0FBVixDQUFrQixJQUFsQixJQUEwQixDQUE5QixFQUFpQztBQUN0QyxhQUFPLElBQVAsQ0FBWTtBQUNWLGNBQU0sTUFESTtBQUVWLGtCQUFVLEdBQUcsTUFGSDtBQUdWLG9CQUFZLEdBQUcsVUFBSCxJQUFpQjtBQUhuQixPQUFaO0FBS0QsS0FOTSxNQU1BO0FBQ0wsVUFBSSxXQUFXLEdBQUcsTUFBbEI7QUFDQSxhQUFPLFNBQVMsTUFBaEIsRUFBd0I7QUFDdEIsWUFBTSxjQUFjLFNBQVMsT0FBVCxDQUFpQixJQUFqQixDQUFwQjtBQUNBLFlBQUksZ0JBQWdCLENBQUMsQ0FBckIsRUFBd0I7QUFDdEIsaUJBQU8sSUFBUCxDQUFZO0FBQ1Ysa0JBQU0sTUFESTtBQUVWLHNCQUFVLFFBRkE7QUFHVix3QkFBWSxHQUFHLFVBQUgsSUFBaUI7QUFIbkIsV0FBWjtBQUtBLHFCQUFXLEVBQVg7QUFDRCxTQVBELE1BT08sSUFBSSxnQkFBZ0IsQ0FBcEIsRUFBdUI7QUFDNUIsaUJBQU8sSUFBUCxDQUFZO0FBQ1Ysa0JBQU0sV0FESTtBQUVWLHdCQUFZLEVBRkYsRUFBWjs7QUFJQSxxQkFBVyxTQUFTLEtBQVQsQ0FBZSxjQUFjLENBQTdCLENBQVg7QUFDRCxTQU5NLE1BTUE7QUFDTCxpQkFBTyxJQUFQLENBQVk7QUFDVixrQkFBTSxNQURJO0FBRVYsc0JBQVUsU0FBUyxLQUFULENBQWUsQ0FBZixFQUFrQixXQUFsQixDQUZBO0FBR1Ysd0JBQVksR0FBRyxVQUFILElBQWlCO0FBSG5CLFdBQVo7QUFLQSxpQkFBTyxJQUFQLENBQVk7QUFDVixrQkFBTSxXQURJO0FBRVYsd0JBQVksRUFGRixFQUFaOztBQUlBLHFCQUFXLFNBQVMsS0FBVCxDQUFlLGNBQWMsQ0FBN0IsQ0FBWDtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEdBakREO0FBa0RBLE1BQUssT0FBTyxNQUFQLEdBQWdCLENBQWpCLElBQXdCLE9BQU8sS0FBUCxDQUFhLENBQUMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixJQUFwQixLQUE2QixXQUF6RCxFQUF1RTtBQUNyRSxZQUFRLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsWUFBUSxHQUFSLENBQVksS0FBSyxTQUFMLENBQWUsT0FBTyxLQUFQLENBQWEsQ0FBQyxDQUFkLENBQWYsRUFBaUMsSUFBakMsRUFBdUMsQ0FBdkMsQ0FBWjtBQUNBLFdBQU8sSUFBUCxDQUFZO0FBQ1YsWUFBTSxXQURJO0FBRVYsa0JBQVksRUFGRixFQUFaO0FBSUQ7O0FBQ0QsU0FBTyxNQUFQO0FBQ0QiLCJmaWxlIjoib3BlcmF0aW9ucy90b2tlbml6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZShvcHMpIHtcbiAgY29uc3QgcmV0VmFsID0gW107XG4gIG9wcy5mb3JFYWNoKChvcCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygb3AuaW5zZXJ0ICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0VmFsLnB1c2goe1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGNvbnRlbnRzOiBvcC5pbnNlcnQsXG4gICAgICAgIGF0dHJpYnV0ZXM6IG9wLmF0dHJpYnV0ZXMgfHwge30sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG9wLmluc2VydCA9PT0gJ1xcbicpIHtcbiAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2xpbmVicmVhaycsXG4gICAgICAgIGF0dHJpYnV0ZXM6IG9wLmF0dHJpYnV0ZXMgfHwge30sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG9wLmluc2VydC5pbmRleE9mKCdcXG4nKSA8IDApIHtcbiAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBjb250ZW50czogb3AuaW5zZXJ0LFxuICAgICAgICBhdHRyaWJ1dGVzOiBvcC5hdHRyaWJ1dGVzIHx8IHt9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjb250ZW50cyA9IG9wLmluc2VydDtcbiAgICAgIHdoaWxlIChjb250ZW50cy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgbmV4dE5ld2xpbmUgPSBjb250ZW50cy5pbmRleE9mKCdcXG4nKTtcbiAgICAgICAgaWYgKG5leHROZXdsaW5lID09PSAtMSkge1xuICAgICAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIGNvbnRlbnRzOiBjb250ZW50cyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IG9wLmF0dHJpYnV0ZXMgfHwge30sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29udGVudHMgPSAnJztcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0TmV3bGluZSA9PT0gMCkge1xuICAgICAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lYnJlYWsnLFxuICAgICAgICAgICAgYXR0cmlidXRlczoge30sIC8vIG1pZC1pbnNlcnQgbGluZWJyZWFrcyBoYXZlIG5vIGxpbmUtbGV2ZWwgc3R5bGluZ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnRlbnRzID0gY29udGVudHMuc2xpY2UobmV4dE5ld2xpbmUgKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICBjb250ZW50czogY29udGVudHMuc2xpY2UoMCwgbmV4dE5ld2xpbmUpLFxuICAgICAgICAgICAgYXR0cmlidXRlczogb3AuYXR0cmlidXRlcyB8fCB7fSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZWJyZWFrJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHt9LCAvLyBtaWQtaW5zZXJ0IGxpbmVicmVha3MgaGF2ZSBubyBsaW5lLWxldmVsIHN0eWxpbmdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb250ZW50cyA9IGNvbnRlbnRzLnNsaWNlKG5leHROZXdsaW5lICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBpZiAoKHJldFZhbC5sZW5ndGggPiAwKSAmJiAocmV0VmFsLnNsaWNlKC0xKVswXS50eXBlICE9PSAnbGluZWJyZWFrJykpIHtcbiAgICBjb25zb2xlLmxvZygnQURESU5HJyk7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmV0VmFsLnNsaWNlKC0xKSwgbnVsbCwgMikpO1xuICAgIHJldFZhbC5wdXNoKHtcbiAgICAgIHR5cGU6ICdsaW5lYnJlYWsnLFxuICAgICAgYXR0cmlidXRlczoge30sIC8vIG1pZC1pbnNlcnQgbGluZWJyZWFrcyBoYXZlIG5vIGxpbmUtbGV2ZWwgc3R5bGluZ1xuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXRWYWw7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
