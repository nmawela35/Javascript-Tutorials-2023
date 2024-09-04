const randomFruit = (fruit) =>{
    const randomNumber = Math.floor(Math.random()* fruits.length)

    return fruit[randomNumber]
}

let fruits = ['🍌', '🍎', '🍊', '🍐']

console.log(randomFruit(fruits))
