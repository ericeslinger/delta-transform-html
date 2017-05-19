'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _treeNode = require('./treeNode');

var _treeNode2 = _interopRequireDefault(_treeNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlockNode = function (_TreeNode) {
  _inherits(BlockNode, _TreeNode);

  function BlockNode(opts) {
    _classCallCheck(this, BlockNode);

    var _this = _possibleConstructorReturn(this, (BlockNode.__proto__ || Object.getPrototypeOf(BlockNode)).call(this, opts));

    _this.level = 'block';
    return _this;
  }

  _createClass(BlockNode, [{
    key: 'plainTextAsync',
    value: function plainTextAsync() {
      return Promise.all(this.children.map(function (child) {
        return child.plainTextAsync();
      })).then(function (c) {
        return c.join('') + '\n';
      });
    }
  }, {
    key: 'plainText',
    value: function plainText() {
      return _get(BlockNode.prototype.__proto__ || Object.getPrototypeOf(BlockNode.prototype), 'plainText', this).call(this) + '\n';
    }
  }, {
    key: 'appendChild',
    value: function appendChild(child) {
      if (this.children.length === 0) {
        this.children.push(child);
      } else {
        var remains = this.children[this.children.length - 1].absorb(child);
        if (remains !== null) {
          this.children.push(remains);
        }
      }
    }
  }]);

  return BlockNode;
}(_treeNode2.default);

exports.default = BlockNode;


BlockNode.priority = 101;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vYmxvY2suanMiXSwibmFtZXMiOlsiQmxvY2tOb2RlIiwib3B0cyIsImxldmVsIiwiUHJvbWlzZSIsImFsbCIsImNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJwbGFpblRleHRBc3luYyIsInRoZW4iLCJjIiwiam9pbiIsImxlbmd0aCIsInB1c2giLCJyZW1haW5zIiwiYWJzb3JiIiwicHJpb3JpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7QUFDbkIscUJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFBQSxzSEFDVkEsSUFEVTs7QUFFaEIsVUFBS0MsS0FBTCxHQUFhLE9BQWI7QUFGZ0I7QUFHakI7Ozs7cUNBRWdCO0FBQ2YsYUFBT0MsUUFBUUMsR0FBUixDQUFZLEtBQUtDLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxLQUFEO0FBQUEsZUFBV0EsTUFBTUMsY0FBTixFQUFYO0FBQUEsT0FBbEIsQ0FBWixFQUNOQyxJQURNLENBQ0QsVUFBQ0MsQ0FBRDtBQUFBLGVBQVVBLEVBQUVDLElBQUYsQ0FBTyxFQUFQLENBQVY7QUFBQSxPQURDLENBQVA7QUFFRDs7O2dDQUVXO0FBQ1Y7QUFDRDs7O2dDQUNXSixLLEVBQU87QUFDakIsVUFBSSxLQUFLRixRQUFMLENBQWNPLE1BQWQsS0FBeUIsQ0FBN0IsRUFBZ0M7QUFDOUIsYUFBS1AsUUFBTCxDQUFjUSxJQUFkLENBQW1CTixLQUFuQjtBQUNELE9BRkQsTUFFTztBQUNMLFlBQU1PLFVBQVUsS0FBS1QsUUFBTCxDQUFjLEtBQUtBLFFBQUwsQ0FBY08sTUFBZCxHQUF1QixDQUFyQyxFQUF3Q0csTUFBeEMsQ0FBK0NSLEtBQS9DLENBQWhCO0FBQ0EsWUFBSU8sWUFBWSxJQUFoQixFQUFzQjtBQUNwQixlQUFLVCxRQUFMLENBQWNRLElBQWQsQ0FBbUJDLE9BQW5CO0FBQ0Q7QUFDRjtBQUNGOzs7Ozs7a0JBdkJrQmQsUzs7O0FBMEJyQkEsVUFBVWdCLFFBQVYsR0FBcUIsR0FBckIiLCJmaWxlIjoibWluaURPTS9ibG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmVlTm9kZSBmcm9tICcuL3RyZWVOb2RlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tOb2RlIGV4dGVuZHMgVHJlZU5vZGUge1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG4gICAgdGhpcy5sZXZlbCA9ICdibG9jayc7XG4gIH1cblxuICBwbGFpblRleHRBc3luYygpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiBjaGlsZC5wbGFpblRleHRBc3luYygpKSlcbiAgICAudGhlbigoYykgPT4gYCR7Yy5qb2luKCcnKX1cXG5gKTtcbiAgfVxuXG4gIHBsYWluVGV4dCgpIHtcbiAgICByZXR1cm4gYCR7c3VwZXIucGxhaW5UZXh0KCl9XFxuYDtcbiAgfVxuICBhcHBlbmRDaGlsZChjaGlsZCkge1xuICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVtYWlucyA9IHRoaXMuY2hpbGRyZW5bdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxXS5hYnNvcmIoY2hpbGQpO1xuICAgICAgaWYgKHJlbWFpbnMgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHJlbWFpbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5CbG9ja05vZGUucHJpb3JpdHkgPSAxMDE7XG4iXX0=
