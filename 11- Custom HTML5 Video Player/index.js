const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  if (!video.paused) {
    toggle.innerHTML = "<b>| |</b>"

  } else {
    toggle.innerHTML = "►"
  }
}

function skipVideo() {
  // console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeChange() {
  video[this.name] = this.value;
  console.log(this.name, this.value);
}

toggle.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
window.addEventListener("keypress", e => {
  if (e.key === "Spacebar" || " ") {
    togglePlay();
  }
});

skipButtons.forEach(button => {
  button.addEventListener("click", skipVideo);
})

ranges.forEach(range => {
  range.addEventListener("change", handleRangeChange);
  range.addEventListener("mousemove", handleRangeChange);
})