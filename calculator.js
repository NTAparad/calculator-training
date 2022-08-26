class Calculator {
  calculate(number1, number2, method) {
    method.cal();
  }
}

class Addition {
  cal(number1, number2){
    return number1 + number2;
  }
}

class Subtraction {
  cal(number1, number2){
    return number1 - number2;
  }
}

class Division  {
  cal(number1, number2){
    if(number2 === 0) {
      return "khong thuc hien duoc";
    } 
    else {
      return number1 / number2;
    }
  }
}

class Multiple {
  cal(number1, number2){
    return number1 * number2;
  }
}


let calculator = new Calculator();
let addition = new Addition();

let abc = calculator.calculate(12, 13, addition);
console.log(abc);
