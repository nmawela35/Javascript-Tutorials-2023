
async function order (){
    try{
        await abc
    }

    catch(error){
        console.log("abc doesn't exist", error)
    }

    finally{
        console.log("This step always runs")
    }
}
order();