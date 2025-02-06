const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
let correctColor;

const colorDisplay = document.getElementById("colorDisplay");
const message = document.getElementById("message");
const score = document.getElementById("score");
const resetButton = document.getElementById("resetButton");
const colorBoxes = document.querySelectorAll(".colorBox");

function init() {
    correctColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.textContent = correctColor.toUpperCase();
    colorBoxes.forEach(box => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        box.style.backgroundColor = color;
        box.setAttribute("data-color", color);
    });
    message.textContent = "";
    score.textContent = "";
}

colorBoxes.forEach(box => {
    box.addEventListener("click", function() {
        const selectedColor = this.getAttribute("data-color");
        const numberGEN =[Math.floor(Math.random() * 6)];
        if (selectedColor === correctColor) {
            message.textContent = "Correct😁😁";
            score.textContent = 'Score:' + numberGEN;
            message.style.color = "indigo";
            colorBoxes.forEach(box => box.style.backgroundColor = correctColor);
        } else {
            message.textContent = "Try Again!";
            message.style.color = "red";
            this.style.backgroundColor = "#f4f4f4";
        }
    });
});

resetButton.addEventListener("click", init);

init();