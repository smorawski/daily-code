const nonLetterOrNumberRegexp = new RegExp("[^a-zA-Z0-9]", "g");

export default (word: string) => {
  const inputTransformed = word
    .replace(nonLetterOrNumberRegexp, "")
    .toLowerCase();

  return (
    inputTransformed ===
    inputTransformed.split("").reverse().join("").toLowerCase()
  );
};
