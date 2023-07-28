import reverseLinkedList from "./reverse-linked-list";

describe("reverseLinkedList", () => {
  it("should return reversed list", () => {
    const input = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: {
              value: 5,
            },
          },
        },
      },
    };

    const output = {
      value: 5,
      next: {
        value: 4,
        next: {
          value: 3,
          next: {
            value: 2,
            next: {
              value: 1,
            },
          },
        },
      },
    };

    expect(reverseLinkedList(input)).toEqual(output);
  });

  it("should return the same objext as input, if one level given", () => {
    const input = {
      value: 1,
    };

    const output = {
      value: 1,
    };

    expect(reverseLinkedList(input)).toEqual(output);
  });
});
