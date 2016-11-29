// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {

  // Select the element with id `sandbox` and append a `div` element to it. Make sure to store the div in a JavaScript varaible
  	var myDiv = d3.select("#sandbox").append("div");
  // Create a variable `mySvg` by appending an `svg` element to your newly created `div`
  var mySvg = myDiv.append("svg");
  // Set both the width and height attributes of your `svg` to 300 
  mySvg.attr('height', 300).attr('width', 300)
  // Append a `circle` element to your `svg`, setting the properties noted in index.html
  var circle = mySvg.append('circle').attr('r', 20).attr('cx', 50).attr('cy'. 50).style('fill', 'blue')
  // Append a `rect` element to your `svg`, setting the properties noted in index.html
  mySvg.append('rect').attr('width', 20).attr('height', 20)
});
