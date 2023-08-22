

class Shape {
    constructor({ shape, shapeColor, text, textColor }) {
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor

    }
};

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"`;
    }
};
class Triangle extends Circle {
    render() {
        return `<polygon points="150,20 230,180 70,180" fill="${this.shapeColor}" />`;
    }
};

class Square extends Triangle {
    render() {
        return `<rect width="100%" height="100%" fill="${this.shapeColor}" />`;
    }
};






function generateShapes({ shape, shapeColor, text, textColor }) {
    const shapeCreate = new Shape({ shape, shapeColor, text, textColor })
return 
    `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">

        ${shapeCreate}

    </svg>`
    ;
}



module.exports = generateShapes;




/* <text x="150" y="125" font-size="60" text-anchor="middle" fill=`${this.textColor}`>`${this.text}`</text> */




// } else {
//     if (answers.shape === 'circle') {
//         console.log('circle');
//     } else if (answers.shape === 'triangle') {
//         console.log('triangle');
//     } else if (answers.shape === 'square') {
//         console.log('square');
//     }
// }