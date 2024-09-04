//this. referring an empty object
function Person(name){
    this.name = name//this = empty object
}
const p1 = new Person('Chris')
const p2 = new Person('Sydney')
const p3 = new Person('Christina')

console.log(p1.name, p2.name, p3.name)