/**
 * 1. Maximum Subarray Sum - Алгоритм Кадане
 * Складність: O(n) за часом, O(1) за пам'яттю.
 */
export function maxSubArraySum(arr) {
    if (arr.length === 0) return 0;
    let currentMax = arr[0];
    let globalMax = arr[0];
    for (let i = 1; i < arr.length; i++) {
        currentMax = Math.max(arr[i], currentMax + arr[i]);
        if (currentMax > globalMax) globalMax = currentMax;
    }
    return globalMax;
}

/**
 * 2. Two Sum Problem - Пошук усіх пар
 * Складність: O(n) за часом, O(n) за пам'яттю.
 */
export function twoSum(arr, target) {
    const result = [];
    const seen = new Set();
    const addedPairs = new Set();
    for (let num of arr) {
        let complement = target - num;
        if (seen.has(complement)) {
            let pair = [complement, num].sort((a, b) => a - b);
            let key = pair.join(',');
            if (!addedPairs.has(key)) {
                result.push(pair);
                addedPairs.add(key);
            }
        }
        seen.add(num);
    }
    return result;
}

/**
 * 3. Three Sum Problem - Трійки чисел
 * Складність: O(n^2) за часом.
 */
export function threeSum(arr, target) {
    const result = [];
    const sorted = [...arr].sort((a, b) => a - b);
    for (let i = 0; i < sorted.length - 2; i++) {
        if (i > 0 && sorted[i] === sorted[i - 1]) continue;
        let left = i + 1, right = sorted.length - 1;
        while (left < right) {
            const sum = sorted[i] + sorted[left] + sorted[right];
            if (sum === target) {
                result.push([sorted[i], sorted[left], sorted[right]]);
                while (left < right && sorted[left] === sorted[left + 1]) left++;
                while (left < right && sorted[right] === sorted[right - 1]) right--;
                left++; right--;
            } else if (sum < target) left++;
            else right--;
        }
    }
    return result;
}

/**
 * 4. Sliding Window Maximum - Максимум у вікні K
 * Складність: O(n) за часом.
 */
export function slidingWindowMaximum(arr, k) {
    if (!arr.length || k <= 0) return [];
    const result = [], deque = [];
    for (let i = 0; i < arr.length; i++) {
        if (deque.length && deque[0] <= i - k) deque.shift();
        while (deque.length && arr[deque[deque.length - 1]] <= arr[i]) deque.pop();
        deque.push(i);
        if (i >= k - 1) result.push(arr[deque[0]]);
    }
    return result;
}

/**
 * 5. Stock Buy-Sell - Максимальний прибуток
 * Складність: O(n) за часом.
 */
export function maxProfit(prices) {
    if (prices.length < 2) return 0;
    let minPrice = prices[0], maxProf = 0;
    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProf = Math.max(maxProf, prices[i] - minPrice);
    }
    return maxProf;
}