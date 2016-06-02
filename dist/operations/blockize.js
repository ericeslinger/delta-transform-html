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
      (function () {
        var blockArray = _index.Registry.listFormats().filter(function (f) {
          return f.matches(token);
        });
        var currentBlock = new blockArray[0](token);
        childList.forEach(function (child) {
          return currentBlock.appendChild(_index.Registry.get('TreeNode').build(child));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZXJhdGlvbnMvYmxvY2tpemUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFHZ0I7O0FBSGhCOztBQUdPLFNBQVMsUUFBVCxDQUFrQixNQUFsQixFQUEwQjtBQUMvQixNQUFNLFdBQVcsZ0JBQVMsR0FBVCxDQUFhLFVBQWIsQ0FBWCxDQUR5QjtBQUUvQixNQUFNLFNBQVMsSUFBSSxRQUFKLEVBQVQ7QUFGeUIsTUFHM0IsWUFBWSxFQUFaLENBSDJCO0FBSS9CLFNBQU8sT0FBUCxDQUFlLFVBQUMsS0FBRCxFQUFXO0FBQ3hCLFFBQUksTUFBTSxJQUFOLEtBQWUsV0FBZixFQUE0Qjs7QUFDOUIsWUFBTSxhQUFhLGdCQUFTLFdBQVQsR0FBdUIsTUFBdkIsQ0FBOEIsVUFBQyxDQUFEO2lCQUFPLEVBQUUsT0FBRixDQUFVLEtBQVY7U0FBUCxDQUEzQztBQUNOLFlBQU0sZUFBZSxJQUFJLFdBQVcsQ0FBWCxDQUFKLENBQWtCLEtBQWxCLENBQWY7QUFDTixrQkFBVSxPQUFWLENBQWtCLFVBQUMsS0FBRDtpQkFBVyxhQUFhLFdBQWIsQ0FBeUIsZ0JBQVMsR0FBVCxDQUFhLFVBQWIsRUFBeUIsS0FBekIsQ0FBK0IsS0FBL0IsQ0FBekI7U0FBWCxDQUFsQjtBQUNBLGVBQU8sTUFBUCxDQUFjLFlBQWQ7QUFDQSxvQkFBWSxFQUFaO1dBTDhCO0tBQWhDLE1BTU87QUFDTCxnQkFBVSxJQUFWLENBQWUsS0FBZixFQURLO0tBTlA7R0FEYSxDQUFmLENBSitCO0FBZS9CLFNBQU8sTUFBUCxDQWYrQjtDQUExQiIsImZpbGUiOiJvcGVyYXRpb25zL2Jsb2NraXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVnaXN0cnkgfSBmcm9tICcuLi9pbmRleCc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGJsb2NraXplKHRva2Vucykge1xuICBjb25zdCBSb290Tm9kZSA9IFJlZ2lzdHJ5LmdldCgnUm9vdE5vZGUnKTtcbiAgY29uc3QgcmV0VmFsID0gbmV3IFJvb3ROb2RlKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbmV3LWNhcFxuICBsZXQgY2hpbGRMaXN0ID0gW107XG4gIHRva2Vucy5mb3JFYWNoKCh0b2tlbikgPT4ge1xuICAgIGlmICh0b2tlbi50eXBlID09PSAnbGluZWJyZWFrJykge1xuICAgICAgY29uc3QgYmxvY2tBcnJheSA9IFJlZ2lzdHJ5Lmxpc3RGb3JtYXRzKCkuZmlsdGVyKChmKSA9PiBmLm1hdGNoZXModG9rZW4pKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRCbG9jayA9IG5ldyBibG9ja0FycmF5WzBdKHRva2VuKTtcbiAgICAgIGNoaWxkTGlzdC5mb3JFYWNoKChjaGlsZCkgPT4gY3VycmVudEJsb2NrLmFwcGVuZENoaWxkKFJlZ2lzdHJ5LmdldCgnVHJlZU5vZGUnKS5idWlsZChjaGlsZCkpKTtcbiAgICAgIHJldFZhbC5hYnNvcmIoY3VycmVudEJsb2NrKTtcbiAgICAgIGNoaWxkTGlzdCA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZExpc3QucHVzaCh0b2tlbik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJldFZhbDtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
