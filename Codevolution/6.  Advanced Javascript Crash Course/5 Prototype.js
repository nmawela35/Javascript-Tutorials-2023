// Another difficult topic is Prototype
function Person(fName, lName){
    this.firstName = fName
    this.lastName = lName
}
const person1 = new Person('Bruce', 'Wayne')
const person2 = new Person('Chris', 'Mawela')

person1.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}
console.log(person1.getFullName())

