const { Triangle, Square, Circle } = require('./shapes');

describe("Triangle", () => {
    it("should create a new triangle with designated color", () => {
        const color = "blue";
        const shape = new Triangle(color);
        expect(shape.render()).toEqual('<polygon points="150,10 280,160 20,160" fill="blue"/>');
    });
});

describe("Square", () => {
    it("should create a new square with designated color", () => {
        const color = "yellow";
        const shape = new Square(color);
        expect(shape.render()).toEqual('<rect x="60" y="25" width="170" height="170" fill="yellow"/>');
    });
});

describe("Circle", () => {
    it("should create a new circle with designated color", () => {
        const color = "red";
        const shape = new Circle(color);
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red"/>');
    });
});