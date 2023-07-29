const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
  let total = 0;
  for (let num of numArray) {
    total += num;
  }
  return total;
};

const multiply = function(numArray) {
  let total = 1;
  for (let num of numArray) {
    total *= num;
  }
  return total;
};

const power = function(num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function(num) {
  let total = 1;
  if (num > 0) {
    for (let i = num; i > 0; i--) {
      total *= i;
    }
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
