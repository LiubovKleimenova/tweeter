

$(document).ready(function() {
  
  let position = 0;

  $(".nav-button").click(function() {
    if (!position) {
    $(".new-tweet").addClass("up");
    $(".new-tweet textarea").focus();
    position = 1
    } else {
      $(".new-tweet").removeClass("up");
      position = 0;
    }
    
})
})