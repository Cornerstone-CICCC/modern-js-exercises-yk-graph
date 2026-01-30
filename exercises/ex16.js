/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const Vowels = "aeiouAEIOU";

const makeCaze = function (input, caze) {
  const toCamel = (str) => {
    const words = str.split(" ");
    const firstWord = words[0].toLowerCase();
    const otherWords = words.slice(1).map(word => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`).join("");
    return `${firstWord}${otherWords}`;
  }

  const toPascal = (str) => str.split(" ").map(word => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`).join("");

  const toSnake = (str) => str.split(" ").join("_");

  const toKebab = (str) => str.split(" ").join("-");

  const toTitle = (str) => str.split(" ").map(word => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`).join(" ");

  const toVowel = (str) => str.split("").map(char => Vowels.includes(char) ? char.toUpperCase() : char).join('')
  
  const toConsonant = (str) => str.split("").map(char => !Vowels.includes(char) ? char.toUpperCase() : char).join('')

  const toUpper = (str) => str.toUpperCase();

  const toLower = (str) => str.toLowerCase();

  const caseFunctions = {
    camel: toCamel,
    pascal: toPascal,
    snake: toSnake,
    kebab: toKebab,
    title: toTitle,
    vowel: toVowel,
    consonant: toConsonant,
    upper: toUpper,
    lower: toLower
  };

  let result = input;

  if (Array.isArray(caze)) {
    for (const c of caze) {
      result = caseFunctions[c](result);
    }
  } else {
    result = caseFunctions[caze](result);
  }

  return result;
};

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;
