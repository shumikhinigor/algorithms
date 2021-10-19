# Algorithms

### Orders of Growth

All examples in files

* **O(1)** - constant
* **O(log n)** - logarithmic
* **O(n)** - linear
* **O(n log n)** - linearithmic
* **O(n<sup>2</sub>)** - quadratic
* **O(n<sup>3</sup>)** - cubic
* **O(2<sup>n</sup>)** - exponential
* **O(n!)** - factorial

### Common Mistakes

#### O(2n) === O(n)
```
function twoLoops(a) {
    for (let i = 0; i < a; i++) {
        // do something
    }

    for (let i = 0; i < a; i++) {
        // do something
    }
}
```

#### O(a + b) !== O(2n)
```
function twoInputsAdd(a, b) {
    for (let i = 0; i < a; i++) {
        // do something
    }

    for (let i = 0; i < b; i++) {
        // do something
    }
}
```

#### O(a * b) !== O(n<sup>2</sup>)
```
function twoInputsMult(a, b) {
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
            // do something
        }
    }
}
```