
function updatePortfolio() {
    if (isPaused) return;
    let portfolioText = 'Portfolio: ';
    for (let stockName in portfolio) {
        if (portfolio[stockName].quantity > 0) {
            portfolioText += `<span class="stock" data-name="${stockName}">${stockName} (${portfolio[stockName].quantity} @ $${portfolio[stockName].avgPrice.toFixed(2)}), </span>`;
        }
    }
    const portfolioDiv = document.getElementById('portfolio');
    portfolioDiv.innerHTML = portfolioText.slice(0, -2);

    // Add event listeners for the stock names
    document.querySelectorAll('.stock').forEach(stockSpan => {
        const stockName = stockSpan.dataset.name;
        const stock = stockData.find(s => s.name === stockName);
        const tooltip = document.getElementById('tooltip');

        stockSpan.addEventListener('mouseover', (event) => {
            tooltip.innerText = `Price: $${stock.price.toFixed(2)}`;
            tooltip.style.display = 'block';
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        stockSpan.addEventListener('mousemove', (event) => {
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        stockSpan.addEventListener('mouseout', () => {
            tooltip.style.display = 'none';
        });
    });
}
