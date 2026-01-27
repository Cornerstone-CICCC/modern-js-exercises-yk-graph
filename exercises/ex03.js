/*
In this exercise, we will be counting the number of vowels that appear in a given string. 
For this exercise, consider the following to be vowels: a, e, i, o, and u.

Instruction
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

*/

const ErrorMessage = {
  INVALID_INPUT: "Invalid input: Input must be a string",
}

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

const numberOfVowels = function (data) {
  if (typeof data !== "string") {
    return ErrorMessage.INVALID_INPUT;
  }

  const lowerCaseData = data.toLowerCase().trim();
  const dataArray = lowerCaseData.split('');

  const vowelCount = dataArray.filter(char => VOWELS.includes(char)).length;
  return vowelCount;
};

console.log(numberOfVowels("orange")); // 3
console.log(numberOfVowels("cornerstone college")); // 7
console.log(numberOfVowels("aeiou")); // 5

module.exports.numberOfVowels = numberOfVowels;
module.exports.ErrorMessage = ErrorMessage;
