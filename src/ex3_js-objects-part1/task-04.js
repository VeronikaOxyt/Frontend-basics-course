function checkKey(key, object) {
    if (!(key in object)) { 
        const objBox = Object.assign({}, object);
        objBox[key] = 'new'; 
        return objBox; }
    const objBox = Object.assign({}, object);
    return objBox;
}
module.exports = checkKey