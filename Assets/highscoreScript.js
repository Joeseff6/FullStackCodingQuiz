const submitForm = document.getElementById(`submitForm`);
const formValue = document.getElementById(`enterInitials`);
const rowContainer = document.getElementById(`rowContainer`);
var initials = [];
var scores = [];

getStoredInfo();

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

submitForm.addEventListener(`submit`, function(event) {
    event.preventDefault()

    var newInitial = formValue.value.trim();

    if (newInitial === ``) {
        return;
    }

    initials.push(newInitial);
    formValue.value = `Go back to play again`;

    storeInfo();

    while (rowContainer.firstChild) {
        rowContainer.removeChild(rowContainer.firstChild)
    }

    rendorStoredInfo();
})