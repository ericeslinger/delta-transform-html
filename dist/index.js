'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Registry = undefined;
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

var _tokenize = require('./operations/tokenize');

var _blockize = require('./operations/blockize');

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
Registry.add('SpanNode', _span2.default);
Registry.add('BlockNode', _block2.default);
Registry.add('image', _image2.default);

function transform(delta) {
  return (0, _blockize.blockize)((0, _tokenize.tokenize)(delta.ops)).toHTML();
}

function transformAsync(delta) {
  return (0, _blockize.blockize)((0, _tokenize.tokenize)(delta.ops)).toHTMLAsync();
}

function plainText(delta) {
  return (0, _blockize.blockize)((0, _tokenize.tokenize)(delta.ops)).plainText();
}

function plainTextAsync(delta) {
  return (0, _blockize.blockize)((0, _tokenize.tokenize)(delta.ops)).plainTextAsync();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztRQWlEZ0IsUyxHQUFBLFM7UUFJQSxjLEdBQUEsYztRQUlBLFMsR0FBQSxTO1FBSUEsYyxHQUFBLGM7O0FBN0RoQjs7SUFBWSxHOztBQUlaOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7Ozs7O0FBeEJPLElBQU0sOEJBQVcsR0FBakI7O0FBMEJQLFNBQVMsR0FBVCxDQUFhLE1BQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxRQUFiO0FBQ0EsU0FBUyxHQUFULENBQWEsTUFBYjtBQUNBLFNBQVMsR0FBVCxDQUFhLFVBQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxTQUFiO0FBQ0EsU0FBUyxHQUFULENBQWEsV0FBYjtBQUNBLFNBQVMsR0FBVCxDQUFhLE1BQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxVQUFiO0FBQ0EsU0FBUyxHQUFULENBQWEsVUFBYjtBQUNBLFNBQVMsR0FBVCxDQUFhLFFBQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxRQUFiO0FBQ0EsU0FBUyxHQUFULENBQWEsV0FBYjtBQUNBLFNBQVMsR0FBVCxDQUFhLGVBQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxPQUFiO0FBQ0EsU0FBUyxHQUFULENBQWEsU0FBYjtBQUNBLFNBQVMsR0FBVCxDQUFhLFdBQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxhQUFiO0FBQ0EsU0FBUyxHQUFULENBQWEsVUFBYjtBQUNBLFNBQVMsR0FBVCxDQUFhLFdBQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxPQUFiOztBQUVPLFNBQVMsU0FBVCxDQUFtQixLQUFuQixFQUEwQjtBQUMvQixTQUFPLHdCQUFTLHdCQUFTLE1BQU0sR0FBZixDQUFULEVBQThCLE1BQTlCLEVBQVA7QUFDRDs7QUFFTSxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0I7QUFDcEMsU0FBTyx3QkFBUyx3QkFBUyxNQUFNLEdBQWYsQ0FBVCxFQUE4QixXQUE5QixFQUFQO0FBQ0Q7O0FBRU0sU0FBUyxTQUFULENBQW1CLEtBQW5CLEVBQTBCO0FBQy9CLFNBQU8sd0JBQVMsd0JBQVMsTUFBTSxHQUFmLENBQVQsRUFBOEIsU0FBOUIsRUFBUDtBQUNEOztBQUVNLFNBQVMsY0FBVCxDQUF3QixLQUF4QixFQUErQjtBQUNwQyxTQUFPLHdCQUFTLHdCQUFTLE1BQU0sR0FBZixDQUFULEVBQThCLGNBQTlCLEVBQVA7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlZyBmcm9tICcuL29wZXJhdGlvbnMvcmVnaXN0cnknO1xuXG5leHBvcnQgY29uc3QgUmVnaXN0cnkgPSBSZWc7XG5cbmltcG9ydCBCb2xkTm9kZSBmcm9tICcuL21pbmlET00vYm9sZCc7XG5pbXBvcnQgSXRhbGljTm9kZSBmcm9tICcuL21pbmlET00vaXRhbGljJztcbmltcG9ydCBMaW5rTm9kZSBmcm9tICcuL21pbmlET00vbGluayc7XG5pbXBvcnQgTGlzdEl0ZW1Ob2RlIGZyb20gJy4vbWluaURPTS9saXN0SXRlbSc7XG5pbXBvcnQgT3JkZXJlZExpc3ROb2RlIGZyb20gJy4vbWluaURPTS9vcmRlcmVkTGlzdCc7XG5pbXBvcnQgUGFyYWdyYXBoTm9kZSBmcm9tICcuL21pbmlET00vcGFyYWdyYXBoJztcbmltcG9ydCBUZXh0Tm9kZSBmcm9tICcuL21pbmlET00vdGV4dCc7XG5pbXBvcnQgVHJlZU5vZGUgZnJvbSAnLi9taW5pRE9NL3RyZWVOb2RlJztcbmltcG9ydCBSb290Tm9kZSBmcm9tICcuL21pbmlET00vcm9vdCc7XG5pbXBvcnQgVW5vcmRlcmVkTGlzdE5vZGUgZnJvbSAnLi9taW5pRE9NL3Vub3JkZXJlZExpc3QnO1xuaW1wb3J0IEhlYWRlck5vZGUgZnJvbSAnLi9taW5pRE9NL2hlYWRlcic7XG5pbXBvcnQgVW5kZXJsaW5lTm9kZSBmcm9tICcuL21pbmlET00vdW5kZXJsaW5lJztcbmltcG9ydCBTdHJpa2V0aHJvdWdoTm9kZSBmcm9tICcuL21pbmlET00vc3RyaWtldGhyb3VnaCc7XG5pbXBvcnQgQ29sb3JOb2RlIGZyb20gJy4vbWluaURPTS9jb2xvcic7XG5pbXBvcnQgQmFja2dyb3VuZENvbG9yTm9kZSBmcm9tICcuL21pbmlET00vYmdjb2xvcic7XG5pbXBvcnQgU3VwZXJzY3JpcHROb2RlIGZyb20gJy4vbWluaURPTS9zdXBlcnNjcmlwdCc7XG5pbXBvcnQgU3Vic2NyaXB0Tm9kZSBmcm9tICcuL21pbmlET00vc3Vic2NyaXB0JztcbmltcG9ydCBTcGFuTm9kZSBmcm9tICcuL21pbmlET00vc3Bhbic7XG5pbXBvcnQgQmxvY2tOb2RlIGZyb20gJy4vbWluaURPTS9ibG9jayc7XG5pbXBvcnQgSW1hZ2VOb2RlIGZyb20gJy4vbWluaURPTS9pbWFnZSc7XG5cbmltcG9ydCB7IHRva2VuaXplIH0gZnJvbSAnLi9vcGVyYXRpb25zL3Rva2VuaXplJztcbmltcG9ydCB7IGJsb2NraXplIH0gZnJvbSAnLi9vcGVyYXRpb25zL2Jsb2NraXplJztcblxuUmVnaXN0cnkuYWRkKCdib2xkJywgQm9sZE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdpdGFsaWMnLCBJdGFsaWNOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnbGluaycsIExpbmtOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnbGlzdEl0ZW0nLCBMaXN0SXRlbU5vZGUpO1xuUmVnaXN0cnkuYWRkKCdvcmRlcmVkJywgT3JkZXJlZExpc3ROb2RlKTtcblJlZ2lzdHJ5LmFkZCgncGFyYWdyYXBoJywgUGFyYWdyYXBoTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ3RleHQnLCBUZXh0Tm9kZSk7XG5SZWdpc3RyeS5hZGQoJ1RyZWVOb2RlJywgVHJlZU5vZGUpO1xuUmVnaXN0cnkuYWRkKCdSb290Tm9kZScsIFJvb3ROb2RlKTtcblJlZ2lzdHJ5LmFkZCgnYnVsbGV0JywgVW5vcmRlcmVkTGlzdE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdoZWFkZXInLCBIZWFkZXJOb2RlKTtcblJlZ2lzdHJ5LmFkZCgndW5kZXJsaW5lJywgVW5kZXJsaW5lTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ3N0cmlrZXRocm91Z2gnLCBTdHJpa2V0aHJvdWdoTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2NvbG9yJywgQ29sb3JOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnYmdjb2xvcicsIEJhY2tncm91bmRDb2xvck5vZGUpO1xuUmVnaXN0cnkuYWRkKCdzdWJzY3JpcHQnLCBTdXBlcnNjcmlwdE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdzdXBlcnNjcmlwdCcsIFN1YnNjcmlwdE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdTcGFuTm9kZScsIFNwYW5Ob2RlKTtcblJlZ2lzdHJ5LmFkZCgnQmxvY2tOb2RlJywgQmxvY2tOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnaW1hZ2UnLCBJbWFnZU5vZGUpO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtKGRlbHRhKSB7XG4gIHJldHVybiBibG9ja2l6ZSh0b2tlbml6ZShkZWx0YS5vcHMpKS50b0hUTUwoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUFzeW5jKGRlbHRhKSB7XG4gIHJldHVybiBibG9ja2l6ZSh0b2tlbml6ZShkZWx0YS5vcHMpKS50b0hUTUxBc3luYygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhaW5UZXh0KGRlbHRhKSB7XG4gIHJldHVybiBibG9ja2l6ZSh0b2tlbml6ZShkZWx0YS5vcHMpKS5wbGFpblRleHQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYWluVGV4dEFzeW5jKGRlbHRhKSB7XG4gIHJldHVybiBibG9ja2l6ZSh0b2tlbml6ZShkZWx0YS5vcHMpKS5wbGFpblRleHRBc3luYygpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
