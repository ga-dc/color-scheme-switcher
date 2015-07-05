
var redbutton = document.querySelector(".one")
var whiteButton = document.querySelector(".two")
var blueButton = document.querySelector(".three")
var blueButton = document.querySelector(".four")

redButton.addEventListener("click", goRed )
whiteButton.addEventListener("click", goWhite )
blueButton.addEventListener("click", goBlue )
yellowButton.addEventListener("click", goYellow )

function goRed () {
  document.body.style.backgroundColor = "red"
  document.body.style.color = "white"
}

function goWhite () {
  document.body.style.backgroundColor = "white"
  document.body.style.color = "black"
}

function goBlue () {
  document.body.style.backgroundColor ="blue"
  document.body.style.color ="white"
  }

function goYellow () {
    document.body.style.backgroundColor ="yellow"
    document.body.style.color ="white"
  }
