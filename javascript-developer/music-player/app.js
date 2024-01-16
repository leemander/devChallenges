const audio = document.getElementById("audio");

const albumArt = document.getElementById("art");
const trackTitle = document.getElementById("title");
const trackArtist = document.getElementById("artist");

const currentTime = document.getElementById("current-position");
const trackLength = document.getElementById("length");
const progressBar = document.getElementById("progress");

const skipBackwards = document.getElementById("back");
const play = document.getElementById("play");
const skipForwards = document.getElementById("forwards");

const songs = [
  {
    title: "Lost in the City Lights",
    artist: "Cosmo Sheldrake",
    artSrc: "./images/cover-1.png",
    audioSrc: "./lost-in-city-lights-145038.mp3",
    duration: "01:12",
  },
  {
    title: "Forest Lullaby",
    artist: "Lesfm",
    artSrc: "./images/cover-2.png",
    audioSrc: "./forest-lullaby-110624.mp3",
    duration: "02:18",
  },
];

let currentSong = 0;

function loadSong() {
  audio.src = songs[currentSong].audioSrc;
  albumArt.src = songs[currentSong].artSrc;
  albumArt.alt = `${songs[currentSong].title} by ${songs[currentSong].artist}`;
  trackTitle.innerText = songs[currentSong].title;
  trackArtist.innerText = songs[currentSong].artist;
  trackLength.innerText = songs[currentSong].duration;
}

loadSong();

play.addEventListener("click", () => {
  audio.paused ? audio.play() : audio.pause();
});

skipForwards.addEventListener("click", () => {
  if (currentSong < songs.length - 1) {
    currentSong++;
    loadSong();
    audio.play();
  }
});

skipBackwards.addEventListener("click", () => {
  if (currentSong > 0) {
    currentSong--;
    loadSong();
    audio.play();
  }
});

function renderTime(time) {
  let mins = Math.floor(time / 60);
  if (mins < 10) {
    mins = `0${mins}`;
  }

  let seconds = Math.floor(time % 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${mins}:${seconds}`;
}

function updateProgressBar() {
  let progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progress}%`;
}

audio.addEventListener("timeupdate", () => {
  currentTime.innerText = renderTime(audio.currentTime);
  updateProgressBar();
});
