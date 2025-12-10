class Pi {
  #myinf;
  #myinff1;
  #a;
  #b;

  constructor() {
    this.#myinf = "Abdoul";
    this.#myinff1 = "Kagabo";
    this.#a = Number(prompt("Enter the value of a:"));
    this.#b = Number(prompt("Enter the value of b:"));
  }

  getInfo() {
    return `Jina lako wewe ni ${this.#myinf} and your buddy's name is: ${this.#myinff1}`;
  }

  setInfo({ myinf, myinff1 }) {
    if (myinf) this.#myinf = myinf;
    if (myinff1) this.#myinff1 = myinff1;
    return this.getInfo();
  }

  getSum() {
    return `The sum of a and b is: ${this.#a + this.#b}`;
  }
}

const myInfo1 = new Pi();
console.log(myInfo1.getInfo());
console.log(myInfo1.setInfo({ myinf: "Abu", myinff1: "Madja" })); // Fixed the misplaced parenthesis
console.log(myInfo1.getInfo());
console.log(myInfo1.setInfo({ myinf: "Madja", myinff1: "Kesho" }));

console.log(myInfo1.getSum());

