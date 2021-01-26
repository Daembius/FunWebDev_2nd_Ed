/* add your functions here */

// Create a constructor function called Book ():
function Book (isbn, title, description, universities) {
  "use strict";

  this.isbn = isbn;
  this.title = title;
  this.description = description;
  this.universities = universities;
}

// Add a function named putputCard () as a prototype function to the Book function object:
Book.prototype.outputCard = function () {
  "use strict";

  document.write('<div class="mdl-cell mdl-card mdl-shadow--2dp">');
  document.write('<div class="mdl-card__media">');
  document.write("<img  src='images/" + this.isbn + ".jpg' title='this.title'>");
  // console.log(this.title);
  document.write("</div>");
  document.write('<div class="mdl-card__supporting-text"><p>');
  document.write("<p>"+ this.description + "</p>");
  // console.log(this.description);
  document.write("<h6>Adopters</h6>");
  document.write("<ul>");
  document.write("<li>" + this.universities + "</li> ");
  document.write("</ul>");
  document.write('</div>');
  document.write('<div class="mdl-card__actions mdl-card--border"><a class="mdl-button">READ MORE</a></div></div>');
}

// <div class="mdl-cell mdl-card mdl-shadow--2dp">
//     <div class="mdl-card__media">
//         <img src="images/013336092X.jpg" title="Starting Out with C++: Early Objects" >
//     </div>
//     <div class="mdl-card__supporting-text">
//         <p>Tony Gaddis’s accessible, step-by-step presentation helps beginning students understand the important details necessary to become skilled programmers. His approach is gradual and highly accessible, ensuring that students understand the logic behind developing high-quality programs.</p>
//         <h6>Adopters</h6>
//         <ul>
//         <li>Coastal Carolina University</li>
//         <li>University of Dayton</li>
//         <li>Bowling Green State University</li>
//         </ul>
//     </div>
//     <div class="mdl-card__actions mdl-card--border">
//         <a class="mdl-button">READ MORE</a>
//     </div>
// </div>
