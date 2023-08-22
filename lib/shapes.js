const Circle =
const Triangle =
const Square =




    class Shape {
        constructor({ shape, shapeColor, text, textColor }) {


        }
    };

class Circle extends Shape { };
    render(){
       return `<circle cx="150" cy="100" r="80" fill="${shapeColor}"`;
    };
class Triangle extends Circle { };
    render() {
        return `<polygon points="150,20 230,180 70,180" fill="${shapeColor}" />`;
    };

class Square extends Triangle { };
    render() {
        return `<rect width="100%" height="100%" fill="${shapeColor}" />`;

    };





function generateShapes({ shape, shapeColor, text, textColor }) {
    return `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
    `

};



module.exports = generateShapes;


/* <rect width="100%" height="100%" fill="${shapeColor}" />

<circle cx="150" cy="100" r="80" fill="${shapeColor}"` />

<text x="150" y="125" font-size="60" text-anchor="middle" fill=`${textColor}`>`${text}`</text>

<polygon points="150,20 230,180 70,180" fill="${shapeColor}" />*/