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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlET00vdHJlZU5vZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7SUFBWTs7Ozs7O0lBQ1M7QUFDbkIsV0FEbUIsUUFDbkIsR0FBdUI7UUFBWCw2REFBTyxrQkFBSTs7MEJBREosVUFDSTs7QUFDckIsU0FBSyxRQUFMLEdBQWdCLEVBQWhCLENBRHFCO0FBRXJCLFNBQUssVUFBTCxHQUFrQixLQUFLLFVBQUwsSUFBbUIsRUFBbkI7O0FBRkcsUUFJckIsQ0FBSyxJQUFMLEdBQVksS0FBSyxXQUFMLENBQWlCLElBQWpCLENBSlM7R0FBdkI7O2VBRG1COztrQ0FRTDtBQUNaLGFBQU8sS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixVQUFDLElBQUQsRUFBTyxJQUFQO2VBQWdCLEtBQUssTUFBTCxDQUFZLElBQVo7T0FBaEIsRUFBbUMsQ0FBQyxJQUFELENBQXhELENBQVAsQ0FEWTs7Ozs4QkFJSjtBQUNSLGFBQU8sRUFBUCxDQURROzs7OytCQUlDO0FBQ1QsYUFBTyxFQUFQLENBRFM7Ozs7c0NBSU87QUFDaEIsYUFBTyxRQUFRLE9BQVIsQ0FBZ0IsS0FBSyxRQUFMLElBQWlCLEVBQWpCLENBQXZCLENBRGdCOzs7O2tDQUlXOzs7VUFBakIsb0VBQWMsaUJBQUc7O0FBQzNCLFVBQUksS0FBSyxNQUFMLEVBQUosRUFBbUI7QUFDakIsZUFBTyxLQUFLLGVBQUwsR0FDTixJQURNLENBQ0QsVUFBQyxRQUFELEVBQWM7QUFDbEIsc0JBQVUsSUFBSSxLQUFKLENBQVUsY0FBYyxDQUFkLENBQVYsQ0FBMkIsSUFBM0IsQ0FBZ0MsR0FBaEMsSUFBdUMsTUFBSyxPQUFMLEtBQWlCLFdBQVcsTUFBSyxRQUFMLEVBQTdFO0FBRGtCLFNBQWQsQ0FETixDQURpQjtPQUFuQixNQUtPO0FBQ0wsaUJBQU8sUUFBUSxHQUFSLENBQVksS0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixVQUFDLENBQUQ7bUJBQU8sRUFBRSxXQUFGLENBQWMsY0FBYyxDQUFkO1dBQXJCLENBQTlCLEVBQ04sSUFETSxDQUNELFVBQUMsU0FBRCxFQUFlO0FBQ25CLHdCQUFVLElBQUksS0FBSixDQUFVLGNBQWMsQ0FBZCxDQUFWLENBQTJCLElBQTNCLENBQWdDLEdBQWhDLElBQXVDLE1BQUssT0FBTCxZQUFtQixVQUFVLElBQVYsQ0FBZSxJQUFmLFdBQXlCLElBQUksS0FBSixDQUFVLGNBQWMsQ0FBZCxDQUFWLENBQTJCLElBQTNCLENBQWdDLEdBQWhDLElBQXVDLE1BQUssUUFBTCxFQUFwSTtBQURtQixXQUFmLENBRE4sQ0FESztTQUxQOzs7O3FDQWFlO0FBQ2YsVUFBSSxLQUFLLE1BQUwsRUFBSixFQUFtQjtBQUNqQixZQUFJLEtBQUssb0JBQUwsRUFBMkI7QUFDN0IsaUJBQU8sS0FBSyxvQkFBTCxFQUFQLENBRDZCO1NBQS9CLE1BRU87QUFDTCxpQkFBTyxRQUFRLE9BQVIsQ0FBZ0IsS0FBSyxTQUFMLEVBQWhCLENBQVAsQ0FESztTQUZQO09BREYsTUFNTztBQUNMLGVBQU8sUUFBUSxHQUFSLENBQVksS0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixVQUFDLENBQUQ7aUJBQU8sRUFBRSxjQUFGO1NBQVAsQ0FBOUIsRUFBMEQsSUFBMUQsQ0FBK0QsVUFBQyxDQUFEO2lCQUFPLEVBQUUsSUFBRixDQUFPLEVBQVA7U0FBUCxDQUF0RSxDQURLO09BTlA7Ozs7Z0NBV1U7QUFDVixhQUFPLEtBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsVUFBQyxDQUFEO2VBQU8sRUFBRSxTQUFGO09BQVAsQ0FBbEIsQ0FBd0MsSUFBeEMsQ0FBNkMsRUFBN0MsQ0FBUCxDQURVOzs7OzZCQUlZO1VBQWpCLG9FQUFjLGlCQUFHOztBQUN0QixVQUFJLEtBQUssTUFBTCxFQUFKLEVBQW1CO0FBQ2pCLG9CQUFVLElBQUksS0FBSixDQUFVLGNBQWMsQ0FBZCxDQUFWLENBQTJCLElBQTNCLENBQWdDLEdBQWhDLElBQXVDLEtBQUssT0FBTCxLQUFpQixLQUFLLFFBQUwsR0FBZ0IsS0FBSyxRQUFMLEVBQWxGO0FBRGlCLE9BQW5CLE1BRU87QUFDTCxzQkFBVSxJQUFJLEtBQUosQ0FBVSxjQUFjLENBQWQsQ0FBVixDQUEyQixJQUEzQixDQUFnQyxHQUFoQyxJQUF1QyxLQUFLLE9BQUwsWUFBbUIsS0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixVQUFDLENBQUQ7bUJBQU8sRUFBRSxNQUFGLENBQVMsY0FBYyxDQUFkO1dBQWhCLENBQWxCLENBQW9ELElBQXBELENBQXlELElBQXpELFdBQW1FLElBQUksS0FBSixDQUFVLGNBQWMsQ0FBZCxDQUFWLENBQTJCLElBQTNCLENBQWdDLEdBQWhDLElBQXVDLEtBQUssUUFBTCxFQUE5SztBQURLLFNBRlA7Ozs7NkJBT087QUFDUCxhQUFPLEtBQVAsQ0FETzs7OztnQ0FJRyxPQUFPO0FBQ2pCLFdBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsS0FBbkIsRUFEaUI7Ozs7MkJBSVosT0FBTztBQUNaLFdBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsS0FBbkIsRUFEWTtBQUVaLGFBQU8sSUFBUCxDQUZZOzs7OzZCQUtMO0FBQ1AsYUFBTztBQUNMLGNBQU0sS0FBSyxJQUFMO0FBQ04sZUFBTyxLQUFLLEtBQUw7QUFDUCxrQkFBVSxLQUFLLFFBQUw7QUFDVixvQkFBWSxLQUFLLFVBQUw7QUFDWixrQkFBVSxLQUFLLFFBQUw7T0FMWixDQURPOzs7O3dCQXlCTTtBQUNiLGFBQU8sS0FBSyxXQUFMLENBQWlCLFFBQWpCLENBRE07Ozs7MEJBZkYsT0FBTztBQUNsQixVQUFNLGFBQWEsU0FBUyxXQUFULEdBQ2xCLE1BRGtCLENBQ1gsVUFBQyxNQUFEO2VBQVksT0FBTyxPQUFQLENBQWUsS0FBZjtPQUFaLENBRFcsQ0FFbEIsR0FGa0IsQ0FFZCxVQUFDLENBQUQ7ZUFBTyxJQUFJLENBQUosQ0FBTSxLQUFOO09BQVAsQ0FGQyxDQURZO0FBSWxCLFVBQUksV0FBVyxNQUFYLEtBQXNCLENBQXRCLEVBQXlCO0FBQzNCLGNBQU0sSUFBSSxLQUFKLFlBQW1CLEtBQUssU0FBTCxDQUFlLEtBQWYsOEJBQW5CLENBQU4sQ0FEMkI7T0FBN0I7QUFHQSxVQUFNLFNBQVMsV0FBVyxLQUFYLEVBQVQsQ0FQWTtBQVFsQixpQkFBVyxNQUFYLENBQWtCLFVBQUMsSUFBRCxFQUFPLElBQVAsRUFBZ0I7QUFDaEMsYUFBSyxRQUFMLEdBQWdCLENBQUMsSUFBRCxDQUFoQixDQURnQztBQUVoQyxlQUFPLElBQVAsQ0FGZ0M7T0FBaEIsRUFHZixNQUhILEVBUmtCO0FBWWxCLGFBQU8sTUFBUCxDQVprQjs7Ozs4QkFtQkg7QUFDZixhQUFPLEtBQVAsQ0FEZTs7OztTQXhHRTs7Ozs7O0FBNkdyQixTQUFTLFFBQVQsR0FBb0IsQ0FBQyxDQUFEIiwiZmlsZSI6Im1pbmlET00vdHJlZU5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWdpc3RyeSBmcm9tICcuLi9yZWdpc3RyeSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLmF0dHJpYnV0ZXMgPSBvcHRzLmF0dHJpYnV0ZXMgfHwge307XG4gICAgLy8gdGhpcy5jb250ZW50cyA9IG9wdHMuY29udGVudHM7XG4gICAgdGhpcy50eXBlID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgZGZzVHJhdmVyc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2LmNvbmNhdChjdXJyKSwgW3RoaXNdKTtcbiAgfVxuXG4gIG9wZW5UYWcoKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY2xvc2VUYWcoKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcHJvbWlzZUNvbnRlbnRzKCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5jb250ZW50cyB8fCAnJyk7XG4gIH1cblxuICB0b0hUTUxBc3luYyhpbmRlbnRMZXZlbCA9IDApIHtcbiAgICBpZiAodGhpcy5pc0xlYWYoKSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZUNvbnRlbnRzKClcbiAgICAgIC50aGVuKChjb250ZW50cykgPT4ge1xuICAgICAgICByZXR1cm4gYCR7bmV3IEFycmF5KGluZGVudExldmVsICsgMSkuam9pbignICcpfSR7dGhpcy5vcGVuVGFnKCl9JHtjb250ZW50c30ke3RoaXMuY2xvc2VUYWcoKX1gOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5jaGlsZHJlbi5tYXAoKGMpID0+IGMudG9IVE1MQXN5bmMoaW5kZW50TGV2ZWwgKyAyKSkpXG4gICAgICAudGhlbigoY2hpbGRIVE1MKSA9PiB7XG4gICAgICAgIHJldHVybiBgJHtuZXcgQXJyYXkoaW5kZW50TGV2ZWwgKyAxKS5qb2luKCcgJyl9JHt0aGlzLm9wZW5UYWcoKX1cXG4ke2NoaWxkSFRNTC5qb2luKCdcXG4nKX1cXG4ke25ldyBBcnJheShpbmRlbnRMZXZlbCArIDEpLmpvaW4oJyAnKX0ke3RoaXMuY2xvc2VUYWcoKX1gOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHBsYWluVGV4dEFzeW5jKCkge1xuICAgIGlmICh0aGlzLmlzTGVhZigpKSB7XG4gICAgICBpZiAodGhpcy5wcm9taXNlUGxhaW5Db250ZW50cykge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlUGxhaW5Db250ZW50cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnBsYWluVGV4dCgpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHRoaXMuY2hpbGRyZW4ubWFwKChjKSA9PiBjLnBsYWluVGV4dEFzeW5jKCkpKS50aGVuKChjKSA9PiBjLmpvaW4oJycpKTtcbiAgICB9XG4gIH1cblxuICBwbGFpblRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubWFwKChjKSA9PiBjLnBsYWluVGV4dCgpKS5qb2luKCcnKTtcbiAgfVxuXG4gIHRvSFRNTChpbmRlbnRMZXZlbCA9IDApIHtcbiAgICBpZiAodGhpcy5pc0xlYWYoKSkge1xuICAgICAgcmV0dXJuIGAke25ldyBBcnJheShpbmRlbnRMZXZlbCArIDEpLmpvaW4oJyAnKX0ke3RoaXMub3BlblRhZygpfSR7dGhpcy5jb250ZW50c30ke3RoaXMuY2xvc2VUYWcoKX1gOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGAke25ldyBBcnJheShpbmRlbnRMZXZlbCArIDEpLmpvaW4oJyAnKX0ke3RoaXMub3BlblRhZygpfVxcbiR7dGhpcy5jaGlsZHJlbi5tYXAoKGMpID0+IGMudG9IVE1MKGluZGVudExldmVsICsgMikpLmpvaW4oJ1xcbicpfVxcbiR7bmV3IEFycmF5KGluZGVudExldmVsICsgMSkuam9pbignICcpfSR7dGhpcy5jbG9zZVRhZygpfWA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIH1cbiAgfVxuXG4gIGlzTGVhZigpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhcHBlbmRDaGlsZChjaGlsZCkge1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gIH1cblxuICBhYnNvcmIoY2hpbGQpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBsZXZlbDogdGhpcy5sZXZlbCxcbiAgICAgIGNoaWxkcmVuOiB0aGlzLmNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlczogdGhpcy5hdHRyaWJ1dGVzLFxuICAgICAgY29udGVudHM6IHRoaXMuY29udGVudHMsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBidWlsZCh0b2tlbikge1xuICAgIGNvbnN0IGZvcm1hdExpc3QgPSBSZWdpc3RyeS5saXN0Rm9ybWF0cygpXG4gICAgLmZpbHRlcigoZm9ybWF0KSA9PiBmb3JtYXQubWF0Y2hlcyh0b2tlbikpXG4gICAgLm1hcCgoTikgPT4gbmV3IE4odG9rZW4pKTtcbiAgICBpZiAoZm9ybWF0TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdG9rZW4gJHtKU09OLnN0cmluZ2lmeSh0b2tlbil9IGhhcyBubyBtYXRjaGluZyBmb3JtYXRzYCk7XG4gICAgfVxuICAgIGNvbnN0IHJldFZhbCA9IGZvcm1hdExpc3Quc2hpZnQoKTtcbiAgICBmb3JtYXRMaXN0LnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgcHJldi5jaGlsZHJlbiA9IFtjdXJyXTtcbiAgICAgIHJldHVybiBjdXJyO1xuICAgIH0sIHJldFZhbCk7XG4gICAgcmV0dXJuIHJldFZhbDtcbiAgfVxuXG4gIGdldCBwcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5wcmlvcml0eTtcbiAgfVxuXG4gIHN0YXRpYyBtYXRjaGVzKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5UcmVlTm9kZS5wcmlvcml0eSA9IC0yO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
