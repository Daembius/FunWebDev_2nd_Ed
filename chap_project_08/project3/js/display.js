(function () {
  // alert("Début de l'IIFE")
  for (let i= 0; i < books.length; i++) {
    let b = books[i];
    // console.log(b);
    Book.prototype.outputCard (b);
  }
}) ();
