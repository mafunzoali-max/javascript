class PersonInfo {
  // creating privatedata(s) or privatefield(s)
  #detay1;
  #detay2;
  constructor (name,age){
    this.#detay1=name;
    this.#detay2=age;
  }
  getdetay() { return `Hello ${this.#detay1} is ${this.#detay2} your age?`}
  // fitst public function for modifying privatedata
  setdetay(name1,age1) { 
    if (name1) this.#detay1=name1;
    if (age1) this.#detay2=age1;
    return this.getdetay();
  } 
  // second public function for Alimo privatedata
  info(name2,age2) {
    if (name2) this.#detay1=name2;
    if (age2) this.#detay2=age2;
    return this.getdetay();
  }
}
const person1= new PersonInfo("Abdoul, ",26);
console.log(person1.getdetay());
console.log(person1.setdetay("Alimo, ",30));
console.log(person1.getdetay());
console.log(person1.setdetay("Tama, ",20));
console.log(person1.info("Sadam",45));
