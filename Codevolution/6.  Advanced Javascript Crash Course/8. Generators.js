// Special class of functions that simplifies writing iterators, 
//can stop execution and continues where it left off

function* generatorFunction(){
    yield 'Hello'
    yield 'World'
}

const generatorObject = generatorFunction() //generatorObject is an iterator
for (const word of generatorObject){
    console.log(word)
}
