window.onscroll = function() {stickNavigation()};

function stickNavigation() {
    var body = document.getElementById("body");
    if (window.scrollTop >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }