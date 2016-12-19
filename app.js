$(document).ready(function() {

// var interval = null;
// var minutes = 1;
// var seconds = 1;
//
// var stopHasBeenClicked = false;
// $('.stop').click(function() {
//   stopHasBeenClicked = true;
// });
//
//   function doSomething() {
//     var interval = null;
//     interval = setInterval(function() {
//       seconds--;
//       if (seconds === 0) {
//         if (minutes !== 0) {
//           console.log(minutes + ":" + seconds + "0");
//           seconds = 60;
//           minutes--;
//         }
//         else {
//           console.log(minutes + ":" + "0" + seconds);
//           console.log("done!");
//           clearInterval(interval);
//         }
//       }
//
//       else if (stopHasBeenClicked) {
//         clearInterval(interval);
//       }
//
//       else {
//         if (seconds < 10) {
//         console.log(minutes + ":" + "0" + seconds);
//         }
//         else console.log(minutes + ":" + seconds);
//       }
//     }, 1000);
//   }
//
// //figure out how to start and stop without losing scope stuff.
//   $(".start").click(function() {
//     doSomething()
//     console.log('clicked');
//     // this works but only on the initial click, the values do not update every
//     // second.
//     $('.minutes').html(minutes);
//     $('.seconds').html(seconds);
//   });
//
//   $(".stop").click(function() {
//   })

var Clock = {
  seconds: 1,
  minutes: 25,

  start: function() {
    var self = this;
    this.interval = setInterval(function() {
      self.seconds--;

      if (self.seconds === 0) {
       if (self.minutes !== 0) {
         $(".minutes").html(self.minutes);
         $(".seconds").html(self.seconds + "0");
         console.log(self.minutes + ":" + self.seconds + "0");
         self.seconds = 60;
         self.minutes--;
       }
       else {
         $(".minutes").html(self.minutes);
         $(".seconds").html("0" + self.seconds);
         console.log(self.minutes + ":" + "0" + self.seconds);
         console.log("done!");
         clearInterval(this.interval);
       }
     }

     else {
         if (self.seconds < 10) {
           $(".minutes").html(self.minutes);
           $(".seconds").html("0" + self.seconds);
           console.log(self.minutes + ":" + "0" + self.seconds);
         }
         else {
           $(".minutes").html(self.minutes);
           $(".seconds").html(self.seconds);
          console.log(self.minutes + ":" + self.seconds);
        }
       }
    }, 1000);
  },

  pause: function() {
    clearInterval(this.interval);
    delete this.interval;
  },

  resume: function() {
    if(this.interval) this.start();
  },

  reset: function() {
    clearInterval(this.interval);
    self.minutes = 25;
    self.seconds = 0;
    $(".minutes").html(self.minutes);
    $(".seconds").html(self.seconds + "0");
  }
}

$(".start").click(function() {
  Clock.start();
});

$(".stop").click(function() {
  Clock.pause();
});

$(".reset").click(function() {
  Clock.reset();
})





});
