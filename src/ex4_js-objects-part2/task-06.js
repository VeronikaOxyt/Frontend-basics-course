function upperRegisterAll(str) {
    let arr = str.split(' ');
    let arrBox = [];
    arr.forEach((value, index) => { 
        let valueBox = value;
        valueBox = value[0].toUpperCase() + value.slice(1);
        arrBox[index] = valueBox; });
    let string = '';
    arrBox.map(item => {
        string += item + ' '; });
return string.trim();
}
module.exports = upperRegisterAll