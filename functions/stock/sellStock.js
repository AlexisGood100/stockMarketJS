
function sell(stockName, stockPrice) {
    if (isPaused) return;
    if (portfolio[stockName] && portfolio[stockName].quantity > 0) {
        const purchasePrice = portfolio[stockName].avgPrice;
        const profit = stockPrice - purchasePrice;

        balance += stockPrice;
        total_earned += stockPrice;
        portfolio[stockName].quantity--;

        if (portfolio[stockName].quantity === 0) {
            portfolio[stockName].avgPrice = 0;
        }

        const salesTable = document.querySelector('#sales tbody');
        const row = document.createElement('tr');
        const dateTime = new Date().toLocaleString();

        row.innerHTML = `
            <td>${stockName}</td>
            <td>${dateTime}</td>
            <td>$${purchasePrice.toFixed(2)}</td>
            <td>$${stockPrice.toFixed(2)}</td>
            <td>$${profit.toFixed(2)}</td>
        `;

        salesTable.appendChild(row);

        updateBalance();
        updatePortfolio();
    } else {
        alert('You do not own this stock.');
    }
}
