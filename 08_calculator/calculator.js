const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let total = array.reduce((sum, value) => sum + value, 0);
  return total;
};

const multiply = function(array) {
	let total = array.reduce((multiplied, value) => multiplied * value);
  return total;
};

const power = function(a, b) {
    return a ** b;
};

const factorial = function(a, total = 0) {
  if (a === 0 || a === 1) return 1;
  total = a * factorial(a - 1, total);
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
