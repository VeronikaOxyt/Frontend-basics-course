function getList(array) {
    if(array.length) {
        array.forEach(value => console.log(value));
    }
    console.log(array.length);
    return;
}

module.exports = getList