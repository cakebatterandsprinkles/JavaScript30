const panels = document.querySelectorAll('.panel');

function addOpen(e) {
  this.classList.add('open', 'open-active');
};

function removeOpen(e) {
  this.classList.remove('open', 'open-active');
};

panels.forEach(panel => panel.addEventListener('mouseover', addOpen));
panels.forEach(panel => panel.addEventListener('mouseout', removeOpen));