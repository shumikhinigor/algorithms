/* --- Big O(log n) --- */
// Recursive
function logarithmicRecursiveFunc(n) {
    if (n === 0) return 'Done'
    n = Math.floor(n / 2) // O(log n)
    return logarithmicRecursiveFunc(n)
}

// Iterative
function logarithmicIterativeFunc(n) {
    while (n > 1) { // O(log n)
        n = Math.floor(n / 2)
    }
}

// Binary Search (Ordered Array)
const array = [] // ordered array
for (let i = 0; i <= 1024; i++) array.push(i)
const target = 564 // find value
function binarySearch(array, target, start = 0, end = array.length - 1) {
    if (start > end) return false
    let middle = Math.floor((start + end) / 2) // O(log n)
    if (array[middle] === target) return true

    if (array[middle] > target) return binarySearch(array, target, start, middle - 1)
    else return binarySearch(array, target, middle + 1, end)
}
const resultBinarySearch = binarySearch(array, target)