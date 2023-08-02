function pasteStr(str1, str2, n) {
    let arr = str1.split(' ');
    arr.splice(n+1, 0, str2);
    return arr.join(' ');
}
module.exports = pasteStr