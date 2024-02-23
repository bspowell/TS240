interface UserIndex {
  [key: number]: string;
}

const objIndex: UserIndex = {
  1: "Jane",
  2: "30",
  3: "female",
};

// console.log(Object.keys(objIndex).every((key) => typeof key === "number"));