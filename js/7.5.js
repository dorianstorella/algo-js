/* for (j = 0; j < arr.length; j++) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
} */

const arr = [7, 3, 5, 1, 8];

function sortArray(arr) {
    for (j = 0; j < arr.length; j++) {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr
}

sortArray(arr);
console.log(arr);