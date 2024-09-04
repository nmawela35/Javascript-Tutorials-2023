
const person = {
    name: 'Chris',
    sayMyName: function(){
        console.log(`My name is ${this.name}`)
    },
 }

 function sayMyName(){
    console.log(`My name is ${this.name}`)
}

sayMyName.call(person)