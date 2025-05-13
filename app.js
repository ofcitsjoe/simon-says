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

function wrongFlash(btn) {
  btn.classList.add("wrongflash");
  setTimeout(function () {
    btn.classList.remove("wrongflash");
  }, 300);
}

function lvlUp() {
  userSeq = [];
  level++;
  h3.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randClr = btns[randIdx];
  let randBtn = document.querySelector(`.${randClr}`);

  gameSeq.push(randClr);
  console.log(gameSeq);

  btnFlash(randBtn);
}

function checkAns(lvlIdx) {
  if (started == true) {
    if (userSeq[lvlIdx] === gameSeq[lvlIdx]) {
      if (userSeq.length === gameSeq.length) {
        setTimeout(lvlUp, 1000);
      }
    } else {
      h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press enter to key to try again`;
      h3.innerText = `Practise makes perfect! :D`;

      let wrongBtnId = userSeq[lvlIdx];
      let wrongBtn = document.getElementById(wrongBtnId);
      wrongFlash(wrongBtn);

      reset();
    }
  }
}

function btnPress() {
  let btn = this;
  btnFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
