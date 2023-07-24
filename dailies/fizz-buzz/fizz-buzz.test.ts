import fizzBuzz from "./fizz-buzz";

describe("fizzBuzz", () => {
  it("should call callback with proper combination of fizz, buzz and numbers", () => {
    const input = 15;
    const callback = jest.fn();
    fizzBuzz(input, { callback });

    const output = [
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
      11,
      "Fizz",
      13,
      14,
      "FizzBuzz",
    ];
    expect(callback.mock.calls).toEqual(output.map((el) => [el]));
  });

  it("should accept different multiplayers for fizz and buzz", () => {
    const input = 15;
    const callback = jest.fn();
    fizzBuzz(input, { callback, fizzMultiplayer: 4, buzzMultiplayer: 6 });

    const output = [
      1,
      2,
      3,
      "Fizz",
      5,
      "Buzz",
      7,
      "Fizz",
      9,
      10,
      11,
      "FizzBuzz",
      13,
      14,
      15,
    ];
    expect(callback.mock.calls).toEqual(output.map((el) => [el]));
  });
});
