calculate = {
    result : 0,
    getResult() {
        return console.log(this.result);
    },
    reset() {
        Object.defineProperty(calculate, 'result', {
            value: 0 
          });
          return this.result;
    },
    add(val) {
        if(val === undefined){
            return this.result;
        }
        let resultBox = this.result;
        Object.defineProperty(calculate, 'result', {
            value: +resultBox + val 
          });
          return this.result;
    },
    subtract(val) {
        if(val === undefined){
            return this.result;
        }
        let resultBox = this.result;
        console.log(resultBox);
        Object.defineProperty(calculate, 'result', {
            value: +resultBox - val
          });
          return this.result;
    },
    divide(val) {
        if(val === undefined){
            return this.result;
        }
        let resultBox = this.result;
        console.log(resultBox);
        Object.defineProperty(calculate, 'result', {
            value: +resultBox / val
          });
          return this.result;
    },
    multiply(val) {
        if(val === undefined){
            return this.result;
        }
        let resultBox = this.result;
        console.log(resultBox);
        Object.defineProperty(calculate, 'result', {
            value: +resultBox * val
          });
          return this.result;
    }
  };
  module.exports = getResult
  module.exports = reset
  module.exports = add
  module.exports = subtract
  module.exports = divide
  module.exports = multiply
  

