function EvenUneven(array) {
    let EvenElem = 0;
    let UnevenElem = 0;
    let zeroCounter = 0;
    array.forEach(value => {
        if (typeof(value) !== 'number') {
            return; }
        if(value === 0) {
            zeroCounter++;
        return; }
        if(value % 2 === 0) {
            EvenElem++;
        return; }
        if(value % 2 === 1) {
            UnevenElem++;
        return; }  
        })
    return [EvenElem, UnevenElem, zeroCounter];
}

module.exports = EvenUneven