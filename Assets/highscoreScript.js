var scoreSubmit = document.getElementById(`submitForm`);
var rowContainer = document.getElementById(`rowContainer`);

scoreSubmit.addEventListener(`submit`, function(event) {
    event.preventDefault()
    var rowEl = document.createElement('tr')
    rowEl.setAttribute(`id`, `newRow`)
    rowContainer.appendChild(rowEl);
    var newInitial = document.createElement(`td`);
    var newScore = document.createElement(`td`);
    newInitial.textContent = `JS`
    newScore.textContent = `Score`
    rowEl.appendChild(newInitial);
    rowEl.appendChild(newScore);


})