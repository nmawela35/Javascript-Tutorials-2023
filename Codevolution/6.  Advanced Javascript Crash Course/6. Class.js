//Introduced 2015
class Person {
    constructor(fName, lName){
        this.firstName = fName
        this.lastName = lName
    }
    sayMyName(){
        return this.firstName+ ' ' + this.lastName
    }
}
const classP1 = new Person('Bruce', 'Wayne')
console.log(classP1.sayMyName())

class SuperHero extends Person {
    constructor(fName,lName){
        super(fName, lName) //method provided by JS
    }
}
const batman = new SuperHero('Chris', 'Mawela')
console.log(batman.sayMyName())