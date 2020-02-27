$(document).ready(function() {
  $(document).scroll(function() {
    let flag = 0;
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
        flag = 1;
        $(document).scrollTop(0,0);
        if (flag === 1) {
        $(".new-tweet").addClass("show");
      }
        $(".new-tweet textarea").focus();
      })
})