const DEFAULT_FIZZ_MULTIPLAYER = 3;
const DEFAULT_BUZZ_MULTIPLAYER = 5;
const DEFAULT_CALLBACK = console.log;

export interface FizzBuzzOptions {
  fizzMultiplayer?: number;
  buzzMultiplayer?: number;
  callback?: (output: number | string) => void;
}

export const getFizzBuzzSequence = (
  numberOfElements: number,
  options: Required<
    Pick<FizzBuzzOptions, "fizzMultiplayer" | "buzzMultiplayer">
  >
): Array<number | string> => {
  return Array(numberOfElements)
    .fill(null)
    .map((_, index) => {
      const currentNumber = index + 1;
      const isFizz = currentNumber % options.fizzMultiplayer === 0;
      const isBuzz = currentNumber % options.buzzMultiplayer === 0;
      if (isFizz && isBuzz) {
        return "FizzBuzz";
      }
      if (isFizz) {
        return "Fizz";
      }
      if (isBuzz) {
        return "Buzz";
      }
      return currentNumber;
    });
};

export default (input: number, options: FizzBuzzOptions) => {
  const mergedOptions: Required<FizzBuzzOptions> = {
    fizzMultiplayer: options.fizzMultiplayer || DEFAULT_FIZZ_MULTIPLAYER,
    buzzMultiplayer: options.buzzMultiplayer || DEFAULT_BUZZ_MULTIPLAYER,
    callback: options.callback || DEFAULT_CALLBACK,
  };

  const outputs = getFizzBuzzSequence(input, mergedOptions);

  outputs.forEach((output) => {
    mergedOptions.callback(output);
  });
};
