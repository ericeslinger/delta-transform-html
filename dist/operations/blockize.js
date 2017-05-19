'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blockize = blockize;

var _index = require('../index');

function blockize(tokens) {
  var RootNode = _index.Registry.get('RootNode');
  var retVal = new RootNode(); // eslint-disable-line new-cap
  var childList = [];
  tokens.forEach(function (token) {
    if (token.type === 'linebreak') {
      var blockArray = _index.Registry.listFormats().filter(function (f) {
        return f.matches(token);
      });
      var currentBlock = new blockArray[0](token);
      childList.forEach(function (child) {
        return currentBlock.appendChild(_index.Registry.get('TreeNode').build(child));
      });
      retVal.absorb(currentBlock);
      childList = [];
    } else {
      childList.push(token);
    }
  });
  return retVal;
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZXJhdGlvbnMvYmxvY2tpemUuanMiXSwibmFtZXMiOlsiYmxvY2tpemUiLCJ0b2tlbnMiLCJSb290Tm9kZSIsImdldCIsInJldFZhbCIsImNoaWxkTGlzdCIsImZvckVhY2giLCJ0b2tlbiIsInR5cGUiLCJibG9ja0FycmF5IiwibGlzdEZvcm1hdHMiLCJmaWx0ZXIiLCJmIiwibWF0Y2hlcyIsImN1cnJlbnRCbG9jayIsImNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJidWlsZCIsImFic29yYiIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7O1FBR2dCQSxRLEdBQUFBLFE7O0FBSGhCOztBQUdPLFNBQVNBLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0FBQy9CLE1BQU1DLFdBQVcsZ0JBQVNDLEdBQVQsQ0FBYSxVQUFiLENBQWpCO0FBQ0EsTUFBTUMsU0FBUyxJQUFJRixRQUFKLEVBQWYsQ0FGK0IsQ0FFQTtBQUMvQixNQUFJRyxZQUFZLEVBQWhCO0FBQ0FKLFNBQU9LLE9BQVAsQ0FBZSxVQUFDQyxLQUFELEVBQVc7QUFDeEIsUUFBSUEsTUFBTUMsSUFBTixLQUFlLFdBQW5CLEVBQWdDO0FBQzlCLFVBQU1DLGFBQWEsZ0JBQVNDLFdBQVQsR0FBdUJDLE1BQXZCLENBQThCLFVBQUNDLENBQUQ7QUFBQSxlQUFPQSxFQUFFQyxPQUFGLENBQVVOLEtBQVYsQ0FBUDtBQUFBLE9BQTlCLENBQW5CO0FBQ0EsVUFBTU8sZUFBZSxJQUFJTCxXQUFXLENBQVgsQ0FBSixDQUFrQkYsS0FBbEIsQ0FBckI7QUFDQUYsZ0JBQVVDLE9BQVYsQ0FBa0IsVUFBQ1MsS0FBRDtBQUFBLGVBQVdELGFBQWFFLFdBQWIsQ0FBeUIsZ0JBQVNiLEdBQVQsQ0FBYSxVQUFiLEVBQXlCYyxLQUF6QixDQUErQkYsS0FBL0IsQ0FBekIsQ0FBWDtBQUFBLE9BQWxCO0FBQ0FYLGFBQU9jLE1BQVAsQ0FBY0osWUFBZDtBQUNBVCxrQkFBWSxFQUFaO0FBQ0QsS0FORCxNQU1PO0FBQ0xBLGdCQUFVYyxJQUFWLENBQWVaLEtBQWY7QUFDRDtBQUNGLEdBVkQ7QUFXQSxTQUFPSCxNQUFQO0FBQ0QiLCJmaWxlIjoib3BlcmF0aW9ucy9ibG9ja2l6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlZ2lzdHJ5IH0gZnJvbSAnLi4vaW5kZXgnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBibG9ja2l6ZSh0b2tlbnMpIHtcbiAgY29uc3QgUm9vdE5vZGUgPSBSZWdpc3RyeS5nZXQoJ1Jvb3ROb2RlJyk7XG4gIGNvbnN0IHJldFZhbCA9IG5ldyBSb290Tm9kZSgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcbiAgbGV0IGNoaWxkTGlzdCA9IFtdO1xuICB0b2tlbnMuZm9yRWFjaCgodG9rZW4pID0+IHtcbiAgICBpZiAodG9rZW4udHlwZSA9PT0gJ2xpbmVicmVhaycpIHtcbiAgICAgIGNvbnN0IGJsb2NrQXJyYXkgPSBSZWdpc3RyeS5saXN0Rm9ybWF0cygpLmZpbHRlcigoZikgPT4gZi5tYXRjaGVzKHRva2VuKSk7XG4gICAgICBjb25zdCBjdXJyZW50QmxvY2sgPSBuZXcgYmxvY2tBcnJheVswXSh0b2tlbik7XG4gICAgICBjaGlsZExpc3QuZm9yRWFjaCgoY2hpbGQpID0+IGN1cnJlbnRCbG9jay5hcHBlbmRDaGlsZChSZWdpc3RyeS5nZXQoJ1RyZWVOb2RlJykuYnVpbGQoY2hpbGQpKSk7XG4gICAgICByZXRWYWwuYWJzb3JiKGN1cnJlbnRCbG9jayk7XG4gICAgICBjaGlsZExpc3QgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGRMaXN0LnB1c2godG9rZW4pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXRWYWw7XG59XG4iXX0=
