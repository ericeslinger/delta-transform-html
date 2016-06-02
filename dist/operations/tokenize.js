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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZXJhdGlvbnMvdG9rZW5pemUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFBZ0I7QUFBVCxTQUFTLFFBQVQsQ0FBa0IsR0FBbEIsRUFBdUI7QUFDNUIsTUFBTSxTQUFTLEVBQVQsQ0FEc0I7QUFFNUIsTUFBSSxPQUFKLENBQVksVUFBQyxFQUFELEVBQVE7QUFDbEIsUUFBSSxPQUFPLEdBQUcsTUFBSCxLQUFjLFFBQXJCLEVBQStCO0FBQ2pDLGFBQU8sSUFBUCxDQUFZO0FBQ1YsY0FBTSxNQUFOO0FBQ0Esa0JBQVUsR0FBRyxNQUFIO0FBQ1Ysb0JBQVksR0FBRyxVQUFILElBQWlCLEVBQWpCO09BSGQsRUFEaUM7S0FBbkMsTUFNTyxJQUFJLEdBQUcsTUFBSCxLQUFjLElBQWQsRUFBb0I7QUFDN0IsYUFBTyxJQUFQLENBQVk7QUFDVixjQUFNLFdBQU47QUFDQSxvQkFBWSxHQUFHLFVBQUgsSUFBaUIsRUFBakI7T0FGZCxFQUQ2QjtLQUF4QixNQUtBLElBQUksR0FBRyxNQUFILENBQVUsT0FBVixDQUFrQixJQUFsQixJQUEwQixDQUExQixFQUE2QjtBQUN0QyxhQUFPLElBQVAsQ0FBWTtBQUNWLGNBQU0sTUFBTjtBQUNBLGtCQUFVLEdBQUcsTUFBSDtBQUNWLG9CQUFZLEdBQUcsVUFBSCxJQUFpQixFQUFqQjtPQUhkLEVBRHNDO0tBQWpDLE1BTUE7QUFDTCxVQUFJLFdBQVcsR0FBRyxNQUFILENBRFY7QUFFTCxhQUFPLFNBQVMsTUFBVCxFQUFpQjtBQUN0QixZQUFNLGNBQWMsU0FBUyxPQUFULENBQWlCLElBQWpCLENBQWQsQ0FEZ0I7QUFFdEIsWUFBSSxnQkFBZ0IsQ0FBQyxDQUFELEVBQUk7QUFDdEIsaUJBQU8sSUFBUCxDQUFZO0FBQ1Ysa0JBQU0sTUFBTjtBQUNBLHNCQUFVLFFBQVY7QUFDQSx3QkFBWSxHQUFHLFVBQUgsSUFBaUIsRUFBakI7V0FIZCxFQURzQjtBQU10QixxQkFBVyxFQUFYLENBTnNCO1NBQXhCLE1BT087QUFDTCxpQkFBTyxJQUFQLENBQVk7QUFDVixrQkFBTSxNQUFOO0FBQ0Esc0JBQVUsU0FBUyxLQUFULENBQWUsQ0FBZixFQUFrQixXQUFsQixDQUFWO0FBQ0Esd0JBQVksR0FBRyxVQUFILElBQWlCLEVBQWpCO1dBSGQsRUFESztBQU1MLGlCQUFPLElBQVAsQ0FBWTtBQUNWLGtCQUFNLFdBQU47QUFDQSx3QkFBWSxFQUFaLEVBRkYsRUFOSzs7QUFVTCxxQkFBVyxTQUFTLEtBQVQsQ0FBZSxjQUFjLENBQWQsQ0FBMUIsQ0FWSztTQVBQO09BRkY7S0FSSztHQVpHLENBQVosQ0FGNEI7QUE4QzVCLFNBQU8sTUFBUCxDQTlDNEI7Q0FBdkIiLCJmaWxlIjoib3BlcmF0aW9ucy90b2tlbml6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZShvcHMpIHtcbiAgY29uc3QgcmV0VmFsID0gW107XG4gIG9wcy5mb3JFYWNoKChvcCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygb3AuaW5zZXJ0ICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0VmFsLnB1c2goe1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGNvbnRlbnRzOiBvcC5pbnNlcnQsXG4gICAgICAgIGF0dHJpYnV0ZXM6IG9wLmF0dHJpYnV0ZXMgfHwge30sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG9wLmluc2VydCA9PT0gJ1xcbicpIHtcbiAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2xpbmVicmVhaycsXG4gICAgICAgIGF0dHJpYnV0ZXM6IG9wLmF0dHJpYnV0ZXMgfHwge30sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG9wLmluc2VydC5pbmRleE9mKCdcXG4nKSA8IDApIHtcbiAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBjb250ZW50czogb3AuaW5zZXJ0LFxuICAgICAgICBhdHRyaWJ1dGVzOiBvcC5hdHRyaWJ1dGVzIHx8IHt9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjb250ZW50cyA9IG9wLmluc2VydDtcbiAgICAgIHdoaWxlIChjb250ZW50cy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgbmV4dE5ld2xpbmUgPSBjb250ZW50cy5pbmRleE9mKCdcXG4nKTtcbiAgICAgICAgaWYgKG5leHROZXdsaW5lID09PSAtMSkge1xuICAgICAgICAgIHJldFZhbC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIGNvbnRlbnRzOiBjb250ZW50cyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IG9wLmF0dHJpYnV0ZXMgfHwge30sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29udGVudHMgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICBjb250ZW50czogY29udGVudHMuc2xpY2UoMCwgbmV4dE5ld2xpbmUpLFxuICAgICAgICAgICAgYXR0cmlidXRlczogb3AuYXR0cmlidXRlcyB8fCB7fSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXRWYWwucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZWJyZWFrJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHt9LCAvLyBtaWQtaW5zZXJ0IGxpbmVicmVha3MgaGF2ZSBubyBsaW5lLWxldmVsIHN0eWxpbmdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb250ZW50cyA9IGNvbnRlbnRzLnNsaWNlKG5leHROZXdsaW5lICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmV0VmFsO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
