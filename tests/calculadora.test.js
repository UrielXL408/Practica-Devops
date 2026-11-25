const { sumar, restar } = require("../src/calculadora");

test("suma 2 + 3 = 5", () => {
   expect(sumar(2, 3)).toBe(5);
});

test("suma 5 - 3 = 2", () => {
   expect(restar(5, 3)).toBe(2);
});