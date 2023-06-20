function reverseString(str) {
    let arr = str.split('');
    arr.reverse();
    console.log(arr);
    let string = arr.join('');
return string;
}
module.exports = reverseString