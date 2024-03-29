var origBoard;
const HumanPlayer='0';
const AIplayer='X';
 const winCombos=[
    [0 , 1, 2],
    [3 , 4, 5],
    [6 , 7, 8],
    [0 , 3, 6],
    [1 , 4, 7],
    [2 , 5, 8],
    [0 , 4, 8],
    [6 , 4, 2]

 ]
const cells= document.querySelectorAll(".cell");

startGame();

function startGame(){
    document.querySelector(".endGame").style.display="none";
    origBoard=Array.from(Array(9).keys());
    
    //console.log(origBoard);
    for (var i = 0; i <cells.length; i++) {
         cells[i].innerText='';
         cells[i].style.removeProperty('background-color');
         cells[i].addEventListener('click' ,turnClick, false);
    }
}

function turnClick(square) {
    turn(square.target.id, HumanPlayer);
}

function turn(squareID, player) {
    origBoard[squareID] = player;
    document.getElementById(squareID).innerText = player;
}



