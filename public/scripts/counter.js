$(document).ready(function() {
  
  $("textarea").keyup( function() {
    
    let $remL = 140 - $(this).val().length;
    //console.log($remL);
    $(this)
      .siblings(".counter")
      .text($remL);
    if ($remL < 0) {
      $(this).siblings(".counter").addClass("red-font");
     } else {
       $(this)
         .siblings(".counter")
         .removeClass("red-font");
     }
  })
});
