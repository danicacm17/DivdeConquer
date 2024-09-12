function findRotationCount(arr) {
    if (arr.length === 0) {
        return -1; //Return -1 if the array is empty
    }
  
    let minIndex = 0; //assum the minimum element is at index 0 initially

    //loop through the array to find the index of the smallest element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }

    return minIndex;
}

module.exports = findRotationCount