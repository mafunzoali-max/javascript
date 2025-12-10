class Square {
  constructor(side) {
    this.side=side
  }
  get area() {
    return this.side*this.side;
  }
  set Side(side) {
    this.side=side
  }
    
  }

let square1=new Square(3);
//console.log(square1.erea());// output: an  error since get is not a function is just the property or parameter for returning or accessing the value
console.log(square1.area);
square1.area=6;
//console.log(square1.set());// output: an  error since set is not a function is just the property or parameter for updating or changing the value
console.log(square1.area)

square1.Side=7
console.log(square1.area)

