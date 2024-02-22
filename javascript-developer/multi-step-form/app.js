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

function validateForm() {
  let error = "";
  if (currentStep === 0) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!nameInput.value) {
      error += "Name must not be blank";
    } else if (!emailInput.value.match(emailRegex)) {
      error += "Email must be valid";
    }
  }

  if (error != "") {
    alert(error);
    return false;
  }

  return true;
}

function changeStep() {
  if (currentStep < 2) {
    if (validateForm()) currentStep++;
  } else {
    alert("Success!");
    // location.reload();
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
  for (let i = 0; i < summaryTopics.childNodes.length; i++) {
    //resets topics ul to prevent duplicates by removing every child apart from the heading
    console.log(summaryTopics.childNodes[i]);
    if (summaryTopics.childNodes[i].innerText !== "Topics:") {
      summaryTopics.removeChild(summaryTopics.childNodes[i]);
    }
  }

  const checkboxes = [devInput, uxInput, designInput];
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
