//business logic
function Places(place, landMark, where, timeYear, food, weather) {
  this.place = place;
  this.landMark = landMark;
  this.where = where;
  this.timeYear = timeYear;
  this.food = food;
  this.weather = weather;
}

Places.prototype.toUppercase = function() {
  return this.place.toUpperCase();
  // return this.landMark.toUpperCase();
  // return this.where.toUpperCase();
  // return this.timeYear.toUpperCase();
  // return this.food.toUpperCase();
  // return this.notes.toUpperCase();
  // return this.weather.toUpperCase();
}

//user interface logic
$(document).ready(function(){
  $("form#new-place").submit(function(event){
    event.preventDefault();

    var inputtedPlace = $("input#place").val();
    var inputtedLandMark = $("input#landMark").val();
    var inputtedWhere = $("input#where").val();
    var inputtedTimeYear = $("input#timeYear").val();
    var inputtedFood = $("input#food").val();
    var inputtedWeather = $("input#weather").val();

    var newPlace = new Places(inputtedPlace,
        inputtedLandMark,
        inputtedWhere,
        inputtedTimeYear,
        inputtedFood,
        inputtedWeather);

    $("ul#placelist").append("<li><span class='placeAppend'>" + newPlace.toUppercase() + "</span></li>");

    $("input#place").val("");
    $("input#landMark").val("");
    $("input#where").val("");
    $("input#timeYear").val("");
    $("input#food").val("");
    $("input#weather").val("");

    $(".placeAppend").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.place);
      $(".landMarkClass").text(newPlace.landMark);
      $(".whereClass").text(newPlace.where);
      $(".timeYearClass").text(newPlace.timeYear);
      $(".foodClass").text(newPlace.food);
      $(".weatherClass").text(newPlace.weather);
    });
  });
});
