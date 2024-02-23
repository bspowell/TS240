var woof = {
    barks: 'woof'
};
function getProperty(obj, key) {
    return obj[key];
}
console.log(getProperty(woof, 'barks'))