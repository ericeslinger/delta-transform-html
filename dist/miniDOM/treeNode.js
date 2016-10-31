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
//# sourceMappingURL=data:application/json;base64,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Tm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlZ2lzdHJ5IH0gZnJvbSAnLi4vaW5kZXgnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZU5vZGUge1xuICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy5hdHRyaWJ1dGVzID0gb3B0cy5hdHRyaWJ1dGVzIHx8IHt9O1xuICAgIC8vIHRoaXMuY29udGVudHMgPSBvcHRzLmNvbnRlbnRzO1xuICAgIHRoaXMudHlwZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIGRmc1RyYXZlcnNlKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldi5jb25jYXQoY3VyciksIFt0aGlzXSk7XG4gIH1cblxuICBvcGVuVGFnKCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGNsb3NlVGFnKCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHByb21pc2VDb250ZW50cygpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuY29udGVudHMgfHwgJycpO1xuICB9XG5cbiAgdG9IVE1MQXN5bmMoaW5kZW50TGV2ZWwgPSAwKSB7XG4gICAgaWYgKHRoaXMuaXNMZWFmKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb21pc2VDb250ZW50cygpXG4gICAgICAudGhlbigoY29udGVudHMpID0+IHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMub3BlblRhZygpfSR7Y29udGVudHN9JHt0aGlzLmNsb3NlVGFnKCl9YDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHRoaXMuY2hpbGRyZW4ubWFwKChjKSA9PiBjLnRvSFRNTEFzeW5jKDApKSlcbiAgICAgIC50aGVuKChjaGlsZEhUTUwpID0+IHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMub3BlblRhZygpfSR7Y2hpbGRIVE1MLmpvaW4oJycpfSR7dGhpcy5jbG9zZVRhZygpfWA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcGxhaW5UZXh0QXN5bmMoKSB7XG4gICAgaWYgKHRoaXMuaXNMZWFmKCkpIHtcbiAgICAgIGlmICh0aGlzLnByb21pc2VQbGFpbkNvbnRlbnRzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb21pc2VQbGFpbkNvbnRlbnRzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMucGxhaW5UZXh0KCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5jaGlsZHJlbi5tYXAoKGMpID0+IGMucGxhaW5UZXh0QXN5bmMoKSkpLnRoZW4oKGMpID0+IGMuam9pbignJykpO1xuICAgIH1cbiAgfVxuXG4gIHBsYWluVGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5tYXAoKGMpID0+IGMucGxhaW5UZXh0KCkpLmpvaW4oJycpO1xuICB9XG5cbiAgdG9IVE1MKGluZGVudExldmVsID0gMCkge1xuICAgIGlmICh0aGlzLmlzTGVhZigpKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5vcGVuVGFnKCl9JHt0aGlzLmNvbnRlbnRzfSR7dGhpcy5jbG9zZVRhZygpfWA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5vcGVuVGFnKCl9JHt0aGlzLmNoaWxkcmVuLm1hcCgoYykgPT4gYy50b0hUTUwoMCkpLmpvaW4oJycpfSR7dGhpcy5jbG9zZVRhZygpfWA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIH1cbiAgfVxuXG4gIGlzTGVhZigpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhcHBlbmRDaGlsZChjaGlsZCkge1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gIH1cblxuICBhYnNvcmIoY2hpbGQpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBsZXZlbDogdGhpcy5sZXZlbCxcbiAgICAgIGNoaWxkcmVuOiB0aGlzLmNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlczogdGhpcy5hdHRyaWJ1dGVzLFxuICAgICAgY29udGVudHM6IHRoaXMuY29udGVudHMsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBidWlsZCh0b2tlbikge1xuICAgIGNvbnN0IGZvcm1hdExpc3QgPSBSZWdpc3RyeS5saXN0Rm9ybWF0cygpXG4gICAgLmZpbHRlcigoZm9ybWF0KSA9PiBmb3JtYXQubWF0Y2hlcyh0b2tlbikpXG4gICAgLm1hcCgoTikgPT4gbmV3IE4odG9rZW4pKTtcbiAgICBpZiAoZm9ybWF0TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGB0b2tlbiAke0pTT04uc3RyaW5naWZ5KHRva2VuKX0gaGFzIG5vIG1hdGNoaW5nIGZvcm1hdHNgKTtcbiAgICAgIHJldHVybiBuZXcgVHJlZU5vZGUoKTtcbiAgICB9XG4gICAgY29uc3QgcmV0VmFsID0gZm9ybWF0TGlzdC5zaGlmdCgpO1xuICAgIGZvcm1hdExpc3QucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICBwcmV2LmNoaWxkcmVuID0gW2N1cnJdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICByZXR1cm4gY3VycjtcbiAgICB9LCByZXRWYWwpO1xuICAgIHJldHVybiByZXRWYWw7XG4gIH1cblxuICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IucHJpb3JpdHk7XG4gIH1cblxuICBzdGF0aWMgbWF0Y2hlcygpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuVHJlZU5vZGUucHJpb3JpdHkgPSAtMjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
