// time compexity O((n-1)!)
// assuming that you can't return two same indexes!
export default (array: number[], target: number) => {
  const indexes: number[] = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        indexes.push(i, j);
        break;
      }
    }
    if (indexes.length > 0) {
      break;
    }
  }
  return indexes;
};

// time complexity O(n!)
// assuming that you can return two same indexes
// export default (array: number[], target: number) => {
//   const indexes: number[] = [];
//   for (var i = 0; i < array.length; i++) {
//     for (var j = i; j < array.length; j++) {
//       if (array[i] + array[j] === target) {
//         indexes.push(i, j);
//         break;
//       }
//     }
//     if (indexes.length > 0) {
//       break;
//     }
//   }
//   return indexes;
// };
