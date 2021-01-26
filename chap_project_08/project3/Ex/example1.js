function Book (isbn, title, description, universities) {
    "use strict";
    this.isbn = isbn;
    this.title = title;
    this.description = description;
    this.universities = universities;
}

(function () {
  "use strict";
  let books = [
    new Book ( "0132145375",
     "Database Processing",
     "Appropriate for all contemporary undergraduate database management courses.\
     Database Processing reflects a new teaching method that gets students straight to the point with its thorough and\
     modern presentation of all the key database processing fundamentals.",
     ["Piedmont College",
       "Dallas Baptist University",
       "Saint Cloud State University"] ),
    new Book ( "0133970744",
      "The Basics of Web Design: HTML5 & CSS3",
      "The Basics of Web Design: HTML5 and CSS3,\
       Third Edition takes a unique approach to prepare students to design web pages that work today in addition to being ready\
       to take advantage of HTML5 coding techniques of the future.",
       ["University of West Georgia",
          "Wake Forest University",
          "Towson University",
          "Edge Hill University"] )
  ];

  for (let i = 0; i < books.length; i++){
// Boucle "première de couverture":
    let b = books[i];
    document.write('<div class="mdl-cell mdl-card mdl-shadow--2dp">');
    document.write('<div class="mdl-card__media">');
    document.write("<p><img src='images/" + b.isbn + ".jpg' title='b.title'></p>");
    console.log(b.title);
    document.write("</div>");
    document.write('<div class="mdl-card__supporting-text">');
    document.write("<p>" + b.description + "</p>");
    document.write("<h6>Adopters</h6><ul>");
    // Boucle "Universités":
        for (let uni = 0; uni < b[3].length; i++) {
          document.write("<li>" + b[3].universities + "</li>");
        }
    document.write("<li>" + b.universities + "</li>");
    document.write("</ul></div></div>");
  }
})();


// <div class="mdl-cell mdl-card mdl-shadow--2dp">
//     <div class="mdl-card__media">
//         <img  src="images/0132145375.jpg" title="Database Processing">
//     </div>
//     <div class="mdl-card__supporting-text">
//        <p>Appropriate for all contemporary undergraduate database management courses. Database Processing reflects a new teaching method that gets students straight to the point with its thorough and modern presentation of all the key database processing fundamentals.</p>
//         <h6>Adopters</h6>
//         <ul>
//            <li>Piedmont College</li>
//            <li>Dallas Baptist University</li>
//            <li>Saint Cloud State University</li>
//         </ul>
//     </div>
//     <div class="mdl-card__actions mdl-card--border">
//         <a class="mdl-button">READ MORE</a>
//     </div>
// </div>
