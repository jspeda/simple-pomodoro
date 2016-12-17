$(document).ready(function() {

  function doSomething() {
    var d = Date.now();
    var minutes = 25;
    var seconds = 10;
    setInterval(function() {
      seconds--;
      console.log(seconds);
      // change this so it adds a zero to the left if the seconds digit is one
      if (seconds === 0) {
        console.log(seconds + "0");
        seconds = 10;
      }
    }, 1000)
    console.log(d);
  }

  doSomething();





});
