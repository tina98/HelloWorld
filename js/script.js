$(document).ready(function(){

    var flagN=true;
    $(window).scroll(function () {
        // if ($(window).scrollTop()>=($(window).height()-$("#navbar").height()*2)){
        
        //     $('#navbar').css("top","0vw")
        //       .css("position","fixed")
        //       .css("background-color","rgba(20, 23, 23, 0.7)")
        //       .css("width", "100%");
                
        // } else {
        //     $('#navbar')
        //       .css("position","static")
        //       .css("background-color","rgba(20, 23, 23, 1)");
        // }  
      
        if ($(window).scrollTop()>=($("#why").position().top)-2){
            if (flagN){
                numbers(18, "#i1");
                numbers(12, "#i2");
                numbers(79, "#i3");
                flagN=false;
                
            }
        }
    });
    $("#homeIcon").click(function(){
       event.preventDefault();
       $("html, body").animate({scrollTop:0}, "slow");
    });
    
    $("#navbar >li a").click(function(){
        event.preventDefault();
        var link=$(this).attr("href");
        $('html, body').animate({scrollTop:$(link).position().top}, 'slow');
    });
    
    
    
    $("#dList>li").click(function(){
        var cID=$(this).text();
        $("#dList>li").removeClass("active");
        $(this).addClass("active");
        
        if (cID=="1"){
            $("#d1i").css("display","block");
            $("#d2i, #d3i, #d4i, #d5i").css("display", "none");
        }
        if (cID=="2"){
            $("#d2i").css("display","block");
            $("#d1i, #d3i, #d4i, #d5i").css("display", "none");
        }
        if (cID=="3"){
            $("#d3i").css("display","block");
            $("#d2i, #d1i, #d4i, #d5i").css("display", "none");
        }
        if (cID=="4"){
            $("#d4i").css("display","block");
            $("#d2i, #d3i, #d1i, #d5i").css("display", "none");
        }
        if (cID=="5"){
            $("#d5i").css("display","block");
            $("#d2i, #d3i, #d4i, #d1i").css("display", "none");
        }
    })
});
function numbers(num, id){
    $({someValue: 0}).animate({someValue: num}, {
    	duration: 1500,
    	easing:'swing',
    	step: function() { 
    		$(id).text(Math.ceil(this.someValue) + "%");
    	}
    });
}
