function Person(fName, lName){
    this.firstName = fName
    this.lastName = lName
}
//const person1 = new Person('Bruce', 'Wayne') //constructor function
//const person2 = new Person('Chris', 'Mawela')

Person.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}

function SuperHero(fName, lName){
    Person.call(this, fName, lName)
    this.isSuperhero = true
}

SuperHero.prototype.fightCrime = function (){
    console.log('Fighting crime')
}
SuperHero.prototype = Object.create(Person.prototype)
const batman = new SuperHero('Bruce', 'Wayne')
console.log(batman.getFullName())
SuperHero.prototype.constructor = SuperHero
