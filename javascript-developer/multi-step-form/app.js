const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

const devInput = document.getElementById("dev");
const uxInput = document.getElementById("ux");
const designInput = document.getElementById("design");

const summaryName = document.getElementById("summary-name");
const summaryEmail = document.getElementById("summary-email");
const summaryTopics = document.getElementById("summary-topics");

const continueButton = document.getElementById("continue-btn");

const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");

let currentStep = 0;

const currentStepEl = document.getElementById("current-step");
const steps = [step1, step2, step3];
const dots = [dot1, dot2, dot3];

function changeStep() {
  if (currentStep < 2) {
    currentStep++;
  } else {
    alert("Success!");
  }

  steps.forEach((step) => step.classList.remove("current"));
  steps[currentStep].classList.add("current");

  currentStepEl.innerText = currentStep + 1;

  dots.forEach((dot) => dot.classList.remove("current"));
  dots[currentStep].classList.add("filled");
  dots[currentStep].classList.add("current");

  if (currentStep === 2) {
    continueButton.innerText = "Confirm";
  }
}

continueButton.addEventListener("click", (e) => {
  e.preventDefault();
  changeStep();
});
