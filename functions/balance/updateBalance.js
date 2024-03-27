function updateBalance() {
    const balanceDiv = document.getElementById('balance');
    balanceDiv.innerText = `Balance: $${balance.toFixed(2)}`;
    const totalEarnedDiv = document.getElementById('total-earned');
    totalEarnedDiv.innerText = `Total Earned: $${total_earned.toFixed(2)}`;

    if (balance >= levelGoal) {
        level += 1;
        levelGoal *= 2;
        timerValue += 300;
        const levelDiv = document.getElementById('level');
        levelDiv.innerText = `Level: ${level}`;
    }
}

