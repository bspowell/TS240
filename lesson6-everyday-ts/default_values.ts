type NameOptions = {
  firstName?: string;
  lastName?: string;
  title?: string;
};

function formatName(options: NameOptions): string {
  let fname = options.firstName ?? 'John'
  let lname = options.lastName ?? 'Doe'
  let title = options.title ?? ''
  return `${title} ${fname} ${lname}`
}

const formattedName = formatName({
  firstName: "Jane",
  lastName: "Smith",
  title: "Dr.",
});

console.log(formattedName); // "Dr. Jane Smith"
console.log(formatName({})); // John Doe