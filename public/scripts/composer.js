$(document).ready(function() {
  $(document).scroll(function() {
    console.log($(document).scrollTop());
    $(".scroll-button").addClass("scroll-on");
    if ($(document).scrollTop() === 0) {
      $(".scroll-button").removeClass("scroll-on");
    } 
    if ($(document).scrollTop() > 200) {
      $(".nav-button").addClass("btn-off");
    } else {
      $(".nav-button").removeClass("btn-off");
    }
  })
      $(".scroll-button").on('click', function() {
        $(document).scrollTop(0,0);
        $(".new-tweet").slideToggle("slow");
        $(".new-tweet textarea").focus();
      })
})