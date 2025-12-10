class Calc {
  #a;
  #b;
  constructor () { 
    this.#a=Number(prompt("Enter the value of this.#a or #a : "));
    this.#b=Number(prompt("Enter the value of this.#b or #b : "));}
  add() { return this.#a+this.#b;
  }
  substract() {  return  this.#b-this.#a ;}
  multiply() { return this.#a*this.#b ;}
  division() { if (this.#a !== 0) {return this.#b/this.#a;} else { return "division by zero is invalid"}
}
}
const result= new Calc();
console.log("Addition : ", result.add());
console.log("Substraction :",result.substract());
console.log("Multiplication : ",result.multiply());
console.log("Division : ",result.division());
