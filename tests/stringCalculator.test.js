const { add } = require('../src/stringCalculator');

describe("String Calculator", () => {
  test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns number for a single input", () => {
    expect(add("1")).toBe(1);
    expect(add("7")).toBe(7);
  });

  test("returns sum of two comma-separated numbers", () => {
    expect(add("1,2")).toBe(3);
    expect(add("5,10")).toBe(15);
  });

  test("returns sum for multiple comma-separated numbers", () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });

  test("handles newlines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("10\n20\n30")).toBe(60);
  });

  test("supports custom delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//|\n4|5|6")).toBe(15);
  });

  test("throws error for single negative number", () => {
    expect(() => add("1,-2")).toThrow("negative numbers not allowed -2");
  });

  test("throws error for multiple negative numbers", () => {
    expect(() => add("-1,-2,3")).toThrow("negative numbers not allowed -1,-2");
  });
});
