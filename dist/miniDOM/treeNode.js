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
//# sourceMappingURL=data:application/json;base64,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RGdDO0FBRWhDLGVBQU8sSUFBUCxDQUZnQztPQUFoQixFQUdmLE1BSEgsRUFSa0I7QUFZbEIsYUFBTyxNQUFQLENBWmtCOzs7OzhCQW1CSDtBQUNmLGFBQU8sS0FBUCxDQURlOzs7O1NBMUVFOzs7Ozs7QUErRXJCLFNBQVMsUUFBVCxHQUFvQixDQUFDLENBQUQiLCJmaWxlIjoibWluaURPTS90cmVlTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlZ2lzdHJ5IGZyb20gJy4uL3JlZ2lzdHJ5JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWVOb2RlIHtcbiAgY29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuYXR0cmlidXRlcyA9IG9wdHMuYXR0cmlidXRlcyB8fCB7fTtcbiAgICAvLyB0aGlzLmNvbnRlbnRzID0gb3B0cy5jb250ZW50cztcbiAgICB0aGlzLnR5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBkZnNUcmF2ZXJzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYuY29uY2F0KGN1cnIpLCBbdGhpc10pO1xuICB9XG5cbiAgb3BlblRhZygpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBjbG9zZVRhZygpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBwbGFpblRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubWFwKChjKSA9PiBjLnBsYWluVGV4dCgpKS5qb2luKCcnKTtcbiAgfVxuXG4gIHRvSFRNTChpbmRlbnRMZXZlbCA9IDApIHtcbiAgICBpZiAodGhpcy5pc0xlYWYoKSkge1xuICAgICAgcmV0dXJuIGAke25ldyBBcnJheShpbmRlbnRMZXZlbCArIDEpLmpvaW4oJyAnKX0ke3RoaXMub3BlblRhZygpfSR7dGhpcy5jb250ZW50c30ke3RoaXMuY2xvc2VUYWcoKX1gOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGAke25ldyBBcnJheShpbmRlbnRMZXZlbCArIDEpLmpvaW4oJyAnKX0ke3RoaXMub3BlblRhZygpfVxcbiR7dGhpcy5jaGlsZHJlbi5tYXAoKGMpID0+IGMudG9IVE1MKGluZGVudExldmVsICsgMikpLmpvaW4oJ1xcbicpfVxcbiR7bmV3IEFycmF5KGluZGVudExldmVsICsgMSkuam9pbignICcpfSR7dGhpcy5jbG9zZVRhZygpfWA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIH1cbiAgfVxuXG4gIGlzTGVhZigpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhcHBlbmRDaGlsZChjaGlsZCkge1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gIH1cblxuICBhYnNvcmIoY2hpbGQpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBsZXZlbDogdGhpcy5sZXZlbCxcbiAgICAgIGNoaWxkcmVuOiB0aGlzLmNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlczogdGhpcy5hdHRyaWJ1dGVzLFxuICAgICAgY29udGVudHM6IHRoaXMuY29udGVudHMsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBidWlsZCh0b2tlbikge1xuICAgIGNvbnN0IGZvcm1hdExpc3QgPSBSZWdpc3RyeS5saXN0Rm9ybWF0cygpXG4gICAgLmZpbHRlcigoZm9ybWF0KSA9PiBmb3JtYXQubWF0Y2hlcyh0b2tlbikpXG4gICAgLm1hcCgoTikgPT4gbmV3IE4odG9rZW4pKTtcbiAgICBpZiAoZm9ybWF0TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndG9rZW4gaGFzIG5vIG1hdGNoaW5nIGZvcm1hdHMnKTtcbiAgICB9XG4gICAgY29uc3QgcmV0VmFsID0gZm9ybWF0TGlzdC5zaGlmdCgpO1xuICAgIGZvcm1hdExpc3QucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICBwcmV2LmNoaWxkcmVuID0gW2N1cnJdO1xuICAgICAgcmV0dXJuIGN1cnI7XG4gICAgfSwgcmV0VmFsKTtcbiAgICByZXR1cm4gcmV0VmFsO1xuICB9XG5cbiAgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnByaW9yaXR5O1xuICB9XG5cbiAgc3RhdGljIG1hdGNoZXMoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cblRyZWVOb2RlLnByaW9yaXR5ID0gLTI7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
