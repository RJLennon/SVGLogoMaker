const inquirer = require('inquirer');
const fs = require('fs');

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

//function to generate SVG content

const svgContent = ({text, textcolor, shape, shapecolor}) => {
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="${shapecolor}"/>
        <text x="50" y="50" font-size="20" text-anchor="middle" fill="${textcolor}">${text}</text>
    </svg>`;
};
