const listItems = document.querySelectorAll('.item');
const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));

let shiftDown = false;
let lastCheckbox = null;

checkboxes.forEach(currentCheckbox => currentCheckbox.addEventListener('click', event => {
  if (shiftDown) {
    if (lastCheckbox) {
      let checkboxesToTick = [];
      const indexOfLastCheckbox = checkboxes.indexOf(lastCheckbox);
      const indexOfCurrentCheckbox = checkboxes.indexOf(currentCheckbox);

      if (indexOfCurrentCheckbox <= indexOfLastCheckbox) {
        checkboxesToTick = checkboxes.slice(indexOfCurrentCheckbox, indexOfLastCheckbox + 1);
      } else {
        checkboxesToTick = checkboxes.slice(indexOfLastCheckbox, indexOfCurrentCheckbox + 1);
      }

      checkboxesToTick.forEach(checkbox => {
        checkbox.setAttribute("checked", true);
      });
    }
  }
  lastCheckbox = currentCheckbox;
}));

window.addEventListener('keydown', event => {
  if (event.key === "Shift") {
    shiftDown = true;
  }
});

window.addEventListener('keyup', event => {
  if (event.key === "Shift") {
    shiftDown = false;
  }
});