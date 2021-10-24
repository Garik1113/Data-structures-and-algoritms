import generateArrayOfRandomNumbers from '../arrayGenarator';
import binarySearch from './search/binary';
import linearSearch from './search/linear';
import bubbleSort from './sorting/bubble';
import mergeSort from './sorting/merge';
import quickSort from './sorting/quick';


const searchNumber = 805852;
const array = generateArrayOfRandomNumbers(1000000);
console.log("Array of random numbers length", array.length);
console.log("ALGORITHM START DATE", new Date());
const sortedNumbers:number[] = quickSort(array);

const foundedNumber = binarySearch(sortedNumbers, searchNumber);

console.log("ALGORITHM END DATE", new Date());
console.log("foundedNumber", foundedNumber);