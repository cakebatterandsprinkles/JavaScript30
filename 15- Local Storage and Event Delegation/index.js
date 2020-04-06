const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();
  const inputValue = (this.querySelector('[name=item]')).value;
  const text = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
  const item = {
    text,
    done: false
  }
  items.push(item);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);

  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, index) => {
    return `
      <li>
        <input type="checkbox" data-index=${index} id="item${index}" ${plate.done ? 'checked' : ''}/>
        <label for="item${index}">${plate.text}</label>
        <p class="deletebtn" id="item${index}" data-index=${index}>❌</p>
      </li>
    `;
  }).join("");

  platesList.querySelectorAll('.deletebtn').forEach(element => {
    const index = element.dataset.index;
    element.addEventListener('click', () => deleteItem(index));
  });
}

function toggleDone(e) {
  if (!e.target.matches('input')) return;
  const el = e.target;
  const elIndex = el.dataset.index;
  items[elIndex].done = !items[elIndex].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function deleteItem(index) {
  items.splice(index, index + 1);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

populateList(items, itemsList);