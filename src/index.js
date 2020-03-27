import {numberMax} from './hw01.js'
import {getMaxDigit} from './hw03.js'
import {pairsStudents} from './hw04.js'
import {getRandomArray} from './hw05.js'
const hw06 = require('./hw06');
const hw07 = require('./hw07');
import  '. /.. /dist/styles.css';


console.log('hw 01 - numberMax', numberMax);

console.log('hw 03 - max digit', getMaxDigit(12345));

console.log('hw 04 - pairsStudents', pairsStudents);

console.log('hw 05 - масив випадкових чисел', getRandomArray(15, 1, 100));

const BASE = 'https://swapi.co/api/';
const CHARACTERS = document.querySelector('.characters');
const PLANETS = document.querySelector('.planets');

async function renderCharacters(film) {
  try {
    CHARACTERS.innerHTML = '';
    let info = await axios.get(BASE + 'films/' + film + '/');
    info.data.characters.forEach(characterUrl => {
      renderPeople(characterUrl);
    })
  } catch (err) {
    console.log(err);
  }
}

async function renderPeople(characterUrl) {
    let charResponse = await axios.get(characterUrl);
    let character = charResponse.data;
    const characterDiv = document.createElement('div');
    characterDiv.classList.add('item');
    characterDiv.dataset.key = characterUrl;
    characterDiv.innerHTML = `
      <p>name: ${character.name}</p>
      <p>gender: ${character.gender}</p>
      <p>birth year: ${character.birth_year}</p>
    `;
    CHARACTERS.append(characterDiv);
}

async function renderPlanets(page = 1) {
  try {
    PLANETS.innerHTML = '';
    let planets = await axios.get(BASE + 'planets/?page=' + page);
    renderPlanet(planets.data.results);
  } catch (err) {
    console.log(err);
    renderPlanets(1)
  }
}
function renderPlanet(planetsObj) {
  planetsObj.forEach(planet => {
    const planetDiv = document.createElement('p');
    planetDiv.classList.add('item');
    planetDiv.innerHTML = `
    <h4>name: ${planet.name}</h4>
    `;
    PLANETS.append(planetDiv);
  })
}
document.getElementById('btn-info').addEventListener('click', 
() => renderCharacters(document.getElementById('info').value)); 
renderPlanets();
document.getElementById('next').addEventListener('click', () => {
  let page = parseFloat(document.getElementById('next').value);
  page += 1;
  document.getElementById('next').value = page; 
  renderPlanets(page);
}); 




