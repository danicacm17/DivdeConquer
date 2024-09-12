function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;
    let firstZeroIndex = arr.length; // Default to length of array if no zero is found

    // Binary search to find the first occurrence of 0
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === 0) {
            // Move to the left to find the first zero
            firstZeroIndex = mid;
            right = mid - 1;
        } else {
            // Move to the right because we are in the 1s region
            left = mid + 1;
        }
    }

    // Calculate the number of zeroes
    return (firstZeroIndex === arr.length) ? 0 : arr.length - firstZeroIndex;
}

module.exports = countZeroes;
