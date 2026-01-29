/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

const camelCase = function (input) {
  const inputArray = input.split(" ");
  const convertedArray = [];
  
  for (let i = 0; i < inputArray.length; i++) {
    if (i === 0) {
      convertedArray.push(inputArray[i]);
    } else {
      convertedArray.push(inputArray[i].charAt(0).toUpperCase() + inputArray[i].slice(1));
    }
  }
  
  return convertedArray.join("");
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy cornerstone")); //loopyCornerstone
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious

module.exports = camelCase;
