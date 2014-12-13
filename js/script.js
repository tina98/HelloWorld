$(document).ready(function(){

    $(window).scroll(function () {
      if ($(window).scrollTop()>=($(window).height()-$("#navbar").height()*2)){

        $('#navbar').css("top","0vw")
          .css("position","fixed")
          .css("background-color","rgba(20, 23, 23, 0.7)")
          .css("width", "100%");
            
      } else {
        $('#navbar')
          .css("position","static")
          .css("background-color","rgba(20, 23, 23, 1)");
      }  
    });
    
    
    $("#navbar >li").click(function(){
        $("#navbar").css("background-color", "white");
        event.preventDefault();
        // var link=$(this).attr();
        // $('html, body').animate({scrollTop:$(link).position().top}, 'slow');
    });
  
})
