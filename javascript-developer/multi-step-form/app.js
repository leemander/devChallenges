const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const steps = [step1, step2, step3];

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");

const devInput = document.getElementById("dev");
const uxInput = document.getElementById("ux");
const designInput = document.getElementById("design");
const checkboxes = [devInput, uxInput, designInput];

const topicsError = document.getElementById("topics-error");

const summaryName = document.getElementById("summary-name");
const summaryEmail = document.getElementById("summary-email");
const summaryTopics = document.getElementById("summary-topics");

const continueButton = document.getElementById("continue-btn");

const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");
const dots = [dot1, dot2, dot3];

const currentStepEl = document.getElementById("current-step");

let currentStep = 0;

function validateForm() {
  [nameError, emailError, topicsError].forEach((error) =>
    error.classList.remove("show")
  );
  let errors = 0;

  if (currentStep === 0) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!nameInput.value) {
      nameError.classList.add("show");
      errors++;
    }
    if (!emailInput.value.match(emailRegex)) {
      emailError.classList.add("show");
      errors++;
    }
  } else if (currentStep === 1) {
    console.log(checkboxes.filter((box) => box.checked));
    if (!checkboxes.filter((box) => box.checked === true).length) {
      topicsError.classList.add("show");
      errors++;
    }
  }

  if (errors > 0) {
    return false;
  }

  return true;
}

function changeStep() {
  if (currentStep < 2) {
    if (validateForm()) currentStep++;
  } else {
    alert("Success!");
    location.reload();
    return;
  }

  steps.forEach((step) => step.classList.remove("current"));
  steps[currentStep].classList.add("current");

  currentStepEl.innerText = currentStep + 1;

  dots.forEach((dot) => dot.classList.remove("current"));
  dots[currentStep].classList.add("filled");
  dots[currentStep].classList.add("current");

  if (currentStep === 2) {
    summaryName.innerText = nameInput.value;
    summaryEmail.innerText = emailInput.value;
    populateTopicsList();
    continueButton.innerText = "Confirm";
  }
}

function populateTopicsList() {
  checkboxes.forEach((box) => {
    if (box.checked) {
      const li = document.createElement("li");
      li.innerText = box.dataset.title;
      summaryTopics.append(li);
    }
  });
}

continueButton.addEventListener("click", (e) => {
  e.preventDefault();
  changeStep();
});
