class Shape {
    area() {
        console.log("Area of shape");
    }
}

class Rectangle extends Shape {
    area(length, width) {
        return length * width;
    }
}

let rect = new Rectangle();
console.log(rect.area(5, 10)); // Output: 50

// since Rectangle class  inherits from shape class so every Rectangle instance has forms or faces one from Rectangle and another from shape this procedure is invoked "POLYMORPHISM"
