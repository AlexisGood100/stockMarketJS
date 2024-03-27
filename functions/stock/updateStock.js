
function updateStocks() {
    if (isPaused) return;
    stocksTable.innerHTML = '';
    stockData.forEach(stock => {
        stock.price = Math.max(10, stock.price + (Math.random() - 0.5) * 20 * volatility);
        stock.history.push(stock.price);
        stock.history = stock.history.slice(1);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="stock" data-name="${stock.name}">${stock.name}</td>
            <td>$${stock.price.toFixed(2)}</td>
            <td><button onclick="buy('${stock.name}', ${stock.price})">Buy</button></td>
            <td><button onclick="sell('${stock.name}', ${stock.price})">Sell</button></td>
        `;
        const stocksTable = document.querySelector('#stocks tbody')
        stocksTable.appendChild(row);
    });

    // if (selectedStock) {
    //     updateChart(selectedStock);
    // }
    addTooltipToStocks();  // Call this after updating stocks
}



