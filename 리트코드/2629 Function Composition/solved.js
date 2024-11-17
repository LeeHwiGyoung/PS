/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    return functions.reverse().reduce((acc, fn) => fn(acc), x);
  };
};
