const arr = [1, 2, 3, 4];
const arr2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const arr3 = 
[
    [
        [1, 2, 3], [4, 5, 6], [7, 8, 9]
    ],
    [
        [10, 11, 12], [13, 14, 15], [16, 17, 18]
    ],
    [
        [19, 20, 21], [22, 23, 24], [25, 26, 27]
    ],
];

/**
 * Найти размерность массива
 * @param { any[] } arr - массив
 * @returns { number } Размерность массива
 */
function getDimension(arr) {
    if (Array.isArray(arr)) {
      return 1 + getDimension(arr[0]);
    }
    return 0;
}

function everyNeighborsSum(arr) {
    const checkNum = (e) => e ? e : 0;
    const dimension = getDimension(arr);
    const newArr = [];
    switch (dimension) {
        case 1:
            for (let i = 0; i < arr.length; i++) {
                newArr.push(checkNum(arr[i - 1]) + checkNum(arr[i + 1]));
            }
            break;
        case 2:
            for (let i = 0; i < arr.length; i++) {
                const internalArr = [];
                for (let j = 0; j < arr[i].length; j++) {
                    internalArr.push(
                        checkNum(checkNum(arr[i - 1])[j]) + checkNum(checkNum(arr[i + 1])[j])
                        + checkNum(checkNum(arr[i])[j - 1]) + checkNum(checkNum(arr[i])[j + 1])
                    );
                }
                newArr.push(internalArr);
            }
            break;
        case 3:
            for (let i = 0; i < arr.length; i++) {
                const internalArr = [];
                for (let j = 0; j < arr[i].length; j++) {
                    const internalArr2 = [];
                    for (let k = 0; k < arr[i][j].length; k++) {
                        internalArr2.push(
                            checkNum(checkNum(checkNum(arr[i - 1])[j])[k]) + checkNum(checkNum(checkNum(arr[i + 1])[j])[k])
                            + checkNum(checkNum(checkNum(arr[i])[j - 1])[k]) + checkNum(checkNum(checkNum(arr[i])[j + 1])[k])
                            + checkNum(checkNum(checkNum(arr[i])[j])[k - 1]) + checkNum(checkNum(checkNum(arr[i])[j])[k + 1])
                        );
                    }
                    internalArr.push(internalArr2);
                }
                newArr.push(internalArr);
            }
            break;
    }
    return newArr;
}

console.log(everyNeighborsSum(arr));
console.log(everyNeighborsSum(arr2));
console.log(everyNeighborsSum(arr3));
