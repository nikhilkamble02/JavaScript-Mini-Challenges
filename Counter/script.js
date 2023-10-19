const count = document.querySelector(".count");
const decrement = document.querySelector(".decrement");
const increment = document.querySelector(".increment");
const changeBy = document.querySelector(".changeBy");
const reset = document.querySelector(".reset");



decrement.addEventListener('click', () => {
    let changeByValue = parseInt(changeBy.value)
    let counterValue = parseInt(count.innerText);
    count.innerText = counterValue - changeByValue

})
increment.addEventListener('click', () => {
    let changeByValue = parseInt(changeBy.value)
    let counterValue = parseInt(count.innerText);
    count.innerText = counterValue + +changeByValue
})

reset.addEventListener('click', () => {
    count.innerText = 0;
})
