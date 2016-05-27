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
//# sourceMappingURL=data:application/json;base64,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ICogYXMgUmVnaXN0cnkgZnJvbSAnLi4vcmVnaXN0cnknO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZU5vZGUge1xuICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy5hdHRyaWJ1dGVzID0gb3B0cy5hdHRyaWJ1dGVzIHx8IHt9O1xuICAgIC8vIHRoaXMuY29udGVudHMgPSBvcHRzLmNvbnRlbnRzO1xuICAgIHRoaXMudHlwZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIGRmc1RyYXZlcnNlKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldi5jb25jYXQoY3VyciksIFt0aGlzXSk7XG4gIH1cblxuICBvcGVuVGFnKCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGNsb3NlVGFnKCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHByb21pc2VDb250ZW50cygpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuY29udGVudHMgfHwgJycpO1xuICB9XG5cbiAgdG9IVE1MQXN5bmMoaW5kZW50TGV2ZWwgPSAwKSB7XG4gICAgaWYgKHRoaXMuaXNMZWFmKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb21pc2VDb250ZW50cygpXG4gICAgICAudGhlbigoY29udGVudHMpID0+IHtcbiAgICAgICAgcmV0dXJuIGAke25ldyBBcnJheShpbmRlbnRMZXZlbCArIDEpLmpvaW4oJyAnKX0ke3RoaXMub3BlblRhZygpfSR7Y29udGVudHN9JHt0aGlzLmNsb3NlVGFnKCl9YDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHRoaXMuY2hpbGRyZW4ubWFwKChjKSA9PiBjLnRvSFRNTEFzeW5jKGluZGVudExldmVsICsgMikpKVxuICAgICAgLnRoZW4oKGNoaWxkSFRNTCkgPT4ge1xuICAgICAgICByZXR1cm4gYCR7bmV3IEFycmF5KGluZGVudExldmVsICsgMSkuam9pbignICcpfSR7dGhpcy5vcGVuVGFnKCl9XFxuJHtjaGlsZEhUTUwuam9pbignXFxuJyl9XFxuJHtuZXcgQXJyYXkoaW5kZW50TGV2ZWwgKyAxKS5qb2luKCcgJyl9JHt0aGlzLmNsb3NlVGFnKCl9YDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwbGFpblRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubWFwKChjKSA9PiBjLnBsYWluVGV4dCgpKS5qb2luKCcnKTtcbiAgfVxuXG4gIHRvSFRNTChpbmRlbnRMZXZlbCA9IDApIHtcbiAgICBpZiAodGhpcy5pc0xlYWYoKSkge1xuICAgICAgcmV0dXJuIGAke25ldyBBcnJheShpbmRlbnRMZXZlbCArIDEpLmpvaW4oJyAnKX0ke3RoaXMub3BlblRhZygpfSR7dGhpcy5jb250ZW50c30ke3RoaXMuY2xvc2VUYWcoKX1gOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGAke25ldyBBcnJheShpbmRlbnRMZXZlbCArIDEpLmpvaW4oJyAnKX0ke3RoaXMub3BlblRhZygpfVxcbiR7dGhpcy5jaGlsZHJlbi5tYXAoKGMpID0+IGMudG9IVE1MKGluZGVudExldmVsICsgMikpLmpvaW4oJ1xcbicpfVxcbiR7bmV3IEFycmF5KGluZGVudExldmVsICsgMSkuam9pbignICcpfSR7dGhpcy5jbG9zZVRhZygpfWA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIH1cbiAgfVxuXG4gIGlzTGVhZigpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhcHBlbmRDaGlsZChjaGlsZCkge1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gIH1cblxuICBhYnNvcmIoY2hpbGQpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBsZXZlbDogdGhpcy5sZXZlbCxcbiAgICAgIGNoaWxkcmVuOiB0aGlzLmNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlczogdGhpcy5hdHRyaWJ1dGVzLFxuICAgICAgY29udGVudHM6IHRoaXMuY29udGVudHMsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBidWlsZCh0b2tlbikge1xuICAgIGNvbnN0IGZvcm1hdExpc3QgPSBSZWdpc3RyeS5saXN0Rm9ybWF0cygpXG4gICAgLmZpbHRlcigoZm9ybWF0KSA9PiBmb3JtYXQubWF0Y2hlcyh0b2tlbikpXG4gICAgLm1hcCgoTikgPT4gbmV3IE4odG9rZW4pKTtcbiAgICBpZiAoZm9ybWF0TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdG9rZW4gJHtKU09OLnN0cmluZ2lmeSh0b2tlbil9IGhhcyBubyBtYXRjaGluZyBmb3JtYXRzYCk7XG4gICAgfVxuICAgIGNvbnN0IHJldFZhbCA9IGZvcm1hdExpc3Quc2hpZnQoKTtcbiAgICBmb3JtYXRMaXN0LnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgcHJldi5jaGlsZHJlbiA9IFtjdXJyXTtcbiAgICAgIHJldHVybiBjdXJyO1xuICAgIH0sIHJldFZhbCk7XG4gICAgcmV0dXJuIHJldFZhbDtcbiAgfVxuXG4gIGdldCBwcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5wcmlvcml0eTtcbiAgfVxuXG4gIHN0YXRpYyBtYXRjaGVzKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5UcmVlTm9kZS5wcmlvcml0eSA9IC0yO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
