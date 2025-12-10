class Student {
  constructor(name) {
    // Public property
    this.name = name;
    this.marks = [];
  }

  // Public method to add marks
  addMark(mark) {
    this.marks.push(mark);
    return `Mark ${mark} added for ${this.name}`;
  }

  // Public method to get the average mark
  getAverage() {
    return this.#calculateAverage(); // Calls private method
  }

  // Private method to calculate the average (hidden from the user)
  #calculateAverage() {
    const total = this.marks.reduce((sum, mark) => sum + mark, 0);
    return total / this.marks.length;
  }
}

// Usage
const student = new Student("Alice");
console.log(student.addMark(90)); // Outputs: Mark 90 added for Alice
console.log(student.addMark(80)); // Outputs: Mark 80 added for Alice
console.log(student.getAverage()); // Outputs: 85

// Trying to access private method directly (will throw an error)
// student.#calculateAverage();
