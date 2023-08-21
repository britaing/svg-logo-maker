const inquirer = require('inquirer');
const fs = require('fs');
const generateShapes = require('./lib/shapes');

const questions = () => inquirer.prompt([
    {
        name: 'shape',
        type: 'list',
        choices: ['circle', 'triangle', 'square']
    },
    {
        name: 'shapeColor',
        type: 'input',
        message: 'In which color would you prefer the shape to appear? You can input either a color keyword or a hexadecimal value.'
    },
        {
        name: 'text',
        type: 'input',
        message: 'Please enter up to three characters',
    },
    {
        name: 'textColor',
        type: 'input',
        message: 'In which color would you prefer the text to appear? You can input either a color keyword or a hexadecimal value.'
    }
   
]);

questions().then((answers) => {
    if (answers.text.length > 3) {
        console.log('Text must be no more than 3 characters in length; please try again');
    } else {
        if (answers.shape === 'circle') {
            console.log('circle');
        } else if (answers.shape === 'triangle') {
            console.log('triangle');
        } else if (answers.shape === 'square') {
            console.log('square');
        }
    }
    const generated = generateShapes(answers);

    fs.writeFileSync('logo.svg', generated);
    console.log('Success! your svg file has been generated!');



});


function init() { }
init();
