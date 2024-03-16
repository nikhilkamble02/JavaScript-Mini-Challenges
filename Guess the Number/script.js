const input = document.querySelector("input");
const submit = document.querySelector(".submit");
const startGame = document.querySelector(".startGame");
const range = document.querySelector(".range");
const result = document.querySelector(".result");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let inputArray = [];

function showResult(randomNumInRange) {
    if (parseInt(input.value) > randomNumInRange) {
        range.innerHTML = "Too High !";
    } else if (parseInt(input.value) < randomNumInRange) {
        range.innerHTML = "Too Low !";
    } else if (input.value === "") {
        range.innerHTML = "Please guess the number first";
    } else {
        range.innerHTML = `Congrats!You Guessed it after ${inputArray.length + 1
            } attempts`;
        startGame.removeAttribute("disabled");
    }

    inputArray.push(parseInt(input.value));
    result.innerHTML = `Your Guesses are : ${inputArray} `;
}

let randomNumInRange = getRandomInt(1, 100);
submit.addEventListener("click", function () {
    showResult(randomNumInRange);
});

startGame.addEventListener("click", function () {
    randomNumInRange = getRandomInt(1, 100);
    showResult(randomNumInRange);
    input.value = "";
    range.innerHTML = "";
    result.innerHTML = "";
    inputArray = [];
    startGame.setAttribute("disabled", true);
});
