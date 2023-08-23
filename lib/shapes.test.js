const { Circle, Triangle, Square } = require('./shapes');

describe(Circle, () => {
    it('should return a pink circle', () => {
        let circle = new Circle({
            shapeColor: 'pink'
        });

        const expected = `<circle cx="150" cy="100" r="80" fill="pink"/>`
    
        expected(circle.render()).toEqual(expected);

    })
});

describe(Triangle, () => {
    it('should return a pink triangle', () => {
        let triangle = new Triangle({
            shapeColor: 'pink'
        });

        const expected = `<polygon points="150,20 230,180 70,180" fill="pink" />`
    
        expected(triangle.render()).toEqual(expected);

    })
});

describe(Square, () => {
    it('should return a pink circle', () => {
        let square = new Square({
            shapeColor: 'pink'
        });

        const expected = `<rect width="100%" height="100%" fill="pink" />`

        expected(square.render()).toEqual(expected);

    })
});