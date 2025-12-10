function calculate(a, b,c) {
    if (arguments.length === 1) {
        return a * a; // Square if one argument is passed
    } else if (arguments.length === 2) {
        return a + b; // Add if two arguments are passed
    } else { return a+b*a ;}
}

// Example Usage
console.log(calculate(5));       // Output: 25 (Square of 5)
console.log(calculate(5, 3));    // Output: 8 (5 + 3)
console.log(calculate(2,2,2))
