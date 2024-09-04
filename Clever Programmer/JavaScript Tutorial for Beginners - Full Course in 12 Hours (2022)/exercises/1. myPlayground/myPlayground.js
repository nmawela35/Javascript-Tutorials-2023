// return a object with how many times each letter appears
/* const letterFrequency = (phrase) => {
    console.log(phrase);

    for (const letter of phrase){
        console.log(letter);
    }

    }
letterFrequency('I was not drunk');  */

 /* const sumArray = numbers =>{
    let result = 0;

    for (const number of numbers){
        result = result + number;
    }
    return {result}
}
console.log(sumArray([1,2,3, 4]));

const array1 = [1, 2, 3, 4]

console.log(array1); */

/* const randomFruit = (fruits) =>{
    const randomNumber = Math.floor(Math.random()* fruits.length)

    return fruits[randomNumber]
}

let fruits = ['🍌', '🍎', '🍊', '🍐']

console.log(randomFruit(fruits)) */
let score = 0;

const weatherApp =(weather) =>{
    if (weather == 'rainy'){
        score = 1
    }
    else if (weather == 'overcast'){
        score =0
    }
    else if (weather == 'freezing'){
        score = -1
    }
    return score;
}

console.log(weatherApp(prompt('How is the weather')));