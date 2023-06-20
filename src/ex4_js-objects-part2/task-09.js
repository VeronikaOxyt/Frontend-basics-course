function pasteStr(str1, str2, n) {
    let arr = str1.split(' ');
    let arrBox = arr.slice(0, n + 1);
    arrBox.push(str2); 
    arrBox = arrBox.concat(arr.slice(n + 1));
    let string = arrBox.join(' ');
return string;
}
module.exports = pasteStr