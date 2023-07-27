import longestCommonPrefix from "./longest-common-prefix";

describe("longestCommonPrefix", () => {
  it.each([
    [["apple", "appreciation", "appetizer", "apprehend"], "app"],
    [["car", "cat", "cab"], "ca"],
    [["talk", "car", "bar"], ""],
  ])("should return prefix", (array, expected) => {
    expect(longestCommonPrefix(array)).toEqual(expected);
  });
});
