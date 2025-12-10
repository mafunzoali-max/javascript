class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        // Separate function for sum
        function sumArray(total, mark) {
            return total + mark;
        }

        const total = this.marks.reduce(sumArray, 0);
        return total / this.marks.length;
    }
}

const student = new Student("Alice", [90, 80, 85]);
console.log(student.calculateAverage());  // Output: 85
