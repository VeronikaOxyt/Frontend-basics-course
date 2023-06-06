function lowerCamelCase(str) {
    let string = str.toLowerCase();
for (let i = 0; i < string.length; i++) {
    if(string[i] === " ") {
        string = string.slice(0, i) + string[i+1].toUpperCase() + string.slice(i+2);
        i = --i;
    }
}
return string;
}

module.exports = lowerCamelCase