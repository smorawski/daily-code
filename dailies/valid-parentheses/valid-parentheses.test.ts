import validParentheses from "./valid-parentheses";

describe("validParentheses", () => {
  it.each([
    ["([]{}())", true],
    ["([{}))", false],
    ["()[{}]", true],
  ])("for string '%s' should return '%s'", (input, output) => {
    expect(validParentheses(input)).toEqual(output);
  });

  it("should throw UnexpectedCharacter error, if non bracket was passed", () => {
    const input = "{(a)[]}";

    expect(() => validParentheses(input)).toThrow({
      message: "Unexpected character found",
    } as Error);
  });

  it("should NOT throw UnexpectedCharacter error, if non bracket was passed, but option was turned off", () => {
    const input = "{(a)[]}";

    expect(validParentheses(input, { throwUnknownCharacters: false })).toEqual(
      true
    );
  });
});
