const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const userInput = document.querySelector('.search');
const cities = [];
let input;

function updateUserInterface(arr, input) {
  const queryResults = document.querySelector('.suggestions');
  queryResults.innerHTML = arr.map(item => {
    const highlightCityInput = item.city.toLowerCase().replace(input, `<span class="hl">${input}</span>`);
    const highlightStateInput = item.state.toLowerCase().replace(input, `<span class="hl">${input}</span>`);
    return `<li> 
      <span class="name">${highlightCityInput}, ${highlightStateInput}</span>
      <span class="population">${item.population}</span>
    </li>`
  }).join('');
}

function handleUserInputChange() {
  let input = userInput.value;
  updateUserInterface(matchInputToCities(input, cities), input);
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