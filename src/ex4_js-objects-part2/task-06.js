function upperRegisterAll(str) {
    let string = str[0].toUpperCase() + str.slice(1);
for (let i = 0; i < string.length; i++) {
    if(string[i] === " ") {
        string = string.slice(0, i+1) + string[i+1].toUpperCase() + string.slice(i+2);
    }
}
return string;
}
module.exports = upperRegisterAll