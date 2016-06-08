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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UnorderedListNode).call(this, opts));

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
      var token = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return token.type === 'linebreak' && token.attributes && (token.attributes.list === 'bullet' || token.attributes.bullet === true);
    }
  }]);

  return UnorderedListNode;
}(_block2.default);

exports.default = UnorderedListNode;


UnorderedListNode.priority = 35;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vdW5vcmRlcmVkTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQixpQjs7O0FBQ25CLDZCQUFZLElBQVosRUFBa0I7QUFBQTs7QUFBQSxxR0FDVixJQURVOztBQUVoQixVQUFLLFFBQUwsR0FBZ0IsQ0FBQyx1QkFBaUIsSUFBakIsQ0FBRCxDQUFoQjtBQUZnQjtBQUdqQjs7OztnQ0FFVyxJLEVBQU07QUFDaEIsV0FBSyxRQUFMLENBQWMsQ0FBZCxFQUFpQixXQUFqQixDQUE2QixJQUE3QjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLE1BQVA7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxPQUFQO0FBQ0Q7OzsyQkFFTSxLLEVBQU87QUFDWixVQUFJLE1BQU0sSUFBTixLQUFlLEtBQUssSUFBeEIsRUFBOEI7QUFDNUIsYUFBSyxRQUFMLEdBQWdCLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsTUFBTSxRQUEzQixDQUFoQjtBQUNBLGVBQU8sSUFBUDtBQUNELE9BSEQsTUFHTztBQUNMLGVBQU8sS0FBUDtBQUNEO0FBQ0Y7Ozs4QkFFMEI7QUFBQSxVQUFaLEtBQVkseURBQUosRUFBSTs7QUFDekIsYUFDRyxNQUFNLElBQU4sS0FBZSxXQUFoQixJQUNBLE1BQU0sVUFETixLQUVFLE1BQU0sVUFBTixDQUFpQixJQUFqQixLQUEwQixRQUEzQixJQUF5QyxNQUFNLFVBQU4sQ0FBaUIsTUFBakIsS0FBNEIsSUFGdEUsQ0FERjtBQUtEOzs7Ozs7a0JBakNrQixpQjs7O0FBb0NyQixrQkFBa0IsUUFBbEIsR0FBNkIsRUFBN0IiLCJmaWxlIjoibWluaURPTS91bm9yZGVyZWRMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2NrTm9kZSBmcm9tICcuL2Jsb2NrJztcbmltcG9ydCBMaXN0SXRlbU5vZGUgZnJvbSAnLi9saXN0SXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVub3JkZXJlZExpc3ROb2RlIGV4dGVuZHMgQmxvY2tOb2RlIHtcbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKG9wdHMpO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbbmV3IExpc3RJdGVtTm9kZShvcHRzKV07XG4gIH1cblxuICBhcHBlbmRDaGlsZChub2RlKSB7XG4gICAgdGhpcy5jaGlsZHJlblswXS5hcHBlbmRDaGlsZChub2RlKTtcbiAgfVxuXG4gIG9wZW5UYWcoKSB7XG4gICAgcmV0dXJuICc8dWw+JztcbiAgfVxuXG4gIGNsb3NlVGFnKCkge1xuICAgIHJldHVybiAnPC91bD4nO1xuICB9XG5cbiAgYWJzb3JiKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLnR5cGUgPT09IHRoaXMudHlwZSkge1xuICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4uY29uY2F0KGNoaWxkLmNoaWxkcmVuKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG1hdGNoZXModG9rZW4gPSB7fSkge1xuICAgIHJldHVybiAoXG4gICAgICAodG9rZW4udHlwZSA9PT0gJ2xpbmVicmVhaycpICYmXG4gICAgICB0b2tlbi5hdHRyaWJ1dGVzICYmXG4gICAgICAoKHRva2VuLmF0dHJpYnV0ZXMubGlzdCA9PT0gJ2J1bGxldCcpIHx8ICh0b2tlbi5hdHRyaWJ1dGVzLmJ1bGxldCA9PT0gdHJ1ZSkpXG4gICAgKTtcbiAgfVxufVxuXG5Vbm9yZGVyZWRMaXN0Tm9kZS5wcmlvcml0eSA9IDM1O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
