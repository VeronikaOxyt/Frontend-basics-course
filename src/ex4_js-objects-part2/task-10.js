function reverseString(str) {
    let arr = str.split('');
    arr.reverse();
    let string = arr.join('');
return string;
}
module.exports = reverseString