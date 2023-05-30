function checkKey(string, object) {
    if (string in object) {
        return true; }
    return false;
}
module.exports = checkKey
