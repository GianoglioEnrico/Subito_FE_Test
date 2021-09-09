// Modules Import
import { handleChangeSelect } from "./step1.js";
import { handleStep2CheckBoxes } from "./step2.js";
import { handleStep3Checkbox, resetAll } from "./step3.js";

// STEP 1
const select = document.getElementById("num_attendees");
// Step 1 Select Event Listener
select.addEventListener("change", handleChangeSelect);

// STEP 2
let companyNameIsChecked = false;
let specialAccomodationsIsChecked = false;
const companyNameCheckBox = document.querySelectorAll("#step_2>input");
const specialAccomodationsCheckBox = document.querySelectorAll(
  "#step_2>div>input[type='radio']"
);
let step2 = document.getElementById("step_2");
const companyNameWrap = document.getElementById("company_name_wrap");
const specialAccomodationWrap = document.getElementById(
  "special_accommodations_wrap"
);

const doneIcon = `<i class="fa fa-check-circle" id="done-icon"></i>`;
let step2Result = document.createElement("div");
let step3 = document.getElementById("step_3");

step2Result.setAttribute("id", "step2_result");
step2Result.innerHTML = doneIcon;
companyNameWrap.style.height = 0;
step2.disabled = true;
step2.style.height = "260px";
step2.appendChild(step2Result);
specialAccomodationWrap.style.height = 0;
step2.addEventListener("change", (event) => {
  if (event.target.name === "company_name_toggle_group") {
    companyNameIsChecked = true;
    if (event.target.id === "company_name_toggle_on") {
      // companyNameWrap.style.display = "flex";
      // companyNameWrap.style.visibility = "visible";
      companyNameWrap.style.height = "40px";
    } else {
      companyNameWrap.style.height = 0;
    }
    // handleAllCheckBoxes(companyName.checked, accomodation.checked);
  } else {
    specialAccomodationsIsChecked = true;
    if (event.target.id === "special_accommodations_toggle_on") {
      specialAccomodationWrap.style.display = "flex";
      specialAccomodationWrap.style.visibility = "visible";
      specialAccomodationWrap.style.height = "100px";
      step2.style.height = "330px";
    } else {
      step2.style.height = "260px";
      specialAccomodationWrap.style.height = 0;
    }
  }
  if (companyNameIsChecked && specialAccomodationsIsChecked) {
    console.log("ccoloooo");
    step3.disabled = false;
    step3.style.opacity = 1;
    step2Result.style.visibility = "visible";
    console.log(step2Result);
    step2Result.style.top = "85%";
    step2.style.height = "500px";
  } else {
    step3.disabled = true;
    step3.style.opacity = 0.6;
  }
});

// STEP 3
const step3CheckBox = document.getElementById("rock");
const form = document.querySelector("form");
// Step3 Event Listeners
step3CheckBox.addEventListener("change", handleStep3Checkbox);
form.addEventListener("submit", (event) => {
  companyNameIsChecked = false;
  specialAccomodationsIsChecked = false;
  resetAll(
    event,
    step2Result,
    companyNameIsChecked,
    specialAccomodationsIsChecked
  );
});
