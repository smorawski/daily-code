import twoSum from "./two-sum";
describe("twoSum", () => {
  it.each([
    [[1, 2, 3, 4, 5, 6], 11, [4, 5]],
    [[12, 34, -1, 18], 11, [0, 2]],
    [[12, 34, -1, 18, 13], 120, []],
    [[0, 14, 20, 11], 20, [0, 2]],
    [[12, 15, 23, 48], 24, []],
  ])(
    "should return indexes of summed numbers",
    (inputArray, target, output) => {
      expect(twoSum(inputArray, target)).toEqual(output);
    }
  );
});
