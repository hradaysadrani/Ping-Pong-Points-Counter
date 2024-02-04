const p1 = {
    score : 0,
    button : document.querySelector('#p1Button'),
    display : document.querySelector('#p1Display')
}

const p2 = {
    score : 0,
    button : document.querySelector('#p2Button'),
    display : document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let WinningScore = 5;   
let isGameOver = false;

// This function will be called when any one of the player scores in the game.
function updateScore(player,opponent){
    if (!isGameOver) {
        player.score += 1;
        if (player.score === WinningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


p1.button.addEventListener('click', function () {
    updateScore(p1,p2);
})

p2.button.addEventListener('click', function () {
    updateScore(p2,p1);
})


winningScoreSelect.addEventListener('change', function () {
    WinningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset);
function reset() {
    isGameOver = 0;
    for(let p of [p1,p2]){
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;
}
}