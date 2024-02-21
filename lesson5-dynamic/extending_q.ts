interface User {
  id: string | number;
  name: string;
}

interface Student extends User {
  id: number;
  courses: string[];
}