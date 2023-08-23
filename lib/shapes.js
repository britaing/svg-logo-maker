class Shape {
    constructor({ shapeColor, text, textColor }) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor
    };
};
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    };
};
class Triangle extends Shape {
    render() {
        return `<polygon points="150,20 230,180 70,180" fill="${this.shapeColor}" />
        <text x="150" y="130" font-size="35" text-anchor="middle" fill="${this.textColor}"> ${this.text} </text>`;
    }
};
class Square extends Shape {
    render() {
        return `<rect width="100%" height="100%" fill="${this.shapeColor}" />
        <text x="150" y="110" font-size="60" text-anchor="middle" fill="${this.textColor}"> ${this.text} </text>`;
    }
};
module.exports = { Circle, Triangle, Square };