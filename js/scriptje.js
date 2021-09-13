var button = document.getElementById("button");
button.addEventListener("mouseenter", positieXenY);

function positieXenY() {
    var MaxNummer = 35;
    var positieX = Math.floor(Math.random() * MaxNummer);
    var positieY = Math.floor(Math.random() * MaxNummer);

    button.style.marginLeft = positieX + '%';
    button.style.marginTop = positieY + '%';
}