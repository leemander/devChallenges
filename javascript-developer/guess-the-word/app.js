const words = [
  "flower",
  "boxcar",
  "prince",
  "bowler",
  "coffee",
  "guitar",
  "queens",
  "proven",
  "clerks",
  "killer",
  "crimes",
  "police",
  "lawyer",
  "judged",
  "gender",
  "sexual",
  "webcam",
  "creamy",
  "shouty",
  "lemons",
  "dinner",
  "cheese",
  "tissue",
  "sticky",
  "gamers",
];

const currentWord = words[Math.floor(Math.random() * words.length)];

let tries = 0;
let mistakes = [];

const wordEl = document.getElementById("word");
const triesEl = document.getElementById("tries");
const dots = document.querySelectorAll(".dots__dot");
const mistakesEl = document.getElementById("mistakes");
const inputForm = document.getElementById("input");
const inputs = [...document.querySelectorAll("input")];
const randomBtn = document.getElementById("random");
const resetBtn = document.getElementById("reset");

function scramble(word) {
  const array = word.split("");
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join("");
}

function evaluate(guess) {
  if (tries < 5) {
    mistakes = [];
    guess.forEach((letter, index) => {
      if (letter !== currentWord[index]) {
        mistakes.push(letter);
      }
    });
    mistakesEl.innerText = mistakes;
    if (mistakes.length) {
      tries++;
      if (tries < 6) {
        triesEl.innerText = tries;
        renderTries();
      }
    } else if (!mistakes.length) {
      alert("🎉 Success!");
      location.reload();
    }
  } else {
    alert(`You lose! The answer was "${currentWord}".`);
    location.reload();
  }
}

function renderTries() {
  for (let i = 0; i < tries; i++) {
    dots[i].classList.add("filled");
  }
}

function resetGame() {
  tries = 0;
  mistakes = [];
  triesEl.innerText = tries;
  dots.forEach((dot) => dot.classList.remove("filled"));
  mistakesEl.innerText = "";
  inputForm.reset();
  inputs[0].select();
}

wordEl.innerText = scramble(currentWord);
inputs[0].select();

inputs.forEach((input) =>
  input.addEventListener("keyup", (e) => {
    if (e.code === `Key${e.key.toUpperCase()}`) {
      const currentInputIndex = inputs.indexOf(e.target);
      if (
        currentInputIndex < inputs.length - 1 &&
        inputs[currentInputIndex].value !== ""
      ) {
        inputs[currentInputIndex + 1].select();
      } else if (
        currentInputIndex === inputs.length - 1 &&
        inputs[currentInputIndex].value !== ""
      ) {
        const inputs = [...inputForm.elements];
        const guess = inputs.map((input) => input.value.toLowerCase());
        evaluate(guess);
        inputs[0].select();
      }
    }
  })
);

randomBtn.addEventListener("click", () => location.reload());
resetBtn.addEventListener("click", resetGame);
