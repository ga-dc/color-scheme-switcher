;(function(q){
  red = document.querySelector("#redButton");
  q.test( "red button has event listener", function( assert ) {
    assert.ok(red.listeners);
  });
  q.test( "red button click changes body background to red", function( assert ) {
    $(red).trigger("click");
    assert.equal(document.body.style.background || document.body.style.backgroundColor,"red")
  });
  // q.test( "white button has event listener", function( assert ) {
  //   white = document.querySelector("#whiteButton");
  //   assert.ok(white.listeners);
  // });
  // q.test( "blue button has event listener", function( assert ) {
  //   blue = document.querySelector("#blueButton");
  //   assert.ok(blue.listeners);
  // });
  // q.test( "yellow button has event listener", function( assert ) {
  //   yellow = document.querySelector("#yellowButton");
  //   assert.ok(yellow.listeners);
  // });
})(QUnit)
