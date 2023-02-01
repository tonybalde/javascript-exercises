const add = function(num1, num2) {
	return num1 + num2;

};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	
totalsum = 0;

  for (let i = 0; i < arr.length; i++){
    totalsum = totalsum + arr[i];
  }
  return totalsum;
};

const multiply = function(array) {

  return array.reduce((accumulator, nextItem) => accumulator * nextItem)
  
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(n) {
	
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;

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
