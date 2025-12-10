//define parent class
class Calculator {
  //define parent class's constructor function
  constructor (operation) {
    this.operation=operation;
  }
  //define general fun that wil be automatically inherited by child classes
  operationtype() { console.log(`the operation is ${this.operation}`);}
  //define abstract function(s) (this os private fu or protected fun) that will will must be implemented in all created child classes 
  Calculation() {
    throw new error("this Calculation() function must be used in all created child classes")
  }
}
  class Add extends Calculator {
    constructor (a,b) {
      super("Addition");
      this.a=a;
      this.b=b;
    }
    Calculation() { 
      console.log(this.a*this.b);// we did not impliment return expression since we will have the new keyword while you are defining the instances or objects of children classes
       }
  }
  class Mult extends Calculator {
    constructor (x,y) {
      super("Multiplication");
      this.x=x;
      this.y=y;
     
    }
  Calculation() {
    console.log(this.x*this.y);
  }
  }
  const insta1= new Add(0,1);
  const insta2= new Mult(1,1);
  insta1.operationtype();
  insta2.operationtype();
  insta1.Calculation();
  insta2.Calculation();
  insta1.Calculation();
  insta2.Calculation();
//child classes zina zote zina operation that why we have use that operation in parent class and then the child classes inherited that operation from their Mother
  
  
