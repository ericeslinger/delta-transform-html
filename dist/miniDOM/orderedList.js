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

var OrderedListNode = function (_BlockNode) {
  _inherits(OrderedListNode, _BlockNode);

  function OrderedListNode(opts) {
    _classCallCheck(this, OrderedListNode);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(OrderedListNode).call(this, opts));

    _this.children = [new _listItem2.default(opts)];
    return _this;
  }

  _createClass(OrderedListNode, [{
    key: 'appendChild',
    value: function appendChild(node) {
      this.children[0].appendChild(node);
    }
  }, {
    key: 'openTag',
    value: function openTag() {
      return '<ol>';
    }
  }, {
    key: 'closeTag',
    value: function closeTag() {
      return '</ol>';
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
      var token = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return token.type === 'linebreak' && token.attributes && (token.attributes.list === 'ordered' || token.attributes.ordered === true);
    }
  }]);

  return OrderedListNode;
}(_block2.default);

exports.default = OrderedListNode;


OrderedListNode.priority = 30;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vb3JkZXJlZExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUIsZTs7O0FBQ25CLDJCQUFZLElBQVosRUFBa0I7QUFBQTs7QUFBQSxtR0FDVixJQURVOztBQUVoQixVQUFLLFFBQUwsR0FBZ0IsQ0FBQyx1QkFBaUIsSUFBakIsQ0FBRCxDQUFoQjtBQUZnQjtBQUdqQjs7OztnQ0FFVyxJLEVBQU07QUFDaEIsV0FBSyxRQUFMLENBQWMsQ0FBZCxFQUFpQixXQUFqQixDQUE2QixJQUE3QjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLE1BQVA7QUFDRDs7OytCQUNVO0FBQ1QsYUFBTyxPQUFQO0FBQ0Q7OzsyQkFFTSxLLEVBQU87QUFDWixVQUFJLE1BQU0sSUFBTixLQUFlLEtBQUssSUFBeEIsRUFBOEI7QUFDNUIsYUFBSyxRQUFMLEdBQWdCLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsTUFBTSxRQUEzQixDQUFoQjtBQUNBLGVBQU8sSUFBUDtBQUNELE9BSEQsTUFHTztBQUNMLGVBQU8sS0FBUDtBQUNEO0FBQ0Y7Ozs4QkFDMEI7QUFBQSxVQUFaLEtBQVkseURBQUosRUFBSTs7QUFDekIsYUFDRyxNQUFNLElBQU4sS0FBZSxXQUFoQixJQUNBLE1BQU0sVUFETixLQUVFLE1BQU0sVUFBTixDQUFpQixJQUFqQixLQUEwQixTQUEzQixJQUEwQyxNQUFNLFVBQU4sQ0FBaUIsT0FBakIsS0FBNkIsSUFGeEUsQ0FERjtBQUtEOzs7Ozs7a0JBL0JrQixlOzs7QUFrQ3JCLGdCQUFnQixRQUFoQixHQUEyQixFQUEzQiIsImZpbGUiOiJtaW5pRE9NL29yZGVyZWRMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2NrTm9kZSBmcm9tICcuL2Jsb2NrJztcbmltcG9ydCBMaXN0SXRlbU5vZGUgZnJvbSAnLi9saXN0SXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyZWRMaXN0Tm9kZSBleHRlbmRzIEJsb2NrTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcihvcHRzKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gW25ldyBMaXN0SXRlbU5vZGUob3B0cyldO1xuICB9XG5cbiAgYXBwZW5kQ2hpbGQobm9kZSkge1xuICAgIHRoaXMuY2hpbGRyZW5bMF0uYXBwZW5kQ2hpbGQobm9kZSk7XG4gIH1cblxuICBvcGVuVGFnKCkge1xuICAgIHJldHVybiAnPG9sPic7XG4gIH1cbiAgY2xvc2VUYWcoKSB7XG4gICAgcmV0dXJuICc8L29sPic7XG4gIH1cblxuICBhYnNvcmIoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQudHlwZSA9PT0gdGhpcy50eXBlKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi5jb25jYXQoY2hpbGQuY2hpbGRyZW4pO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG4gIH1cbiAgc3RhdGljIG1hdGNoZXModG9rZW4gPSB7fSkge1xuICAgIHJldHVybiAoXG4gICAgICAodG9rZW4udHlwZSA9PT0gJ2xpbmVicmVhaycpICYmXG4gICAgICB0b2tlbi5hdHRyaWJ1dGVzICYmXG4gICAgICAoKHRva2VuLmF0dHJpYnV0ZXMubGlzdCA9PT0gJ29yZGVyZWQnKSB8fCAodG9rZW4uYXR0cmlidXRlcy5vcmRlcmVkID09PSB0cnVlKSlcbiAgICApO1xuICB9XG59XG5cbk9yZGVyZWRMaXN0Tm9kZS5wcmlvcml0eSA9IDMwO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
