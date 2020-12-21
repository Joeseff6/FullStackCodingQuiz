var startBtn = document.getElementById(`start`);
var highscoreBtn = document.getElementById(`highscore`);
var timeEl = document.getElementById(`timer`)
var questionBox = document.getElementById(`questions`)
var startContainer = document.getElementById(`startContainer`);

startBtn.addEventListener(`click`, function() {
    // Remove start button to replace with Player score.
    startContainer.removeChild(startBtn);
    var scoreText = document.createElement('span');
    scoreText.textContent = `Score: 0`;
    startContainer.appendChild(scoreText);

    // Set player score to zero
    var score = 0;

    // Change question after an answer choice is selected
    function newQuestion() {
        scoreText.textContent = `Score: ${score}`
        question.setAttribute(`class`, `d-none`)
        question = document.getElementById(Math.floor(Math.random()*Math.floor(25)+1));
        question.removeAttribute(`class`, `d-none`);
        answerchoices = question.querySelectorAll('p');
    }


    // Add functionality for when an answer choice is clicked on
    function clickAnswer(event) {
        if (event.target.dataset.answer === `correct`) {
            score++
            alert(`Correct!`);
        } else {
            alert(`Incorrect...`)
        }
        newQuestion()
    }

    // Store time information for an interval function
    let secondsLeft = 30;
    timeEl.textContent = `Time: ${secondsLeft}`;

    // Set a time interval to allow answers to be selected once the start button is clicked
    var timerInterval = setInterval(function() {
        timeEl.textContent = `Time: ${secondsLeft}`;
        if(secondsLeft === 0) {
            alert(`Time's up!`);
            clearInterval(timerInterval);
            window.location = './highscore.html'
        }
        secondsLeft--
        question.addEventListener('click', clickAnswer)
    }, 1000)


    // Set up questions and answers when start button is clicked
    var question = document.getElementById(Math.floor(Math.random()*Math.floor(25)+1));
    question.removeAttribute(`class`, `d-none`);
    var answerchoices = question.querySelectorAll('p');









})






