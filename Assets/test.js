var correctAnswers = [`HyperText Markup Language`, `To render a document so it can be displayed in a web browser.`, `Javascript`, `A web application is a webpage that is interactive through Javascript.`, 
`Cascading Style Sheets`, `To style HTML files.`, `HTML, CSS, Javascript`, `Internal`, `Inline`, `Selectors`, `Attributes`, `Classes can be used on multiple elements to style them at one time, while id's must be unique to the element.`, 
`.`, `#`, `To add functionality to a webpage.`, `<script>`, `for loops take an initial expression and runs through iterations until a conditional expression evaluates false.`, 
`{}`, `The element doesn't need to be wrapped in &lt>.`, `Functions can be called and passed once a function is declared.`, `Anonymous`, 
`Document Object Model`, `DOM can be used to select elements in Javascript for assignment.`, `Server-side Javascript allows back-end features, while client-side Javascript only interacts with the user's webpage on their local machine.`, 
`Inspector`]
    
                
    
correctAnswers.includes(`Functions can be called and passed once a function is declared.`);

var el = ``;
todolist.addEventListener("click", function(event) {
    var element = event.target;
    console.log(el);
})

function elementClick() {
    var newEl = ``
    newEl.addEventListener("click", function (event) {
        newEl = event.target;
        console.log(newEl);
        return newEl
    })
}