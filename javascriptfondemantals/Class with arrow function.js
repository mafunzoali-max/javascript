class Counter {
  constructor() {
    this.count = 0;
  }

  startCounting() {
    setTimeout(() => {
      this.count++;
      console.log(this.count); // 'this' correctly refers to the Counter instance
    }, 1000);
  }
}

const counter = new Counter();
counter.startCounting(); // Output: 1 after 1 second
