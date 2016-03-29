var theScore = 0;
var topScore = 0;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerMove() {
    var possibleValues = ["rock", "paper", "scissors"];
    var returnValue = possibleValues[getRandomNumber(0, 2)];
    return returnValue;
}

function checkRound(playerMove, computerMove) {

    if (playerMove == computerMove)
        return "draw";
    else if (playerMove == "rock" && computerMove == "paper")
        return "computer";
    else if (playerMove == "paper" && computerMove == "scissors")
        return "computer";
    else if (playerMove == "scissors" && computerMove == "rock")
        return "computer";
    else
        return "player"
}

function updateScore(winner) {
    var newScore = theScore;
    //cheep way to initialize the local variable
    if (winner == "player")
        newScore = newScore + 1;
    else if (winner == "computer")
        newScore = newScore - 1;

    theScore = newScore;
    
    if (theScore>topScore)
        topScore = newScore;    
    
    return newScore;
}