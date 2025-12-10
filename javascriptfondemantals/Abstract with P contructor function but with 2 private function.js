class Calc {
  constructor (a,b) {
    this.a=a;
    this.b=b;
  }
  add(x,y) {
    this.a+=x;
    this.b+=y;
    this.#privatef("add",x,y);
    return this.a+this.b;
  }
  subst(k,h) {
    this.a-=k;
    this.b-=h;
    this.#privatef("subst",k,h)
    return this.b-this.a;
  }
  #privatef(operation,ya,p) {
    return `${operation} ${ya} : ${p} `
  }
}
  const insta=new Calc(0,0);
  console.log(insta.add(1,1));
  console.log(insta.subst(2,3));
  console.log(insta.subst(0,2));
  console.log(insta.add(0,1));
