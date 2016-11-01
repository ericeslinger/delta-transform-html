'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('../index');

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
    key: 'promiseContents',
    value: function promiseContents() {
      return Promise.resolve(this.contents || '');
    }
  }, {
    key: 'toHTMLAsync',
    value: function toHTMLAsync() {
      var _this = this;

      var indentLevel = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      if (this.isLeaf()) {
        return this.promiseContents().then(function (contents) {
          return '' + _this.openTag() + contents + _this.closeTag(); // eslint-disable-line max-len
        });
      } else {
          return Promise.all(this.children.map(function (c) {
            return c.toHTMLAsync(0);
          })).then(function (childHTML) {
            return '' + _this.openTag() + childHTML.join('') + _this.closeTag(); // eslint-disable-line max-len
          });
        }
    }
  }, {
    key: 'plainTextAsync',
    value: function plainTextAsync() {
      if (this.isLeaf()) {
        if (this.promisePlainContents) {
          return this.promisePlainContents();
        } else {
          return Promise.resolve(this.plainText());
        }
      } else {
        return Promise.all(this.children.map(function (c) {
          return c.plainTextAsync();
        })).then(function (c) {
          return c.join('');
        });
      }
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
        return '' + this.openTag() + this.contents + this.closeTag(); // eslint-disable-line max-len
      } else {
          return '' + this.openTag() + this.children.map(function (c) {
            return c.toHTML(0);
          }).join('') + this.closeTag(); // eslint-disable-line max-len
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
      var formatList = _index.Registry.listFormats().filter(function (format) {
        return format.matches(token);
      }).map(function (N) {
        return new N(token);
      });
      if (formatList.length === 0) {
        // console.log(`token ${JSON.stringify(token)} has no matching formats`);
        return new TreeNode();
      }
      var retVal = formatList.shift();
      formatList.reduce(function (prev, curr) {
        prev.children = [curr]; // eslint-disable-line no-param-reassign
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
//# sourceMappingURL=data:application/json;base64,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QURpQjs7OzsyQkFJWixPQUFPO0FBQ1osV0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixLQUFuQixFQURZO0FBRVosYUFBTyxJQUFQLENBRlk7Ozs7NkJBS0w7QUFDUCxhQUFPO0FBQ0wsY0FBTSxLQUFLLElBQUw7QUFDTixlQUFPLEtBQUssS0FBTDtBQUNQLGtCQUFVLEtBQUssUUFBTDtBQUNWLG9CQUFZLEtBQUssVUFBTDtBQUNaLGtCQUFVLEtBQUssUUFBTDtPQUxaLENBRE87Ozs7d0JBMEJNO0FBQ2IsYUFBTyxLQUFLLFdBQUwsQ0FBaUIsUUFBakIsQ0FETTs7OzswQkFoQkYsT0FBTztBQUNsQixVQUFNLGFBQWEsZ0JBQVMsV0FBVCxHQUNsQixNQURrQixDQUNYLFVBQUMsTUFBRDtlQUFZLE9BQU8sT0FBUCxDQUFlLEtBQWY7T0FBWixDQURXLENBRWxCLEdBRmtCLENBRWQsVUFBQyxDQUFEO2VBQU8sSUFBSSxDQUFKLENBQU0sS0FBTjtPQUFQLENBRkMsQ0FEWTtBQUlsQixVQUFJLFdBQVcsTUFBWCxLQUFzQixDQUF0QixFQUF5Qjs7QUFFM0IsZUFBTyxJQUFJLFFBQUosRUFBUCxDQUYyQjtPQUE3QjtBQUlBLFVBQU0sU0FBUyxXQUFXLEtBQVgsRUFBVCxDQVJZO0FBU2xCLGlCQUFXLE1BQVgsQ0FBa0IsVUFBQyxJQUFELEVBQU8sSUFBUCxFQUFnQjtBQUNoQyxhQUFLLFFBQUwsR0FBZ0IsQ0FBQyxJQUFELENBQWhCO0FBRGdDLGVBRXpCLElBQVAsQ0FGZ0M7T0FBaEIsRUFHZixNQUhILEVBVGtCO0FBYWxCLGFBQU8sTUFBUCxDQWJrQjs7Ozs4QkFvQkg7QUFDZixhQUFPLEtBQVAsQ0FEZTs7OztTQXpHRTs7Ozs7O0FBOEdyQixTQUFTLFFBQVQsR0FBb0IsQ0FBQyxDQUFEIiwiZmlsZSI6Im1pbmlET00vdHJlZU5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWdpc3RyeSB9IGZyb20gJy4uL2luZGV4JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWVOb2RlIHtcbiAgY29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuYXR0cmlidXRlcyA9IG9wdHMuYXR0cmlidXRlcyB8fCB7fTtcbiAgICAvLyB0aGlzLmNvbnRlbnRzID0gb3B0cy5jb250ZW50cztcbiAgICB0aGlzLnR5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBkZnNUcmF2ZXJzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYuY29uY2F0KGN1cnIpLCBbdGhpc10pO1xuICB9XG5cbiAgb3BlblRhZygpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBjbG9zZVRhZygpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBwcm9taXNlQ29udGVudHMoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmNvbnRlbnRzIHx8ICcnKTtcbiAgfVxuXG4gIHRvSFRNTEFzeW5jKGluZGVudExldmVsID0gMCkge1xuICAgIGlmICh0aGlzLmlzTGVhZigpKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9taXNlQ29udGVudHMoKVxuICAgICAgLnRoZW4oKGNvbnRlbnRzKSA9PiB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLm9wZW5UYWcoKX0ke2NvbnRlbnRzfSR7dGhpcy5jbG9zZVRhZygpfWA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbCh0aGlzLmNoaWxkcmVuLm1hcCgoYykgPT4gYy50b0hUTUxBc3luYygwKSkpXG4gICAgICAudGhlbigoY2hpbGRIVE1MKSA9PiB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLm9wZW5UYWcoKX0ke2NoaWxkSFRNTC5qb2luKCcnKX0ke3RoaXMuY2xvc2VUYWcoKX1gOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHBsYWluVGV4dEFzeW5jKCkge1xuICAgIGlmICh0aGlzLmlzTGVhZigpKSB7XG4gICAgICBpZiAodGhpcy5wcm9taXNlUGxhaW5Db250ZW50cykge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlUGxhaW5Db250ZW50cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnBsYWluVGV4dCgpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHRoaXMuY2hpbGRyZW4ubWFwKChjKSA9PiBjLnBsYWluVGV4dEFzeW5jKCkpKS50aGVuKChjKSA9PiBjLmpvaW4oJycpKTtcbiAgICB9XG4gIH1cblxuICBwbGFpblRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubWFwKChjKSA9PiBjLnBsYWluVGV4dCgpKS5qb2luKCcnKTtcbiAgfVxuXG4gIHRvSFRNTChpbmRlbnRMZXZlbCA9IDApIHtcbiAgICBpZiAodGhpcy5pc0xlYWYoKSkge1xuICAgICAgcmV0dXJuIGAke3RoaXMub3BlblRhZygpfSR7dGhpcy5jb250ZW50c30ke3RoaXMuY2xvc2VUYWcoKX1gOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGAke3RoaXMub3BlblRhZygpfSR7dGhpcy5jaGlsZHJlbi5tYXAoKGMpID0+IGMudG9IVE1MKDApKS5qb2luKCcnKX0ke3RoaXMuY2xvc2VUYWcoKX1gOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICB9XG4gIH1cblxuICBpc0xlYWYoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYXBwZW5kQ2hpbGQoY2hpbGQpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICB9XG5cbiAgYWJzb3JiKGNoaWxkKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgbGV2ZWw6IHRoaXMubGV2ZWwsXG4gICAgICBjaGlsZHJlbjogdGhpcy5jaGlsZHJlbixcbiAgICAgIGF0dHJpYnV0ZXM6IHRoaXMuYXR0cmlidXRlcyxcbiAgICAgIGNvbnRlbnRzOiB0aGlzLmNvbnRlbnRzLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgYnVpbGQodG9rZW4pIHtcbiAgICBjb25zdCBmb3JtYXRMaXN0ID0gUmVnaXN0cnkubGlzdEZvcm1hdHMoKVxuICAgIC5maWx0ZXIoKGZvcm1hdCkgPT4gZm9ybWF0Lm1hdGNoZXModG9rZW4pKVxuICAgIC5tYXAoKE4pID0+IG5ldyBOKHRva2VuKSk7XG4gICAgaWYgKGZvcm1hdExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgdG9rZW4gJHtKU09OLnN0cmluZ2lmeSh0b2tlbil9IGhhcyBubyBtYXRjaGluZyBmb3JtYXRzYCk7XG4gICAgICByZXR1cm4gbmV3IFRyZWVOb2RlKCk7XG4gICAgfVxuICAgIGNvbnN0IHJldFZhbCA9IGZvcm1hdExpc3Quc2hpZnQoKTtcbiAgICBmb3JtYXRMaXN0LnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgcHJldi5jaGlsZHJlbiA9IFtjdXJyXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgcmV0dXJuIGN1cnI7XG4gICAgfSwgcmV0VmFsKTtcbiAgICByZXR1cm4gcmV0VmFsO1xuICB9XG5cbiAgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnByaW9yaXR5O1xuICB9XG5cbiAgc3RhdGljIG1hdGNoZXMoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cblRyZWVOb2RlLnByaW9yaXR5ID0gLTI7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
