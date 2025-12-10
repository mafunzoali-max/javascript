class Calc {
  publicfun1 (a,b,c) {
    return this.#privatefun(a+b+c*a) ;
  }
  publicfun2 (x,y)  { 
    return this.#privatefun(x**2+y);
  }
  publicfun3 () {
    return this.#privatefun("i love you my suite heart")}
  
  #privatefun (p)  {
    return ` outcome ${p}`;
  }
}

const insta1= new Calc();
console.log(insta1.publicfun1(1,2,3));
console.log(insta1.publicfun2(3,5));
console.log(insta1.publicfun3());
console.log(insta1.publicfun1(2,4,3));
console.log(insta1.publicfun2(2,5));