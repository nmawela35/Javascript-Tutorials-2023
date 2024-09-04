
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
  };

let isShopOpen = true;

let toppings_choice = () =>{

  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve( 
         console.log("Which topping would you like?")
       )
    }, 2000);
  })
}

async function kitchen() {
  console.log(" A ")
  console.log(" B ") 
  console.log(" C ")

  await toppings_choice();

  console.log(" D ")
  console.log(" E ")
}

kitchen();

console.log("doing the dishes")
console.log("cleaning the tables")
console.log("taking others orders")



