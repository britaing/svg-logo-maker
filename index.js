const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./lib/shapes');

const questions = () => inquirer.createPromptModule([
    {
        name: 'text',
        type: 'input',
        message: 'Please enter up to three characters'
    },
    {
        name: 'textColor',
        type: 'input',
        message: 'In which color would you prefer the text to appear? You can input either a color keyword or a hexadecimal value.'
    },
    {
        name: 'shape',
        type: 'list',
        choices: ['circle', 'triangle', 'square']
    },
    {
        name: 'shapeColor',
        type: '',
        message: 'In which color would you prefer the shape to appear? You can input either a color keyword or a hexadecimal value.'
    }
]);

questions().then((answers) => {
    const generated = generateSVG(answers);
    fs.writeFileSync('logo.svg', generated)
}).then(() => console.log('Success! your svg file has been generated!'));

function init(){}
init();
