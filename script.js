function handleYesClick() {
  const result = document.getElementById('result')
  result.style.display = 'block'
  result.classList.add('reveal')

  launchConfetti()
  launchCardAnimation()

  setTimeout(() => {
    window.location.href = 'yes.html'
  }, 4000)
}

function launchConfetti() {
  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 }
  })
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
      card.style.transform = `rotate(${i * 15 - 45}deg) translateY(-80px)`
      card.style.opacity = '1'
    }, 100 * i)

    setTimeout(() => {
      card.remove()
    }, 4000)
  }
}
