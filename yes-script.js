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
  const colors = ['#ff0000', '#000', '#fff', '#b22222']
  const duration = 6000
  const end = Date.now() + duration

  confetti({
    particleCount: 150,
    spread: 100,
    origin: { x: 0.5, y: 0.3 },
    colors
  })

  const interval = setInterval(() => {
    if (Date.now() > end) {
      clearInterval(interval)
      return
    }

    confetti({
      particleCount: 40,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.6 },
      colors
    })

    confetti({
      particleCount: 40,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.6 },
      colors
    })
  }, 300)
}

function launchCardAnimation() {
  const container = document.querySelector('.container')
  const suits = ['♥️','♠️','♦️','♣️']
  const values = ['A','K','Q','J','10']

  for (let i = 0; i < 6; i++) {
    const card = document.createElement('div')
    card.className = 'poker-card'
    card.textContent = values[i % values.length] + suits[i % suits.length]
    container.appendChild(card)

    setTimeout(() => {
      card.style.transform = `rotate(${i * 15 - 45}deg) translateY(-180px)`
      card.style.opacity = '1'
    }, 120 * i)

    setTimeout(() => {
      card.remove()
    }, 4500)
  }
}

function toggleMusic() {
  const music = document.getElementById('bg-music')
  if (musicPlaying) {
    music.pause()
    musicPlaying = false
    document.getElementById('music-toggle').textContent = '🔇'
  } else {
    music.play()
    musicPlaying = true
    document.getElementById('music-toggle').textContent = '🔊'
  }
}
