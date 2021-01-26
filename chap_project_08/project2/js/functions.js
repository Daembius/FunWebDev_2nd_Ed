/* add in your functions here */

// outer functions
function outputCountryBox (name, continent, cities, photos) {
  document.write('<div class="item"><h2>');
  document.write(name);
  document.write('</h2> <p>');
  document.write(continent);
  document.write('</p><div class="inner-box"><h3>Cities</h3>');

  // inner functions
  function outputCities (cities) {
    for ( var j = 0 ; j < cities.length ; j++) {
      if (typeof cities[j] === "string") {
        document.write("<ul><li>" + cities[j] + "</li></ul>");
      }
    }
  }
  outputCities (cities);
  document.write('</div><div class="inner-box"><h3>Popular Photos</h3>');
  function outputPhotos (photos) {
    for ( var k = 0 ; k < photos.length ; k++) {
      document.write("<img src='images/" + photos[k] + " ' class='photo'> ");
    }
  }
  outputPhotos(photos);
  document.write('</div></p><button>Visit</button></div>');
}
