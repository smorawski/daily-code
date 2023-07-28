export type LinkedList<T = number> = {
  value: T;
  next?: LinkedList<T>;
};

// complexity O(n)
export default function <T>(list: LinkedList<T>) {
  let workingList = list;
  let result;

  while (true) {
    const { value, next } = workingList;

    result = { value, next: result };

    if (!next) {
      break;
    }

    workingList = next;
  }

  return result;
}
