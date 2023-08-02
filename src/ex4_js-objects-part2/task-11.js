function repeatSymbol(str) {
    let repeat = 0;
    let string = str;
    let dublic = string[0];
for (let index = 0; index < string.length; ++index) {
    if(string[index] === dublic) {
        string = string.slice(0, index) + string.slice(+index + 1);
        ++repeat;
        index -= 1; }
}
console.log(`'${dublic}' - ${repeat}`);
if(string.length !== 0) {
    repeatSymbol(string); }
return;
}
module.exports = repeatSymbol