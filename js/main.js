var redButton    = $(".one");
var whiteButton  = $(".two");
var blueButton   = $(".three");
var yellowButton = $(".four");

redButton.on("click", changeRed);
whiteButton.on("click", changeWhite);
blueButton.on("click", changeBlue);
yellowButton.on("click", changeYellow);

function changeRed(){
  $("body").css("background", "red");
  $("body").css("color", "white");
}
function changeWhite(){
  $("body").css("background", "white");
  $("body").css("color", "black");
}
function changeBlue(){
  $("body").css("background", "blue");
  $("body").css("color", "white");
}
function changeYellow(){
  $("body").css("background", "yellow");
  $("body").css("color", "black");
}
