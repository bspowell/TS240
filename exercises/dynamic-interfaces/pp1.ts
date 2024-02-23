interface Person {
  name: string
  age: number
}

interface Employee extends Person {
  employeeId: number
}

let employee: Employee = {
  name: 'bob',
  age: 22,
  employeeId: 1
}