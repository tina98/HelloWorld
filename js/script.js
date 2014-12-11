$(document).ready(function(){
  if($(window).width() >= 1000){
        $(window).scroll(function () {
            
            if ($(window).scrollTop()>=80){
                $('#navbar').css("top","0vw")
                        .css("position","fixed")
                        .css("background-color","rgba(20, 23, 23, 0.7)");
            
            } else {
                $('#navbar')/*.css("top","7vw")*/
                        .css("position","static")
                        .css("background-color","rgba(20, 23, 23, 1)");

               
            }  
        });
    }

}
