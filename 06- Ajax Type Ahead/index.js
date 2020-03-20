const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
let input;
const userInput = document.querySelector('.search');


function handleUserInputChange() {
  let input = userInput.value;
  console.log(matchInputToCities(input, cities));
}

userInput.addEventListener('keyup', handleUserInputChange);

const userInputValue = userInput.value.toLowerCase();

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data))
// .finally(() => console.log(matchInputToCities('Bos', cities)));

function matchInputToCities(input, citiesArr) {
  return citiesArr.filter(city => {
    if (city.city.toLowerCase().includes(input) || city.state.toLowerCase().includes(input)) {
      return true;
    }
  })
}