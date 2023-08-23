const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
    it('should return a pink circle with white text that reads wee ', () => {
        const circle = new Circle({
            shapeColor: 'pink',
            text: 'wee',
            textColor: 'white'
    
    });
    
    
    

    expect(circle.render()).toEqual(
        `<circle cx="150" cy="100" r="80" fill="pink"/>
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="white">wee</text>`

    );

    });




});


describe('Triangle', () => {
    it('should return a pink triangle with white text that reads wee ', () => {
        const triangle = new Triangle({
            shapeColor: 'pink',
            text: 'wee',
            textColor: 'white'
    
    });
    
    
    

    expect(triangle.render()).toEqual(
        `<polygon points="150,20 230,180 70,180" fill="pink" />
        <text x="150" y="130" font-size="35" text-anchor="middle" fill="white"> wee </text>`

    );

    });




});

describe('Square', () => {
    it('should return a pink square with white text that reads wee ', () => {
        const square = new Square({
            shapeColor: 'pink',
            text: 'wee',
            textColor: 'white'
    
    });
    
    
    

    expect(square.render()).toEqual(
         `<rect width="100%" height="100%" fill="pink" />
        <text x="150" y="110" font-size="60" text-anchor="middle" fill="white"> wee </text>`

    );

    });




});
