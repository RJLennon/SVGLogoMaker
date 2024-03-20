
//create a Circle class
class Circle {
    constructor(color) {
        this.color = color;
    }
    //method to render shape
    render() {
        return `<circle cx="50" cy="50" r="50" fill="${this.color}"/>`;
    }
}

//create a Square class
class Square {
    constructor(color) {
        this.color = color;
    }
    //method to render shape
    render() {
        return `<rect width="50" height="100" fill="${this.color}"/>`;
    }
}

//create a Triangle class
class Triangle {
    constructor(color) {
        this.color = color;
    }
    //method to render shape
    render() {
        return `<polygon points="50,0 100,100 0,100" fill="${this.color}"/>`;
    }
}

module.exports = {Circle, Square, Triangle};