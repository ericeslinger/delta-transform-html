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


TreeNode.priority = -2;
//# sourceMappingURL=data:application/json;base64,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QTJFckIsU0FBUyxRQUFULEdBQW9CLENBQUMsQ0FBRCIsImZpbGUiOiJtaW5pRE9NL3RyZWVOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVnaXN0cnkgZnJvbSAnLi4vcmVnaXN0cnknO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZU5vZGUge1xuICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy5hdHRyaWJ1dGVzID0gb3B0cy5hdHRyaWJ1dGVzIHx8IHt9O1xuICAgIC8vIHRoaXMuY29udGVudHMgPSBvcHRzLmNvbnRlbnRzO1xuICAgIHRoaXMudHlwZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIGRmc1RyYXZlcnNlKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldi5jb25jYXQoY3VyciksIFt0aGlzXSk7XG4gIH1cblxuICBvcGVuVGFnKCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGNsb3NlVGFnKCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHRvSFRNTChpbmRlbnRMZXZlbCA9IDApIHtcbiAgICBpZiAodGhpcy5pc0xlYWYoKSkge1xuICAgICAgcmV0dXJuIGAke25ldyBBcnJheShpbmRlbnRMZXZlbCArIDEpLmpvaW4oJyAnKX0ke3RoaXMub3BlblRhZygpfSR7dGhpcy5jb250ZW50c30ke3RoaXMuY2xvc2VUYWcoKX1gOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGAke25ldyBBcnJheShpbmRlbnRMZXZlbCArIDEpLmpvaW4oJyAnKX0ke3RoaXMub3BlblRhZygpfVxcbiR7dGhpcy5jaGlsZHJlbi5tYXAoKGMpID0+IGMudG9IVE1MKGluZGVudExldmVsICsgMikpLmpvaW4oJ1xcbicpfVxcbiR7bmV3IEFycmF5KGluZGVudExldmVsICsgMSkuam9pbignICcpfSR7dGhpcy5jbG9zZVRhZygpfWA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIH1cbiAgfVxuXG4gIGlzTGVhZigpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhcHBlbmRDaGlsZChjaGlsZCkge1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gIH1cblxuICBhYnNvcmIoY2hpbGQpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBsZXZlbDogdGhpcy5sZXZlbCxcbiAgICAgIGNoaWxkcmVuOiB0aGlzLmNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlczogdGhpcy5hdHRyaWJ1dGVzLFxuICAgICAgY29udGVudHM6IHRoaXMuY29udGVudHMsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBidWlsZCh0b2tlbikge1xuICAgIGNvbnN0IGZvcm1hdExpc3QgPSBSZWdpc3RyeS5saXN0Rm9ybWF0cygpXG4gICAgLmZpbHRlcigoZm9ybWF0KSA9PiBmb3JtYXQubWF0Y2hlcyh0b2tlbikpXG4gICAgLm1hcCgoTikgPT4gbmV3IE4odG9rZW4pKTtcbiAgICBpZiAoZm9ybWF0TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndG9rZW4gaGFzIG5vIG1hdGNoaW5nIGZvcm1hdHMnKTtcbiAgICB9XG4gICAgY29uc3QgcmV0VmFsID0gZm9ybWF0TGlzdC5zaGlmdCgpO1xuICAgIGZvcm1hdExpc3QucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICBwcmV2LmNoaWxkcmVuID0gW2N1cnJdO1xuICAgICAgcmV0dXJuIGN1cnI7XG4gICAgfSwgcmV0VmFsKTtcbiAgICByZXR1cm4gcmV0VmFsO1xuICB9XG5cbiAgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnByaW9yaXR5O1xuICB9XG5cbiAgc3RhdGljIG1hdGNoZXMoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cblRyZWVOb2RlLnByaW9yaXR5ID0gLTI7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
