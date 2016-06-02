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
//# sourceMappingURL=data:application/json;base64,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QSxlQUFPLElBQUksQ0FBSixDQUFNLEtBQU4sQ0FBUDtBQUFBLE9BRmMsQ0FBbkI7QUFHQSxVQUFJLFdBQVcsTUFBWCxLQUFzQixDQUExQixFQUE2QjtBQUMzQixjQUFNLElBQUksS0FBSixZQUFtQixLQUFLLFNBQUwsQ0FBZSxLQUFmLENBQW5CLDhCQUFOO0FBQ0Q7QUFDRCxVQUFNLFNBQVMsV0FBVyxLQUFYLEVBQWY7QUFDQSxpQkFBVyxNQUFYLENBQWtCLFVBQUMsSUFBRCxFQUFPLElBQVAsRUFBZ0I7QUFDaEMsYUFBSyxRQUFMLEdBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNBLGVBQU8sSUFBUDtBQUNELE9BSEQsRUFHRyxNQUhIO0FBSUEsYUFBTyxNQUFQO0FBQ0Q7Ozs4QkFNZ0I7QUFDZixhQUFPLEtBQVA7QUFDRDs7Ozs7O2tCQTFHa0IsUTs7O0FBNkdyQixTQUFTLFFBQVQsR0FBb0IsQ0FBQyxDQUFyQiIsImZpbGUiOiJtaW5pRE9NL3RyZWVOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVnaXN0cnkgZnJvbSAnLi4vcmVnaXN0cnknO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZU5vZGUge1xuICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy5hdHRyaWJ1dGVzID0gb3B0cy5hdHRyaWJ1dGVzIHx8IHt9O1xuICAgIC8vIHRoaXMuY29udGVudHMgPSBvcHRzLmNvbnRlbnRzO1xuICAgIHRoaXMudHlwZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIGRmc1RyYXZlcnNlKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldi5jb25jYXQoY3VyciksIFt0aGlzXSk7XG4gIH1cblxuICBvcGVuVGFnKCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGNsb3NlVGFnKCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHByb21pc2VDb250ZW50cygpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuY29udGVudHMgfHwgJycpO1xuICB9XG5cbiAgdG9IVE1MQXN5bmMoaW5kZW50TGV2ZWwgPSAwKSB7XG4gICAgaWYgKHRoaXMuaXNMZWFmKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb21pc2VDb250ZW50cygpXG4gICAgICAudGhlbigoY29udGVudHMpID0+IHtcbiAgICAgICAgcmV0dXJuIGAke25ldyBBcnJheShpbmRlbnRMZXZlbCArIDEpLmpvaW4oJyAnKX0ke3RoaXMub3BlblRhZygpfSR7Y29udGVudHN9JHt0aGlzLmNsb3NlVGFnKCl9YDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHRoaXMuY2hpbGRyZW4ubWFwKChjKSA9PiBjLnRvSFRNTEFzeW5jKGluZGVudExldmVsICsgMikpKVxuICAgICAgLnRoZW4oKGNoaWxkSFRNTCkgPT4ge1xuICAgICAgICByZXR1cm4gYCR7bmV3IEFycmF5KGluZGVudExldmVsICsgMSkuam9pbignICcpfSR7dGhpcy5vcGVuVGFnKCl9XFxuJHtjaGlsZEhUTUwuam9pbignXFxuJyl9XFxuJHtuZXcgQXJyYXkoaW5kZW50TGV2ZWwgKyAxKS5qb2luKCcgJyl9JHt0aGlzLmNsb3NlVGFnKCl9YDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwbGFpblRleHRBc3luYygpIHtcbiAgICBpZiAodGhpcy5pc0xlYWYoKSkge1xuICAgICAgaWYgKHRoaXMucHJvbWlzZVBsYWluQ29udGVudHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZVBsYWluQ29udGVudHMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5wbGFpblRleHQoKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbCh0aGlzLmNoaWxkcmVuLm1hcCgoYykgPT4gYy5wbGFpblRleHRBc3luYygpKSkudGhlbigoYykgPT4gYy5qb2luKCcnKSk7XG4gICAgfVxuICB9XG5cbiAgcGxhaW5UZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLm1hcCgoYykgPT4gYy5wbGFpblRleHQoKSkuam9pbignJyk7XG4gIH1cblxuICB0b0hUTUwoaW5kZW50TGV2ZWwgPSAwKSB7XG4gICAgaWYgKHRoaXMuaXNMZWFmKCkpIHtcbiAgICAgIHJldHVybiBgJHtuZXcgQXJyYXkoaW5kZW50TGV2ZWwgKyAxKS5qb2luKCcgJyl9JHt0aGlzLm9wZW5UYWcoKX0ke3RoaXMuY29udGVudHN9JHt0aGlzLmNsb3NlVGFnKCl9YDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgJHtuZXcgQXJyYXkoaW5kZW50TGV2ZWwgKyAxKS5qb2luKCcgJyl9JHt0aGlzLm9wZW5UYWcoKX1cXG4ke3RoaXMuY2hpbGRyZW4ubWFwKChjKSA9PiBjLnRvSFRNTChpbmRlbnRMZXZlbCArIDIpKS5qb2luKCdcXG4nKX1cXG4ke25ldyBBcnJheShpbmRlbnRMZXZlbCArIDEpLmpvaW4oJyAnKX0ke3RoaXMuY2xvc2VUYWcoKX1gOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICB9XG4gIH1cblxuICBpc0xlYWYoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYXBwZW5kQ2hpbGQoY2hpbGQpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICB9XG5cbiAgYWJzb3JiKGNoaWxkKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgbGV2ZWw6IHRoaXMubGV2ZWwsXG4gICAgICBjaGlsZHJlbjogdGhpcy5jaGlsZHJlbixcbiAgICAgIGF0dHJpYnV0ZXM6IHRoaXMuYXR0cmlidXRlcyxcbiAgICAgIGNvbnRlbnRzOiB0aGlzLmNvbnRlbnRzLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgYnVpbGQodG9rZW4pIHtcbiAgICBjb25zdCBmb3JtYXRMaXN0ID0gUmVnaXN0cnkubGlzdEZvcm1hdHMoKVxuICAgIC5maWx0ZXIoKGZvcm1hdCkgPT4gZm9ybWF0Lm1hdGNoZXModG9rZW4pKVxuICAgIC5tYXAoKE4pID0+IG5ldyBOKHRva2VuKSk7XG4gICAgaWYgKGZvcm1hdExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHRva2VuICR7SlNPTi5zdHJpbmdpZnkodG9rZW4pfSBoYXMgbm8gbWF0Y2hpbmcgZm9ybWF0c2ApO1xuICAgIH1cbiAgICBjb25zdCByZXRWYWwgPSBmb3JtYXRMaXN0LnNoaWZ0KCk7XG4gICAgZm9ybWF0TGlzdC5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgIHByZXYuY2hpbGRyZW4gPSBbY3Vycl07XG4gICAgICByZXR1cm4gY3VycjtcbiAgICB9LCByZXRWYWwpO1xuICAgIHJldHVybiByZXRWYWw7XG4gIH1cblxuICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IucHJpb3JpdHk7XG4gIH1cblxuICBzdGF0aWMgbWF0Y2hlcygpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuVHJlZU5vZGUucHJpb3JpdHkgPSAtMjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
