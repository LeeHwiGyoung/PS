/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var filter = function (arr, fn) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i], i)) continue;
    newArr[newArr.length] = arr[i];
  }
  return newArr;
};
