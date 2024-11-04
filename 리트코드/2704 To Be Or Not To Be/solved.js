/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  const value = val;
  return {
    toBe(comVal) {
      if (value !== comVal) {
        throw new Error("Not Equal");
      }
      return true;
    },

    notToBe(comVal) {
      if (value === comVal) {
        throw new Error("Equal");
      }
      return true;
    },
  };
};
