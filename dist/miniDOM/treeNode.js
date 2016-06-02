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
          return '' + new Array(indentLevel + 1).join(' ') + _this.openTag() + contents + _this.closeTag(); // eslint-disable-line max-len
        });
      } else {
          return Promise.all(this.children.map(function (c) {
            return c.toHTMLAsync(indentLevel + 2);
          })).then(function (childHTML) {
            return '' + new Array(indentLevel + 1).join(' ') + _this.openTag() + '\n' + childHTML.join('\n') + '\n' + new Array(indentLevel + 1).join(' ') + _this.closeTag(); // eslint-disable-line max-len
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
      var formatList = _index.Registry.listFormats().filter(function (format) {
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
//# sourceMappingURL=data:application/json;base64,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Q0FEMkI7T0FBN0I7QUFHQSxVQUFNLFNBQVMsV0FBVyxLQUFYLEVBQVQsQ0FQWTtBQVFsQixpQkFBVyxNQUFYLENBQWtCLFVBQUMsSUFBRCxFQUFPLElBQVAsRUFBZ0I7QUFDaEMsYUFBSyxRQUFMLEdBQWdCLENBQUMsSUFBRCxDQUFoQixDQURnQztBQUVoQyxlQUFPLElBQVAsQ0FGZ0M7T0FBaEIsRUFHZixNQUhILEVBUmtCO0FBWWxCLGFBQU8sTUFBUCxDQVprQjs7Ozs4QkFtQkg7QUFDZixhQUFPLEtBQVAsQ0FEZTs7OztTQXhHRTs7Ozs7O0FBNkdyQixTQUFTLFFBQVQsR0FBb0IsQ0FBQyxDQUFEIiwiZmlsZSI6Im1pbmlET00vdHJlZU5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWdpc3RyeSB9IGZyb20gJy4uL2luZGV4JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWVOb2RlIHtcbiAgY29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuYXR0cmlidXRlcyA9IG9wdHMuYXR0cmlidXRlcyB8fCB7fTtcbiAgICAvLyB0aGlzLmNvbnRlbnRzID0gb3B0cy5jb250ZW50cztcbiAgICB0aGlzLnR5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBkZnNUcmF2ZXJzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYuY29uY2F0KGN1cnIpLCBbdGhpc10pO1xuICB9XG5cbiAgb3BlblRhZygpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBjbG9zZVRhZygpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBwcm9taXNlQ29udGVudHMoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmNvbnRlbnRzIHx8ICcnKTtcbiAgfVxuXG4gIHRvSFRNTEFzeW5jKGluZGVudExldmVsID0gMCkge1xuICAgIGlmICh0aGlzLmlzTGVhZigpKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9taXNlQ29udGVudHMoKVxuICAgICAgLnRoZW4oKGNvbnRlbnRzKSA9PiB7XG4gICAgICAgIHJldHVybiBgJHtuZXcgQXJyYXkoaW5kZW50TGV2ZWwgKyAxKS5qb2luKCcgJyl9JHt0aGlzLm9wZW5UYWcoKX0ke2NvbnRlbnRzfSR7dGhpcy5jbG9zZVRhZygpfWA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbCh0aGlzLmNoaWxkcmVuLm1hcCgoYykgPT4gYy50b0hUTUxBc3luYyhpbmRlbnRMZXZlbCArIDIpKSlcbiAgICAgIC50aGVuKChjaGlsZEhUTUwpID0+IHtcbiAgICAgICAgcmV0dXJuIGAke25ldyBBcnJheShpbmRlbnRMZXZlbCArIDEpLmpvaW4oJyAnKX0ke3RoaXMub3BlblRhZygpfVxcbiR7Y2hpbGRIVE1MLmpvaW4oJ1xcbicpfVxcbiR7bmV3IEFycmF5KGluZGVudExldmVsICsgMSkuam9pbignICcpfSR7dGhpcy5jbG9zZVRhZygpfWA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcGxhaW5UZXh0QXN5bmMoKSB7XG4gICAgaWYgKHRoaXMuaXNMZWFmKCkpIHtcbiAgICAgIGlmICh0aGlzLnByb21pc2VQbGFpbkNvbnRlbnRzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb21pc2VQbGFpbkNvbnRlbnRzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMucGxhaW5UZXh0KCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5jaGlsZHJlbi5tYXAoKGMpID0+IGMucGxhaW5UZXh0QXN5bmMoKSkpLnRoZW4oKGMpID0+IGMuam9pbignJykpO1xuICAgIH1cbiAgfVxuXG4gIHBsYWluVGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5tYXAoKGMpID0+IGMucGxhaW5UZXh0KCkpLmpvaW4oJycpO1xuICB9XG5cbiAgdG9IVE1MKGluZGVudExldmVsID0gMCkge1xuICAgIGlmICh0aGlzLmlzTGVhZigpKSB7XG4gICAgICByZXR1cm4gYCR7bmV3IEFycmF5KGluZGVudExldmVsICsgMSkuam9pbignICcpfSR7dGhpcy5vcGVuVGFnKCl9JHt0aGlzLmNvbnRlbnRzfSR7dGhpcy5jbG9zZVRhZygpfWA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYCR7bmV3IEFycmF5KGluZGVudExldmVsICsgMSkuam9pbignICcpfSR7dGhpcy5vcGVuVGFnKCl9XFxuJHt0aGlzLmNoaWxkcmVuLm1hcCgoYykgPT4gYy50b0hUTUwoaW5kZW50TGV2ZWwgKyAyKSkuam9pbignXFxuJyl9XFxuJHtuZXcgQXJyYXkoaW5kZW50TGV2ZWwgKyAxKS5qb2luKCcgJyl9JHt0aGlzLmNsb3NlVGFnKCl9YDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgfVxuICB9XG5cbiAgaXNMZWFmKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGFwcGVuZENoaWxkKGNoaWxkKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgfVxuXG4gIGFic29yYihjaGlsZCkge1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxuICAgICAgY2hpbGRyZW46IHRoaXMuY2hpbGRyZW4sXG4gICAgICBhdHRyaWJ1dGVzOiB0aGlzLmF0dHJpYnV0ZXMsXG4gICAgICBjb250ZW50czogdGhpcy5jb250ZW50cyxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGJ1aWxkKHRva2VuKSB7XG4gICAgY29uc3QgZm9ybWF0TGlzdCA9IFJlZ2lzdHJ5Lmxpc3RGb3JtYXRzKClcbiAgICAuZmlsdGVyKChmb3JtYXQpID0+IGZvcm1hdC5tYXRjaGVzKHRva2VuKSlcbiAgICAubWFwKChOKSA9PiBuZXcgTih0b2tlbikpO1xuICAgIGlmIChmb3JtYXRMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB0b2tlbiAke0pTT04uc3RyaW5naWZ5KHRva2VuKX0gaGFzIG5vIG1hdGNoaW5nIGZvcm1hdHNgKTtcbiAgICB9XG4gICAgY29uc3QgcmV0VmFsID0gZm9ybWF0TGlzdC5zaGlmdCgpO1xuICAgIGZvcm1hdExpc3QucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICBwcmV2LmNoaWxkcmVuID0gW2N1cnJdO1xuICAgICAgcmV0dXJuIGN1cnI7XG4gICAgfSwgcmV0VmFsKTtcbiAgICByZXR1cm4gcmV0VmFsO1xuICB9XG5cbiAgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnByaW9yaXR5O1xuICB9XG5cbiAgc3RhdGljIG1hdGNoZXMoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cblRyZWVOb2RlLnByaW9yaXR5ID0gLTI7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
