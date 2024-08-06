import { add } from "./addition";

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number for a single number", () => {
  expect(add("1")).toBe(1);
});

test("returns the sum of two numbers separated by a comma", () => {
  expect(add("1,5")).toBe(6);
});

test("handles new lines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("handles custom delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("throws an error for negative numbers", () => {
  expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
  expect(() => add("//;\n1;-2;3;-4")).toThrow(
    "Negative numbers not allowed: -2, -4"
  );
});
