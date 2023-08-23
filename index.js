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
        message: 'Please enter up to three characters'
    },
    {
        name: 'textColor',
        type: 'input',
        message: 'In which color would you prefer the text to appear? You can input either a color keyword or a hexadecimal value.'
    }

]);


questions().then((answers) => {
    if (answers.text.length > 3) {
      throw new Error('Text must be no more than 3 characters in length; please try again');
    } 
    
    const generated = generateShapes(answers);
    fs.writeFileSync('./dist/logo.svg', generated);
    console.log('Success! your svg file has been generated!');
});





