const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress_bar = document.getElementById('progress-bar');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');

const songs = ['bensound-beyondtheline', 'bensound-creativeminds', 'bensound-endlessmotion', 'bensound-energy', 'bensound-funnysong'];

let songIndex = 0;

function loadSong(song) {
  title.innerText = song;
  audio.src = `media/${song}.mp3`;
}

loadSong(songs[songIndex]);

function loadPrev() {
  songIndex--;
  if (songIndex - 1 < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

function loadNext() {
  songIndex++;
  if (songIndex + 1 > songs.length) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  audio.pause();
}

function calcProgressPercentage(currTime, duration) {
  if (currTime && duration !== 0) {
    return currTime / duration * 100;
  } else {
    return 0;
  }
}

function updateProgress(e) {
  const {
    duration,
    currentTime
  } = e.srcElement;
  const progressPercent = calcProgressPercentage(currentTime, duration);
  progress_bar.style.width = `${progressPercent}%`
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

prevBtn.addEventListener("click", loadPrev);
nextBtn.addEventListener("click", loadNext);
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains('play');
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);
audio.addEventListener("ended", loadNext);