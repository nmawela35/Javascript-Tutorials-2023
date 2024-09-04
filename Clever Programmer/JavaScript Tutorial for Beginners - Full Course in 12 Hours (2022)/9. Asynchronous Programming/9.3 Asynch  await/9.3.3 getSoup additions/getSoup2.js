const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReady = [true, false][Math.floor(Math.random() * 2)]; //array of truthy
    isReady ? resolve("Soup is ready") : reject("No soup today");
  }, 2000);
});

// console.log(
//     promise1
//     .then(success => console.log({success}))
//     .catch(error => console.log({error}))
//     )
//
const getSoup = async () => {
  const data = { rating: 0, tip: 0, pay: 0, review: 0 };

  try {
    const soup = await promise1;
    console.log(soup);
    data.rating = 5
    data.tip = 0.2
    data.pay = 10
    data.review = 5
    return data

  } catch (error) {
    console.log(error);
    data.rating = 1
    data.tip = 0
    data.pay = 0
    data.review =1
    return data
  }

  finally{
    console.log("The program stops here")
  }
}

const result = getSoup().then(value => console.log(value))
