const findPrefix = (string1: string, string2: string) => {
  let prefix = "";
  for (var i = 0; i < string1.length; i++) {
    if (string1[i] === string2[i]) {
      prefix += string1[i];
    } else {
      break;
    }
  }
  return prefix;
};

export default (array: Array<string>): string => {
  return (
    array.reduce((prefix, current) => {
      if (prefix === null) {
        return current;
      }

      return findPrefix(prefix, current);
    }, null as null | string) || ""
  );
};
