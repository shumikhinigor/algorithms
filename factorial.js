/* --- Big O(n!) --- */
function factorialFunc(n) {
    if (n === 0) return console.log('OK')

    for (let i = 0; i < n; i++) factorialFunc(n - 1)
}
const resultFactorialFunc = factorialFunc(3)
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