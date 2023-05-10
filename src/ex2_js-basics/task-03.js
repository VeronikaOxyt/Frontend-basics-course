function EvenUneven(array) {
    let EvenElem = 0;
    let UnevenElem = 0;
    let nullElem = 0;
    
    array.forEach(value => {
        if (typeof(value) === 'number') {
            if(value !== 0 && value % 2 === 0) {
                EvenElem++;
            } else if(value % 2 === 1) {
                UnevenElem++;
            } else if(value === 0) {
                nullElem++;
            }
        }
    })
    let list = [EvenElem, UnevenElem, nullElem];
    return list;
}

module.exports = EvenUneven