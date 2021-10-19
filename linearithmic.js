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

    const middle = Math.floor(array.length / 2) // O(log n)
    const left = array.slice(0, middle)
    const right = array.slice(middle, array.length)

    return merge(mergeSort(left), mergeSort(right))
}
const resultMergeSort = mergeSort([12, 3, 16, 6, 5, 1])
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