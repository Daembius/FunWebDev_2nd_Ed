/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

var total = calculateTotal(quantities, prices);
// var total = 0;
for (i = 0; i < filenames.length; i++) {
  outputCartRow (filenames[i], titles[i], quantities[i], prices[i], total[i]);
}

/*
for (i = 0; i < filenames.length; i++) {
  var amount = calculateTotal(quantities[i], prices[i]);
  document.write("<tr>");
  document.write("<td>" + "<img src='images/" + filenames[i] + "' >");
  document.write("<td>" + titles[i]);
  document.write("<td>" + quantities[i]);
  document.write("<td>" + "$" + prices[i].toFixed(2));
  document.write("<td>" + "$" + amount.toFixed(2));
  document.write("</tr>");
};
*/
