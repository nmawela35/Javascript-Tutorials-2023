const array1 = [1, 2, 3];
const array2 = array1.slice(); //copy values of array1
array2.push(4);
console.log(array1);
console.log(array2);

const [firstValue,second] = [1, 2, 3]; // get values out of array
console.log(firstValue);
console.log(second);