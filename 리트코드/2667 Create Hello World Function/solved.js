/**
 * @return {Function}
 */
var createHelloWorld = function () {
  const str = "Hello World";
  return function (...args) {
    return str;
  };
};

const f = createHelloWorld();
f(); // "Hello World"
