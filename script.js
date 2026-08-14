const noMessages = [
  "No",
  "Are you positive? 🤔",
  "You know you want to.. 🥺",
  "Don't do this to me...",
  "Last chance! 😭",
  "You can't catch me anyway 😜"
]

const yesTeasePokes = [
  "try saying no first... I bet you want to know what happens 😏",
  "go on, hit no... just once 👀",
  "you're missing out 😈",
  "click no, I dare you 😏"
]

let yesTeasedCount = 0
let noClickCount = 0
let runawayEnabled = false

function handleYesClick() {
  if (!runawayEnabled) {
    const msg = yesTeasePokes[Math.min(yesTeasedCount, yesTeasePokes.length - 1)]
    yesTeasedCount++
    showTeaseMessage(msg)
    return
  }

  const result = document.getElementById('result')
  result.style.display = 'block'
  result.classList.add('reveal')

  launchConfetti()
  launchCardAnimation()

  setTimeout(() => {
    window.location.href = 'yes.html'
  }, 4000)
}

function showTeaseMessage(msg) {
  let toast = document.getElementById('tease-toast')
  toast.textContent = msg
  toast.classList.add('show')
  clearTimeout(toast._timer)
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2500)
}

function handleNoClick() {
  noClickCount++

  const msgIndex = Math.min(noClickCount, noMessages.length - 1)
  const noBtn = document.getElementById('no-btn')
  noBtn.textContent = noMessages[msgIndex]

  const yesBtn = document.getElementById('yes-btn')
  const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize)
  yesBtn.style.fontSize = `${currentSize * 1.25}px`

  if (noClickCount >= 2) {
    const noSize = parseFloat(window.getComputedStyle(noBtn).fontSize)
    noBtn.style.fontSize = `${Math.max(noSize *
