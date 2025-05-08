let gameSeq = [];
let userSeq = [];

let btns = ["clr1", "clr2", "clr3", "clr4"];

let level = 0;
let started = false;

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function (event) {
  if (event.key == "Enter" && started == false) {
    console.log("game has started.");
    h2.innerText = "The game has started!";
    started = true;

    lvlUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 300);
}

function lvlUp() {
  level++;
  h3.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randClr = btns[randIdx];
  let randBtn = document.querySelector(`.${randClr}`);

  btnFlash(randBtn);
}

function btnPress() {
  let btn = this;
  btnFlash(btn);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
