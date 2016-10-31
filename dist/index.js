'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blockize = exports.tokenize = exports.Registry = undefined;
exports.transform = transform;
exports.transformAsync = transformAsync;
exports.plainText = plainText;
exports.plainTextAsync = plainTextAsync;

var _registry = require('./operations/registry');

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

var _tokenize2 = require('./operations/tokenize');

var _blockize2 = require('./operations/blockize');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Registry = exports.Registry = Reg;

var tokenize = exports.tokenize = _tokenize2.tokenize;
var blockize = exports.blockize = _blockize2.blockize;

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

function transform(delta) {
  return blockize(tokenize(delta.ops)).toHTML();
}

function transformAsync(delta) {
  return blockize(tokenize(delta.ops)).toHTMLAsync();
}

function plainText(delta) {
  return blockize(tokenize(delta.ops)).plainText();
}

function plainTextAsync(delta) {
  return blockize(tokenize(delta.ops)).plainTextAsync();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztRQW9EZ0IsUyxHQUFBLFM7UUFJQSxjLEdBQUEsYztRQUlBLFMsR0FBQSxTO1FBSUEsYyxHQUFBLGM7O0FBaEVoQjs7SUFBWSxHOztBQUlaOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7Ozs7O0FBeEJPLElBQU0sOEJBQVcsR0FBakI7O0FBMEJBLElBQU0saURBQU47QUFDQSxJQUFNLGlEQUFOOztBQUVQLFNBQVMsR0FBVCxDQUFhLE1BQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxRQUFiO0FBQ0EsU0FBUyxHQUFULENBQWEsTUFBYjtBQUNBLFNBQVMsR0FBVCxDQUFhLFVBQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxTQUFiO0FBQ0EsU0FBUyxHQUFULENBQWEsV0FBYjtBQUNBLFNBQVMsR0FBVCxDQUFhLE1BQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxVQUFiO0FBQ0EsU0FBUyxHQUFULENBQWEsVUFBYjtBQUNBLFNBQVMsR0FBVCxDQUFhLFFBQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxRQUFiO0FBQ0EsU0FBUyxHQUFULENBQWEsV0FBYjtBQUNBLFNBQVMsR0FBVCxDQUFhLGVBQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxPQUFiO0FBQ0EsU0FBUyxHQUFULENBQWEsU0FBYjtBQUNBLFNBQVMsR0FBVCxDQUFhLFdBQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxhQUFiO0FBQ0EsU0FBUyxHQUFULENBQWEsVUFBYjtBQUNBLFNBQVMsR0FBVCxDQUFhLFdBQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxPQUFiOztBQUVPLFNBQVMsU0FBVCxDQUFtQixLQUFuQixFQUEwQjtBQUMvQixTQUFPLFNBQVMsU0FBUyxNQUFNLEdBQWYsQ0FBVCxFQUE4QixNQUE5QixFQUFQO0FBQ0Q7O0FBRU0sU0FBUyxjQUFULENBQXdCLEtBQXhCLEVBQStCO0FBQ3BDLFNBQU8sU0FBUyxTQUFTLE1BQU0sR0FBZixDQUFULEVBQThCLFdBQTlCLEVBQVA7QUFDRDs7QUFFTSxTQUFTLFNBQVQsQ0FBbUIsS0FBbkIsRUFBMEI7QUFDL0IsU0FBTyxTQUFTLFNBQVMsTUFBTSxHQUFmLENBQVQsRUFBOEIsU0FBOUIsRUFBUDtBQUNEOztBQUVNLFNBQVMsY0FBVCxDQUF3QixLQUF4QixFQUErQjtBQUNwQyxTQUFPLFNBQVMsU0FBUyxNQUFNLEdBQWYsQ0FBVCxFQUE4QixjQUE5QixFQUFQO0FBQ0QiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWcgZnJvbSAnLi9vcGVyYXRpb25zL3JlZ2lzdHJ5JztcblxuZXhwb3J0IGNvbnN0IFJlZ2lzdHJ5ID0gUmVnO1xuXG5pbXBvcnQgQm9sZE5vZGUgZnJvbSAnLi9taW5pRE9NL2JvbGQnO1xuaW1wb3J0IEl0YWxpY05vZGUgZnJvbSAnLi9taW5pRE9NL2l0YWxpYyc7XG5pbXBvcnQgTGlua05vZGUgZnJvbSAnLi9taW5pRE9NL2xpbmsnO1xuaW1wb3J0IExpc3RJdGVtTm9kZSBmcm9tICcuL21pbmlET00vbGlzdEl0ZW0nO1xuaW1wb3J0IE9yZGVyZWRMaXN0Tm9kZSBmcm9tICcuL21pbmlET00vb3JkZXJlZExpc3QnO1xuaW1wb3J0IFBhcmFncmFwaE5vZGUgZnJvbSAnLi9taW5pRE9NL3BhcmFncmFwaCc7XG5pbXBvcnQgVGV4dE5vZGUgZnJvbSAnLi9taW5pRE9NL3RleHQnO1xuaW1wb3J0IFRyZWVOb2RlIGZyb20gJy4vbWluaURPTS90cmVlTm9kZSc7XG5pbXBvcnQgUm9vdE5vZGUgZnJvbSAnLi9taW5pRE9NL3Jvb3QnO1xuaW1wb3J0IFVub3JkZXJlZExpc3ROb2RlIGZyb20gJy4vbWluaURPTS91bm9yZGVyZWRMaXN0JztcbmltcG9ydCBIZWFkZXJOb2RlIGZyb20gJy4vbWluaURPTS9oZWFkZXInO1xuaW1wb3J0IFVuZGVybGluZU5vZGUgZnJvbSAnLi9taW5pRE9NL3VuZGVybGluZSc7XG5pbXBvcnQgU3RyaWtldGhyb3VnaE5vZGUgZnJvbSAnLi9taW5pRE9NL3N0cmlrZXRocm91Z2gnO1xuaW1wb3J0IENvbG9yTm9kZSBmcm9tICcuL21pbmlET00vY29sb3InO1xuaW1wb3J0IEJhY2tncm91bmRDb2xvck5vZGUgZnJvbSAnLi9taW5pRE9NL2JnY29sb3InO1xuaW1wb3J0IFN1cGVyc2NyaXB0Tm9kZSBmcm9tICcuL21pbmlET00vc3VwZXJzY3JpcHQnO1xuaW1wb3J0IFN1YnNjcmlwdE5vZGUgZnJvbSAnLi9taW5pRE9NL3N1YnNjcmlwdCc7XG5pbXBvcnQgU3Bhbk5vZGUgZnJvbSAnLi9taW5pRE9NL3NwYW4nO1xuaW1wb3J0IEJsb2NrTm9kZSBmcm9tICcuL21pbmlET00vYmxvY2snO1xuaW1wb3J0IEltYWdlTm9kZSBmcm9tICcuL21pbmlET00vaW1hZ2UnO1xuXG5pbXBvcnQgeyB0b2tlbml6ZSBhcyBfdG9rZW5pemUgfSBmcm9tICcuL29wZXJhdGlvbnMvdG9rZW5pemUnO1xuaW1wb3J0IHsgYmxvY2tpemUgYXMgX2Jsb2NraXplIH0gZnJvbSAnLi9vcGVyYXRpb25zL2Jsb2NraXplJztcblxuZXhwb3J0IGNvbnN0IHRva2VuaXplID0gX3Rva2VuaXplO1xuZXhwb3J0IGNvbnN0IGJsb2NraXplID0gX2Jsb2NraXplO1xuXG5SZWdpc3RyeS5hZGQoJ2JvbGQnLCBCb2xkTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2l0YWxpYycsIEl0YWxpY05vZGUpO1xuUmVnaXN0cnkuYWRkKCdsaW5rJywgTGlua05vZGUpO1xuUmVnaXN0cnkuYWRkKCdsaXN0SXRlbScsIExpc3RJdGVtTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ29yZGVyZWQnLCBPcmRlcmVkTGlzdE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdwYXJhZ3JhcGgnLCBQYXJhZ3JhcGhOb2RlKTtcblJlZ2lzdHJ5LmFkZCgndGV4dCcsIFRleHROb2RlKTtcblJlZ2lzdHJ5LmFkZCgnVHJlZU5vZGUnLCBUcmVlTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ1Jvb3ROb2RlJywgUm9vdE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdidWxsZXQnLCBVbm9yZGVyZWRMaXN0Tm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2hlYWRlcicsIEhlYWRlck5vZGUpO1xuUmVnaXN0cnkuYWRkKCd1bmRlcmxpbmUnLCBVbmRlcmxpbmVOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnc3RyaWtldGhyb3VnaCcsIFN0cmlrZXRocm91Z2hOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnY29sb3InLCBDb2xvck5vZGUpO1xuUmVnaXN0cnkuYWRkKCdiZ2NvbG9yJywgQmFja2dyb3VuZENvbG9yTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ3N1YnNjcmlwdCcsIFN1cGVyc2NyaXB0Tm9kZSk7XG5SZWdpc3RyeS5hZGQoJ3N1cGVyc2NyaXB0JywgU3Vic2NyaXB0Tm9kZSk7XG5SZWdpc3RyeS5hZGQoJ1NwYW5Ob2RlJywgU3Bhbk5vZGUpO1xuUmVnaXN0cnkuYWRkKCdCbG9ja05vZGUnLCBCbG9ja05vZGUpO1xuUmVnaXN0cnkuYWRkKCdpbWFnZScsIEltYWdlTm9kZSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0oZGVsdGEpIHtcbiAgcmV0dXJuIGJsb2NraXplKHRva2VuaXplKGRlbHRhLm9wcykpLnRvSFRNTCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtQXN5bmMoZGVsdGEpIHtcbiAgcmV0dXJuIGJsb2NraXplKHRva2VuaXplKGRlbHRhLm9wcykpLnRvSFRNTEFzeW5jKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGFpblRleHQoZGVsdGEpIHtcbiAgcmV0dXJuIGJsb2NraXplKHRva2VuaXplKGRlbHRhLm9wcykpLnBsYWluVGV4dCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhaW5UZXh0QXN5bmMoZGVsdGEpIHtcbiAgcmV0dXJuIGJsb2NraXplKHRva2VuaXplKGRlbHRhLm9wcykpLnBsYWluVGV4dEFzeW5jKCk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
