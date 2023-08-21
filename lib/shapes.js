const Circle =
const Triangle =
const Square = 




class Shape {
    constructor({ shape, shapeColor, text, textColor }) {

        
    }
};

class Circle extends Shape {};

class Triangle extends Circle {};

class Square extends Triangle {};






function generateShapes({ shape, shapeColor, text, textColor}){
    return `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
    `

};



module.exports = generateShapes;


{/* <rect width="100%" height="100%" fill="blue" />

<circle cx="150" cy="100" r="80" fill="green" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">POOP</text> */}