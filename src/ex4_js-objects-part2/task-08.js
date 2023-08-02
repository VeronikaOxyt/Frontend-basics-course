function lowerCamelCase(str) {
    let arr = str.toLowerCase().split(' ');
    let arrBox = [];
    arr.map((item, index) => {
         arrBox[index] = item[0].toUpperCase() + item.slice(1)
    });
    arrBox[0] = arrBox[0].toLowerCase();
    return arrBox.join('');
}
module.exports = lowerCamelCase