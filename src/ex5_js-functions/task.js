let Calculator = {
    result : 0,
    getResult() {
        return this.result;
    },
    reset() {
        this.result = 0;
      return this.result;
    },
    add(val) {
        if(val === undefined){
        return Calculator.add;
        }
        Calculator.result += val; 
        return Calculator.add;
    },
    subtract(val) {
        if(val === undefined){
            return Calculator.subtract;
        }
        Calculator.result -= val;
        return Calculator.subtract;
    },
    divide(val) {
        if(val === undefined){
            return Calculator.divide;
        }
        Calculator.result /= val;
        return Calculator.divide;
    },
    multiply(val) {
        if(val === undefined){
            return Calculator.multiply;
        }
        Calculator.result *= val;
        return Calculator.multiply;
    }
  };

  module.exports = Calculator