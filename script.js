let awayCount = 0, homeCount = 0;

let awayCountEl = document.getElementById("scoreboard__away");
let homeCountEl = document.getElementById("scoreboard__home");

function updateAwayScoreboard(pts){
    awayCount += pts;
    awayCountEl.textContent = awayCount;
}

function updateHomeScoreboard(pts){
    homeCount += pts;
    homeCountEl.textContent = homeCount;
}

function newGame(){
    awayCount = 0, homeCount = 0;
    awayCountEl.textContent = awayCount;
    homeCountEl.textContent = homeCount;
}