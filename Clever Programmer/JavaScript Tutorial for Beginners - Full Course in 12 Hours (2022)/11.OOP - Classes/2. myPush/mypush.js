/* const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); */

Array.prototype.myPush = function(){  //our push method, this give you access to Array class.
    return this.length
}

const fruits = ['banana', 'strawberry', 'orange', 'pear', 'apple']
console.log(fruits.myPush())
