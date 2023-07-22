import checkForPalindrome from "./check-for-palindrome";

describe("checkForPalindrome", () => {
  it.each([
    ["radar", true],
    ["bandaid", false],
    ["Was it a car or a cat I saw?", true],
    ["I am not a palindrome", false],
    ["I - am - mai", true],
  ])("should decide if a string is a palindrome", (input, output) => {
    expect(checkForPalindrome(input)).toEqual(output);
  });
});
