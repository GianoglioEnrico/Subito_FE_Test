const step1 = document.getElementById("step_1");
const attendee = document.getElementById("attendee_container");
const step1Result = document.getElementById("step1_result");
let attendeesInput = [];
const doneIcon = `<i class="fa fa-check-circle" id="done-icon"></i>`;
let step2 = document.getElementById("step_2");
let attendeeInputHeight = "60px";

step1.style.height = "120px";

export function handleChangeSelect(e) {
  attendeesInput = [];
  step1Result.style.visibility = "hidden";
  step1Result.style.top = 0;

  // If the selected element is not the default value ("0")
  if (e.target.value !== "0") {
    attendee.style.visibility = "visible";
    step1.style.height = "120px";
    for (let i = 0; i < attendee.children.length - 1; i++) {
      if (i < e.target.value) {
        step1.style.height =
          parseInt(step1.style.height) + parseInt(attendeeInputHeight) + "px";
        attendee.children[i].style.visibility = "visible";
        attendeesInput.push(attendee.children[i].children[1]);
        // On Attendee input event
        attendee.children[i].children[1].addEventListener("keyup", () => {
          let filledInputs = attendeesInput.filter(
            (attendee) => attendee.value !== ""
          );

          // If all visible input fields are filled show green check
          if (filledInputs.length === attendeesInput.length) {
            step2.disabled = false;
            step2.style.opacity = 1;
            step1Result.innerHTML = doneIcon;
            step1Result.style.visibility = "visible";
            step1Result.style.top = "90%";
            step1.style.height = "500px";
          }
          // if not all visible attendee inputs are filled with textx
          else {
            step1.style.height = 120 + attendeesInput.length * 60 + "px";
            step2.style.opacity = 0.6;
            step2.disabled = true;
            step1Result.style.visibility = "hidden";
            step1Result.style.top = 0;
          }
        });
      } else {
        attendee.children[i].style.visibility = "hidden";
      }
    }
  }
  // When you select the defaul element of the select ("0")
  else {
    step1.style.height = "120px";
    attendeesInput = [];
    for (let i = 0; i < attendee.children.length; i++) {
      if (attendee.children[i].children[1]) {
        attendee.children[i].children[1].value = "";
        attendee.children[i].style.visibility = "hidden";
      }
      attendee.children[i].value = "";
      step1Result.innerHTML = "";
    }
  }
}
