var foods= ['red', 'green' , 'blue', 'indigo','violet', 'pink'];
 
for (var i = 0; i < foods.length; i++)
{
    var remainder = i % 2;

    if (remainder === 0)
    {
        var foodUpper = foods[i].toUpperCase();
        console.log(`${myString} ${foodUpper}`);
    }
    else 
    {
        console.log(`${myString} ${foods[i]}`);
    }
}

