// STEP 1
const select = document.getElementById("num_attendees");
const step1 = document.getElementById("step_1");
const attendee = document.getElementById("attendee_container");
let attendeesInput = [];
const step1Result = document.getElementById("step1_result");

select.addEventListener("change", (e) => {
  console.log(e.target.value);
  if (e.target.value !== "0") {
    step1.style.height = "300px";
    attendee.style.display = "block";
    for (let i = 0; i < attendee.children.length; i++) {
      if (i < e.target.value) {
        attendee.children[i].style.display = "block";

        attendeesInput.push(attendee.children[i].children[1]);

        attendee.children[i].children[1].addEventListener("keyup", (e) => {
          let fil = attendeesInput.filter((at) => at.value !== "");
          if (fil.length === attendeesInput.length) {
            step2.disabled = false;
            step1Result.style.display = "block";
            step1Result.innerText = "DONE";
          } else {
            step1Result.style.display = "none";
            step2.disabled = true;
          }
        });
      } else {
        attendee.children[i].style.display = "none";
      }
    }
  } else {
    step1.style.height = "100px";
    for (let i = 0; i < attendee.children.length; i++) {
      console.log(attendee.children[i].children[1]);
      attendee.children[i].children[1].value = "";
      attendee.children[i].style.display = "none";
    }
  }
});

// STEP 2
let count = 0;
let isChecked = [];
let step2 = document.getElementById("step_2");
const companyNameCheckBox = document.querySelectorAll("#step_2>input");
const specialAccomodationsCheckBox = document.querySelectorAll(
  "#step_2>div>input[type='radio']"
);
const companyNameWrap = document.getElementById("company_name_wrap");
const specialAccomodationWrap = document.getElementById(
  "special_accommodations_wrap"
);
step2.disabled = true;
companyNameCheckBox.forEach((companyName) => {
  companyName.addEventListener("change", (event) => {
    isChecked[0] ? (isChecked[1] = true) : (isChecked[0] = true);
    if (event.target.id === "company_name_toggle_on") {
      companyNameWrap.style.display = "block";
    } else {
      companyNameWrap.style.display = "none";
    }
  });
});

specialAccomodationsCheckBox.forEach((accomodation) => {
  accomodation.addEventListener("change", (event) => {
    console.log(isChecked[0]);
    isChecked[0] ? (isChecked[1] = true) : (isChecked[0] = true);

    if (event.target.id === "special_accommodations_toggle_on") {
      specialAccomodationWrap.style.display = "block";
    } else {
      specialAccomodationWrap.style.display = "none";
    }
  });
});
step2.addEventListener("change", () => {
  if (isChecked.length === 2 && !isChecked.includes(false)) {
    let h1 = document.createElement("h1");
    h1.setAttribute("id", "step2_result");
    h1.innerText = "doneee";
    step2.appendChild(h1);
    fieldSet3.disabled = false;
  } else {
    fieldSet3.disabled = true;
  }
});

// STEP 3
let reset = false;
const form = document.querySelector("form");
let fieldSet3 = document.getElementById("step_3");
const submitButton = document.getElementById("submit_button");
const lastCheck = document.getElementById("rock");
fieldSet3.disabled = true;
submitButton.disabled = true;
lastCheck.addEventListener("change", () => {
  if (lastCheck.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fieldSet3.disabled = true;
  submitButton.disabled = true;
  lastCheck.checked = false;
  attendee.style.display = "none";
  step1.style.height = "100px";
  select.value = "0";
  for (let i = 0; i < attendeesInput.length; i++) {
    attendeesInput[i].value = "";
  }
  companyNameCheckBox.forEach((companyName) => {
    companyName.checked = false;
    companyNameWrap.style.display = "none";
  });
  specialAccomodationsCheckBox.forEach((accomodation) => {
    accomodation.checked = false;
    specialAccomodationWrap.style.display = "none";
  });
  document.querySelector("#step2_result").remove();
  step2.disabled = true;
});
