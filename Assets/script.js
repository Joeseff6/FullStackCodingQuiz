var startBtn = document.getElementById(`start`);
var highscoreBtn = document.getElementById(`highscore`);
var timeEl = document.getElementById(`timer`)
var questionBox = document.getElementById(`questions`)
var question1 = { question: `What does HTML stand for?`, answer1: `Hypertext Mocking Language`, answer2: `Hypertext Markup Language`, answer3: `Hypertalking Mic Language`, answer4: `Hypertext Memory Log`};
var correctAnswers = [`HyperText Markup Language`, `To render a document so it can be displayed in a web browser.`, `Javascript`, `A web application is a webpage that is interactive through Javascript.`, 
`Cascading Style Sheets`, `To style HTML files.`, `HTML, CSS, Javascript`, `Internal`, `Inline`, `Selectors`, `Attributes`, `Classes can be used on multiple elements to style them at one time, while id's must be unique to the element.`, 
`.`, `#`, `To add functionality to a webpage.`, `<script>`, `for loops take an initial expression and runs through iterations until a conditional expression evaluates false.`, 
`{}`, `The element doesn't need to be wrapped in &lt>.`, `Functions can be called and passed once a function is declared.`, `Anonymous`, 
`Document Object Model`, `DOM can be used to select elements in Javascript for assignment.`, `Server-side Javascript allows back-end features, while client-side Javascript only interacts with the user's webpage on their local machine.`, 
`Inspector`];

highscoreBtn.addEventListener('click', function() {
    console.log('ok');
})


function selectAnswer() {
    questionBox.addEventListener(`click`, function(event) {
        var elementText = event.target.innerText;
        elementText = new String(elementText);
        console.log(elementText)
        if (correctAnswers.includes(elementText)) {
        // if (correctAnswers.includes("`" + elementText + "`") === true) {
            console.log(`pass`);
        } else {
            console.log(`fail`);
        }
        return elementText;
    })
}

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

    selectAnswer()
}

startBtn.addEventListener('click', function() {
    startBtn.setAttribute(`class`, `hidden`)
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





