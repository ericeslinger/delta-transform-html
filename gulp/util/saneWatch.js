'use strict';
const sane = require('sane');

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
}



module.exports = function (opts) {
  return function() {
    var watcher = sane(opts.path, {glob: opts.glob, watchman: false});
    var reload = debounce(function () {
      console.log('Rebuilding ' + opts.label);
      opts.rebuild();
    }, 200);
    watcher.on('ready', function () {console.log(opts.label + ' Ready');});
    watcher.on('change', function() {reload();});
    watcher.on('add', function() {reload();});
    watcher.on('delete', function() {reload();});
  };
};
