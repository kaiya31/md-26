let musicPlaying = false

window.addEventListener('load', () => {
  launchConfetti()
  launchCardAnimation()

  const music = document.getElementById('bg-music')
  music.volume = 0.3
  music.play().catch(() => {})
  musicPlaying = true
  document.getElementById('music-toggle').textContent = '🔊'
})

function launchConfetti() {
  const colors = ['#ff0000', '#000',
