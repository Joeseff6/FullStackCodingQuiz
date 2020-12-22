const submitForm = document.getElementById(`submitForm`);
const formValue = document.getElementById(`enterInitials`);
const rowContainer = document.getElementById(`rowContainer`);
const returnBtn = document.getElementById(`return`);
var initials = [];
var scores = [];

alert(`Submit your initials by hitting enter`)

// Adds return function to return back to coding quiz
returnBtn.addEventListener(`click`, function() {
    window.location = `./index.html`;
})

// Gets stored score and initials from local storage
getStoredInfo();

// Function that fires when user submits initials
submitForm.addEventListener(`submit`, function(event) {
    event.preventDefault()

    // Assigns the input (initials) to a variable
    var newInitial = formValue.value.trim();
    if (newInitial === ``) {
        return;
    }

    // Pushes newInitial variable into initials array
    initials.push(newInitial);
    formValue.value = `Go back to play again`;

    // Stores initials array in local storage
    storeInfo();

    // Clears the highscore table to prevent duplication
    while (rowContainer.firstChild) {
        rowContainer.removeChild(rowContainer.firstChild)
    }

    // Show table of initials and highscores
    rendorStoredInfo();
})


function rendorStoredInfo() {
    for (let i = 0; i < initials.length; i++) {
        var initial = initials[i];
        var score = scores[i];
        var rowEl = document.createElement('tr')
        var td1 = document.createElement(`td`);
        var td2 = document.createElement(`td`);

        td1.textContent = initial;
        td2.textContent = score;

        rowContainer.appendChild(rowEl);
        rowEl.appendChild(td1);
        rowEl.appendChild(td2);
    }
}

function getStoredInfo() {
    var storedInitials = JSON.parse(localStorage.getItem("initials"));
    var storedScores = JSON.parse(localStorage.getItem("Quiz scores"));

    if (storedInitials !== null) {
        initials = storedInitials;
    }
    if (storedScores !== null) {
        scores = storedScores;
    }

    rendorStoredInfo()

}

function storeInfo() {
    localStorage.setItem(`initials`, JSON.stringify(initials));
    localStorage.setItem(`Quiz scores`, JSON.stringify(scores));
}