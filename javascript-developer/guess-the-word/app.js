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
const dotsEl = document.getElementById("dots");
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

wordEl.innerText = scramble(currentWord);
inputs.forEach((input) =>
  input.addEventListener("keyup", (e) => {
    if (e.code === `Key${e.key.toUpperCase()}`) {
      const currentInputIndex = inputs.indexOf(e.target);
      if (currentInputIndex < inputs.length - 1) {
        inputs[currentInputIndex + 1].focus();
      }
    }
  })
);
