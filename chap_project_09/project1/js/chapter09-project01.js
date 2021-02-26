
/* add code here  */
function setBackground(e) {
  if (e.type == "focus") {
    e.target.style.backgroundColor = "#FFE393";
    // e.className = 'highlight';
  }
  else if (e.type == "blur") {
    e.target.style.backgroundColor = "white";
  }
}
window.addEventListener("load", function(){
  // let cssSelector = "input[type=text],input[type=password]";
  let cssSelector = ".hilightable";
  let fields = document.querySelectorAll(cssSelector);
  for (i=0; i<fields.length; i++)
  {
    fields[i].addEventListener("focus", setBackground);
    fields[i].addEventListener("blur", setBackground);
}
});
