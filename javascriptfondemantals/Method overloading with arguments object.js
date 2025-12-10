function add() {
  if (arguments.length === 1) {
    let a = arguments[0];
    console.log(`The addition is ${a + a}`);
    return a + a;
  } else if (arguments.length === 2) {
    let a = arguments[0];
    let b = arguments[1];
    console.log(`The addition is ${a + b}`);
    return a + b;
  } else if (arguments.length === 3) {
    let a = arguments[0];
    let b = arguments[1];
    let c = arguments[2];
    console.log(`The addition is ${a + b + c}`);
    return a + b + c;
  } else {
    console.log("The input is invalid");
      return null;
  }
}

// Testing the function
add(1);
add(1, 2);
add(1, 2, 3);
add();
add();
add(2,4);
