class Calc {
  constructor (a,b) {
    this.a=a;
    this.b=b;
  }
  //define public functions
  add(x,y) { 
    this.a+=x;
    this.b+=y;
    return this.#privatef(this.a+this.b);
  }
  mult(z,t) {
    this.a*=z;
    this.b*=t;
    return this.#privatef(this.a*this.b);
    }
  subst(k) {
    this.a-=k;
    return this.#privatef(this.a);
  }
  //define private function
  #privatef(p) {
    
    return `${p}` ;
  }
}
const insta=new Calc(0,0);
console.log(insta.mult(2,4));
console.log(insta.add(2,3));
console.log(insta.mult(2,5));
console.log(insta.add(3,6));
console.log(insta.subst(2));