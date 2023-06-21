function sliceArr(array, begin, end) {
    let arr = [];
    if (begin !== undefined && end !== undefined) {
        array.forEach((item, index) => {
            if (index >= +array.length * (begin < 0) + begin &&
                 index < +array.length * (end < 0) + end) {
                arr.push(item); }
        })
    }
    if (begin !== undefined && end === undefined) {
        array.forEach((item, index) => {
            if (index >= array.length * (begin < 0) + begin) {
                arr.push(item); }
        })
    }
    if (begin === undefined && end === undefined) {
        arr = array;
    }
    if (begin === undefined && end !== undefined) {
        array.forEach((item, index) => {
       if (index < +array.length * (end < 0) + end) {
           arr.push(item); }
   })
    }
   return arr;
} 
module.exports = sliceArr