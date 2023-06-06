const add = function (a, b) {
  const sum = a + b;
  return sum;
};

const subtract = function (a, b) {
  const total = a - b;
  return total;
};

const sum = function (array) {
  const total = array.reduce(function (p, c) {
    return p + c;
  }, 0)
  return total;
};

const multiply = function (array) {
  const total = array.reduce(function (p, c) {
    return p * c;
  }, 1)
  return total;
};

const power = function (n, e) {
  const total = n ** e;
  return total;
};

const factorial = function (num) {
  let total = 1
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
