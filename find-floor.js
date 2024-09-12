function findFloor(arr, x) {
  if (arr.length === 0) {
    return -1; //return -1 if the array is empty
  }

  let floor = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= x) {
        floor = arr[i];
    }
  }

  return floor;
}

module.exports = findFloor