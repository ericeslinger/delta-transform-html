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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vb3JkZXJlZExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUI7OztBQUNuQixXQURtQixlQUNuQixDQUFZLElBQVosRUFBa0I7MEJBREMsaUJBQ0Q7O3VFQURDLDRCQUVYLE9BRFU7O0FBRWhCLFVBQUssUUFBTCxHQUFnQixDQUFDLHVCQUFpQixJQUFqQixDQUFELENBQWhCLENBRmdCOztHQUFsQjs7ZUFEbUI7O2dDQU1QLE1BQU07QUFDaEIsV0FBSyxRQUFMLENBQWMsQ0FBZCxFQUFpQixXQUFqQixDQUE2QixJQUE3QixFQURnQjs7Ozs4QkFJUjtBQUNSLGFBQU8sTUFBUCxDQURROzs7OytCQUdDO0FBQ1QsYUFBTyxPQUFQLENBRFM7Ozs7MkJBSUosT0FBTztBQUNaLFVBQUksTUFBTSxJQUFOLEtBQWUsS0FBSyxJQUFMLEVBQVc7QUFDNUIsYUFBSyxRQUFMLEdBQWdCLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsTUFBTSxRQUFOLENBQXJDLENBRDRCO0FBRTVCLGVBQU8sSUFBUCxDQUY0QjtPQUE5QixNQUdPO0FBQ0wsZUFBTyxLQUFQLENBREs7T0FIUDs7Ozs4QkFPeUI7VUFBWiw4REFBUSxrQkFBSTs7QUFDekIsYUFDRSxLQUFDLENBQU0sSUFBTixLQUFlLFdBQWYsSUFDRCxNQUFNLFVBQU4sS0FDQyxLQUFDLENBQU0sVUFBTixDQUFpQixJQUFqQixLQUEwQixTQUExQixJQUF5QyxNQUFNLFVBQU4sQ0FBaUIsT0FBakIsS0FBNkIsSUFBN0IsQ0FGM0MsQ0FGdUI7Ozs7U0F6QlI7Ozs7OztBQWtDckIsZ0JBQWdCLFFBQWhCLEdBQTJCLEVBQTNCIiwiZmlsZSI6Im1pbmlET00vb3JkZXJlZExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxvY2tOb2RlIGZyb20gJy4vYmxvY2snO1xuaW1wb3J0IExpc3RJdGVtTm9kZSBmcm9tICcuL2xpc3RJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJlZExpc3ROb2RlIGV4dGVuZHMgQmxvY2tOb2RlIHtcbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKG9wdHMpO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbbmV3IExpc3RJdGVtTm9kZShvcHRzKV07XG4gIH1cblxuICBhcHBlbmRDaGlsZChub2RlKSB7XG4gICAgdGhpcy5jaGlsZHJlblswXS5hcHBlbmRDaGlsZChub2RlKTtcbiAgfVxuXG4gIG9wZW5UYWcoKSB7XG4gICAgcmV0dXJuICc8b2w+JztcbiAgfVxuICBjbG9zZVRhZygpIHtcbiAgICByZXR1cm4gJzwvb2w+JztcbiAgfVxuXG4gIGFic29yYihjaGlsZCkge1xuICAgIGlmIChjaGlsZC50eXBlID09PSB0aGlzLnR5cGUpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLmNvbmNhdChjaGlsZC5jaGlsZHJlbik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgbWF0Y2hlcyh0b2tlbiA9IHt9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0b2tlbi50eXBlID09PSAnbGluZWJyZWFrJykgJiZcbiAgICAgIHRva2VuLmF0dHJpYnV0ZXMgJiZcbiAgICAgICgodG9rZW4uYXR0cmlidXRlcy5saXN0ID09PSAnb3JkZXJlZCcpIHx8ICh0b2tlbi5hdHRyaWJ1dGVzLm9yZGVyZWQgPT09IHRydWUpKVxuICAgICk7XG4gIH1cbn1cblxuT3JkZXJlZExpc3ROb2RlLnByaW9yaXR5ID0gMzA7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
