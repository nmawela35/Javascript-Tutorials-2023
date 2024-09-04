/* const fruits = ['🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐']

// for (let i = 0; i < fruits.length; i++){
//   console.log(i, fruits[i]);
// }

for (const i of fruits){
  console.log(i);
} */

// let total = 0;
// const numbers = [1, 2, 3, 4, 5, 6];

const doubleArray = (numbers) =>{
let doubled = [];
for (const i of numbers) {
  doubled.push(i*2);
}
return doubled;
}

console.log(doubleArray([1,2,3,4,5,6]));




