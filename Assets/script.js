var startBtn = document.getElementById(`start`);
var highscoreBtn = document.getElementById(`highscore`);
var timeEl = document.getElementById(`timer`)

highscoreBtn.addEventListener('click', function() {
    console.log('ok');
})

startBtn.addEventListener('click', function() {
    let secondsLeft = 30;
    timeEl.textContent = `Time: ${secondsLeft}`;
    var timerInterval = setInterval(function() {
        timeEl.textContent = `Time: ${secondsLeft}`;
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
        secondsLeft--


    }, 1000)
})

