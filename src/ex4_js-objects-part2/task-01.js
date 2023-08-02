function prototypeSearch(key, obj) {
    if (key in Object.getPrototypeOf(obj)) {
        return obj[key]; }
    return undefined;
}
module.exports = prototypeSearch;
