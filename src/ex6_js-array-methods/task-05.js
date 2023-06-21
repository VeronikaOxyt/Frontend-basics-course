function mapCallback(array, Callback) {
    let newArr = [];
    for(i = 0; i < array.length; i++) {
        newArr.push(Callback(array[i], i, array));
    }
    return newArr;
}

module.exports = mapCallback