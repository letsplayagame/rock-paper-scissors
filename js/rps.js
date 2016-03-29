
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerMove() {
    return getRandomNumber(1,3);
}

function checkRound(playerMove, computerMove) {
    var winner;
    if(playerMove == computerMove)
      return "draw";
    else if(playerMove == "rock")
      return "player";
    else if(playerMove == "paper")
      return "computer";
}
