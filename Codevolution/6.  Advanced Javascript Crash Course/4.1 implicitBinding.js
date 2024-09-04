//Tells you what this refer to most of the time
const person = {
    name: 'Chris',
    sayMyName: function(){
        console.log(`My name is ${this.name}`)
    },
 }
person.sayMyName()

