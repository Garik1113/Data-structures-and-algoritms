const linearSearch = (array: number[], number: number): number | null => {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element === number) {
            return number;
        }
    }
    return null;
}

export default linearSearch;