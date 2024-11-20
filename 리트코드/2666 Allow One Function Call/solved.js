/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let flag = false;
  return function (...args) {
    if (flag) {
      return;
    }
    flag = true;
    return fn(...args);
  };
};
