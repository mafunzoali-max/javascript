class Counter {
  constructor() {
    this.count = 0;
  }

  startCounting() {
    setTimeout(function() {
      this.count++;
      console.log(this.count); // 'this' refers to the global object or undefined (in strict mode)
    }, 1000);
  }
}

const counter = new Counter();
counter.startCounting(); // Output: NaN or TypeError (in strict mode)
