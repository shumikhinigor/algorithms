/* --- Big O(2n) --- */
function exponentialFunc(n) {
    if (n === 0) return 0
    if (n === 1) return 1

    return exponentialFunc(n - 1) + exponentialFunc(n - 2)
}
const resultExponentialFunc = exponentialFunc(3)
// 0 1 2 3 4 5 6
// 0 1 1 2 3 5 8
// exponentialFunc(3)
    // exponentialFunc(2)
        // exponentialFunc(1)
        // exponentialFunc(0)
    // exponentialFunc(1)