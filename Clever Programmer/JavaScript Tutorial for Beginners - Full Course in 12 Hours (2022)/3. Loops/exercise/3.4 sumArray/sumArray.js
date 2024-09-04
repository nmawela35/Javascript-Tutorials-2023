
const sumArray = numbers =>
{
    let result = 0;

    for (const number of numbers ) {
        result = result + number;
    }
    return {result}
}
console.log(sumArray(([1,2,3,4,5,6,])));