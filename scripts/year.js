// scrip file to display current year on the web page

var date = new Date();
var year = date.getFullYear();

var span = document.getElementById('year');

// display current year 
span.textContent = year;

// assign a bold style
span.style.fontWeight = 'bold';