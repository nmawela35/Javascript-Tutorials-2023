const numbers = [1,2,3,4,5];

numbers.map (number => console.log(number));

let result = numbers.map(number=> number*2 );
console.log(result); 

const doubleMap = (numbers) =>{
    return numbers.map(number => number * 2)
} 

console.log(doubleMap([1,2,3,4,5,6,7,8]));