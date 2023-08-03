function filterCallback(array, Callback) {
    let newArr = [];
    for(i = 0; i < array.length; i++) {
        if(Callback(array[i], i, array)) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

module.exports = filterCallback