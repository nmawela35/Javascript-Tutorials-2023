/* console.log(Math.random()); */
var foods = ['cheese', 'chicken', 'grapes', 'hamburger'];

function randomInt(min,max)
{
    var numOfValues = max - min + 1;
    var randomVal = Math.random()*numOfValues;
    var rounded = Math.floor(randomVal); // get numbers btn  0 and 5
    var finalNum = min + rounded;
    console.log(finalNum);
    
    return finalNum;
}

console.log(foods[randomInt(0,3)]);

