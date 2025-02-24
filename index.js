let rockHuman = document.getElementById("rockHuman");
let paperHuman = document.getElementById("paperHuman");
let scissorsHuman = document.getElementById("scissorsHuman");

let rockCPU = document.getElementById("rockCPU");
let paperCPU = document.getElementById("paperCPU");
let scissorsCPU = document.getElementById("scissorsCPU");

let humanResult = document.getElementById("humanResult");
let cpuResult = document.getElementById("cpuResult"); 

let winner = document.getElementById("winner");
let roundNum = document.getElementById("roundNum");
let whoWin = document.getElementById("winner");

let begin = document.getElementById("start");
let round = 0;

begin.addEventListener('click', () => {
    round++;
    roundNum.textContent = round;
    const min = 1;
    const max = 3;
    humanResult.textContent = "Choose quickly";
    cpuResult.textContent = "Picking...";
    whoWin.textContent = "Who will win...";
    begin.style.visibility = "Hidden";

    rockHuman.addEventListener('click', () => {
        let choice = Math.floor(Math.random() * max) + min;
        
        humanResult.textContent = "You picked Rock";
        
        switch(choice){
            case 1:
                cpuResult.textContent = "CPU picked Rock";
                winner.textContent = "It's a Draw";
                begin.style.visibility = "visible";
                begin.textContent = "Next Round";
                break;

            case 2:
                cpuResult.textContent = "CPU picked Paper";
                winner.textContent = "CPU wins!!";
                begin.style.visibility = "visible";
                begin.textContent = "Next Round";
                break;

            case 3:
                cpuResult.textContent = "CPU picked Scissors";
                winner.textContent = "Player wins!!";
                begin.style.visibility = "visible";
                begin.textContent = "Next Round";
                break;
        }
    });

    paperHuman.addEventListener('click', () =>{
        let choice = Math.floor(Math.random() * max) + min;

        humanResult.textContent = "You picked Paper";

        switch(choice){
            case 1:
                cpuResult.textContent = "CPU picked Rock";
                winner.textContent = "Player wins!!";
                begin.style.visibility = "visible";
                begin.textContent = "Next Round";
                break;

            case 2:
                cpuResult.textContent = "CPU picked Paper";
                winner.textContent = "It's a draw!!";
                begin.style.visibility = "visible";
                begin.textContent = "Next Round";
                break;

            case 3:
                cpuResult.textContent = "CPU picked Scissors";
                winner.textContent = "CPU wins!!";
                begin.style.visibility = "visible";
                begin.textContent = "Next Round";
                break;
        }
    });

    scissorsHuman.addEventListener('click', () => {
        let choice = Math.floor(Math.random() * max) + min;

        humanResult.textContent = "You picked Scissors";

        switch(choice){
            case 1:
                cpuResult.textContent = "CPU picked Rock";
                winner.textContent = "CPU wins!!";
                begin.style.visibility = "visible";
                begin.textContent = "Next Round";
                break;

            case 2:
                cpuResult.textContent = "CPU picked Paper";
                winner.textContent = "Player wins!!";
                begin.style.visibility = "visible";
                begin.textContent = "Next Round";
                break;

            case 3:
                cpuResult.textContent = "CPU picked Scissors";
                winner.textContent = "It's a draw";
                begin.style.visibility = "visible";
                begin.textContent = "Next Round";
                break;
        }
    });
})