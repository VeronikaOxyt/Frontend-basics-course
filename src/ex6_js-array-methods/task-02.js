function someCallback(array, Callback) {
    for(i = 0; i < array.length; i++) {
        if(Callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

module.exports = someCallback