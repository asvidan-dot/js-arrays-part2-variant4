import * as algo from './algorithms.js';

const testData = {
    random: [1, -2, 3, 4, -1, 2, 1, -5, 4],
    prices: [7, 1, 5, 3, 6, 4],
    windowArr: [1, 3, -1, -3, 5, 3, 6, 7]
};

function logResult(title, input, output) {
    const container = document.getElementById('results');
    const section = document.createElement('div');
    section.innerHTML = `<h3>${title}</h3>
                         <p><b>Вхід:</b> [${input}]</p>
                         <p><b>Результат:</b> ${JSON.stringify(output)}</p><hr>`;
    container.appendChild(section);
}

// Запуск тестів
document.addEventListener('DOMContentLoaded', () => {
    logResult("1. Max Subarray Sum (Kadane)", testData.random, algo.maxSubArraySum(testData.random));
    logResult("2. Two Sum (Target: 5)", testData.random, algo.twoSum(testData.random, 5));
    logResult("3. Three Sum (Target: 0)", [-1, 0, 1, 2, -1, -4], algo.threeSum([-1, 0, 1, 2, -1, -4], 0));
    logResult("4. Sliding Window Max (K=3)", testData.windowArr, algo.slidingWindowMaximum(testData.windowArr, 3));
    logResult("5. Stock Buy-Sell", testData.prices, algo.maxProfit(testData.prices));
});