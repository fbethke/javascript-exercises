const add = function(input_1, input_2) {

  let result = input_1 + input_2;
  return result;
	
};

const subtract = function(input_1, input_2) {
	
  let result = input_1 - input_2;
  return result;
};

const sum = function(input) {
	
   let result = input.reduce((acc, current) => acc + current, 0);
   return result;

};

const multiply = function(input) {

    let result = input.reduce((acc, current) => acc * current, 1);
    return result;
};

const power = function(input_1, input_2) {

  let result = input_1 ** input_2;
  return result;
	
};

const factorial = function(input) {
  
  if (input === 0) {
    return 1;
  }

  let result = 1;

  for (let i = 2; i <= input; i++) {
    result *= i;
  }
  return result;
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
