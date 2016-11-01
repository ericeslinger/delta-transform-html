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
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, RootNode);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(RootNode).call(this, opts));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vcm9vdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUI7OztBQUNuQixXQURtQixRQUNuQixHQUF1QjtRQUFYLDZEQUFPLGtCQUFJOzswQkFESixVQUNJOztrRUFESixxQkFFWCxPQURlO0dBQXZCOztlQURtQjs7MkJBSVosT0FBTztBQUNaLFVBQUksVUFBVSxLQUFWLENBRFE7QUFFWixVQUFJLEtBQUssUUFBTCxDQUFjLE1BQWQsR0FBdUIsQ0FBdkIsRUFBMEI7QUFDNUIsa0JBQVUsS0FBSyxRQUFMLENBQWMsS0FBSyxRQUFMLENBQWMsTUFBZCxHQUF1QixDQUF2QixDQUFkLENBQXdDLE1BQXhDLENBQStDLEtBQS9DLENBQVYsQ0FENEI7T0FBOUI7QUFHQSxVQUFJLFlBQVksSUFBWixFQUFrQjtBQUNwQixhQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLE9BQW5CLEVBRG9CO09BQXRCO0FBR0EsYUFBTyxJQUFQLENBUlk7Ozs7NkJBV0w7QUFDUCxhQUFPLEtBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsVUFBQyxDQUFEO2VBQU8sRUFBRSxNQUFGLENBQVMsQ0FBVDtPQUFQLENBQWxCLENBQXNDLElBQXRDLENBQTJDLEVBQTNDLENBQVA7QUFETzs7O2tDQUlLO0FBQ1osYUFBTyxRQUFRLEdBQVIsQ0FBWSxLQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFVBQUMsQ0FBRDtlQUFPLEVBQUUsV0FBRixDQUFjLENBQWQ7T0FBUCxDQUE5QixFQUNOLElBRE0sQ0FDRCxVQUFDLFNBQUQsRUFBZTtBQUNuQixlQUFPLFVBQVUsSUFBVixDQUFlLEVBQWYsQ0FBUDtBQURtQixPQUFmLENBRE4sQ0FEWTs7OztTQW5CSzs7Ozs7O0FBMkJyQixTQUFTLFFBQVQsR0FBb0IsQ0FBQyxDQUFEIiwiZmlsZSI6Im1pbmlET00vcm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmVlTm9kZSBmcm9tICcuL3RyZWVOb2RlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9vdE5vZGUgZXh0ZW5kcyBUcmVlTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuICB9XG4gIGFic29yYihjaGlsZCkge1xuICAgIGxldCByZW1haW5zID0gY2hpbGQ7XG4gICAgaWYgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgcmVtYWlucyA9IHRoaXMuY2hpbGRyZW5bdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxXS5hYnNvcmIoY2hpbGQpO1xuICAgIH1cbiAgICBpZiAocmVtYWlucyAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHJlbWFpbnMpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHRvSFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5tYXAoKGMpID0+IGMudG9IVE1MKDApKS5qb2luKCcnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gIH1cblxuICB0b0hUTUxBc3luYygpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5jaGlsZHJlbi5tYXAoKGMpID0+IGMudG9IVE1MQXN5bmMoMCkpKVxuICAgIC50aGVuKChjaGlsZEhUTUwpID0+IHtcbiAgICAgIHJldHVybiBjaGlsZEhUTUwuam9pbignJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIH0pO1xuICB9XG59XG5cblJvb3ROb2RlLnByaW9yaXR5ID0gLTE7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
