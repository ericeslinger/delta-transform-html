'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _registry = require('../registry');

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
    key: 'toHTML',
    value: function toHTML() {
      if (this.isLeaf()) {
        return '' + this.openTag() + this.contents + this.closeTag();
      } else {
        return this.openTag() + '\n' + this.children.map(function (c) {
          return c.toHTML();
        }).join('\n') + '\n' + this.closeTag();
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
      var formatList = Object.keys(_registry.Registry).map(function (key) {
        if (_registry.Registry[key].matches(token)) {
          return new _registry.Registry[key](token);
        } else {
          return null;
        }
      }).filter(function (i) {
        return !!i;
      }).sort(function (a, b) {
        return b.priority - a.priority;
      });
      if (formatList.length === 0) {
        throw new Error('token has no matching formats');
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
//# sourceMappingURL=data:application/json;base64,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b2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVnaXN0cnkgfSBmcm9tICcuLi9yZWdpc3RyeSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLmF0dHJpYnV0ZXMgPSBvcHRzLmF0dHJpYnV0ZXMgfHwge307XG4gICAgLy8gdGhpcy5jb250ZW50cyA9IG9wdHMuY29udGVudHM7XG4gICAgdGhpcy50eXBlID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgZGZzVHJhdmVyc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2LmNvbmNhdChjdXJyKSwgW3RoaXNdKTtcbiAgfVxuXG4gIG9wZW5UYWcoKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY2xvc2VUYWcoKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgdG9IVE1MKCkge1xuICAgIGlmICh0aGlzLmlzTGVhZigpKSB7XG4gICAgICByZXR1cm4gIGAke3RoaXMub3BlblRhZygpfSR7dGhpcy5jb250ZW50c30ke3RoaXMuY2xvc2VUYWcoKX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5vcGVuVGFnKCl9XFxuJHt0aGlzLmNoaWxkcmVuLm1hcCgoYykgPT4gYy50b0hUTUwoKSkuam9pbignXFxuJyl9XFxuJHt0aGlzLmNsb3NlVGFnKCl9YDtcbiAgICB9XG4gIH1cblxuICBpc0xlYWYoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYXBwZW5kQ2hpbGQoY2hpbGQpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICB9XG5cbiAgYWJzb3JiKGNoaWxkKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgbGV2ZWw6IHRoaXMubGV2ZWwsXG4gICAgICBjaGlsZHJlbjogdGhpcy5jaGlsZHJlbixcbiAgICAgIGF0dHJpYnV0ZXM6IHRoaXMuYXR0cmlidXRlcyxcbiAgICAgIGNvbnRlbnRzOiB0aGlzLmNvbnRlbnRzLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgYnVpbGQodG9rZW4pIHtcbiAgICBjb25zdCBmb3JtYXRMaXN0ID0gT2JqZWN0LmtleXMoUmVnaXN0cnkpLm1hcCgoa2V5KSA9PiB7XG4gICAgICBpZiAoUmVnaXN0cnlba2V5XS5tYXRjaGVzKHRva2VuKSkge1xuICAgICAgICByZXR1cm4gbmV3IFJlZ2lzdHJ5W2tleV0odG9rZW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSkuZmlsdGVyKChpKSA9PiAhIWkpXG4gICAgLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcbiAgICBpZiAoZm9ybWF0TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndG9rZW4gaGFzIG5vIG1hdGNoaW5nIGZvcm1hdHMnKTtcbiAgICB9XG4gICAgY29uc3QgcmV0VmFsID0gZm9ybWF0TGlzdC5zaGlmdCgpO1xuICAgIGZvcm1hdExpc3QucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICBwcmV2LmNoaWxkcmVuID0gW2N1cnJdO1xuICAgICAgcmV0dXJuIGN1cnI7XG4gICAgfSwgcmV0VmFsKTtcbiAgICByZXR1cm4gcmV0VmFsO1xuICB9XG5cbiAgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnByaW9yaXR5O1xuICB9XG5cbiAgc3RhdGljIG1hdGNoZXMoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
