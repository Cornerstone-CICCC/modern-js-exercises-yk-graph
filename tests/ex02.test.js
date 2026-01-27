const {conditionalSum, ErrorMessage} = require("../exercises/ex02");

test("sum all even numbers", () => {
  expect(conditionalSum([1, 2, 3, 4, 5], "even")).toBe(6);
});
test("sum all odd numbers", () => {
  expect(conditionalSum([1, 2, 3, 4, 5], "odd")).toBe(9);
});
test("sum all even numbers", () => {
  expect(conditionalSum([13, 88, 12, 44, 99], "even")).toBe(144);
});
test("return 0 if empty array", () => {
  expect(conditionalSum([], "odd")).toBe(0);
});

test("return error message if input is not an array", () => {
  expect(conditionalSum(undefined, "even")).toBe(ErrorMessage.NOT_ARRAY_VALUES);
  expect(conditionalSum('', "even")).toBe(ErrorMessage.NOT_ARRAY_VALUES);
  expect(conditionalSum(123, "even")).toBe(ErrorMessage.NOT_ARRAY_VALUES);
});

test("return error message if condition is not specified", () => {
  expect(conditionalSum([1, 2, 3], undefined)).toBe(ErrorMessage.INVALID_CONDITION);
  expect(conditionalSum([1, 2, 3], null)).toBe(ErrorMessage.INVALID_CONDITION);
});

test("return error message if condition is not 'even' or 'odd'", () => {
  expect(conditionalSum([1, 2, 3], "hoge")).toBe(ErrorMessage.WRONG_TYPE_CONDITION);
  expect(conditionalSum([1, 2, 3], 100)).toBe(ErrorMessage.WRONG_TYPE_CONDITION);
});
