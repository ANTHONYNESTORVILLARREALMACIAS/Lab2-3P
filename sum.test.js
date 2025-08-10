const sum = require('./sum');

test('Suma de 2 + 2 debe ser 4', () => {
    expect(sum(2, 2)).toBe(4);
});