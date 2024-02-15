const book = {
  title: "The Great Gatsby",
  author: {
    firstName: "F. Scott",
    lastName: "Fitzgerald",
  },
  publicationDate: 1925,
  genres: ["Tragedy", "Realism"],
};

interface book {
  title: string;
  author: Author;
  publicationDate: number;
  genres: string[]
}

interface Author {
  firstName: string;
  lastName: string;
}