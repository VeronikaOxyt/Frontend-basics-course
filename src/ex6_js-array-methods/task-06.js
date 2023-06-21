function reduceCallback(array, Callback, initialValue) {
    let previousValue = array[0];
    let i = 1;
    if(initialValue) {
        previousValue = initialValue;
        i = 0; }
    for(i; i < array.length; i++) {
        previousValue = Callback(previousValue, array[i], i, array); }
    return previousValue;
}

module.exports = reduceCallback