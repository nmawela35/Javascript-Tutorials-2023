const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        isReady = [true, false][Math.floor(Math.random()* 2)] //array of truthy
        isReady ? resolve('Soup is ready') : reject ('No soup today')
    }, 2000)
})

console.log(
    promise1
    .then(success => console.log({success}))
    .catch(error => console.log({error}))
    )
    