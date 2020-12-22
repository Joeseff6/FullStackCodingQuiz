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
    getScore()


    // Remove start button to replace with Player score.
    startContainer.removeChild(startBtn);
    var scoreText = document.createElement('span');
    scoreText.textContent = `Score: 0`;
    startContainer.appendChild(scoreText);

    // Set up questions and answers when start button is clicked
    var question = document.getElementById(Math.floor(Math.random()*Math.floor(25)));
    question.removeAttribute(`class`, `d-none`);
    var answerchoices = question.querySelectorAll('p');

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
            secondsLeft--
            alert(`Incorrect...`)
        }
        newQuestion()
    }

    // Store time information for an interval function
    let secondsLeft = 60;
    timeEl.textContent = `Time: ${secondsLeft}`;


    // Set a time interval to allow answers to be selected once the start button is clicked
    var timerInterval = setInterval(function() {
        timeEl.textContent = `Time: ${secondsLeft}`;
        if(secondsLeft === 0) {
            alert(`Time's up!`);
            clearInterval(timerInterval);

        // store score here
            storeScore()

            window.location = './highscore.html'
        }
        secondsLeft--
        question.addEventListener('click', clickAnswer)
    }, 1000)


    
    
    function storeScore () {
        scores.push(score);
        localStorage.setItem("Quiz scores", JSON.stringify(scores));
    }



    function getScore() {
        var storedScore = JSON.parse(localStorage.getItem(`Quiz scores`));
    
        if (storedScore !== null) {
            scores = storedScore;
        }
    }
})
