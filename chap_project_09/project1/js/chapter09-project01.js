
/* add code here  */
function setBackground(e) {
  if (e.type == "focus") {
    e.target.className = "highlight";
  }
  else if (e.type == "blur") {
    e.target.className = "hilightable";
  }
}
window.addEventListener("load", function(){
  let cssSelector = ".hilightable";
  let fields = document.querySelectorAll(cssSelector);
  for (i=0; i<fields.length; i++)
  {
    fields[i].addEventListener("focus", setBackground);
    fields[i].addEventListener("blur", setBackground);
}
});
