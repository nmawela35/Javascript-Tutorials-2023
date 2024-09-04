function sum(a, b) {
  return a + b;
}
//ES6 Arrow functions

const sum2 = (a, b) => a + b; //with implicit return

function calculateFoodTotal(food, tip) {
  tipPercentage = tip / 100;
  tipAmount = tipPercentage * food;
  total = sum2(food, tipAmount);
  return total;
}
console.log(calculateFoodTotal(50, 20));
