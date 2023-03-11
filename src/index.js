import './style.css';
import setupBoard from "./setupDOM";
import player from './player';
import ship from './ship';
import updateDom from './updateDOM';

setupBoard();

const playerBoard = document.getElementById("playerBoard");
const computerBoard = document.getElementById("computerBoard");

const player1 = new player("Teibok");
const player2 = new player("George");

/* Create some ships on both players */
player1.gameBoard.addShip(0,0,"horizontal",new ship(5));
player1.gameBoard.addShip(1,1,"horizontal",new ship(4));
player1.gameBoard.addShip(2,2,"horizontal",new ship(3));
player1.gameBoard.addShip(3,3,"horizontal",new ship(3));
player1.gameBoard.addShip(4,4,"horizontal",new ship(2));

player2.gameBoard.addShip(0,0,"horizontal",new ship(5));
player2.gameBoard.addShip(1,1,"horizontal",new ship(4));
player2.gameBoard.addShip(2,2,"horizontal",new ship(3));
player2.gameBoard.addShip(3,3,"horizontal",new ship(3));
player2.gameBoard.addShip(4,4,"horizontal",new ship(2));

updateDom(player1.gameBoard.getBoard(), "playerBoard");
updateDom(player2.gameBoard.getBoard(), "computerBoard");
/* End of adding ships */

const playerBoardHandler = function(event){
    const boardCellDiv = event.target;
    const cellID = boardCellDiv.getAttribute("id");
    if(cellID){

    }
}

const computerBoardHandler = function(event){
    const boardCellDiv = event.target;
    const cellID = boardCellDiv.getAttribute("id");
    if(cellID){
        const idNo = cellID.replace(/[^0-9]/g,"");
        const status = player2.cellStatus(Math.trunc(idNo/10), idNo%10);
        if(status[0] === false){
            if(status[1] === true){
                console.log("Ship has been hit!");
            }else{
                console.log("Has hit an empty space");
            }
        }
    }
}

playerBoard.addEventListener("click", playerBoardHandler);
computerBoard.addEventListener("click", computerBoardHandler);