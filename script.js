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
