const choices = document.querySelectorAll("img");

choices.forEach((choice) => {
    choice.addEventListener("click", (evt) => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const genComputerChoice = () => {
    const choiceList = ["Rock","Paper","Scissor"];
    let idx = Math.floor(Math.random() * 3);
    return choiceList[idx];
}
const drawGame = (userChoice,compChoice) => {
    result.innerText = `Game is Draw! You Choose ${userChoice} , Comp Choose ${compChoice}. Try Again!`;
    document.getElementById("result-msg").style.color = "black";
        document.getElementById("result-msg").style.border= "5px solid black";
}
const playGame = (userChoice) => {
    const compChoice = genComputerChoice();
    if(userChoice === compChoice){
        drawGame(userChoice,compChoice);
    }
    else {
        userWin = true;
        if((userChoice === "Rock" && compChoice === "Paper" )|| (userChoice === "Scissor" && compChoice === "Rock") || (userChoice === "Paper" && compChoice === "Scissor") ){
            userWin = false;
        }
        showResult(userWin,userChoice,compChoice);
        score_board(userWin);
    }
}

let userScore = 0;
let compScore = 0;

const score_board = (userWin) => {
    if(userWin){
        userScore++;
        let u_score = document.querySelector("#user-score");
        u_score.innerText = `${userScore}`;
        u_score.style.color = " #7FFF00";
    }
    else{
        compScore++;
        let c_score = document.querySelector("#comp-score");
        c_score.innerText = `${compScore}`;
        c_score.style.color = "#00FFFF";
    }
}

let result = document.querySelector("#result-msg");

const showResult = (userWin,userChoice,compChoice) => {
    if(userWin){
        result.innerText = `You Win! You Choose ${userChoice} , Comp Choose ${compChoice}`;
        document.getElementById("result-msg").style.color = "#7FFF00";
        document.getElementById("result-msg").style.border= "5px solid #7FFF00";

    }
    else {
        result.innerText = `You Lost! You Choose ${userChoice} , Comp Choose ${compChoice}. Better Luck Next Time!`;
        document.getElementById("result-msg").style.color = "#B22222";
        document.getElementById("result-msg").style.border= "5px solid #B22222";
    }
}
