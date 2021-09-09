const companyNameWrap = document.getElementById("company_name_wrap");
const specialAccomodationWrap = document.getElementById(
  "special_accommodations_wrap"
);
let step2 = document.getElementById("step_2");

let step3 = document.getElementById("step_3");

companyNameWrap.style.height = 0;
step2.disabled = true;
step2.style.height = "260px";

specialAccomodationWrap.style.height = 0;
let areAllChecked = [false, false];
export function handleStep2CheckBoxes(event, step2Result) {
  areAllChecked = [false, false];
  document
    .getElementsByName("company_name_toggle_group")
    .forEach((checkbox) => {
      if (checkbox.checked === true) {
        areAllChecked[0] = true;
      }
    });

  document
    .getElementsByName("special_accommodations_toggle")
    .forEach((checkbox) => {
      if (checkbox.checked === true) {
        areAllChecked[1] = true;
      }
    });

  if (event.target.name === "company_name_toggle_group") {
    if (event.target.id === "company_name_toggle_on") {
      // companyNameWrap.style.display = "flex";
      // companyNameWrap.style.visibility = "visible";
      companyNameWrap.style.height = "40px";
    } else {
      companyNameWrap.style.height = 0;
    }
    // handleAllCheckBoxes(companyName.checked, accomodation.checked);
  } else {
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

  if (areAllChecked[0] === true && areAllChecked[1] === true) {
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
}
