 
/*  const person = {
    name: 'Chris',
    sayMyName: function(){
        console.log(`My name is ${this.name}`)
    },
 }
 */
 globalThis.name = 'superman'
 function sayMyName(){
    console.log(`My name is ${this.name}`)
 }
 

//sayMyName.call(person)