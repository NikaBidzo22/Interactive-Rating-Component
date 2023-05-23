const output = document.querySelector(".main-output");
const inputs = document.querySelectorAll(".input");
const submitBtn = document.querySelector(".submit");
const thank = document.querySelector(".second");
const rate = document.querySelector(".first");
const sorry = document.querySelector(".long");
const change = document.querySelector(".you")

let storeValue = null;

console.log(inputs);

inputs.forEach(function (input) {
  input.addEventListener("click", function (event) {
    storeValue = event.target.innerText;
    inputs.forEach(function (inputTwo) {
      if (storeValue == inputTwo.innerText) {
        inputTwo.classList.add("white");
        output.innerHTML = storeValue;
        change.innerHTML = "Thank you!"
        sorry.style.display = "flex"
      } else {
        inputTwo.classList.remove("white");
      }
    });
  });
});

submitBtn.addEventListener("click", function () {
  thank.style.display = "flex";
  rate.style.display = "none";
});
