'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('../index');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TreeNode = function () {
  function TreeNode() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

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

      var indentLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

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
      var indentLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vdHJlZU5vZGUuanMiXSwibmFtZXMiOlsiVHJlZU5vZGUiLCJvcHRzIiwiY2hpbGRyZW4iLCJhdHRyaWJ1dGVzIiwidHlwZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiY29uY2F0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJjb250ZW50cyIsImluZGVudExldmVsIiwiaXNMZWFmIiwicHJvbWlzZUNvbnRlbnRzIiwidGhlbiIsIm9wZW5UYWciLCJjbG9zZVRhZyIsImFsbCIsIm1hcCIsImMiLCJ0b0hUTUxBc3luYyIsImNoaWxkSFRNTCIsImpvaW4iLCJwcm9taXNlUGxhaW5Db250ZW50cyIsInBsYWluVGV4dCIsInBsYWluVGV4dEFzeW5jIiwidG9IVE1MIiwiY2hpbGQiLCJwdXNoIiwibGV2ZWwiLCJwcmlvcml0eSIsInRva2VuIiwiZm9ybWF0TGlzdCIsImxpc3RGb3JtYXRzIiwiZmlsdGVyIiwiZm9ybWF0IiwibWF0Y2hlcyIsIk4iLCJsZW5ndGgiLCJyZXRWYWwiLCJzaGlmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztJQUNxQkEsUTtBQUNuQixzQkFBdUI7QUFBQSxRQUFYQyxJQUFXLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3JCLFNBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCRixLQUFLRSxVQUFMLElBQW1CLEVBQXJDO0FBQ0E7QUFDQSxTQUFLQyxJQUFMLEdBQVksS0FBS0MsV0FBTCxDQUFpQkMsSUFBN0I7QUFDRDs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0osUUFBTCxDQUFjSyxNQUFkLENBQXFCLFVBQUNDLElBQUQsRUFBT0MsSUFBUDtBQUFBLGVBQWdCRCxLQUFLRSxNQUFMLENBQVlELElBQVosQ0FBaEI7QUFBQSxPQUFyQixFQUF3RCxDQUFDLElBQUQsQ0FBeEQsQ0FBUDtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEVBQVA7QUFDRDs7OytCQUVVO0FB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LE9BQVA7QUFPRDs7O3dCQWtCYztBQUNiLGFBQU8sS0FBS1IsV0FBTCxDQUFpQjRCLFFBQXhCO0FBQ0Q7OzswQkFsQllDLEssRUFBTztBQUNsQixVQUFNQyxhQUFhLGdCQUFTQyxXQUFULEdBQ2xCQyxNQURrQixDQUNYLFVBQUNDLE1BQUQ7QUFBQSxlQUFZQSxPQUFPQyxPQUFQLENBQWVMLEtBQWYsQ0FBWjtBQUFBLE9BRFcsRUFFbEJiLEdBRmtCLENBRWQsVUFBQ21CLENBQUQ7QUFBQSxlQUFPLElBQUlBLENBQUosQ0FBTU4sS0FBTixDQUFQO0FBQUEsT0FGYyxDQUFuQjtBQUdBLFVBQUlDLFdBQVdNLE1BQVgsS0FBc0IsQ0FBMUIsRUFBNkI7QUFDM0I7QUFDQSxlQUFPLElBQUl6QyxRQUFKLEVBQVA7QUFDRDtBQUNELFVBQU0wQyxTQUFTUCxXQUFXUSxLQUFYLEVBQWY7QUFDQVIsaUJBQVc1QixNQUFYLENBQWtCLFVBQUNDLElBQUQsRUFBT0MsSUFBUCxFQUFnQjtBQUNoQ0QsYUFBS04sUUFBTCxHQUFnQixDQUFDTyxJQUFELENBQWhCLENBRGdDLENBQ1I7QUFDeEIsZUFBT0EsSUFBUDtBQUNELE9BSEQsRUFHR2lDLE1BSEg7QUFJQSxhQUFPQSxNQUFQO0FBQ0Q7Ozs4QkFNZ0I7QUFDZixhQUFPLEtBQVA7QUFDRDs7Ozs7O2tCQTNHa0IxQyxROzs7QUE4R3JCQSxTQUFTaUMsUUFBVCxHQUFvQixDQUFDLENBQXJCIiwiZmlsZSI6Im1pbmlET00vdHJlZU5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWdpc3RyeSB9IGZyb20gJy4uL2luZGV4JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWVOb2RlIHtcbiAgY29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuYXR0cmlidXRlcyA9IG9wdHMuYXR0cmlidXRlcyB8fCB7fTtcbiAgICAvLyB0aGlzLmNvbnRlbnRzID0gb3B0cy5jb250ZW50cztcbiAgICB0aGlzLnR5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBkZnNUcmF2ZXJzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYuY29uY2F0KGN1cnIpLCBbdGhpc10pO1xuICB9XG5cbiAgb3BlblRhZygpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBjbG9zZVRhZygpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBwcm9taXNlQ29udGVudHMoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmNvbnRlbnRzIHx8ICcnKTtcbiAgfVxuXG4gIHRvSFRNTEFzeW5jKGluZGVudExldmVsID0gMCkge1xuICAgIGlmICh0aGlzLmlzTGVhZigpKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9taXNlQ29udGVudHMoKVxuICAgICAgLnRoZW4oKGNvbnRlbnRzKSA9PiB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLm9wZW5UYWcoKX0ke2NvbnRlbnRzfSR7dGhpcy5jbG9zZVRhZygpfWA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbCh0aGlzLmNoaWxkcmVuLm1hcCgoYykgPT4gYy50b0hUTUxBc3luYygwKSkpXG4gICAgICAudGhlbigoY2hpbGRIVE1MKSA9PiB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLm9wZW5UYWcoKX0ke2NoaWxkSFRNTC5qb2luKCcnKX0ke3RoaXMuY2xvc2VUYWcoKX1gOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHBsYWluVGV4dEFzeW5jKCkge1xuICAgIGlmICh0aGlzLmlzTGVhZigpKSB7XG4gICAgICBpZiAodGhpcy5wcm9taXNlUGxhaW5Db250ZW50cykge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlUGxhaW5Db250ZW50cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnBsYWluVGV4dCgpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHRoaXMuY2hpbGRyZW4ubWFwKChjKSA9PiBjLnBsYWluVGV4dEFzeW5jKCkpKS50aGVuKChjKSA9PiBjLmpvaW4oJycpKTtcbiAgICB9XG4gIH1cblxuICBwbGFpblRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubWFwKChjKSA9PiBjLnBsYWluVGV4dCgpKS5qb2luKCcnKTtcbiAgfVxuXG4gIHRvSFRNTChpbmRlbnRMZXZlbCA9IDApIHtcbiAgICBpZiAodGhpcy5pc0xlYWYoKSkge1xuICAgICAgcmV0dXJuIGAke3RoaXMub3BlblRhZygpfSR7dGhpcy5jb250ZW50c30ke3RoaXMuY2xvc2VUYWcoKX1gOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGAke3RoaXMub3BlblRhZygpfSR7dGhpcy5jaGlsZHJlbi5tYXAoKGMpID0+IGMudG9IVE1MKDApKS5qb2luKCcnKX0ke3RoaXMuY2xvc2VUYWcoKX1gOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICB9XG4gIH1cblxuICBpc0xlYWYoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYXBwZW5kQ2hpbGQoY2hpbGQpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICB9XG5cbiAgYWJzb3JiKGNoaWxkKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgbGV2ZWw6IHRoaXMubGV2ZWwsXG4gICAgICBjaGlsZHJlbjogdGhpcy5jaGlsZHJlbixcbiAgICAgIGF0dHJpYnV0ZXM6IHRoaXMuYXR0cmlidXRlcyxcbiAgICAgIGNvbnRlbnRzOiB0aGlzLmNvbnRlbnRzLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgYnVpbGQodG9rZW4pIHtcbiAgICBjb25zdCBmb3JtYXRMaXN0ID0gUmVnaXN0cnkubGlzdEZvcm1hdHMoKVxuICAgIC5maWx0ZXIoKGZvcm1hdCkgPT4gZm9ybWF0Lm1hdGNoZXModG9rZW4pKVxuICAgIC5tYXAoKE4pID0+IG5ldyBOKHRva2VuKSk7XG4gICAgaWYgKGZvcm1hdExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgdG9rZW4gJHtKU09OLnN0cmluZ2lmeSh0b2tlbil9IGhhcyBubyBtYXRjaGluZyBmb3JtYXRzYCk7XG4gICAgICByZXR1cm4gbmV3IFRyZWVOb2RlKCk7XG4gICAgfVxuICAgIGNvbnN0IHJldFZhbCA9IGZvcm1hdExpc3Quc2hpZnQoKTtcbiAgICBmb3JtYXRMaXN0LnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgcHJldi5jaGlsZHJlbiA9IFtjdXJyXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgcmV0dXJuIGN1cnI7XG4gICAgfSwgcmV0VmFsKTtcbiAgICByZXR1cm4gcmV0VmFsO1xuICB9XG5cbiAgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnByaW9yaXR5O1xuICB9XG5cbiAgc3RhdGljIG1hdGNoZXMoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cblRyZWVOb2RlLnByaW9yaXR5ID0gLTI7XG4iXX0=
