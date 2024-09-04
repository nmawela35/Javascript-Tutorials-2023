const numbers = [2,4,6,8,10];


const arraySquared = (numbers2) => {
  let result = [];
  for (const i of numbers2){
    result.push(i**2);
  }
  return result;
}

// console.log(arraySquared (numbers));
console.log(arraySquared([1,2,3,4,5,6]));







