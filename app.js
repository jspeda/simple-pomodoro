$(document).ready(function() {

var audio = new Audio("alarm.mp3");

var Clock = {
  seconds: 60,
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
         audio.play();
         console.log("done!");
         clearInterval(self.interval);
         delete this.interval;
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
    this.minutes = 25;
    this.seconds = 60;
    $(".minutes").html(this.minutes);
    $(".seconds").html("00");
  },

  add5: function() {
    this.minutes += 5;
    $(".minutes").html(this.minutes);
  },

  min5: function() {
    if (this.minutes - 5 >= 0) {
      this.minutes -= 5;
      $(".minutes").html(this.minutes);
    }
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
});

$(".plus5").click(function() {
  Clock.add5();
});

$(".minus5").click(function() {
  Clock.min5();
});

});
