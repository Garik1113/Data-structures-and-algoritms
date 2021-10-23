const quickSort = (array: number[]): number[] => {
    if (array.length < 2) {
        return array;
    }
    const pivot = array[0];
    const lesserArray = [];
    const greaterArray = [];

    for (let index = 1; index < array.length; index++) {
        const num = array[index];
        if (num < pivot) {
            lesserArray.push(num);
        } else {
            greaterArray.push(num);
        }
    };

    return quickSort(lesserArray).concat(pivot, quickSort(greaterArray));
}
export default quickSort;