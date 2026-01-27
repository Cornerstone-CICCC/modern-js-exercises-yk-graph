/*
We'll be adding only the numbers in the array which match the given condition.

Instruction
Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

*/

const ErrorMessage = {
  NOT_ARRAY_VALUES: 'Input must be an array of numbers',
  INVALID_CONDITION: 'Please specify a condition',
  WRONG_TYPE_CONDITION: 'Condition must be "even" or "odd"',
}

const conditionalSum = function (values, condition) {
  if (values === undefined || values === null || !Array.isArray(values)) {
    return ErrorMessage.NOT_ARRAY_VALUES;
  }

  if (values.length === 0) {
    return 0;
  }

  if (condition === undefined || condition === null) {
    return ErrorMessage.INVALID_CONDITION;
  }

  if (condition !== 'even' && condition !== 'odd') {
    return ErrorMessage.WRONG_TYPE_CONDITION
  }

  if (condition === 'even') {
    return values.filter(num => num % 2 === 0).reduce((acc, sum) => acc + sum, 0);
  }

  if (condition === 'odd') {
    return values.filter(num => num % 2 !== 0).reduce((acc, sum) => acc + sum, 0);
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); // 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); // 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); // 144
console.log(conditionalSum([], "odd")); // 0

module.exports.conditionalSum = conditionalSum;
module.exports.ErrorMessage = ErrorMessage;
