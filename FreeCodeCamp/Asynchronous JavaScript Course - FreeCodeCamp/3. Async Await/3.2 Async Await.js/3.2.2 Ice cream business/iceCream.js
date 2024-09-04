let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
  };

let isShopOpen = false;

function time(ms){
return new Promise((resolve, reject) =>{
    if (isShopOpen){
        setTimeout(resolve, ms)
    } else {
        reject (console.log("Shop is closed"))
    }
});
}

async function kitchen(){
    try{
        await time(2000);
        console.log(`${stocks.Fruits[0]} was selected`)

        await time(500)
        console.log("Start the production")

        await time(2000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

        await time(500)
        console.log("Start the machine")

        await time(2000)
        console.log(`Ice cream placed on ${stocks.holder[0]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} was selected`)

        await time(2000)
        console.log("Server ice cream")

    }
    catch(error){
        console.log("Customer left", error)
    }
    finally{
        console.log("Day ended, shop is closed")
    }
}

kitchen();