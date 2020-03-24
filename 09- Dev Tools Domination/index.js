const text = document.querySelector('#text');
text.addEventListener('click', makeGreen);
const dogs = [{
  name: 'Snickers',
  age: 2
}, {
  name: 'hugo',
  age: 8
}];

function makeGreen() {
  this.style.color = '#BADA55';
  this.style.fontSize = '50px';
}

// Regular
console.log('Hello');

// Interpolated
console.log('Hello I am an %s emoji', '🐙')

// Styled
console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 2px 2px 3px gray')

// warning!
console.warn('Yo, this is a warning');

// Error :|
console.error('You shall not pass, because this is an error');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
console.assert(text.classList.contains('green'), 'You don\'t have a class with that name!');

// Viewing DOM Elements
console.log(text);
console.dir(text);

// clearing
console.clear();

// Grouping together

dogs.forEach(dog => {
  // console.group(`${dog.name}`);
  console.groupCollapsed(`${dog.name}`);
  console.log(`${dog.name} is a good boy`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count(`${dogs[0].name}`); //1

// timing

console.time('fetching data');
fetch("https://corona.lmao.ninja/countries")
  .then(blob => blob.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data)
  })