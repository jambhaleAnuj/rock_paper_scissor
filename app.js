let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter == "r") return "Rock";
    if(letter == "p") return "Paper";
    if(letter == "s") return "Scissors";
}

function win(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore; 
    compScore_span.innerHTML = compScore;
    const user_choice = document.getElementById(user);
    const smallUserWord = "user".fontsize(3).sub();
    const smallcompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallcompWord}.  YOU WIN!`;
    user_choice.classList.add('green-glow');
    setTimeout(function() { user_choice.classList.remove('green-glow') },1000);
}

function lose(user, computer){
    const computer_Choice_div = document.getElementById(user);
    compScore++;
    userScore_span.innerHTML = userScore; 
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallcompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} loses ${convertToWord(computer)}${smallcompWord}.  YOU LOST...`;
    computer_Choice_div.classList.add('red-glow');
    setTimeout(function() { computer_Choice_div.classList.remove('red-glow')},1000);
}

function draw(user, computer){
    const draw_choice = document.getElementById(computer);
    const smallUserWord = "user".fontsize(3).sub();
    const smallcompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} equals ${convertToWord(computer)}${smallcompWord}.  It's a Draw..!!`;
    draw_choice.classList.add('grey-glow');
    setTimeout(function() { draw_choice.classList.remove('grey-glow')},1000);
}

function game(userChoice){
    const ComputerChoice = getComputerChoice();
    switch(userChoice + ComputerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, ComputerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, ComputerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, ComputerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function() {
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissors_div.addEventListener('click', function() {
        game("s");
    })

}

main();