function pasteStr(str1, str2, n) {
    let string = str1;
    let counter = -1;
for (let i = 0; i < str1.length; i++) {
    if(str1[i] === " ") {
        ++counter;
        if (counter === n) {
            string = str1.slice(0, +i+1) + str2 + str1.slice(i);
            break;
        }
    }
}
return string;
}
module.exports = pasteStr