type User = {
  name: string
  ages: number
  [key: string]: string | number; // must have string and number as already defined
}

let employeeUser: User = {
	name: 'bob',
  ages: 10,
  job: 'teacher'
}