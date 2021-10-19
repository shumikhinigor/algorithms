/* --- Big O(n2) --- */
function quadraticFunc(n) {
    for (let i = 0; i < n; i++) { // O(n)
        for (let j = 0; j < n; j++) { // O(n2)
            console.log(i, j)
        }
    }
}