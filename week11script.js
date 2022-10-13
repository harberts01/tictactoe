
const button = document.querySelectorAll("#gameBtn");
const cell = document.querySelector("#cell");
const modalHeader = document.querySelector("#ModalLabel");
let currentPlayer = "X"
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
]
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
                playerO.push(index);
            }else{
                playerX.push(index);
            };
             
        winScenario();// calling winScenario after each move to ensure a win does not exist 
        changePlayer();//this will alternate players after a move is selected and also update Modal text
        
    }));   
};



console.log(playerO);
console.log(playerX);

function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    modalHeader.textContent = `It's ${currentPlayer}'s Turn!`  
};

//this function will create a win scenario. win will = true when the if statement conditions
//have been met. 
function winScenario(){
    let win = true; //console.logging as false consistently. Even when the scenario for "O" is a win. I am looking for this to flip to true
    //when player arrays and winConditions have been compared and a win condition exists in either of the player arrays.

    for(let i = 0; i<winConditions.length; i++){
        for(let j = 0; j<winConditions[i].length; j++){
            if(playerO.indexOf(winConditions[i][j]) === -1){
                win = false;
                break;
            }
        
        }
    } console.log(win);
}
