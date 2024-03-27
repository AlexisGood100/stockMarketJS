
// Add tooltip functionality to stock items
function addTooltipToStocks() {
    document.querySelectorAll('#stocks .stock').forEach(stockSpan => {
        const stockName = stockSpan.dataset.name;
        const portfolioStock = portfolio[stockName];
        const tooltip = document.getElementById('tooltip');

        if (portfolioStock && portfolioStock.quantity > 0) {
            stockSpan.addEventListener('mouseover', (event) => {
                tooltip.innerText = `You own ${portfolioStock.quantity} at $${portfolioStock.avgPrice.toFixed(2)}`;
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
        }
    });
}
