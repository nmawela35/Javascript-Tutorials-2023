const url = 'https://open-weather13.p.rapidapi.com/city/landon';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '838c114a21msh73de8b56f830019p1c5551jsneb6c7e6385a0',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


fetch(url, options)
    .then(response => response.json())
    .then(data => console.log(data.name))
    .catch(error => console.log({error}))
