'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _block = require('./block');

var _block2 = _interopRequireDefault(_block);

var _listItem = require('./listItem');

var _listItem2 = _interopRequireDefault(_listItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnorderedListNode = function (_BlockNode) {
  _inherits(UnorderedListNode, _BlockNode);

  function UnorderedListNode(opts) {
    _classCallCheck(this, UnorderedListNode);

    var _this = _possibleConstructorReturn(this, (UnorderedListNode.__proto__ || Object.getPrototypeOf(UnorderedListNode)).call(this, opts));

    _this.children = [new _listItem2.default(opts)];
    return _this;
  }

  _createClass(UnorderedListNode, [{
    key: 'appendChild',
    value: function appendChild(node) {
      this.children[0].appendChild(node);
    }
  }, {
    key: 'openTag',
    value: function openTag() {
      return '<ul>';
    }
  }, {
    key: 'closeTag',
    value: function closeTag() {
      return '</ul>';
    }
  }, {
    key: 'absorb',
    value: function absorb(child) {
      if (child.type === this.type) {
        this.children = this.children.concat(child.children);
        return null;
      } else {
        return child;
      }
    }
  }], [{
    key: 'matches',
    value: function matches() {
      var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return token.type === 'linebreak' && token.attributes && (token.attributes.list === 'bullet' || token.attributes.bullet === true);
    }
  }]);

  return UnorderedListNode;
}(_block2.default);

exports.default = UnorderedListNode;


UnorderedListNode.priority = 35;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vdW5vcmRlcmVkTGlzdC5qcyJdLCJuYW1lcyI6WyJVbm9yZGVyZWRMaXN0Tm9kZSIsIm9wdHMiLCJjaGlsZHJlbiIsIm5vZGUiLCJhcHBlbmRDaGlsZCIsImNoaWxkIiwidHlwZSIsImNvbmNhdCIsInRva2VuIiwiYXR0cmlidXRlcyIsImxpc3QiLCJidWxsZXQiLCJwcmlvcml0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGlCOzs7QUFDbkIsNkJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFBQSxzSUFDVkEsSUFEVTs7QUFFaEIsVUFBS0MsUUFBTCxHQUFnQixDQUFDLHVCQUFpQkQsSUFBakIsQ0FBRCxDQUFoQjtBQUZnQjtBQUdqQjs7OztnQ0FFV0UsSSxFQUFNO0FBQ2hCLFdBQUtELFFBQUwsQ0FBYyxDQUFkLEVBQWlCRSxXQUFqQixDQUE2QkQsSUFBN0I7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxNQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULGFBQU8sT0FBUDtBQUNEOzs7MkJBRU1FLEssRUFBTztBQUNaLFVBQUlBLE1BQU1DLElBQU4sS0FBZSxLQUFLQSxJQUF4QixFQUE4QjtBQUM1QixhQUFLSixRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY0ssTUFBZCxDQUFxQkYsTUFBTUgsUUFBM0IsQ0FBaEI7QUFDQSxlQUFPLElBQVA7QUFDRCxPQUhELE1BR087QUFDTCxlQUFPRyxLQUFQO0FBQ0Q7QUFDRjs7OzhCQUUwQjtBQUFBLFVBQVpHLEtBQVksdUVBQUosRUFBSTs7QUFDekIsYUFDR0EsTUFBTUYsSUFBTixLQUFlLFdBQWhCLElBQ0FFLE1BQU1DLFVBRE4sS0FFRUQsTUFBTUMsVUFBTixDQUFpQkMsSUFBakIsS0FBMEIsUUFBM0IsSUFBeUNGLE1BQU1DLFVBQU4sQ0FBaUJFLE1BQWpCLEtBQTRCLElBRnRFLENBREY7QUFLRDs7Ozs7O2tCQWpDa0JYLGlCOzs7QUFvQ3JCQSxrQkFBa0JZLFFBQWxCLEdBQTZCLEVBQTdCIiwiZmlsZSI6Im1pbmlET00vdW5vcmRlcmVkTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbG9ja05vZGUgZnJvbSAnLi9ibG9jayc7XG5pbXBvcnQgTGlzdEl0ZW1Ob2RlIGZyb20gJy4vbGlzdEl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbm9yZGVyZWRMaXN0Tm9kZSBleHRlbmRzIEJsb2NrTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcihvcHRzKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gW25ldyBMaXN0SXRlbU5vZGUob3B0cyldO1xuICB9XG5cbiAgYXBwZW5kQ2hpbGQobm9kZSkge1xuICAgIHRoaXMuY2hpbGRyZW5bMF0uYXBwZW5kQ2hpbGQobm9kZSk7XG4gIH1cblxuICBvcGVuVGFnKCkge1xuICAgIHJldHVybiAnPHVsPic7XG4gIH1cblxuICBjbG9zZVRhZygpIHtcbiAgICByZXR1cm4gJzwvdWw+JztcbiAgfVxuXG4gIGFic29yYihjaGlsZCkge1xuICAgIGlmIChjaGlsZC50eXBlID09PSB0aGlzLnR5cGUpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLmNvbmNhdChjaGlsZC5jaGlsZHJlbik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBtYXRjaGVzKHRva2VuID0ge30pIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRva2VuLnR5cGUgPT09ICdsaW5lYnJlYWsnKSAmJlxuICAgICAgdG9rZW4uYXR0cmlidXRlcyAmJlxuICAgICAgKCh0b2tlbi5hdHRyaWJ1dGVzLmxpc3QgPT09ICdidWxsZXQnKSB8fCAodG9rZW4uYXR0cmlidXRlcy5idWxsZXQgPT09IHRydWUpKVxuICAgICk7XG4gIH1cbn1cblxuVW5vcmRlcmVkTGlzdE5vZGUucHJpb3JpdHkgPSAzNTtcbiJdfQ==
