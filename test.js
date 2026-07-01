
const {sum,fromEuroToDollar,fromDollarToYen,fromYenToPound} = require("./app.js");

test("adds 14 + 9 to equal 23",()=>{
    let total = sum (14,9);

    expect(total).toBe(23);

});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("1 dolar en yenes debería de dar 146,26 ", function () {
    const conversionDollToYen = fromDollarToYen(1);
    expect(conversionDollToYen).toBe(146.26);
});

test("1 Yen en Libras Esterlinas debería de dar 0,01",()=>{
    const conversionYenToLib = fromYenToPound(1)
    expect(conversionYenToLib).toBe(0.01);
})
