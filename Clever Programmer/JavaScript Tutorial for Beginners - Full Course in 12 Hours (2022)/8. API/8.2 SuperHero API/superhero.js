const SUPERHERO_TOKEN = "3149795535154098";
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

const newHeroButton = document.getElementById('newHeroButton');
const heroImageDiv = document.getElementById('heroImage');
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

const getSuperhero = (id, name) => {
    // name: base_url/search/batman
    // id: base_url/id
    // json.results[0].image.url
    //json.image.url

  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
     .then((json) => {
      console.log(json.powerstats)
      const superHero = json
      showHeroInfo(superHero)
    })
}

const statToEmoji = {
  intelligence:'🦸‍',
  strength: '🔥',
  speed: '🔥',
  durability: '🔥',
  power: '🔥',
  combat: '🔥'
}

const showHeroInfo = (character) =>{
  const name = `<h2>${character.name}</h2>`
  const img = `<img src="${character.image.url}" height=200 width=200/>`

  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: 
    ${character.powerstats[stat]}</p>`
  }).join('')
  heroImageDiv.innerHTML = `${name}${img}${stats}`;

}


const getSearchSuperHero = (name) =>{
  console.log(searchInput.value);
  fetch(`${BASE_URL}/search/${name}`)
  .then((response) => response.json())
  .then((json) => {
      const hero = json.results[0]
      // console.log(hero);
      // heroImageDiv.innerHTML = `<img src="${hero.image.url}" height=200 width=200`
      showHeroInfo(hero)
  })
}


const randomHero = () => {
    const numberOfHeros = 731;
    return Math.ceil(Math.random()* numberOfHeros)
}
// console.log(randomHero());
newHeroButton.onclick =() => getSuperhero(randomHero());
searchButton.onclick = () => getSearchSuperHero(searchInput.value)




