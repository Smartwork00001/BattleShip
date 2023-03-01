const gameboard = require("../gameboard");

const mockCreateShip = jest.fn();

mockCreateShip.mockReturnValue({squares: 5})

test("gameboard creates 10 * 10 board", ()=>{
    const gameBoard = new gameboard();
    const board = gameBoard.getBoard();
    expect(board.length).toBe(10);
    expect(board[6].length).toBe(10);
    expect(board[6][1].length).toBe(2);
    expect(board[6][1][0]).toBe(false);
    expect(board[6][1][1]).toBe(undefined);
})

test("hit function works", ()=>{
    const gameBoard = new gameboard();
    gameBoard.hit(1,1);
    expect(gameBoard.isHit(1,1)).toBe(true);
    expect(gameBoard.isHit(0,0)).toBe(false);
})

test("add a ship works", ()=>{
    const gameBoard = new gameboard();
    expect(gameBoard.addShip(1,1,"horizontal",mockCreateShip())).toBe(true);
    expect(gameBoard.addShip(3,1,"vertical",mockCreateShip())).toBe(false);
    expect(gameBoard.addShip(6,1,"rhorizontal",mockCreateShip())).toBe(false);
    expect(gameBoard.addShip(5,1,"rvertical",mockCreateShip())).toBe(false);
    expect(gameBoard.addShip(4,1,"horizontal",mockCreateShip())).toBe(false);
    expect(gameBoard.addShip(5,1,"horizontal",mockCreateShip())).toBe(false);
    expect(gameBoard.addShip(6,1,"horizontal",mockCreateShip())).toBe(false);
    expect(gameBoard.addShip(0,1,"rhorizontal",mockCreateShip())).toBe(false);
    
    expect(gameBoard.canPlaceShip(1,1,"horizontal",5)).toBe(false);
})