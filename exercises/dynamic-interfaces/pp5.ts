function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = {
  name: "John",
  age: 30,
};

const userName = getProperty(user, "name");
// Works, "name" is a key of user
const userAge = getProperty(user, "age");
// Works, "age" is a key of user
// const userZip = getProperty(user, "zip");
// Error, "zip" is not a key of user

console.log(userName);
// Output should be "John"
console.log(userAge);
// Output should be 30