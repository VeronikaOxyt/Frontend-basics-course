function everyCallback(array, Callback) {
    for(i = 0; i < array.length; i++) {
        if(!(Callback(array[i], i, array))) {
            return false;
        }
    }
    return true;
}

module.exports = everyCallback