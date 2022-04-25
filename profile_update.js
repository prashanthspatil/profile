$(window).on("load", function () {
  $(".loader-wrapper").fadeOut(500, function () {});
  $(".items").isotope({
    filter: ".ios",
    animationOptions: {
      duration: 400,
      easing: "linear",
      queue: false,
    },
  });
});

$(document).ready(function () {
  $("#slides").superslides({
    animation: "fade",
    play: 0,
    pagination: false,
  });
  new Typed(".typed", {
    strings: ["iOS Developer"],
    typeSpeed: 60,
    loop: false,
    startDelay: 800,
    showCursor: false,
    onComplete: function () {
      new Typed(".alternate-job", {
        strings: ["Freelancer"],
        typeSpeed: 60,
        loop: false,
        startDelay: 0,
        showCursor: false,
        onComplete: function () {
          new Typed(".location-text", {
            strings: ["Bengaluru, India"],
            typeSpeed: 60,
            loop: false,
            startDelay: 0,
            showCursor: false,
          });
          $(".location-box > i").addClass("show");
        },
      });
      
    },
  });
});