;(function(q){
  red = document.querySelector("#redButton");
  white = document.querySelector("#whiteButton");
  blue = document.querySelector("#blueButton");
  yellow = document.querySelector("#yellowButton");


  q.test( "red button has event listener", function( assert ) {
    assert.ok(red.listeners);
  });
  q.test( "red button click changes body background to red", function( assert ) {
    $(red).trigger("click");
    assert.equal(document.body.style.background || document.body.style.backgroundColor,"red")
  });

  q.test( "white button has event listener", function( assert ) {
    assert.ok(white.listeners);
  });
  q.test( "white button click changes body background to white", function( assert ) {
    $(white).trigger("click");
    assert.equal(document.body.style.background || document.body.style.backgroundColor,"white")
  });

  q.test( "yellow button has event listener", function( assert ) {
    assert.ok(yellow.listeners);
  });
  q.test( "yellow button click changes body background to yellow", function( assert ) {
    $(yellow).trigger("click");
    assert.equal(document.body.style.background || document.body.style.backgroundColor,"yellow")
  });

  q.test( "blue button has event listener", function( assert ) {
    assert.ok(blue.listeners);
  });
  q.test( "blue button click changes body background to blue", function( assert ) {
    $(blue).trigger("click");
    assert.equal(document.body.style.background || document.body.style.backgroundColor,"blue")
  });



})(QUnit)
