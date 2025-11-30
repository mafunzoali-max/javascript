class Person {
  constructor(name,age) {
    this.name=name
    this.age=age}
  publicmethod() {
    if (this.age>50) {
    console.log(`${this.name} is ${this.age} year old so ${this.name} is older`);
  }
  else {
console.log(`${this.name} is ${this.age} year old so ${this.name} is young`);
  }}
// you can see that when we are trying to differentiate constructor's p(s) (age,name are in camel notation) and getter and setter V's name ,age are in Pascal notation

    get Age() {
      return this.age
    }
    set Age(age) {
       this.age=age
    }
    get  Name() {
      return this.name
    }
    set Name(name) {
      this.name=name
      
    }
}
class House {
  // here residents are list/aray of persons so we gonna create an array as residents's argument
  constructor (address,residents) {
    this.address=address
    this.residents=residents
  }
// let use getter and setter methodes to access and manipulare data(parameters's values)
  getAddress() {
    return this.address;
  }
  setAddress(address) {
    this.address=address
  }
  getResidents() {
    return this.residents;
  }
  setResidents(residents) {
    this.residents=residents
  }
  // add new residents and use push() method (is use to extend(oradd) within array/list )
  addResidents(resident) {
    //we did'nt use return keyword bcs we don't need to get or obtain or find or return some value but only to extend or add some value
    this.residents.push(resident);
  }

}
// since we gonna have a list of residents(Persons) so we must create that list(Persons)
let Abdoul=new Person("Abdoul",26);
let Omar=new Person("Omar",95)
let Salima=new Person("Salima",24)
let r2="Salima";
let r3="Madja";
// create instance of House class and add the 3 people above
let omarHouse=new House(address= "Rumonge",residents=[Abdoul,Omar,Salima])
Abdoul.publicmethod()
Salima.publicmethod()
Omar.publicmethod()
// we get one array with 2 objects in class of House we did'nt create Abdoul ,Omar, Salima elts but we was able to add(extend) them in house instance this is invoke 'ABSTRACT'
console.log(omarHouse.getResidents())
// let create an other person that weed to add in our array/list by using push() method
let Madja=new Person("Madja",22);
// add the above Madja in the list/array of residents in omarHouse
omarHouse.addResidents(Madja)
// let's if Madja is add in list/array of omarHouse
console.log(omarHouse.getResidents())
// in OOP we can do extention outside of any class and change class's content without inheritance (look above ) and you can update and access the P's values(arguments) dynamically(look below)
//here we gonna use getter and setter variables for returning and updating value(s)
Abdoul.Age=36
console.log(Abdoul.Age)
Abdoul.publicmethod()
Abdoul.Age=59
console.log(Abdoul.Age)
Abdoul.publicmethod()
// here we gonna impliment getter and setter methods for returning  and updating value(s)
console.log(omarHouse.getAddress())
omarHouse.setAddress("Iteba")
console.log(omarHouse.getAddress())
// Abdoul's age
console.log(omarHouse.residents[0].age)
//salima's age
console.log(omarHouse.residents[2].age)
//  one of added resident's age (Madja)
console.log(omarHouse.residents[3].age)



