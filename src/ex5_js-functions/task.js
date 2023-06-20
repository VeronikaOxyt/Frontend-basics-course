let Calculator = {
    result : 0,
    getResult() {
        return console.log(this.result);
    },
    reset() {
        Object.defineProperty(Calculator, 'result', {
            value: 0 
          });
          return this;
    },
    add(val) {
        if(val === undefined){
            return this;
        }
        let resultBox = this.result;
        Object.defineProperty(Calculator, 'result', {
            value: +resultBox + val 
          });
          return this;
    },
    subtract(val) {
        if(val === undefined){
            return this;
        }
        let resultBox = this.result;
        Object.defineProperty(Calculator, 'result', {
            value: +resultBox - val
          });
          return this;
    },
    divide(val) {
        if(val === undefined){
            return this;
        }
        let resultBox = this.result;
        Object.defineProperty(Calculator, 'result', {
            value: +resultBox / val
          });
          return this;
    },
    multiply(val) {
        if(val === undefined){
            return this;
        }
        let resultBox = this.result;
        Object.defineProperty(Calculator, 'result', {
            value: +resultBox * val
          });
          return this;
    }
  };
  
  module.exports = getResult
  module.exports = reset
  module.exports = add
  module.exports = subtract
  module.exports = divide
  module.exports = multiply
  

