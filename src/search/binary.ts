const binarySearch = (array: number[], number: number): number | null => {
    if (array.length <=1) {
        if (array[0] === number) {
            return number;
        } else {
            return null;
        }
    }

    const middle = Math.floor(array.length / 2);
    if (array[middle] > number) {
        return binarySearch(array.slice(0, middle), number)
    } else {
        return binarySearch(array.slice(middle), number)
    }
}

export default binarySearch;