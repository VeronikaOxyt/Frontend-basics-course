function sliceArr(array, begin = 0, end = array.length) {
    let arr = [];
    array.forEach((item, index) => {
        if (index >= +array.length * (begin < 0) + Number(begin) &&
                index < +array.length * (end < 0) + Number(end)) {
            arr.push(item); }
    })
   return arr;
} 
module.exports = sliceArr