// You must create a function
//Use the keyword async and await
//New ES6 Syntax, makes .then task easier, .then can get messy

const getDog = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random'
    const response = await fetch(url)
    const data = await response.json()
    console.log({response}, {data})
}

getDog();