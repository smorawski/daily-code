import reverseString from "./reverse-string";

describe("reverseString", () => {
  it.each([
    ["hello", "olleh"],
    ["programming", "gnimmargorp"],
    ["", ""],
    ["21-07-2023", "3202-70-12"],
    [
      "There is no truth in flesh, only betrayal.",
      ".layarteb ylno ,hself ni hturt on si erehT",
    ],
    ["How about a \n new line!", "!enil wen \n a tuoba woH"],
  ])("should reverse the string", (input, output) => {
    expect(reverseString(input)).toEqual(output);
  });
});
