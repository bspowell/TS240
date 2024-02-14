function formatName(options) {
    var _a, _b, _c;
    var fname = (_a = options.firstName) !== null && _a !== void 0 ? _a : 'John';
    var lname = (_b = options.lastName) !== null && _b !== void 0 ? _b : 'Doe';
    var title = (_c = options.title) !== null && _c !== void 0 ? _c : '';
    return "".concat(title, " ").concat(fname, " ").concat(lname);
}
var formattedName = formatName({
    firstName: "Jane",
    lastName: "Smith",
    title: "Dr.",
});
console.log(formattedName); // "Dr. Jane Smith"
console.log(formatName({})); // John Doe
