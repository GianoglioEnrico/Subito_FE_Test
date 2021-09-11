let step3 = document.getElementById("step_3");
const submitButton = document.getElementById("submit_button");
const step3CheckBox = document.getElementById("rock");
const select = document.getElementById("num_attendees");
submitButton.disabled = true;
const attendee = document.getElementById("attendee_container");
const step1Result = document.getElementById("step1_result");
let step2 = document.getElementById("step_2");
const companyNameWrap = document.getElementById("company_name_wrap");
const specialAccomodationWrap = document.getElementById(
  "special_accommodations_wrap"
);
const companyNameCheckBox = document.querySelectorAll("#step_2>input");
const specialAccomodationsCheckBox = document.querySelectorAll(
  "#step_2>div>input[type='radio']"
);
step3.disabled = true;

export function handleStep3Checkbox() {
  if (step3CheckBox.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

export function resetAll(step2Result) {
  // Step 1 Reset
  attendee.style.height = 0;
  select.value = "0";
  for (let i = 1; i < attendee.children.length - 1; i++) {
    attendee.children[i].children[1].value = "";
    attendee.children[i].style.visibility = "hidden";
  }
  step1Result.style.visibility = "hidden";
  step1Result.style.top = 0;

  // Step 2 Reset
  companyNameWrap.children[1].value = "";
  companyNameWrap.style.height = 0;
  specialAccomodationWrap.children[1].value = "";
  specialAccomodationWrap.style.height = 0;

  companyNameCheckBox.forEach((companyName) => {
    companyName.checked = false;
  });
  specialAccomodationsCheckBox.forEach((accomodation) => {
    accomodation.checked = false;
  });

  step2Result.style.top = 0;
  step2Result.style.visibility = "hidden";

  step2.disabled = true;
  step2.style.opacity = 0.6;
  step2.style.height = "";

  // Step3 Reset
  step3.disabled = true;
  submitButton.disabled = true;
  step3CheckBox.checked = false;
  step3.style.opacity = 0.6;
}
