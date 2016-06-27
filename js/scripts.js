// business logic
function Destination(country, state, city) {
  this.countryName = country;
  this.stateName = state;
  this.cityName = city;
  }

Destination.prototype.combine = function() {
  return this.countryName + ", " +  this.stateName + ", " + this.cityName;
}


// user interface logic
$(document).ready(function() {
  $("form#place").submit(function(event) {
    event.preventDefault();

    var inputtedCountry = $("input#input1").val();
    var inputtedState = $("input#input2").val();
    var inputtedCity = $("input#input3").val();

    var newDestination = new Destination(inputtedCountry, inputtedState, inputtedCity);

    $("ul#destinations").append("<li><span class='destination'>" + newDestination.combine() + "</span></li>");

    $(".destination").last().click(function() {
      $("#show-destination").show();
      $("show-destination h2").text(newDestination.countryName);
      $(".output1").text(newDestination.countryName);
      $(".output2").text(newDestination.stateName);
      $(".output3").text(newDestination.cityName);
    });

    $("input#input1").val("");
    $("input#input2").val("");
    $("input#input3").val("");


  });
});
