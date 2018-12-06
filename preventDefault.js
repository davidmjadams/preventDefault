function preventDefault(fn) {
  var args = Array.from(arguments).slice(1, arguments.length);

  return function (ev) {
    ev.preventDefault();
    return fn.apply(fn, args);
  }
}

module.exports = preventDefault;
