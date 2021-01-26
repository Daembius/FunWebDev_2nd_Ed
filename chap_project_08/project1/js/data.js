/* here are the arrays used for project 1 */

var filenames = ["106020.jpg", "116010.jpg", "120010.jpg"];
var titles = ["Girl with a Pearl Earring", "Artist Holding a Thistle", "Portrait of Eleanor of Toledo"];
var quantities = [3, 1, 2];
var prices = [80, 125, 75];
// var prices = [280, 125, 275];

/*
   NOTE: parallel arrays are not an ideal way to represent this data.
         We have done this to simplify this exercise.

         A better approach would be to turn these parallel arrays
         into an array of cart item objects. Objects are used in
         projects 2 and 3.
*/

// ça ne fonctionne pas si je n'intialise pas la variable total à 0. Par exemple var total; ou var total = calculateTotal(quantities, prices);
var total = 0;
var subtotal = 0;
var shipping = 0;
var tax = 0;
var grandTotal = 0;
