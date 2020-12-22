var startBtn = document.getElementById(`start`);
var highscoreBtn = document.getElementById(`highscore`);
var timeEl = document.getElementById(`timer`)
var questionBox = document.getElementById(`questions`)
var startContainer = document.getElementById(`startContainer`);
var scores = [];


highscoreBtn.addEventListener(`click`, function() {
    window.location = './highscore.html'
})

startBtn.addEventListener(`click`, function() {
    // Collect the score array in local storage when start button is clicked
    getScore()

    function getScore() {
        var storedScore = JSON.parse(localStorage.getItem(`Quiz scores`));
    
        if (storedScore !== null) {
            scores = storedScore;
        }
    }

    // Remove start button to replace with Player score.
    startContainer.removeChild(startBtn);
    var scoreText = document.createElement('span');
    scoreText.textContent = `Score: 0`;
    startContainer.appendChild(scoreText);

    // Set player score to zero
    var score = 0;

    // Set up questions and answers when start button is clicked
    var questionNumber = 1;
    var question = document.getElementById(questionNumber);
    question.removeAttribute(`class`, `d-none`);
    var answerchoices = question.querySelectorAll('p');

    // Store time information for an interval function
    let secondsLeft = 5;
    timeEl.textContent = `Time: ${secondsLeft}`;

    // Set a time interval to allow answers to be selected once the start button is clicked
    var timerInterval = setInterval(function() {
        timeEl.textContent = `Time: ${secondsLeft}`;
        if(secondsLeft <= 0 || questionNumber > 25) {
            alert(`Quiz over!`);
            clearInterval(timerInterval);
        // store score here
            storeScore()
            window.location = './highscore.html'
        }
        secondsLeft--
        question.addEventListener('click', clickAnswer)
    }, 1000)

    // Add functionality for when an answer choice is clicked on
    function clickAnswer(event) {
        if (event.target.dataset.answer === `correct`) {
            score++
            alert(`Correct!`);
        } else {
            secondsLeft--
            alert(`Incorrect...`)
        }
        newQuestion()
    }

    // Change question after an answer choice is selected
    function newQuestion() {
        scoreText.textContent = `Score: ${score}`
        questionNumber += 1;
        question.setAttribute(`class`, `d-none`)
        question = document.getElementById(questionNumber);
        question.removeAttribute(`class`, `d-none`);
        answerchoices = question.querySelectorAll('p');
    }

    // Store score function for when the timer runs out
    function storeScore () {
        scores.push(score);
        localStorage.setItem("Quiz scores", JSON.stringify(scores));
    }

})
