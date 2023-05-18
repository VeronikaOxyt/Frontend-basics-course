function simpleComposite(n) {
    if (typeof(n) !== 'number' || n>1000) { 
        return 'Данные неверны'; }
    if (n===1) { 
        return '1 не явл. ни простым, ни сложным числом';}
    if (n===0) { 
        return '0 не явл. ни простым, ни сложным числом';}
    let array = [2];
    for(let i = 1; i<Math.floor(n/2-1); i++) {
        array.push(i+2); }
    if(array.some((value) => 
    n%value===0 && n!==value)) {
        return `Число ${n} - составное число`; }
    return `Число ${n} - простое число`; 
}
module.exports = simpleComposite