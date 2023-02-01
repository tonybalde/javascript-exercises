
// fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6) // returns the 4th member of the series: 3  (1, 1, 2, 3, 5, 8)

const fibonacci = function(count) {

    if (count < 0) return "OOPS";
    if (count === 0) return 0;
    let a = 0;
    let b = 1;
    for (let i = 1; i < count; i++) {
      let temp = b;
      b = a + b;
      a = temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
