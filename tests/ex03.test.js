const {numberOfVowels, ErrorMessage} = require("../exercises/ex03");

test("return number of vowels", () => {
  expect(numberOfVowels("orange")).toBe(3);
});
test("return number of vowels", () => {
  expect(numberOfVowels("cornerstone college")).toBe(7);
});
test("return number of vowels", () => {
  expect(numberOfVowels("aeiou")).toBe(5);
});
test("return 0 when no vowels are present", () => {
  expect(numberOfVowels("rhythm")).toBe(0);
});
test("counts vowels in uppercase string", () => {
  expect(numberOfVowels("ORANGE")).toBe(3);
});
test("counts vowels in mixed case string", () => {
  expect(numberOfVowels("HeLLo WoRLd")).toBe(3);
});
test("return error message for non-string input", () => {
  expect(numberOfVowels()).toBe(ErrorMessage.INVALID_INPUT);
});
test("return error message for non-string input", () => {
  expect(numberOfVowels(123)).toBe(ErrorMessage.INVALID_INPUT);
});
test("return error message for non-string input", () => {
  expect(numberOfVowels([])).toBe(ErrorMessage.INVALID_INPUT);
});
