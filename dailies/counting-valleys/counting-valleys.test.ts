import countingValleys from "./counting-valleys";

describe("countingValleys", () => {
  it.each([
    ["UDDDUDUU", 1],
    ["DDUUDDUDUUUD", 2],
    ["UDUUDUDD", 0],
  ])("should return proper number of valleys", (input, output) => {
    expect(countingValleys(input)).toEqual(output);
  });

  it("should throw error, if input had incorrect character", () => {
    const input = "UDDUTDD";

    expect(() => countingValleys(input)).toThrowError(
      "Incorrect character in trip input!"
    );
  });

  it("should throw error, if trip hasn't finish at sea level", () => {
    const input = "DDUDUUU";

    expect(() => countingValleys(input)).toThrowError(
      "Trip didn't finish at sea level!"
    );
  });
});
