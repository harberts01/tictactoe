
const button = document.querySelectorAll("#gameBtn");
const restartBtn = document.querySelector("  #restartButton");
const cell = document.querySelector("#cell");
const modalHeader = document.querySelector("#ModalLabel");
const modal = document.querySelector("#Modal");
let currentPlayer = "X";

//possible win situations for cellIndexes.
let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
//player arrays are filled when a button is clicked
let playerO = [];
let playerX = [];

playGame();//function called to begin game.

function playGame(){
    
    button.forEach(button => button.addEventListener("click", () => {
        button.className = 'btn btn-lg btn-primary w-50 m-5';//changes button visual from dark to primary on X's move
        button.textContent = `${currentPlayer}`;//manipulates text inside button to label appropriate player
        button.style.fontSize = '40px';// manipulates button font size to create a more visually appeling aspect.
        let index = button.getAttribute("cellIndex");//retrieves index attribute given to buttons in HTML so that it can be logged
            if(currentPlayer == "O"){//this if statement manipulates the buttons when it is O's turn; also pushes index numbers to correct player arrays.
                button.className = 'btn btn-lrg btn-danger w-50 m-5'
                playerO.push(Number(index));
            }else{
                playerX.push(Number(index));
            };
        window.setTimeout(function(){
            $('#Modal').modal('hide');
        }, 1100);
        
        winCheck(playerO)
        winCheck(playerX)
        changePlayer();//this will alternate players after a move is selected and also update Modal text
        
    }));


};






function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    modalHeader.textContent = `It's ${currentPlayer}'s Turn!`
    if(winCheck(playerO) === true){
        window.location.replace("winner.html")
    }else if(winCheck(playerX) === true){
        window.location.replace("winnerX.html")
    }else if(playerO.length === 4 && playerX.length === 5){
        modalHeader.textContent = `It's a Tie! Let's Play Again!`
    }
      
};

//this function will create a win scenario. win will = true when the if statement conditions
//have been met. 


function winCheck(playerArry){
    
     for(let i = 0; i < winConditions.length; i++){
        
        if (winConditions[i].every(elem => playerArry.includes(elem))){
            return true

        }        
    } return false;
}





restartBtn.addEventListener("click", () => {
    window.location.replace("game.html")
});




    


