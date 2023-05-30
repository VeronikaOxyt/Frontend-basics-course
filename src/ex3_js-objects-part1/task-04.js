function checkKey(string, object) {
    if (!(string in object)) { 
        const objBox = object;
        objBox[string] = 'new'
        return console.log(object); }
    return console.log(object);
}
module.exports = checkKey