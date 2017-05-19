'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _treeNode = require('./treeNode');

var _treeNode2 = _interopRequireDefault(_treeNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RootNode = function (_TreeNode) {
  _inherits(RootNode, _TreeNode);

  function RootNode() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, RootNode);

    return _possibleConstructorReturn(this, (RootNode.__proto__ || Object.getPrototypeOf(RootNode)).call(this, opts));
  }

  _createClass(RootNode, [{
    key: 'absorb',
    value: function absorb(child) {
      var remains = child;
      if (this.children.length > 0) {
        remains = this.children[this.children.length - 1].absorb(child);
      }
      if (remains !== null) {
        this.children.push(remains);
      }
      return null;
    }
  }, {
    key: 'toHTML',
    value: function toHTML() {
      return this.children.map(function (c) {
        return c.toHTML(0);
      }).join(''); // eslint-disable-line max-len
    }
  }, {
    key: 'toHTMLAsync',
    value: function toHTMLAsync() {
      return Promise.all(this.children.map(function (c) {
        return c.toHTMLAsync(0);
      })).then(function (childHTML) {
        return childHTML.join(''); // eslint-disable-line max-len
      });
    }
  }]);

  return RootNode;
}(_treeNode2.default);

exports.default = RootNode;


RootNode.priority = -1;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vcm9vdC5qcyJdLCJuYW1lcyI6WyJSb290Tm9kZSIsIm9wdHMiLCJjaGlsZCIsInJlbWFpbnMiLCJjaGlsZHJlbiIsImxlbmd0aCIsImFic29yYiIsInB1c2giLCJtYXAiLCJjIiwidG9IVE1MIiwiam9pbiIsIlByb21pc2UiLCJhbGwiLCJ0b0hUTUxBc3luYyIsInRoZW4iLCJjaGlsZEhUTUwiLCJwcmlvcml0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7QUFDbkIsc0JBQXVCO0FBQUEsUUFBWEMsSUFBVyx1RUFBSixFQUFJOztBQUFBOztBQUFBLCtHQUNmQSxJQURlO0FBRXRCOzs7OzJCQUNNQyxLLEVBQU87QUFDWixVQUFJQyxVQUFVRCxLQUFkO0FBQ0EsVUFBSSxLQUFLRSxRQUFMLENBQWNDLE1BQWQsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDNUJGLGtCQUFVLEtBQUtDLFFBQUwsQ0FBYyxLQUFLQSxRQUFMLENBQWNDLE1BQWQsR0FBdUIsQ0FBckMsRUFBd0NDLE1BQXhDLENBQStDSixLQUEvQyxDQUFWO0FBQ0Q7QUFDRCxVQUFJQyxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLGFBQUtDLFFBQUwsQ0FBY0csSUFBZCxDQUFtQkosT0FBbkI7QUFDRDtBQUNELGFBQU8sSUFBUDtBQUNEOzs7NkJBRVE7QUFDUCxhQUFPLEtBQUtDLFFBQUwsQ0FBY0ksR0FBZCxDQUFrQixVQUFDQyxDQUFEO0FBQUEsZUFBT0EsRUFBRUMsTUFBRixDQUFTLENBQVQsQ0FBUDtBQUFBLE9BQWxCLEVBQXNDQyxJQUF0QyxDQUEyQyxFQUEzQyxDQUFQLENBRE8sQ0FDZ0Q7QUFDeEQ7OztrQ0FFYTtBQUNaLGFBQU9DLFFBQVFDLEdBQVIsQ0FBWSxLQUFLVCxRQUFMLENBQWNJLEdBQWQsQ0FBa0IsVUFBQ0MsQ0FBRDtBQUFBLGVBQU9BLEVBQUVLLFdBQUYsQ0FBYyxDQUFkLENBQVA7QUFBQSxPQUFsQixDQUFaLEVBQ05DLElBRE0sQ0FDRCxVQUFDQyxTQUFELEVBQWU7QUFDbkIsZUFBT0EsVUFBVUwsSUFBVixDQUFlLEVBQWYsQ0FBUCxDQURtQixDQUNRO0FBQzVCLE9BSE0sQ0FBUDtBQUlEOzs7Ozs7a0JBeEJrQlgsUTs7O0FBMkJyQkEsU0FBU2lCLFFBQVQsR0FBb0IsQ0FBQyxDQUFyQiIsImZpbGUiOiJtaW5pRE9NL3Jvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJlZU5vZGUgZnJvbSAnLi90cmVlTm9kZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvb3ROb2RlIGV4dGVuZHMgVHJlZU5vZGUge1xuICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcbiAgfVxuICBhYnNvcmIoY2hpbGQpIHtcbiAgICBsZXQgcmVtYWlucyA9IGNoaWxkO1xuICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIHJlbWFpbnMgPSB0aGlzLmNoaWxkcmVuW3RoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMV0uYWJzb3JiKGNoaWxkKTtcbiAgICB9XG4gICAgaWYgKHJlbWFpbnMgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChyZW1haW5zKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB0b0hUTUwoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubWFwKChjKSA9PiBjLnRvSFRNTCgwKSkuam9pbignJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICB9XG5cbiAgdG9IVE1MQXN5bmMoKSB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHRoaXMuY2hpbGRyZW4ubWFwKChjKSA9PiBjLnRvSFRNTEFzeW5jKDApKSlcbiAgICAudGhlbigoY2hpbGRIVE1MKSA9PiB7XG4gICAgICByZXR1cm4gY2hpbGRIVE1MLmpvaW4oJycpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICB9KTtcbiAgfVxufVxuXG5Sb290Tm9kZS5wcmlvcml0eSA9IC0xO1xuIl19
