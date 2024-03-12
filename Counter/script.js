const count = document.querySelector("#count");
const add = document.querySelector("#add");
const sub = document.querySelector("#sub");
const diff = document.querySelector("#diff");
const reset = document.querySelector("#reset");


add.addEventListener("click", function () {
  count.textContent = +count.textContent + parseInt(diff.value);
});

sub.addEventListener("click", function () {
  count.textContent = +count.textContent - parseInt(diff.value);
});

reset.addEventListener("click", function(){
  count.textContent = 0;
  diff.value = "1"
})
