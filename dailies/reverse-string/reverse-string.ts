export default (word: string): string => {
  // Too easy?
  // return word.split('').reverse().join('')

  let reverseWord = "";

  for (var i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i].toString();
  }

  return reverseWord;
};
