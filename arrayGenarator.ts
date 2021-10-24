const shuffle = (array: number[]):number[] => {
    let tmp, current, top = array.length;
    if (top) {
        while(--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
    } 
    return array;
}

const generateArrayOfRandomNumbers = (size: number): number[] => {
    const array = [];
    for (let i=0; i < size; i++) {
        array[i] = i;
    }

    return shuffle(array);
}

export default generateArrayOfRandomNumbers;