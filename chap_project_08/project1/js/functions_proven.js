/* define functions here */

function calculateTotal (quantity, price) {
  return quantity * price;
}

function outputCartRow (file, title, quantity, price, total) {
  var total = calculateTotal(quantities[i], prices[i]);
  document.write("<tr>");
  document.write("<td>" + "<img src='images/" + filenames[i] + "' >");
  document.write("<td>" + titles[i]);
  document.write("<td>" + quantities[i]);
  document.write("<td>" + "$" + prices[i].toFixed(2));
  document.write("<td>" + "$" + total.toFixed(2));
  document.write("</tr>");
}
