
function buy(stockName, stockPrice) {
    if (isPaused) return;
    if (balance >= stockPrice) {
        balance -= stockPrice;

        if (!portfolio[stockName]) {
            portfolio[stockName] = {quantity: 0, avgPrice: 0};
        }

        const totalCost = portfolio[stockName].avgPrice * portfolio[stockName].quantity + stockPrice;
        portfolio[stockName].quantity += 1;
        portfolio[stockName].avgPrice = totalCost / portfolio[stockName].quantity;

        updateBalance();
        updatePortfolio();
    } else {
        alert('Not enough balance to buy this stock.');
    }
}
