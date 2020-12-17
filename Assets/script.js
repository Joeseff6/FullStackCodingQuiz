var startBtn = document.getElementById(`start`);
var highscoreBtn = document.getElementById(`highscore`);
var timeEl = document.getElementById(`timer`)
var questionBox = document.getElementById(`questions`)


highscoreBtn.addEventListener('click', function() {
    console.log('ok');
})

function newQuestion() {
    var newList = document.createElement(`p`);
    newList.textContent = `Hello World`;
    questionBox.appendChild(newList);
}

startBtn.addEventListener('click', function() {
    let secondsLeft = 30;
    timeEl.textContent = `Time: ${secondsLeft}`;
    newQuestion();
    
    var timerInterval = setInterval(function() {
        timeEl.textContent = `Time: ${secondsLeft}`;
        if(secondsLeft === 0) {
            alert(`Time's up!`);
            clearInterval(timerInterval);
        }
        secondsLeft--
    }, 1000)



})








