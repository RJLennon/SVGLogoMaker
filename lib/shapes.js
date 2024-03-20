
//create a Circle class
class Circle {
    constructor(color) {
        this.color = color;
    }
    //method to render shape
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    }
}

//create a Square class
class Square {
    constructor(color) {
        this.color = color;
    }
    //method to render shape
    render() {
        return `<rect x="60" y="25" width="170" height="170" fill="${this.color}"/>`;
    }
}

//create a Triangle class
class Triangle {
    constructor(color) {
        this.color = color;
    }
    //method to render shape
    render() {
        return `<polygon points="150,10 280,160 20,160" fill="${this.color}"/>`;
    }
}

module.exports = {Circle, Square, Triangle};