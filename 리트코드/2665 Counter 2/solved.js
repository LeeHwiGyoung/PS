/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let counter = init;
  return {
    increment() {
      return ++counter;
    },
    decrement() {
      return --counter;
    },
    reset() {
      return (counter = init);
    },
  };
};
