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
  // console.log(this.name, this.value);
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`
}

function handleProgressBarClick(e) {
  const chosenTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = chosenTime;
}

toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay)
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
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

let mousedown = false;
progress.addEventListener("click", handleProgressBarClick);
progress.addEventListener("mousemove", e => mousedown && handleProgressBarClick(e));
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);