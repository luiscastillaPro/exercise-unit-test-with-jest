const { fromEuroToDollar } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    let total = fromEuroToDollar(3.5);
    expect(total).toBe(3.745);
})

const { fromDollarToYen } = require('./app.js')

test("Conversion from USD to JPY (1 USD = 149.03 JPY)", function() {
    let total = fromDollarToYen(10);
    expect(total).toBe(1490.3);
})

const { fromYenToPound } = require('./app.js')

test("Conversion from JPY to GBP (1 JPY = 0.0072 GBP)", function() {
    let total = fromYenToPound(1000);
    expect(total).toBe(7.2);
})