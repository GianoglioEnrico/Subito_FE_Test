// STEP 1
const select = document.getElementById("num_attendees");
const step1 = document.getElementById("step_1");
const attendee = document.getElementById("attendee_container");
let attendeesInput = [];
const step1Result = document.getElementById("step1_result");

const doneIcon = `<i class="fa fa-check-circle" id="done-icon"></i>`;
let hei = "60px";
step1.style.height = "100px";

select.addEventListener("change", (e) => {
  step1.style.height = "100px";

  if (e.target.value !== "0") {
    for (let i = 0; i < attendee.children.length - 1; i++) {
      if (i < e.target.value) {
        step1.style.height =
          parseInt(step1.style.height) + parseInt(hei) + "px";
        // attendee.style.height =
        //   parseInt(attendee.style.height) + parseInt(hei) + "px";
        attendee.children[i].style.visibility = "visible";
        attendeesInput.push(attendee.children[i].children[1]);

        attendee.children[i].children[1].addEventListener("keyup", () => {
          let fil = attendeesInput.filter((at) => at.value !== "");

          if (fil.length === attendeesInput.length) {
            // Check on input OK
            step2.disabled = false;
            step2.style.opacity = 1;
            step1Result.innerHTML = doneIcon;
            step1.style.height = attendee.style.height;
            step1Result.style.visibility = "visible";
            step1Result.style.top = "90%";
            step1.style.overflow = "visible";
          } else {
            step2.style.opacity = 0.6;
            step2.disabled = true;
            step1Result.style.visibility = "hidden";
            step1Result.style.top = 0;
            // step1.style.height = attendee.style.height;
          }
        });
      } else {
        attendee.children[i].style.visibility = "hidden";
        // attendee.children[i].children[1].value = "";
      }
    }
  } else {
    step1.style.height = "80px";
    // attendee.style.height = 0;
    attendeesInput = [];
    for (let i = 0; i < attendee.children.length; i++) {
      if (attendee.children[i].children[1]) {
        console.log(attendee.children[i].children[1].value);
        attendee.children[i].children[1].value = "";
        attendee.children[i].style.visibility = "hidden";
      }

      attendee.children[i].value = "";
      // attendee.children[i].style.display = "none";
      step1Result.innerHTML = "";
    }
  }
});

// STEP 2
let count = 0;
let isChecked = [];
let companyNameIsChecked = false;
let specialAccomodationsIsChecked = false;
let h1 = document.createElement("div");
h1.setAttribute("id", "step2_result");
h1.innerHTML = doneIcon;
let step2 = document.getElementById("step_2");
const companyNameCheckBox = document.querySelectorAll("#step_2>input");
const specialAccomodationsCheckBox = document.querySelectorAll(
  "#step_2>div>input[type='radio']"
);
const companyNameWrap = document.getElementById("company_name_wrap");
const specialAccomodationWrap = document.getElementById(
  "special_accommodations_wrap"
);
companyNameWrap.style.height = 0;
step2.disabled = true;
step2.style.height = "230px";
step2.appendChild(h1);
companyNameCheckBox.forEach((companyName) => {
  companyName.addEventListener("change", (event) => {
    companyNameIsChecked = true;
    if (event.target.id === "company_name_toggle_on") {
      // companyNameWrap.style.display = "flex";
      companyNameWrap.style.visibility = "visible";
      companyNameWrap.style.height = "30px";

      console.log(companyNameWrap.style.height);
    } else {
      companyNameWrap.style.visibility = "hidden";
      companyNameWrap.style.height = 0;
    }
  });
});
specialAccomodationWrap.style.height = 0;
specialAccomodationsCheckBox.forEach((accomodation) => {
  accomodation.addEventListener("change", (event) => {
    specialAccomodationsIsChecked = true;
    if (event.target.id === "special_accommodations_toggle_on") {
      specialAccomodationWrap.style.display = "flex";
      specialAccomodationWrap.style.visibility = "visible";
      specialAccomodationWrap.style.height = "100px";
      step2.style.height = "330px";
    } else {
      step2.style.height = "230px";
      specialAccomodationWrap.style.height = 0;
    }
  });
});
step2.addEventListener("change", () => {
  if (companyNameIsChecked && specialAccomodationsIsChecked) {
    step3.disabled = false;
    step3.style.opacity = 1;
    h1.style.visibility = "visible";
    h1.style.top = "90%";
    step2.style.height = "400px";
  } else {
    step3.disabled = true;
    step3.style.opacity = 0.6;
  }
});

// STEP 3
let reset = false;
const form = document.querySelector("form");
let step3 = document.getElementById("step_3");
const submitButton = document.getElementById("submit_button");
const lastCheck = document.getElementById("rock");
step3.disabled = true;
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
  step3.disabled = true;
  submitButton.disabled = true;
  lastCheck.checked = false;

  step1.style.height = "80px";
  step2.style.height = "230px";
  select.value = "0";
  for (let i = 0; i < attendeesInput.length; i++) {
    console.log(attendeesInput);
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
  step1Result.style.visibility = "hidden";
  document.querySelector("#step2_result").remove();
  companyNameIsChecked = false;
  specialAccomodationsIsChecked = false;
  step1.style.overflow = "hidden";
  step2.disabled = true;
  step2.style.opacity = 0.6;
  step3.style.opacity = 0.6;
});
