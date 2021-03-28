"use strict";
/* add code here  */

// I. Highlight chosen form field
function setBackground(e) {
  if (e.type == "focus") {
    e.target.className = "highlight";
  }
  else if (e.type == "blur") {
    e.target.className = "hilightable";
  }
}
window.addEventListener("load", function(){
  // let fields = document.querySelectorAll(".hilightable");
  let fields = document.getElementsByClassName("hilightable");
  for (let i=0; i<fields.length; i++)
  {
    fields[i].addEventListener("focus", setBackground);
    fields[i].addEventListener("blur", setBackground);
}
});

// II. Prevent form validation if required fields are empty

/* responsible for setting up event listeners on page */
function init() {
document.getElementById("mainForm").addEventListener("submit",
checkForEmptyFields);
}
/* initialize handlers once page is ready */
window.addEventListener("load", init);

/* ensures form fields are not empty */
function checkForEmptyFields(e) {
  let fields = document.getElementsByClassName("required");

  // loop thru the input elements looking for empty values

  for (let i=0; i<fields.length; i++) {
    if (fields[i].value == null || fields[i].value == "") {
      // since a field is empty prevent the form submission
      e.preventDefault();
      fields[i].className = "error";
    }
  }
}
