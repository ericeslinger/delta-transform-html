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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztRQW9EZ0I7UUFJQTtRQUlBO1FBSUE7O0FBaEVoQjs7SUFBWTs7QUFJWjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7OztBQXhCTyxJQUFNLDhCQUFXLEdBQVg7O0FBMEJOLElBQU0saURBQU47QUFDQSxJQUFNLGlEQUFOOztBQUVQLFNBQVMsR0FBVCxDQUFhLE1BQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxRQUFiO0FBQ0EsU0FBUyxHQUFULENBQWEsTUFBYjtBQUNBLFNBQVMsR0FBVCxDQUFhLFVBQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxTQUFiO0FBQ0EsU0FBUyxHQUFULENBQWEsV0FBYjtBQUNBLFNBQVMsR0FBVCxDQUFhLE1BQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxVQUFiO0FBQ0EsU0FBUyxHQUFULENBQWEsVUFBYjtBQUNBLFNBQVMsR0FBVCxDQUFhLFFBQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxRQUFiO0FBQ0EsU0FBUyxHQUFULENBQWEsV0FBYjtBQUNBLFNBQVMsR0FBVCxDQUFhLGVBQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxPQUFiO0FBQ0EsU0FBUyxHQUFULENBQWEsU0FBYjtBQUNBLFNBQVMsR0FBVCxDQUFhLFdBQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxhQUFiO0FBQ0EsU0FBUyxHQUFULENBQWEsVUFBYjtBQUNBLFNBQVMsR0FBVCxDQUFhLFdBQWI7QUFDQSxTQUFTLEdBQVQsQ0FBYSxPQUFiOztBQUVPLFNBQVMsU0FBVCxDQUFtQixLQUFuQixFQUEwQjtBQUMvQixTQUFPLFNBQVMsU0FBUyxNQUFNLEdBQU4sQ0FBbEIsRUFBOEIsTUFBOUIsRUFBUCxDQUQrQjtDQUExQjs7QUFJQSxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0I7QUFDcEMsU0FBTyxTQUFTLFNBQVMsTUFBTSxHQUFOLENBQWxCLEVBQThCLFdBQTlCLEVBQVAsQ0FEb0M7Q0FBL0I7O0FBSUEsU0FBUyxTQUFULENBQW1CLEtBQW5CLEVBQTBCO0FBQy9CLFNBQU8sU0FBUyxTQUFTLE1BQU0sR0FBTixDQUFsQixFQUE4QixTQUE5QixFQUFQLENBRCtCO0NBQTFCOztBQUlBLFNBQVMsY0FBVCxDQUF3QixLQUF4QixFQUErQjtBQUNwQyxTQUFPLFNBQVMsU0FBUyxNQUFNLEdBQU4sQ0FBbEIsRUFBOEIsY0FBOUIsRUFBUCxDQURvQztDQUEvQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlZyBmcm9tICcuL29wZXJhdGlvbnMvcmVnaXN0cnknO1xuXG5leHBvcnQgY29uc3QgUmVnaXN0cnkgPSBSZWc7XG5cbmltcG9ydCBCb2xkTm9kZSBmcm9tICcuL21pbmlET00vYm9sZCc7XG5pbXBvcnQgSXRhbGljTm9kZSBmcm9tICcuL21pbmlET00vaXRhbGljJztcbmltcG9ydCBMaW5rTm9kZSBmcm9tICcuL21pbmlET00vbGluayc7XG5pbXBvcnQgTGlzdEl0ZW1Ob2RlIGZyb20gJy4vbWluaURPTS9saXN0SXRlbSc7XG5pbXBvcnQgT3JkZXJlZExpc3ROb2RlIGZyb20gJy4vbWluaURPTS9vcmRlcmVkTGlzdCc7XG5pbXBvcnQgUGFyYWdyYXBoTm9kZSBmcm9tICcuL21pbmlET00vcGFyYWdyYXBoJztcbmltcG9ydCBUZXh0Tm9kZSBmcm9tICcuL21pbmlET00vdGV4dCc7XG5pbXBvcnQgVHJlZU5vZGUgZnJvbSAnLi9taW5pRE9NL3RyZWVOb2RlJztcbmltcG9ydCBSb290Tm9kZSBmcm9tICcuL21pbmlET00vcm9vdCc7XG5pbXBvcnQgVW5vcmRlcmVkTGlzdE5vZGUgZnJvbSAnLi9taW5pRE9NL3Vub3JkZXJlZExpc3QnO1xuaW1wb3J0IEhlYWRlck5vZGUgZnJvbSAnLi9taW5pRE9NL2hlYWRlcic7XG5pbXBvcnQgVW5kZXJsaW5lTm9kZSBmcm9tICcuL21pbmlET00vdW5kZXJsaW5lJztcbmltcG9ydCBTdHJpa2V0aHJvdWdoTm9kZSBmcm9tICcuL21pbmlET00vc3RyaWtldGhyb3VnaCc7XG5pbXBvcnQgQ29sb3JOb2RlIGZyb20gJy4vbWluaURPTS9jb2xvcic7XG5pbXBvcnQgQmFja2dyb3VuZENvbG9yTm9kZSBmcm9tICcuL21pbmlET00vYmdjb2xvcic7XG5pbXBvcnQgU3VwZXJzY3JpcHROb2RlIGZyb20gJy4vbWluaURPTS9zdXBlcnNjcmlwdCc7XG5pbXBvcnQgU3Vic2NyaXB0Tm9kZSBmcm9tICcuL21pbmlET00vc3Vic2NyaXB0JztcbmltcG9ydCBTcGFuTm9kZSBmcm9tICcuL21pbmlET00vc3Bhbic7XG5pbXBvcnQgQmxvY2tOb2RlIGZyb20gJy4vbWluaURPTS9ibG9jayc7XG5pbXBvcnQgSW1hZ2VOb2RlIGZyb20gJy4vbWluaURPTS9pbWFnZSc7XG5cbmltcG9ydCB7IHRva2VuaXplIGFzIF90b2tlbml6ZSB9IGZyb20gJy4vb3BlcmF0aW9ucy90b2tlbml6ZSc7XG5pbXBvcnQgeyBibG9ja2l6ZSBhcyBfYmxvY2tpemUgfSBmcm9tICcuL29wZXJhdGlvbnMvYmxvY2tpemUnO1xuXG5leHBvcnQgY29uc3QgdG9rZW5pemUgPSBfdG9rZW5pemU7XG5leHBvcnQgY29uc3QgYmxvY2tpemUgPSBfYmxvY2tpemU7XG5cblJlZ2lzdHJ5LmFkZCgnYm9sZCcsIEJvbGROb2RlKTtcblJlZ2lzdHJ5LmFkZCgnaXRhbGljJywgSXRhbGljTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2xpbmsnLCBMaW5rTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2xpc3RJdGVtJywgTGlzdEl0ZW1Ob2RlKTtcblJlZ2lzdHJ5LmFkZCgnb3JkZXJlZCcsIE9yZGVyZWRMaXN0Tm9kZSk7XG5SZWdpc3RyeS5hZGQoJ3BhcmFncmFwaCcsIFBhcmFncmFwaE5vZGUpO1xuUmVnaXN0cnkuYWRkKCd0ZXh0JywgVGV4dE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdUcmVlTm9kZScsIFRyZWVOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnUm9vdE5vZGUnLCBSb290Tm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2J1bGxldCcsIFVub3JkZXJlZExpc3ROb2RlKTtcblJlZ2lzdHJ5LmFkZCgnaGVhZGVyJywgSGVhZGVyTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ3VuZGVybGluZScsIFVuZGVybGluZU5vZGUpO1xuUmVnaXN0cnkuYWRkKCdzdHJpa2V0aHJvdWdoJywgU3RyaWtldGhyb3VnaE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdjb2xvcicsIENvbG9yTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2JnY29sb3InLCBCYWNrZ3JvdW5kQ29sb3JOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnc3Vic2NyaXB0JywgU3VwZXJzY3JpcHROb2RlKTtcblJlZ2lzdHJ5LmFkZCgnc3VwZXJzY3JpcHQnLCBTdWJzY3JpcHROb2RlKTtcblJlZ2lzdHJ5LmFkZCgnU3Bhbk5vZGUnLCBTcGFuTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ0Jsb2NrTm9kZScsIEJsb2NrTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2ltYWdlJywgSW1hZ2VOb2RlKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybShkZWx0YSkge1xuICByZXR1cm4gYmxvY2tpemUodG9rZW5pemUoZGVsdGEub3BzKSkudG9IVE1MKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1Bc3luYyhkZWx0YSkge1xuICByZXR1cm4gYmxvY2tpemUodG9rZW5pemUoZGVsdGEub3BzKSkudG9IVE1MQXN5bmMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYWluVGV4dChkZWx0YSkge1xuICByZXR1cm4gYmxvY2tpemUodG9rZW5pemUoZGVsdGEub3BzKSkucGxhaW5UZXh0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGFpblRleHRBc3luYyhkZWx0YSkge1xuICByZXR1cm4gYmxvY2tpemUodG9rZW5pemUoZGVsdGEub3BzKSkucGxhaW5UZXh0QXN5bmMoKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
