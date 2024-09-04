// const person ={
//   name:'Leornado',
//   shirt: 'white'
// }
// console.log(person.name); //dot notation
// console.log(person['shirt']); //bracket notation

// person.phone = '0725470501'
// console.log(person);

const introducer = (name, shirt, assets) =>{
  const person ={
    name: name,
    shirt: shirt,
    assets: assets,
    liabilities: 8100,
    networth: function(){
      return this.assets - this.liabilities
    }
  }
  const intro = `Hi my name is ${person.name}, color of my shirt is ${person.shirt}
my net worth is R${person.networth()} `

  return intro;
}
console.log(introducer('Qazi', 'black', '30000')); 
console.log(introducer('Chris', 'blue', 2000000));
