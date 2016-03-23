var buttons = document.querySelectorAll("li")
for(var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function(evt){
    document.body.className = evt.target.className
  })
}
