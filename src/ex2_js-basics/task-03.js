function EvenUneven(array) {
    let EvenElem = 0;
    let UnevenElem = 0;
    let zeroCounter = 0;
    array.forEach(value => {
        if (typeof(value) === 'number') {
            if(value === 0) {
                zeroCounter++; }
            else if(value % 2 === 0) {
                EvenElem++;
            } else if(value % 2 === 1) {
                UnevenElem++; }  
        }
    })
    return [EvenElem, UnevenElem, zeroCounter];
}

module.exports = EvenUneven