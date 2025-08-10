const math = require('./math.js');

// Pruebas para factorial
test('factorial de 5 es 120', () => {
    expect(math.factorial(5)).toBe(120);
});

test('factorial de 0 es 1', () => {
    expect(math.factorial(0)).toBe(1);
});

// Pruebas para fibonacci
test('fibonacci de 6 es 8', () => {
    expect(math.fibonacci(6)).toBe(8);
});

test('fibonacci de 1 es 1', () => {
    expect(math.fibonacci(1)).toBe(1);
});