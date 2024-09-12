function findRotatedIndex(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
    return -1; // Return -1 if the number is now found
 
}

module.exports = findRotatedIndex