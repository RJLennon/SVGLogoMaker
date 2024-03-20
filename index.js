const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes');

//array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter text (maximum 3 characters)',
        name: 'text',
        validate: function (text) {
            if (text.length > 3) {
                return 'Text must be 3 characters or less';
            }
            return true;
        }
      },
      {
        type: 'input',
        message: 'Enter a the text color (keyword or hex value)',
        name: 'textcolor',
      },
      {
        type: 'list',
        message: 'Choose a shape to generate',
        name: 'shape',
        choices: ["Circle","Square","Triangle"],
      },
      {
        type: 'input',
        message: 'Enter a the shape color (keyword or hex value)',
        name: 'shapecolor',
      },
];

//conditional statement to display the shape
function renderShape(shape, shapecolor) {
    if (shape === "Circle") {
        return new Circle(shapecolor).render();
    } else if (shape === "Square") {
        return new Square(shapecolor).render();
    } else if (shape === "Triangle") {
        return new Triangle(shapecolor).render();
    }
}


//function to generate SVG content
const svgContent = ({text, textcolor, shape, shapecolor}) => {
    return `<svg version="1.1"
    width="500" height="500"
    xmlns="http://www.w3.org/2000/svg">

 ${renderShape(shape, shapecolor)}

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>

</svg>`;
};

//function to write SVG content to file
function writeToFile(fileName, data) {
  //Write data to the file
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('An error occured',err);
      return;
    }
    console.log('file created!');
  });
};

//function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const svgData = svgContent(answers);
        writeToFile('logo.svg', svgData);
    });
};

//function call to initialize app
init();