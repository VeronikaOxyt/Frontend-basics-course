function compareArr(array) {
    return array.length && array.every((value, index) => 
        value === array[0]);
  }
  
module.exports = compareArr