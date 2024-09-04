var foods = ['cheese', 'chicken', 'grapes', 'hamburger'];

function randomInt(min,max)
{
  
    //creating a random integer from min and max.
    return Math.floor( (max-min+1)*Math.random()) + min;
}

console.log(foods[randomInt(0,3)]);