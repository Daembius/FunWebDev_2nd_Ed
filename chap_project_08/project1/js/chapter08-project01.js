/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

// Upper part of the shopping cart

for (i = 0; i < filenames.length; i++) {
  outputCartRow (filenames[i], titles[i], quantities[i], prices[i], total[i]);
}

// Lower part of cart with calculation of Grand Total
// SUBTOTAL

for ( j = 0; j < quantities.length ; j++) {
  total = calculateTotal(quantities[j], prices[j]);
  subtotal += total;
  // console.log(total);
}
document.write("<tr class='totals'> <td colspan='4'>Subtotal</td> <td>$" + subtotal.toFixed(2) + "</td></tr>");

// TAX
// var tax = (0.1 * subtotal);
tax = (0.1 * subtotal);
console.log(tax);
document.write("<tr class='totals'> <td colspan='4'>Tax</td><td>$" + tax.toFixed(2) +"</td></tr>");

// SHIPPING
if (subtotal > 1000) {
  shipping = 0;
} else {
  shipping = 40;
}
// document.write("<tr class='totals'> <td colspan='4'>Shipping</td><td>$" + shipping.toFixed(2) +"</td></tr>");
document.write('<tr class="totals"><td colspan="4">Shipping</td><td>$' + shipping.toFixed(2) +'</td></tr>');
console.log(shipping);

// GRAND TOTAL
grandTotal = subtotal + tax + shipping;
document.write('<tr class="totals focus"><td colspan="4">Grand Total</td><td>$' + grandTotal.toFixed(2) + '</td></tr>');
console.log(grandTotal);
