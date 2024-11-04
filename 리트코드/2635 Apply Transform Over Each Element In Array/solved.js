var map = function (arr, fn) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[newArr.length] = fn(arr[i], i);
  }
  return newArr;
};
