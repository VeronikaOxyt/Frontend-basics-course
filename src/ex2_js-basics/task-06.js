function simpleComposite(n) {
    let answer;
    if (typeof(n) !== 'number' || n>1000 || n<1) { 
        answer = 'Данные неверны';
    }
    else {
        let indicator = true;
        let array = [2];
        for(let i = 1; i<Math.floor(n/2-1); i++) {
            array.push(i+2); }
        array.forEach(value => {
            if (n%value===0 && n!==value) {
                indicator = false;
                answer = `Число ${n} - составное число`;
            }
        })
        if (indicator) {
         answer = `Число ${n} - простое число`;
        }
    }
    return answer;
}
module.exports = simpleComposite