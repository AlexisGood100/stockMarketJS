
let timerValue = 300; // 5 minutes timer
let volatility = 1; // Initial stock price volatility
let level = 1; // Initial game level
let levelGoal = 2000; // Initial goal to reach the next level
let isPaused = false;
const stocksTable = document.querySelector('#stocks tbody')





document.getElementById('pauseButton').addEventListener('click', pauseGame);

const businessNames = [
    'TechNova', 'BrightFlow', 'HexHive', 'InnovaCore', 'VirtuDesk', 
    'InfoWays', 'QuantiLeap', 'DataSphere', 'NetCrafters', 'CodeWire', 
    'InfoGrid', 'SmartVerge', 'BlueSky', 'DeltaFlow', 'EchoSight',
    'SpiralWorks', 'SoftEcho', 'BrightBytes', 'CloudCrest', 'EtherNet',
    'DataCrunch', 'NovaScape', 'PixelPond', 'QuantumQuartz', 'SpaceShade',
    'VirtuVista', 'PixelPitch', 'CryptoCove', 'GalaxyGate', 'CodeCascade',
    'QuantumQuest', 'EtherEdge', 'InfoIsle', 'SpiralSphere', 'BrightBridge',
    'CloudClip', 'HexHaven', 'DataDew', 'SpaceSpire', 'NovaNimbus'
];

const stockData = Array.from({length: 25}, (_, i) => ({ // Change in Array.from to change the number of stocks that are being used.
    name: businessNames[i],
    price: Math.random() * 200,
    history: Array.from({length: 10}, () => Math.random() * 200)
}));

let balance = 1000;
let total_earned = 0;
let portfolio = {};
// const stocksTable = document.querySelector('#stocks tbody');

let chart = null;
let selectedStock = null;

stocksTable.addEventListener('click', (event) => {
    if (event.target.tagName === 'TD' && event.target.cellIndex === 0) {
        const stockName = event.target.innerText;
        selectedStock = stockData.find(s => s.name === stockName);
        // updateChart(selectedStock); //Took this feature out.
    }
});


// Update stocks every second
setInterval(updateStocks, 4000);



// Call this function at the start of the game
countdownTimer();
//End of the stock market game