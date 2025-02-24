let rockHuman = document.getElementById("rockHuman");
let paperHuman = document.getElementById("paperHuman");
let scissorsHuman = document.getElementById("scissorsHuman");

let humanResult = document.getElementById("humanResult");
let cpuResult = document.getElementById("cpuResult"); 

let winner = document.getElementById("winner");
let roundMatch = document.getElementById("round");
let roundNum = document.getElementById("roundNum");
let whoWin = document.getElementById("winner");

let begin = document.getElementById("start");

let round = 0;
let cpuScore = 0;
let playerScore = 0;
let scorePlayer = document.getElementById("scorePlayer")
let scoreCPU = document.getElementById("scoreCPU");

let gameEnd = false;

begin.addEventListener('click', () => {
    
    scoreCPU.textContent = cpuScore;
    scorePlayer.textContent = playerScore;
    
    round++;
    roundNum.textContent = round;
    const min = 1;
    const max = 3;

    humanResult.textContent = "Choose quickly";
    cpuResult.textContent = "Picking...";
    whoWin.textContent = "Who will win...";
    begin.style.visibility = "Hidden";

    let choice = Math.floor(Math.random() * max) + min;

    rockHuman.addEventListener('click', () => {
        
        humanResult.textContent = "You picked Rock";
        switch(choice){
            case 1:
                cpuResult.textContent = "CPU picked Rock";
                winner.textContent = "It's a Draw";
                begin.style.visibility = "visible";
                begin.textContent = "Next Round";
                choice = null;
                break;

            case 2:
                cpuResult.textContent = "CPU picked Paper";
                winner.textContent = "CPU wins!!";
                begin.style.visibility = "visible";
                begin.textContent = "Next Round";
                cpuScore++;
                choice = null;
                break;

            case 3:
                cpuResult.textContent = "CPU picked Scissors";
                winner.textContent = "Player wins!!";
                begin.style.visibility = "visible";
                begin.textContent = "Next Round";
                playerScore++;
                choice = null;
                break;
        }
        finish();
    });

    paperHuman.addEventListener('click', () =>{
        humanResult.textContent = "You picked Paper";

        switch(choice){
            case 1:
                cpuResult.textContent = "CPU picked Rock";
                winner.textContent = "Player wins!!";
                begin.style.visibility = "visible";
                begin.textContent = "Next Round";
                playerScore++
                choice = null;
                break;

            case 2:
                cpuResult.textContent = "CPU picked Paper";
                winner.textContent = "It's a draw!!";
                begin.style.visibility = "visible";
                begin.textContent = "Next Round";
                choice = null;
                break;

            case 3:
                cpuResult.textContent = "CPU picked Scissors";
                winner.textContent = "CPU wins!!";
                begin.style.visibility = "visible";
                begin.textContent = "Next Round";
                cpuScore++;
                choice = null;
                break;
        }
        finish();
    });

    scissorsHuman.addEventListener('click', () => {
        humanResult.textContent = "You picked Scissors";

        switch(choice){
            case 1:
                cpuResult.textContent = "CPU picked Rock";
                winner.textContent = "CPU wins!!";
                begin.style.visibility = "visible";
                begin.textContent = "Next Round";
                cpuScore++
                choice = null;
                break;

            case 2:
                cpuResult.textContent = "CPU picked Paper";
                winner.textContent = "Player wins!!";
                begin.style.visibility = "visible";
                begin.textContent = "Next Round";
                playerScore++;
                choice = null;
                break;

            case 3:
                cpuResult.textContent = "CPU picked Scissors";
                winner.textContent = "It's a draw";
                begin.style.visibility = "visible";
                begin.textContent = "Next Round";
                choice = null;
                break;
        }
        finish();
    });
});

function finish(){
    if(round == 5){
        begin.textContent = "Finish";
        begin.addEventListener('click', () => {
            begin.remove();
            roundNum.style.visibility = "Hidden";
            roundMatch.textContent = "Match End";
            
            if(playerScore>cpuScore){
                whoWin.textContent = `Player won ${playerScore}
                - ${cpuScore}`;
                return;
            }else if(cpuScore>playerScore){
                whoWin.textContent = `CPU won ${cpuScore} 
                - ${playerScore}`;
                return;
            }else{
                whoWin.textContent = `Match Draw ${playerScore}
                 - ${cpuScore}`;
                 return;
            }
        })
    }
}