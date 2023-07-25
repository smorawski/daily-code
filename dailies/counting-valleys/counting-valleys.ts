export default (trip: string) => {
  const validatedTrip: Array<"U" | "D"> = trip.split("").map((char) => {
    if (char !== "U" && char !== "D") {
      throw new Error("Incorrect character in trip input!");
    }
    return char;
  });

  const result = validatedTrip.reduce(
    (acc, current) => {
      if (current === "D") {
        return {
          level: acc.level - 1,
          numberOfValleys: acc.numberOfValleys,
        };
      } else {
        return {
          level: acc.level + 1,
          numberOfValleys:
            acc.level === -1 ? acc.numberOfValleys + 1 : acc.numberOfValleys,
        };
      }
    },
    {
      level: 0,
      numberOfValleys: 0,
    }
  );

  if (result.level !== 0) {
    throw new Error("Trip didn't finish at sea level!");
  }

  return result.numberOfValleys;
};
