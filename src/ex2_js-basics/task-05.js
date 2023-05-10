function maximum(array) {
    let maxValue = 0;
   array.forEach(value => {
       if (value > maxValue) {
           maxValue = value;
       }
   })
   return maxValue;
}
module.exports = maximum