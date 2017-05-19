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
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var openTag = '';
  var closeTag = '';
  if (opts.rootNode) {
    if (opts.rootClass) {
      openTag = '<' + opts.rootNode + ' class="' + opts.rootClass + '">';
    } else {
      openTag = '<' + opts.rootNode + '>';
    }
    closeTag = '</' + opts.rootNode + '>';
  }
  return '' + openTag + blockize(tokenize(delta.ops)).toHTML() + closeTag;
}

function transformAsync(delta) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return blockize(tokenize(delta.ops)).toHTMLAsync().then(function (v) {
    var openTag = '';
    var closeTag = '';
    if (opts.rootNode) {
      if (opts.rootClass) {
        openTag = '<' + opts.rootNode + ' class="' + opts.rootClass + '">';
      } else {
        openTag = '<' + opts.rootNode + '>';
      }
      closeTag = '</' + opts.rootNode + '>';
    }
    return '' + openTag + v + closeTag;
  });
}

function plainText(delta) {
  return blockize(tokenize(delta.ops)).plainText();
}

function plainTextAsync(delta) {
  return blockize(tokenize(delta.ops)).plainTextAsync();
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInRyYW5zZm9ybSIsInRyYW5zZm9ybUFzeW5jIiwicGxhaW5UZXh0IiwicGxhaW5UZXh0QXN5bmMiLCJSZWciLCJSZWdpc3RyeSIsInRva2VuaXplIiwiYmxvY2tpemUiLCJhZGQiLCJkZWx0YSIsIm9wdHMiLCJvcGVuVGFnIiwiY2xvc2VUYWciLCJyb290Tm9kZSIsInJvb3RDbGFzcyIsIm9wcyIsInRvSFRNTCIsInRvSFRNTEFzeW5jIiwidGhlbiIsInYiXSwibWFwcGluZ3MiOiI7Ozs7OztRQW9EZ0JBLFMsR0FBQUEsUztRQWNBQyxjLEdBQUFBLGM7UUFpQkFDLFMsR0FBQUEsUztRQUlBQyxjLEdBQUFBLGM7O0FBdkZoQjs7SUFBWUMsRzs7QUFJWjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7OztBQXhCTyxJQUFNQyw4QkFBV0QsR0FBakI7O0FBMEJBLElBQU1FLGlEQUFOO0FBQ0EsSUFBTUMsaURBQU47O0FBRVBGLFNBQVNHLEdBQVQsQ0FBYSxNQUFiO0FBQ0FILFNBQVNHLEdBQVQsQ0FBYSxRQUFiO0FBQ0FILFNBQVNHLEdBQVQsQ0FBYSxNQUFiO0FBQ0FILFNBQVNHLEdBQVQsQ0FBYSxVQUFiO0FBQ0FILFNBQVNHLEdBQVQsQ0FBYSxTQUFiO0FBQ0FILFNBQVNHLEdBQVQsQ0FBYSxXQUFiO0FBQ0FILFNBQVNHLEdBQVQsQ0FBYSxNQUFiO0FBQ0FILFNBQVNHLEdBQVQsQ0FBYSxVQUFiO0FBQ0FILFNBQVNHLEdBQVQsQ0FBYSxVQUFiO0FBQ0FILFNBQVNHLEdBQVQsQ0FBYSxRQUFiO0FBQ0FILFNBQVNHLEdBQVQsQ0FBYSxRQUFiO0FBQ0FILFNBQVNHLEdBQVQsQ0FBYSxXQUFiO0FBQ0FILFNBQVNHLEdBQVQsQ0FBYSxlQUFiO0FBQ0FILFNBQVNHLEdBQVQsQ0FBYSxPQUFiO0FBQ0FILFNBQVNHLEdBQVQsQ0FBYSxTQUFiO0FBQ0FILFNBQVNHLEdBQVQsQ0FBYSxXQUFiO0FBQ0FILFNBQVNHLEdBQVQsQ0FBYSxhQUFiO0FBQ0FILFNBQVNHLEdBQVQsQ0FBYSxVQUFiO0FBQ0FILFNBQVNHLEdBQVQsQ0FBYSxXQUFiO0FBQ0FILFNBQVNHLEdBQVQsQ0FBYSxPQUFiOztBQUVPLFNBQVNSLFNBQVQsQ0FBbUJTLEtBQW5CLEVBQXFDO0FBQUEsTUFBWEMsSUFBVyx1RUFBSixFQUFJOztBQUMxQyxNQUFJQyxVQUFVLEVBQWQ7QUFDQSxNQUFJQyxXQUFXLEVBQWY7QUFDQSxNQUFJRixLQUFLRyxRQUFULEVBQW1CO0FBQ2pCLFFBQUlILEtBQUtJLFNBQVQsRUFBb0I7QUFDbEJILHNCQUFjRCxLQUFLRyxRQUFuQixnQkFBc0NILEtBQUtJLFNBQTNDO0FBQ0QsS0FGRCxNQUVPO0FBQ0xILHNCQUFjRCxLQUFLRyxRQUFuQjtBQUNEO0FBQ0RELHNCQUFnQkYsS0FBS0csUUFBckI7QUFDRDtBQUNELGNBQVVGLE9BQVYsR0FBb0JKLFNBQVNELFNBQVNHLE1BQU1NLEdBQWYsQ0FBVCxFQUE4QkMsTUFBOUIsRUFBcEIsR0FBNkRKLFFBQTdEO0FBQ0Q7O0FBRU0sU0FBU1gsY0FBVCxDQUF3QlEsS0FBeEIsRUFBMEM7QUFBQSxNQUFYQyxJQUFXLHVFQUFKLEVBQUk7O0FBQy9DLFNBQU9ILFNBQVNELFNBQVNHLE1BQU1NLEdBQWYsQ0FBVCxFQUE4QkUsV0FBOUIsR0FDTkMsSUFETSxDQUNELFVBQUNDLENBQUQsRUFBTztBQUNYLFFBQUlSLFVBQVUsRUFBZDtBQUNBLFFBQUlDLFdBQVcsRUFBZjtBQUNBLFFBQUlGLEtBQUtHLFFBQVQsRUFBbUI7QUFDakIsVUFBSUgsS0FBS0ksU0FBVCxFQUFvQjtBQUNsQkgsd0JBQWNELEtBQUtHLFFBQW5CLGdCQUFzQ0gsS0FBS0ksU0FBM0M7QUFDRCxPQUZELE1BRU87QUFDTEgsd0JBQWNELEtBQUtHLFFBQW5CO0FBQ0Q7QUFDREQsd0JBQWdCRixLQUFLRyxRQUFyQjtBQUNEO0FBQ0QsZ0JBQVVGLE9BQVYsR0FBb0JRLENBQXBCLEdBQXdCUCxRQUF4QjtBQUNELEdBYk0sQ0FBUDtBQWNEOztBQUVNLFNBQVNWLFNBQVQsQ0FBbUJPLEtBQW5CLEVBQTBCO0FBQy9CLFNBQU9GLFNBQVNELFNBQVNHLE1BQU1NLEdBQWYsQ0FBVCxFQUE4QmIsU0FBOUIsRUFBUDtBQUNEOztBQUVNLFNBQVNDLGNBQVQsQ0FBd0JNLEtBQXhCLEVBQStCO0FBQ3BDLFNBQU9GLFNBQVNELFNBQVNHLE1BQU1NLEdBQWYsQ0FBVCxFQUE4QlosY0FBOUIsRUFBUDtBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVnIGZyb20gJy4vb3BlcmF0aW9ucy9yZWdpc3RyeSc7XG5cbmV4cG9ydCBjb25zdCBSZWdpc3RyeSA9IFJlZztcblxuaW1wb3J0IEJvbGROb2RlIGZyb20gJy4vbWluaURPTS9ib2xkJztcbmltcG9ydCBJdGFsaWNOb2RlIGZyb20gJy4vbWluaURPTS9pdGFsaWMnO1xuaW1wb3J0IExpbmtOb2RlIGZyb20gJy4vbWluaURPTS9saW5rJztcbmltcG9ydCBMaXN0SXRlbU5vZGUgZnJvbSAnLi9taW5pRE9NL2xpc3RJdGVtJztcbmltcG9ydCBPcmRlcmVkTGlzdE5vZGUgZnJvbSAnLi9taW5pRE9NL29yZGVyZWRMaXN0JztcbmltcG9ydCBQYXJhZ3JhcGhOb2RlIGZyb20gJy4vbWluaURPTS9wYXJhZ3JhcGgnO1xuaW1wb3J0IFRleHROb2RlIGZyb20gJy4vbWluaURPTS90ZXh0JztcbmltcG9ydCBUcmVlTm9kZSBmcm9tICcuL21pbmlET00vdHJlZU5vZGUnO1xuaW1wb3J0IFJvb3ROb2RlIGZyb20gJy4vbWluaURPTS9yb290JztcbmltcG9ydCBVbm9yZGVyZWRMaXN0Tm9kZSBmcm9tICcuL21pbmlET00vdW5vcmRlcmVkTGlzdCc7XG5pbXBvcnQgSGVhZGVyTm9kZSBmcm9tICcuL21pbmlET00vaGVhZGVyJztcbmltcG9ydCBVbmRlcmxpbmVOb2RlIGZyb20gJy4vbWluaURPTS91bmRlcmxpbmUnO1xuaW1wb3J0IFN0cmlrZXRocm91Z2hOb2RlIGZyb20gJy4vbWluaURPTS9zdHJpa2V0aHJvdWdoJztcbmltcG9ydCBDb2xvck5vZGUgZnJvbSAnLi9taW5pRE9NL2NvbG9yJztcbmltcG9ydCBCYWNrZ3JvdW5kQ29sb3JOb2RlIGZyb20gJy4vbWluaURPTS9iZ2NvbG9yJztcbmltcG9ydCBTdXBlcnNjcmlwdE5vZGUgZnJvbSAnLi9taW5pRE9NL3N1cGVyc2NyaXB0JztcbmltcG9ydCBTdWJzY3JpcHROb2RlIGZyb20gJy4vbWluaURPTS9zdWJzY3JpcHQnO1xuaW1wb3J0IFNwYW5Ob2RlIGZyb20gJy4vbWluaURPTS9zcGFuJztcbmltcG9ydCBCbG9ja05vZGUgZnJvbSAnLi9taW5pRE9NL2Jsb2NrJztcbmltcG9ydCBJbWFnZU5vZGUgZnJvbSAnLi9taW5pRE9NL2ltYWdlJztcblxuaW1wb3J0IHsgdG9rZW5pemUgYXMgX3Rva2VuaXplIH0gZnJvbSAnLi9vcGVyYXRpb25zL3Rva2VuaXplJztcbmltcG9ydCB7IGJsb2NraXplIGFzIF9ibG9ja2l6ZSB9IGZyb20gJy4vb3BlcmF0aW9ucy9ibG9ja2l6ZSc7XG5cbmV4cG9ydCBjb25zdCB0b2tlbml6ZSA9IF90b2tlbml6ZTtcbmV4cG9ydCBjb25zdCBibG9ja2l6ZSA9IF9ibG9ja2l6ZTtcblxuUmVnaXN0cnkuYWRkKCdib2xkJywgQm9sZE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdpdGFsaWMnLCBJdGFsaWNOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnbGluaycsIExpbmtOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnbGlzdEl0ZW0nLCBMaXN0SXRlbU5vZGUpO1xuUmVnaXN0cnkuYWRkKCdvcmRlcmVkJywgT3JkZXJlZExpc3ROb2RlKTtcblJlZ2lzdHJ5LmFkZCgncGFyYWdyYXBoJywgUGFyYWdyYXBoTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ3RleHQnLCBUZXh0Tm9kZSk7XG5SZWdpc3RyeS5hZGQoJ1RyZWVOb2RlJywgVHJlZU5vZGUpO1xuUmVnaXN0cnkuYWRkKCdSb290Tm9kZScsIFJvb3ROb2RlKTtcblJlZ2lzdHJ5LmFkZCgnYnVsbGV0JywgVW5vcmRlcmVkTGlzdE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdoZWFkZXInLCBIZWFkZXJOb2RlKTtcblJlZ2lzdHJ5LmFkZCgndW5kZXJsaW5lJywgVW5kZXJsaW5lTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ3N0cmlrZXRocm91Z2gnLCBTdHJpa2V0aHJvdWdoTm9kZSk7XG5SZWdpc3RyeS5hZGQoJ2NvbG9yJywgQ29sb3JOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnYmdjb2xvcicsIEJhY2tncm91bmRDb2xvck5vZGUpO1xuUmVnaXN0cnkuYWRkKCdzdWJzY3JpcHQnLCBTdXBlcnNjcmlwdE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdzdXBlcnNjcmlwdCcsIFN1YnNjcmlwdE5vZGUpO1xuUmVnaXN0cnkuYWRkKCdTcGFuTm9kZScsIFNwYW5Ob2RlKTtcblJlZ2lzdHJ5LmFkZCgnQmxvY2tOb2RlJywgQmxvY2tOb2RlKTtcblJlZ2lzdHJ5LmFkZCgnaW1hZ2UnLCBJbWFnZU5vZGUpO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtKGRlbHRhLCBvcHRzID0ge30pIHtcbiAgbGV0IG9wZW5UYWcgPSAnJztcbiAgbGV0IGNsb3NlVGFnID0gJyc7XG4gIGlmIChvcHRzLnJvb3ROb2RlKSB7XG4gICAgaWYgKG9wdHMucm9vdENsYXNzKSB7XG4gICAgICBvcGVuVGFnID0gYDwke29wdHMucm9vdE5vZGV9IGNsYXNzPVwiJHtvcHRzLnJvb3RDbGFzc31cIj5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcGVuVGFnID0gYDwke29wdHMucm9vdE5vZGV9PmA7XG4gICAgfVxuICAgIGNsb3NlVGFnID0gYDwvJHtvcHRzLnJvb3ROb2RlfT5gO1xuICB9XG4gIHJldHVybiBgJHtvcGVuVGFnfSR7YmxvY2tpemUodG9rZW5pemUoZGVsdGEub3BzKSkudG9IVE1MKCl9JHtjbG9zZVRhZ31gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtQXN5bmMoZGVsdGEsIG9wdHMgPSB7fSkge1xuICByZXR1cm4gYmxvY2tpemUodG9rZW5pemUoZGVsdGEub3BzKSkudG9IVE1MQXN5bmMoKVxuICAudGhlbigodikgPT4ge1xuICAgIGxldCBvcGVuVGFnID0gJyc7XG4gICAgbGV0IGNsb3NlVGFnID0gJyc7XG4gICAgaWYgKG9wdHMucm9vdE5vZGUpIHtcbiAgICAgIGlmIChvcHRzLnJvb3RDbGFzcykge1xuICAgICAgICBvcGVuVGFnID0gYDwke29wdHMucm9vdE5vZGV9IGNsYXNzPVwiJHtvcHRzLnJvb3RDbGFzc31cIj5gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3BlblRhZyA9IGA8JHtvcHRzLnJvb3ROb2RlfT5gO1xuICAgICAgfVxuICAgICAgY2xvc2VUYWcgPSBgPC8ke29wdHMucm9vdE5vZGV9PmA7XG4gICAgfVxuICAgIHJldHVybiBgJHtvcGVuVGFnfSR7dn0ke2Nsb3NlVGFnfWA7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhaW5UZXh0KGRlbHRhKSB7XG4gIHJldHVybiBibG9ja2l6ZSh0b2tlbml6ZShkZWx0YS5vcHMpKS5wbGFpblRleHQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYWluVGV4dEFzeW5jKGRlbHRhKSB7XG4gIHJldHVybiBibG9ja2l6ZSh0b2tlbml6ZShkZWx0YS5vcHMpKS5wbGFpblRleHRBc3luYygpO1xufVxuIl19
