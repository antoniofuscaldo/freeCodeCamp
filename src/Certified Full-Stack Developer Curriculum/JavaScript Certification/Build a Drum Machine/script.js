const display = document.getElementById('display');
function playAudio(audio, name) {
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  display.textContent = name;
}
document.querySelectorAll('.drum-pad').forEach((pad) => {
  pad.addEventListener('click', () => {
    const audio = pad.querySelector('audio.clip');
    playAudio(audio, pad.dataset.name);
  });
});
document.addEventListener('keydown', (e) => {
  const key = e.key.toUpperCase(),
    audio = document.getElementById(key);
  if (audio) {
    const pad = audio.parentElement;
    playAudio(audio, pad.dataset.name);
  }
});
