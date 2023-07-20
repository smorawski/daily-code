import findMissingNumber from "./find-missing-number";

describe("findMissingNumber", () => {
  it.each([
    [[3, 1, 4, 6, 2], 5],
    [[1, 2, 4, 5], 3],
    [[14, 8, 12, 16, 19, 13, 20, 9, 7, 2, 3, 11, 1, 4, 15, 6, 10, 18, 5], 17],
  ])("should return missing number", (input, output) => {
    expect(findMissingNumber(input)).toEqual(output);
  });

  it("should throw an error, if there are no missing number", () => {
    expect(() => findMissingNumber([4, 2, 3, 1])).toThrowError(
      "No missing number found!"
    );
  });

  it("should throw an error, if there are more than one missing numbers", () => {
    expect(() => findMissingNumber([4, 2, 3, 1, 7])).toThrowError(
      "Found more than one missing number!"
    );
  });

  it("should throw an error, if input is an empty array", () => {
    expect(() => findMissingNumber([])).toThrowError("Input array is empty!");
  });
});
