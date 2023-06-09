function checkKey(key, object) {
    if (!(key in object)) { 
        // eslint-disable-next-line no-param-reassign
        object[key] = 'new'; }
    return object;
}
module.exports = checkKey