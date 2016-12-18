$(document).ready(function() {

var interval = null;
var minutes = 1;
var seconds = 1;

var stopHasBeenClicked = false;
$('.stop').click(function() {
  stopHasBeenClicked = true;
});

  function doSomething() {
    var interval = null;
    interval = setInterval(function() {
      seconds--;
      if (seconds === 0) {
        if (minutes !== 0) {
          console.log(minutes + ":" + seconds + "0");
          seconds = 60;
          minutes--;
        }
        else {
          console.log(minutes + ":" + "0" + seconds);
          console.log("done!");
          clearInterval(interval);
        }
      }

      else if (stopHasBeenClicked) {
        clearInterval(interval);
      }

      else {
        if (seconds < 10) {
        console.log(minutes + ":" + "0" + seconds);
        }
        else console.log(minutes + ":" + seconds);
      }
    }, 1000);
  }

//figure out how to start and stop without losing scope stuff.
  $(".start").click(function() {
    doSomething()
    console.log('clicked');
    // this works but only on the initial click, the values do not update every
    // second.
    $('.minutes').html(minutes);
    $('.seconds').html(seconds);
  });

  $(".stop").click(function() {
  })





});
