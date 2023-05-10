function compareArr(array) {
    let indicator = true;
    array.forEach((value, index, array) => {
        console.log(array[index]);
        if (index !== array.length-1) {
            if(array[index] !== array[index+1]) {
                indicator = false; }
        }
    })
    return indicator;
}
module.exports = compareArr