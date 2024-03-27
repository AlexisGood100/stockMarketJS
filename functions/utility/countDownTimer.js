
// Countdown timer function
function countdownTimer() {
    const timerDisplay = document.getElementById('timer');
    const timerInterval = setInterval(() => {
        if (isPaused) return;
        timerValue -= 1;
        timerDisplay.innerText = `Time Left: ${timerValue}s`;

        // Increase stock price volatility as time goes on
        volatility += 0.02;

        if (timerValue <= 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}
