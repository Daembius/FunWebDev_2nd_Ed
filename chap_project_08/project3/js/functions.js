/* add your functions here */
"use strict";

// Create a constructor function called Book ():
function Book (isbn, title, description, universities) {

  this.isbn = isbn;
  this.title = title;
  this.description = description;
  this.universities = universities;

// Add a function named putputCard () as a prototype function to the Book function object:
  Book.prototype.outputCard = function () {

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
}


/*
Add a function named putputCard () as a prototype function to the Book function object:
Book.prototype.outputCard = function () {

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
*/
