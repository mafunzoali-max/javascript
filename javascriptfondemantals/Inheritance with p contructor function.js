class Calc {
  constructor(a,b) {
    this.a=a;
    this.b=b;
  }
  operation1() {  
    return`this is : ${this.a} and ${this.b}`;}
    
  add(x,y) { this.a=x;
             this.b=y;
             return this.a+this.b;
  }
  mult() { let  x1=1;
           let  x2=2;
           return x1*x2;}
  div(k) { this.a/=k ;
  return k ;}
  
}
class child1class extends Calc {  
  constructor (k,h) {
    super("mtoto","Mama");//calling parent constructor function
  }}
class  child2class extends Calc {
  constructor (x2,y2,z) {
    super("kaka","Baba"); //invoking parent constructor function
    this.x2=x2;
    this.y2=y2;
    this.z=z;
  }
  child2fun() { return `Mr ${this.x2} ${this.y2} loves his ${this.z}`;}
  
}


const insta = new child1class (0,0);
const insta1= new child2class ( "abdoul","Karenzo","Father Balterme Omar");
console.log(insta1.child2fun())
console.log(insta.operation1());
console.log(insta.add(2,4));
console.log(insta.mult());
console.log(insta.operation1());
console.log(insta.div(4));

