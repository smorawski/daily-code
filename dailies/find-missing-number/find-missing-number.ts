export default (input: number[]): number => {
  const sorted = input.sort((a, b) => a - b);

  const min = sorted[0];
  const max = sorted[sorted.length - 1];

  const length = max - min;

  if (length <= 0 || isNaN(length)) {
    throw new Error("Input array is empty!");
  }

  const missingNumbers = Array(length)
    .fill(null)
    .reduce((acc, _, index) => {
      const checkedNumber = index + min;
      if (input.includes(checkedNumber)) {
        return acc;
      } else {
        return [...acc, checkedNumber];
      }
    }, []);

  if (missingNumbers.length > 1) {
    throw new Error("Found more than one missing number!");
  }

  if (missingNumbers.length === 0) {
    throw new Error("No missing number found!");
  }

  return missingNumbers[0];
};
