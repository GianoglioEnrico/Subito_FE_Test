const companyNameWrap = document.getElementById("company_name_wrap");
const specialAccomodationWrap = document.getElementById(
  "special_accommodations_wrap"
);
let step2 = document.getElementById("step_2");

let step3 = document.getElementById("step_3");

companyNameWrap.style.height = 0;
step2.disabled = true;

specialAccomodationWrap.style.height = 0;
let areAllChecked = [false, false];

export function handleStep2CheckBoxes(event, step2Result) {
  areAllChecked = [false, false];
  // Control if one of the two checkboxes of the "company_name_toggle_group" is checked
  document
    .getElementsByName("company_name_toggle_group")
    .forEach((checkbox) => {
      if (checkbox.checked === true) {
        areAllChecked[0] = true;
      }
    });
  // Control if one of the two checkboxes of the "special_accommodations_toggle" is checked
  document
    .getElementsByName("special_accommodations_toggle")
    .forEach((checkbox) => {
      if (checkbox.checked === true) {
        areAllChecked[1] = true;
      }
    });

  // Company Name Handling
  if (event.target.name === "company_name_toggle_group") {
    // If you check "yes" then the Input for adding your company name gets displayed
    if (event.target.id === "company_name_toggle_on") {
      companyNameWrap.style.height = "40px";
    } else {
      companyNameWrap.style.height = 0;
    }
  }
  // Special Accomodations Handling
  else if (event.target.name === "special_accommodations_toggle") {
    // If you check "yes" then the Textarea for adding speacial accomodations gets displayed
    if (event.target.id === "special_accommodations_toggle_on") {
      specialAccomodationWrap.style.display = "flex";
      specialAccomodationWrap.style.visibility = "visible";
      specialAccomodationWrap.style.height = "100px";
    } else {
      specialAccomodationWrap.style.height = 0;
    }
  }
  // If both the group are checked then the green icon gets displayed
  if (areAllChecked[0] === true && areAllChecked[1] === true) {
    step3.disabled = false;
    step3.style.opacity = 1;
    step2Result.style.visibility = "visible";

    step2Result.style.top = "85%";
    step2.style.height = "500px";
  } else {
    step3.disabled = true;
    step3.style.opacity = 0.6;
  }
}
