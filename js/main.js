var colorButton = document.getElementById("switcher").querySelectorAll("li");
console.log(colorButton[0].id);

for (i=0; i<colorButton.length; i++) {
  console.log(colorButton[i].id);
  var color = colorButton[i].id;
  console.log(color);
  changeColor(color);
  document.getElementById(color).addEventListener("click", function() {
    changeColor(color);
  });

}

function changeColor(color) {
  document.getElementById(color).addEventListener("click", function() {
    document.querySelector("body").style.backgroundColor = color.substring(0, color.length - 6);
  });
}
