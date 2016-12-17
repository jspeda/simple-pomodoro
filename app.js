$(document).ready(function() {

  function doSomething() {
    var d = Date.now();
    var minutes = 1;
    var seconds = 1;
    var interval = null;
    var interval = setInterval(function() {
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
      else {
        if (seconds < 10) {
        console.log(minutes + ":" + "0" + seconds);
        }
        else console.log(minutes + ":" + seconds);
      }
    }, 1000)
  }

  doSomething();





});
