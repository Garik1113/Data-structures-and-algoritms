
const mergeArrays = (leftArr: number[], rightArr: number[]): number[] => {
    const sorted: number[] = [];

    while (leftArr.length && rightArr.length) {
        if (leftArr[0] < rightArr[0]) {
            sorted.push(leftArr.shift() as number);
        } else {
            sorted.push(rightArr.shift() as number);
        }
    }

    return [...sorted, ...leftArr, ...rightArr];
}
const mergeSort = (array: number[]): number[] => {
    if (array.length <= 1) {
        return array;
    };

    const middle = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middle);
    const rightArray = array.slice(middle);

    return mergeArrays(mergeSort(leftArray), mergeSort(rightArray));
};


export default mergeSort;