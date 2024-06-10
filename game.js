let userScore = 0;
let compScore =0;
const choices = document.querySelectorAll(".choice");
const msgPara = document.querySelector("#msg");
const userScr = document.querySelector("#user-score");
const compScr = document.querySelector("#comp-score");

const genComChoice = ()=>{
    const choice = ["rock" , "paper" , "scissors"];
    const ranIdx = Math.floor(Math.random()*3);
    return choice[ranIdx];
}
const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScr.innerText = userScore;
       
        msgPara.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msgPara.style.backgroundColor = "green";
    } else{
        compScore++;
        compScr.innerText = compScore;
        console.log("you are lose");
        msgPara.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msgPara.style.backgroundColor = "red";
    }
}
const drawGame = ()=>{
    
    msgPara.innerText = "Game was Draw. Play again. ";
    msgPara.style.backgroundColor = "#081b31";
}
const playGame=(userChoice)=>{
   
    
    //computer choice
    const comChoice = genComChoice();
   
    if(userChoice === comChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = comChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = comChoice === "scissors" ? false : true;

        } else{
            userWin = comChoice === "rock" ? false: true;
        }
        showWinner(userWin,userChoice,comChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click" , ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
     
    })

})