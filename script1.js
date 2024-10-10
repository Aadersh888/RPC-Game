let userScore = 0;
let compScore = 0;



const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePare = document.querySelector("#user-score");
const compScorePare = document.querySelector("#comp-score");

const genCompchoice = ()=>{
    const option = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random()*3);
    return option[ranIdx];
}

const drawGame = ()=>{
    // console.log("game was Darw");
    msg.innerText = "Game was draw play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePare.innerText = userScore;
        // console.log("You win");
        msg.innerText = `You Win  ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePare.innerText = compScore;
        // console.log("you lose");
        msg.innerText = ` You Lose  ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice)=>{
    console.log("user choice = ", userChoice);
    // Geanrate comp choice;
    const compChoice = genCompchoice();
    console.log("comp choice = ", compChoice);


    if(userChoice===compChoice){
        // Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            // paper scissors  = comp;
            userWin = compChoice === "paper"? false:true;
        } else if(userChoice==="paper"){
            userWin = compChoice==="scissors"? false:true;
        }
        else{
            userWin = compChoice ==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice wa clicked", userChoice);
        playGame(userChoice);
    });
});