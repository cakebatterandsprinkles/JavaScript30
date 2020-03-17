const randomButton = document.querySelector('.randombtn');
const imageContainer = document.querySelector('.image__container');
const inputs = document.querySelectorAll('.inputs');
console.log(inputs);
const imageArr = ['https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1525230071276-4a87f42f469e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
  'https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
  'https://images.unsplash.com/photo-1528020632843-32071e1ec78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
  'https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3252&q=80',
  'https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3098&q=80',
  'https://images.unsplash.com/photo-1505440484611-23c171ad6e96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3137&q=80',
  'https://images.unsplash.com/photo-1565526486230-f92dc52d4b4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80',
  'https://images.unsplash.com/photo-1567001988304-985f0aeb1c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3151&q=80',
  'https://images.unsplash.com/photo-1519658231391-edf01b1f99b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1581250190370-6368e32dbcb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80'
];

function chooseRandomNum() {
  return Math.floor(Math.random() * imageArr.length);
}

function handleUpdate() {
  const suffix = this.dataset.suffix || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

randomButton.addEventListener('click', () => {
  const randomNum = chooseRandomNum();
  const randomImg = imageArr[randomNum];
  imageContainer.innerHTML = `<img class="image" src='${randomImg}'/>`
});

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));