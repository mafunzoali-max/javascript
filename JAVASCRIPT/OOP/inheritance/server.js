class Person {
 
  live() { 
    
    console.log('everyone lives')
  }
}
class Programmer extends Person {
  code() {
    console.log("Programmer codes")
  }
  
  
}

class Teacher extends Person {
  teach() {
    console.log("teacher instruct")
  }
  
}

class Doctor extends Person {
  
}
class Outsiders extends Doctor  {
  
}
class Citizens extends Outsiders {
  
}
const Abdoul=new Programmer()
const Willi=new Outsiders()
const Burundians=new Citizens()

Abdoul.live()
Willi.live()
Burundians.live()
willi.teach()
