
// Add tooltip functionality to portfolio items
function addTooltipToPortfolio() {
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
