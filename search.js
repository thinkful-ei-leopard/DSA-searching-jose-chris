//Drill 1

function binarySearch(array, value, start, end) {
     start = start === undefined ? 0 : start;
     end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};

// part 1
// finds middle value (12) and halves arr
// seq of nums: [3,5,6,8,11]
// next seq: [8, 11]
// returns an index of 3

// console.log(binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 8))

//part 2
console.log(binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 16))

// finds middle value (12)
// checks if 16 is greater than or less than 12
// ignores values equal to or less than 12 [14,15,17,18]
// next seq [14, 15]
// [15], value not found return -1
