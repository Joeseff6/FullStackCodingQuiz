var startBtn = document.getElementById(`start`);
var highscoreBtn = document.getElementById(`highscore`);
var timeEl = document.getElementById(`timer`)
var questionBox = document.getElementById(`questions`)
var score = 0
var startContainer = document.getElementById(`startContainer`);

var correctAnswers = [`HyperText Markup Language`, `To render a document so it can be displayed in a web browser.`, `Javascript`, `A web application is a webpage that is interactive through Javascript.`, 
`Cascading Style Sheets`, `To style HTML files.`, `HTML, CSS, Javascript`, `Internal`, `Inline`, `Selectors`, `Attributes`, `Classes can be used on multiple elements to style them at one time, while id's must be unique to the element.`, 
`.`, `#`, `To add functionality to a webpage.`, `<script>`, `for loops take an initial expression and runs through iterations until a conditional expression evaluates false.`, 
`{}`, `The element doesn't need to be wrapped in &lt>.`, `Functions can be called and passed once a function is declared.`, `Anonymous`, 
`Document Object Model`, `DOM can be used to select elements in Javascript for assignment.`, `Server-side Javascript allows back-end features, while client-side Javascript only interacts with the user's webpage on their local machine.`, 
`Inspector`]






startBtn.addEventListener(`click`, function() {
    startContainer.removeChild(startBtn);
    var scoreText = document.createElement('span');
    scoreText.textContent = `Score: ${score}`;
    startContainer.appendChild(scoreText);

    // startBtn.setAttribute(`class`, `d-none`)

    var question = document.getElementById(1 || Math.floor(Math.random()*Math.floor(25)+1));
    question.removeAttribute(`class`, `d-none`);
    // answers
    
    // function selectAnswer() {
    //     var answers = question.querySelectorAll(`p`);
    //     var answerChoices = [];
    //     for (let i = 0; i < answers.length; i++) {
    //         answerChoices[i] = answers[i]; 
    //     }

    //     console.log(answerChoices)
    //     answerChoices.addEventListener('click', function() {
    //         if (answerChoices.dataset.answer === 'correct') {
    //             alert('correct');
    //         } else {
    //             alert('incorrect');
    //         }
    //     })


    // };

    // selectAnswer()

})