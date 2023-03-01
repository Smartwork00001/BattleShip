const ship = require("../ship");

test("carrier", ()=>{
    const shipTest = new ship(5);
    expect(shipTest.getSquares()).toBe(5);
    expect(shipTest.isSunk()).toBe(false);
    shipTest.hit();
    shipTest.hit();
    shipTest.hit();
    shipTest.hit();
    expect(shipTest.isSunk()).toBe(false);
    shipTest.hit();
    expect(shipTest.isSunk()).toBe(true);
})