function upperRegisterAll(str) {
    let arr = str.split(' ');
    let arrBox = [];
    arr.map((item, index) => {
       arrBox[index] = item[0].toUpperCase() + item.slice(1)
    });
        return arrBox.join(' ');
}
module.exports = upperRegisterAll