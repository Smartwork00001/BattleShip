const gameboard = require("./gameboard");
const ship = require("./ship");

const gameBoard = new gameboard();

gameBoard.addShip(1,1,"horizontal",new ship(5));