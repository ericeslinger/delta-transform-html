'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _registry = require('../registry');

var Registry = _interopRequireWildcard(_registry);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TreeNode = function () {
  function TreeNode() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, TreeNode);

    this.children = [];
    this.attributes = opts.attributes || {};
    // this.contents = opts.contents;
    this.type = this.constructor.name;
  }

  _createClass(TreeNode, [{
    key: 'dfsTraverse',
    value: function dfsTraverse() {
      return this.children.reduce(function (prev, curr) {
        return prev.concat(curr);
      }, [this]);
    }
  }, {
    key: 'openTag',
    value: function openTag() {
      return '';
    }
  }, {
    key: 'closeTag',
    value: function closeTag() {
      return '';
    }
  }, {
    key: 'plainText',
    value: function plainText() {
      return this.children.map(function (c) {
        return c.plainText();
      }).join('');
    }
  }, {
    key: 'toHTML',
    value: function toHTML() {
      var indentLevel = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      if (this.isLeaf()) {
        return '' + new Array(indentLevel + 1).join(' ') + this.openTag() + this.contents + this.closeTag(); // eslint-disable-line max-len
      } else {
          return '' + new Array(indentLevel + 1).join(' ') + this.openTag() + '\n' + this.children.map(function (c) {
            return c.toHTML(indentLevel + 2);
          }).join('\n') + '\n' + new Array(indentLevel + 1).join(' ') + this.closeTag(); // eslint-disable-line max-len
        }
    }
  }, {
    key: 'isLeaf',
    value: function isLeaf() {
      return false;
    }
  }, {
    key: 'appendChild',
    value: function appendChild(child) {
      this.children.push(child);
    }
  }, {
    key: 'absorb',
    value: function absorb(child) {
      this.children.push(child);
      return null;
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return {
        type: this.type,
        level: this.level,
        children: this.children,
        attributes: this.attributes,
        contents: this.contents
      };
    }
  }, {
    key: 'priority',
    get: function get() {
      return this.constructor.priority;
    }
  }], [{
    key: 'build',
    value: function build(token) {
      var formatList = Registry.listFormats().filter(function (format) {
        return format.matches(token);
      }).map(function (N) {
        return new N(token);
      });
      if (formatList.length === 0) {
        throw new Error('token ' + JSON.stringify(token) + ' has no matching formats');
      }
      var retVal = formatList.shift();
      formatList.reduce(function (prev, curr) {
        prev.children = [curr];
        return curr;
      }, retVal);
      return retVal;
    }
  }, {
    key: 'matches',
    value: function matches() {
      return false;
    }
  }]);

  return TreeNode;
}();

exports.default = TreeNode;


TreeNode.priority = -2;
//# sourceMappingURL=data:application/json;base64,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QWdCLENBQUMsSUFBRCxDQUFoQixDQURnQztBQUVoQyxlQUFPLElBQVAsQ0FGZ0M7T0FBaEIsRUFHZixNQUhILEVBUmtCO0FBWWxCLGFBQU8sTUFBUCxDQVprQjs7Ozs4QkFtQkg7QUFDZixhQUFPLEtBQVAsQ0FEZTs7OztTQTFFRTs7Ozs7O0FBK0VyQixTQUFTLFFBQVQsR0FBb0IsQ0FBQyxDQUFEIiwiZmlsZSI6Im1pbmlET00vdHJlZU5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWdpc3RyeSBmcm9tICcuLi9yZWdpc3RyeSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLmF0dHJpYnV0ZXMgPSBvcHRzLmF0dHJpYnV0ZXMgfHwge307XG4gICAgLy8gdGhpcy5jb250ZW50cyA9IG9wdHMuY29udGVudHM7XG4gICAgdGhpcy50eXBlID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgZGZzVHJhdmVyc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2LmNvbmNhdChjdXJyKSwgW3RoaXNdKTtcbiAgfVxuXG4gIG9wZW5UYWcoKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY2xvc2VUYWcoKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcGxhaW5UZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLm1hcCgoYykgPT4gYy5wbGFpblRleHQoKSkuam9pbignJyk7XG4gIH1cblxuICB0b0hUTUwoaW5kZW50TGV2ZWwgPSAwKSB7XG4gICAgaWYgKHRoaXMuaXNMZWFmKCkpIHtcbiAgICAgIHJldHVybiBgJHtuZXcgQXJyYXkoaW5kZW50TGV2ZWwgKyAxKS5qb2luKCcgJyl9JHt0aGlzLm9wZW5UYWcoKX0ke3RoaXMuY29udGVudHN9JHt0aGlzLmNsb3NlVGFnKCl9YDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgJHtuZXcgQXJyYXkoaW5kZW50TGV2ZWwgKyAxKS5qb2luKCcgJyl9JHt0aGlzLm9wZW5UYWcoKX1cXG4ke3RoaXMuY2hpbGRyZW4ubWFwKChjKSA9PiBjLnRvSFRNTChpbmRlbnRMZXZlbCArIDIpKS5qb2luKCdcXG4nKX1cXG4ke25ldyBBcnJheShpbmRlbnRMZXZlbCArIDEpLmpvaW4oJyAnKX0ke3RoaXMuY2xvc2VUYWcoKX1gOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICB9XG4gIH1cblxuICBpc0xlYWYoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYXBwZW5kQ2hpbGQoY2hpbGQpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICB9XG5cbiAgYWJzb3JiKGNoaWxkKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgbGV2ZWw6IHRoaXMubGV2ZWwsXG4gICAgICBjaGlsZHJlbjogdGhpcy5jaGlsZHJlbixcbiAgICAgIGF0dHJpYnV0ZXM6IHRoaXMuYXR0cmlidXRlcyxcbiAgICAgIGNvbnRlbnRzOiB0aGlzLmNvbnRlbnRzLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgYnVpbGQodG9rZW4pIHtcbiAgICBjb25zdCBmb3JtYXRMaXN0ID0gUmVnaXN0cnkubGlzdEZvcm1hdHMoKVxuICAgIC5maWx0ZXIoKGZvcm1hdCkgPT4gZm9ybWF0Lm1hdGNoZXModG9rZW4pKVxuICAgIC5tYXAoKE4pID0+IG5ldyBOKHRva2VuKSk7XG4gICAgaWYgKGZvcm1hdExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHRva2VuICR7SlNPTi5zdHJpbmdpZnkodG9rZW4pfSBoYXMgbm8gbWF0Y2hpbmcgZm9ybWF0c2ApO1xuICAgIH1cbiAgICBjb25zdCByZXRWYWwgPSBmb3JtYXRMaXN0LnNoaWZ0KCk7XG4gICAgZm9ybWF0TGlzdC5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgIHByZXYuY2hpbGRyZW4gPSBbY3Vycl07XG4gICAgICByZXR1cm4gY3VycjtcbiAgICB9LCByZXRWYWwpO1xuICAgIHJldHVybiByZXRWYWw7XG4gIH1cblxuICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IucHJpb3JpdHk7XG4gIH1cblxuICBzdGF0aWMgbWF0Y2hlcygpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuVHJlZU5vZGUucHJpb3JpdHkgPSAtMjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
