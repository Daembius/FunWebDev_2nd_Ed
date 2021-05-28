"use strict";

window.addEventListener("load", function(){

  const thumbs = document.getElementById("thumbnails");
  const featuredImage = document.querySelector("#featured img");
  const caption = document.querySelector("#featured figcaption");

  // Replace clicked thumbnail by large picture
  thumbs.addEventListener("click", function (e) {
    if (e.target.nodeName.toLowerCase() == 'img') {
      let clickedImageSource = e.target.src;
      let newSrc = clickedImageSource.replace("small", "medium");
      featuredImage.src = newSrc;
      caption.textContent = e.target.title;
    }
  });
  /* add event handlers to make the caption appear and disappear when the user
  moves the mouse over and out of the larger image */
  featuredImage.addEventListener("mouseover", function (event){
    caption.style.opacity = "0.8";
    caption.style.transition = "0.5";
  });
  featuredImage.addEventListener("mouseout", function (event) {
    caption.style.opacity =  "0";
    caption.style.transition = "1.5s";
  })

});
