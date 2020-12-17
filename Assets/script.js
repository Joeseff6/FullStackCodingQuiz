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
        // secondsLeft--
        

    })
    console.log('ok');
})

