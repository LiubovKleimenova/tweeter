$(document).ready(function() {
  $(".nav-button").click(function() {
    $(".new-tweet").slideToggle("slow");
    $(".new-tweet textarea").focus();
  });
});
