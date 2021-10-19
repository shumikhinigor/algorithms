/* --- Big O(1) --- */
function constantFunc() {
    console.log('Big O(1)') // O(1)
}

/* --- Big O(n) --- */
function linearFunc(arr) {
    for (let i = 0; i < arr.length; i++) { // O(n)
        console.log('Big O(n)')
    }
}

/* --- Big O(n2) --- */
function quadraticFunc(n) {
    for (let i = 0; i < n; i++) { // O(n)
        for (let j = 0; j < n; j++) { // O(n2)
            console.log(i, j)
        }
    }
}

/* --- Big O(n3) --- */
function cubicFunc(n) {
    for (let i = 0; i < n; i++) { // O(n)
        for (let j = 0; j < n; j++) { // O(n2)
            for (let k = 0; k < n; k++) { // O(n3)
                console.log(i, j, k)
            }
        }
    }
}

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


/* --- Big O(n log n) --- */
function linearithmicFunc(n) {
    const y = n
    while (n > 1) { // Big O(log n)
        n = Math.floor(n / 2)
        for (let i = 1; i <= y; i++) { // Big O(n)
            console.log(i)
        }
    }
}

// Merge
function merge(left, right) {
    const result = []
    let leftIndex = 0
    let rightIndex = 0
    while (leftIndex < left.length && rightIndex < right.length) { // O(n)
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

// Merge Sort
function mergeSort(array) { // O(n log n)
    if (array.length < 2) return array

    const middle = Math.floor(array.length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle, array.length)

    return merge(mergeSort(left), mergeSort(right)) // O(n)
}
// mergeSort([12, 3, 16, 6, 5, 1]) => merge([3, 12, 16], [1, 5, 6]) === [1, 3, 5, 6, 12, 16]
    // mergeSort([12, 3, 16]) => merge([12], [3, 16]) === [3, 12, 16]
        // mergeSort([12])
        // mergeSort([3, 16]) => merge([3], [16]) === [3, 16]
            // mergeSort([3])
            // mergeSort([16])
    // mergeSort([6, 5, 1]) => merge([6], [1, 5]) === [1, 5, 6]
        // mergeSort([6])
        // mergeSort([5, 1]) => merge([5], [1]) === [1, 5]
            // mergeSort([5])
            // mergeSort([1])
const resultMergeSort = mergeSort([12, 3, 16, 6, 5, 1])


/* --- Big O(2n) --- */
function exponentialFunc(n) {
    if (n === 0) return 0
    if (n === 1) return 1

    return exponentialFunc(n - 1) + exponentialFunc(n - 2)
}
// 0 1 2 3 4 5 6
// 0 1 1 2 3 5 8
// exponentialFunc(3)
    // exponentialFunc(2)
        // exponentialFunc(1)
        // exponentialFunc(0)
    // exponentialFunc(1)
const resultExponentialFunc = exponentialFunc(3)


/* --- Big O(n!) --- */
function factorialFunc(n) {
    if (n === 0) return console.log('OK')

    for (let i = 0; i < n; i++) factorialFunc(n - 1)
}
// 3! = 1 * 2 * 3 = 6
// factorialFunc(3)
    // factorialFunc(2)
        // factorialFunc(1)
            // factorialFunc(0) 1
        // factorialFunc(1)
            // factorialFunc(0) 2
    // factorialFunc(2)
        // factorialFunc(1)
            // factorialFunc(0) 3
        // factorialFunc(1)
            // factorialFunc(0) 4
    // factorialFunc(2)
        // factorialFunc(1)
            // factorialFunc(0) 5
        // factorialFunc(1)
            // factorialFunc(0) 6
const resultFactorialFunc = factorialFunc(3)