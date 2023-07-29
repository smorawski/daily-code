enum BracketType {
  Square = "Square",
  Round = "Round",
  Curly = "Curly",
}

const OpeningBracket = {
  "(": BracketType.Round,
  "[": BracketType.Square,
  "{": BracketType.Curly,
};

const ClosingBracket = {
  ")": BracketType.Round,
  "]": BracketType.Square,
  "}": BracketType.Curly,
};

class UnexpectedCharacterError {
  public message = "Unexpected character found";
}

class UnexpectedBracketClosureError {
  public message = "Unexpected bracket closure";
}

class MissingBracketClosureError {
  public message = "Missing bracket closure";
}

export interface ValidParenthesesOptions {
  throwUnknownCharacters: boolean;
}

export default (string: string, options?: ValidParenthesesOptions): boolean => {
  const throwUnknownCharacters =
    options?.throwUnknownCharacters === false ? false : true;

  try {
    const leftoverBrackets = string.split("").reduce((acc, current) => {
      // new openning
      if (OpeningBracket[current]) {
        return [...acc, OpeningBracket[current]];
      }

      // closure
      if (ClosingBracket[current]) {
        const lastOpening = acc.pop();
        // no openning or closure do not match last opening
        if (!lastOpening || lastOpening !== ClosingBracket[current]) {
          throw new UnexpectedBracketClosureError();
        }
        // return all opening besides "popped" one
        return acc;
      }

      // unknown character
      if (throwUnknownCharacters) {
        throw new UnexpectedCharacterError();
      }

      return acc;
    }, [] as string[]);

    if (leftoverBrackets.length > 0) {
      throw new MissingBracketClosureError();
    }
  } catch (err) {
    if (err instanceof UnexpectedCharacterError) {
      throw err;
    }
    return false;
  }

  return true;
};
