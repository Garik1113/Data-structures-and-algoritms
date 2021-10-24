const swap = (array: number[], firstIndex: number, secondIndex: number):void => {
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

// const bubbleSort = (array: number[], length: number): number[] => {
//     for (let i = 0; i < length -1; i++) {
//         for (let j = 0; j < length - j - 1; j++) {
//             const leftElement = array[j];
//             const rightElement = array[j+1];
//             if (leftElement > rightElement) {
//                 swap(array, j, j + 1);
//             };
            
//         };
        
//     };
//     return array;
// };

const bubbleSort = (array: number[]): number[] => {
    const length = array.length;
    let checked;
    do {
        checked = false;
        for (let i = 0; i < length; i++) {
            const leftElement = array[i];
            const rightElement = array[i+1];
            if (leftElement > rightElement) {
                swap(array, i, i + 1);
                checked = true;
            };
            
        };
    } while (checked);
    return array;
};


export default bubbleSort;