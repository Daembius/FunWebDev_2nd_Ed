"use strict";

window.addEventListener("load", function(){

  const thumbs = document.getElementById("thumbnails");
  const featuredImage = document.querySelector("#featured img");
  const caption = document.querySelector("#featured figcaption");  // essayer aussi const caption = document.querySelector("#figcaption");

  // Replace clicked thumbnail by large picture
  thumbs.addEventListener("click", function (e) {
    if (e.target.nodeName.toLowerCase() == 'img') {
      let clickedImageSource = e.target.src;
      let newSrc = clickedImageSource.replace("small", "medium");
      featuredImage.src = newSrc;
      caption.textContent = e.target.title;
    }
  });
featuredImage.addEventListener("mouseover", function (event){
  caption.style.opacity = "0.8";
  caption.style.transition = "0.5";
});
featuredImage.addEventListener("mouseout", function (event) {
  caption.style.opacity =  "0";
  caption.style.transition = "1.5s";
})

});
