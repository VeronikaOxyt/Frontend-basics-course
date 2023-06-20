function lowerCamelCase(str) {
    let string = str.toLowerCase();
    let arr = string.split(' ');
    let arrBox = [];
    arr.forEach((value, index) => { 
    let valueBox = value;
    if (index > 0) {
        valueBox = value[0].toUpperCase() + value.slice(1); }
    else valueBox = value[0].toLowerCase() + value.slice(1);
    arrBox[index] = valueBox; });
    string = '';
    arrBox.map(item => {
        string += item; });
return string;
}
module.exports = lowerCamelCase