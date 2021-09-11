// Modules Import
import { handleChangeSelect } from "./step1.js";
import { handleStep2CheckBoxes } from "./step2.js";
import { handleStep3Checkbox, resetAll } from "./step3.js";

// STEP 1
const select = document.getElementById("num_attendees");
// Step 1 Select Event Listener
select.addEventListener("change", handleChangeSelect);

// STEP 2

let step2 = document.getElementById("step_2");
let step2Result = document.createElement("div");
step2Result.setAttribute("id", "step2_result");
const doneIcon = `<i class="fa fa-check-circle" id="done-icon"></i>`;
step2Result.innerHTML = doneIcon;
step2Result.style.visibility = "hidden";
step2.appendChild(step2Result);
// STEP 2 Events Listener Fired when checkboxes are checked
step2.addEventListener("change", (event) =>
  handleStep2CheckBoxes(event, step2Result)
);

// STEP 3
const step3CheckBox = document.getElementById("rock");
const form = document.querySelector("form");
// Step3 Events Listener Fired:
// when checkbox is checked
step3CheckBox.addEventListener("change", handleStep3Checkbox);
// when form gets submitted
form.addEventListener("submit", (event) => {
  event.preventDefault();
  resetAll(step2Result);
});
