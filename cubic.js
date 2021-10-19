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