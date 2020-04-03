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

prevBtn.addEventListener("click", loadPrev);
nextBtn.addEventListener("click", loadNext);
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains('play');
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
})