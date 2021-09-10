let step3 = document.getElementById("step_3");
const submitButton = document.getElementById("submit_button");
const step3CheckBox = document.getElementById("rock");
const select = document.getElementById("num_attendees");
submitButton.disabled = true;
const step1 = document.getElementById("step_1");
const attendee = document.getElementById("attendee_container");
const step1Result = document.getElementById("step1_result");
let step2 = document.getElementById("step_2");

// let step2Result = document.getElementById("step2_result");

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
  companyNameWrap.children[1].value = "";

  specialAccomodationWrap.children[1].value = "";
  step3.disabled = true;
  submitButton.disabled = true;
  step3CheckBox.checked = false;
  attendee.style.visibility = "hidden";
  step1.style.height = "120px";
  step2.style.height = "260px";
  attendee.visibility = "hidden";

  companyNameWrap.style.height = 0;
  specialAccomodationWrap.style.height = 0;
  select.value = "0";
  for (let i = 1; i < attendee.children.length - 1; i++) {
    attendee.children[i].children[1].value = "";
    attendee.children[i].style.visibility = "hidden";
  }

  companyNameCheckBox.forEach((companyName) => {
    companyName.checked = false;
  });
  specialAccomodationsCheckBox.forEach((accomodation) => {
    accomodation.checked = false;
  });
  step1Result.style.visibility = "hidden";
  step2Result.style.top = 0;

  step1Result.style.top = 0;
  step2Result.style.visibility = "hidden";
  step1.style.overflow = "hidden";
  step2.disabled = true;
  step2.style.opacity = 0.6;
  step3.style.opacity = 0.6;
}
