var startBtn = document.getElementById(`start`);
var highscoreBtn = document.getElementById(`highscore`);
var timeEl = document.getElementById(`timer`)
var questionBox = document.getElementById(`questions`)
var question1 = { question: `What does HTML stand for?`, answer1: `Hypertext Mocking Language`, answer2: `Hypertext Markdown Language`, answer3: `Hypertalking Mic Language`, answer4: `Hypertext Memory Log`};


highscoreBtn.addEventListener('click', function() {
    console.log('ok');
})

function startQuestion() {
    var question = document.createElement(`h2`)
    question.textContent = question1.question;
    questionBox.appendChild(question);
    var answerChoices = [];

    for (let i = 0; i < 5; i++) {
        answerChoices.push(question1[`answer${i}`]);
        var answer = document.createElement(`p`);
        answer.textContent = answerChoices[i];
        questionBox.appendChild(answer);
    }

}

startBtn.addEventListener('click', function() {
    let secondsLeft = 30;
    timeEl.textContent = `Time: ${secondsLeft}`;
    startQuestion();
    
    var timerInterval = setInterval(function() {
        timeEl.textContent = `Time: ${secondsLeft}`;
        if(secondsLeft === 0) {
            alert(`Time's up!`);
            clearInterval(timerInterval);
        }
        secondsLeft--
    }, 1000)



})





