function sortedFrequency(arr, num) {
    let count = 0;

    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count++;
        }
    }

    // Return the frequency of the number or -1 if the number is not found
    return count > 0 ? count : -1;
}

module.exports = sortedFrequency;
