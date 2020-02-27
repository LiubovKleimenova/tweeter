$(document).ready(function() {
  $(document).scroll(function() {
    console.log($(document).scrollTop());
    $(".scroll-button").addClass("scroll-on");
    if ($(document).scrollTop() === 0) {
      $(".scroll-button").removeClass("scroll-on");
    } 
    if ($(document).scrollTop() > 400) {
      $(".nav-button").addClass("btn-off");
    } else {
      $(".nav-button").removeClass("btn-off");
    }
})
})