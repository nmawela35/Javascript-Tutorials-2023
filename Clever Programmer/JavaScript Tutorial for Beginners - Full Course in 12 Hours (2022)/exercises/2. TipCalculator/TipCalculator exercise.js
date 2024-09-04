/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/
const a = 30;
const b = 20;

function add(a, b) {
  return a + b;
}
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
const mul = (a, b) => a * b;

console.log(add(a, b), sub(a, b));

console.log(div(a, b));
console.log(mul(a, b));
