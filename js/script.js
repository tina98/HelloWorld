
$(document).ready(function(){
    $("#des1,#des2,#des3").hide();
    $("#des1").show();
    
    var hght=$("#navbar").height();
    var descripts=[$("#des1"),$("#des2"),$("des3")];
    $(".wrapper").height(hght);

    var desC=0;
    setInterval(function(){
        descripts[desC%2].animate({opacity:'toggle', top:'40px'}, 500);
        desC++;
        descripts[desC%2].animate({opacity:'toggle', top:'40px'}, 500);
    },5000);
    var flagN=true;
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
      
        if ($(window).scrollTop()>=($("#why").position().top)-2){
            if (flagN){
                numbers(18, "#i1");
                numbers(12, "#i2");
                numbers(79, "#i3");
                flagN=false;
                
            }
        }
        
        if ($(window).scrollTop()>=($("#who").position().top)-2){
            $("#p1, #p2").animate({opacity:1}, "slow");
            // $("#p2").fadeIn();
        }
    });
    $("#up").click(function(){
       event.preventDefault();
       $("html, body").animate({scrollTop:0}, "slow");
    });
    
    $("#navbar >li a").click(function(){
        event.preventDefault();
        var link=$(this).attr("href");
        $('html, body').animate({scrollTop:$(link).position().top}, 'slow');
    });
    
    $("#logoW>img").click(function(){
        if ($(this).is("#light")){
            $("#w2, #w3").hide();
            $("#w1").fadeIn();
            $("#logoW").removeClass();
            $("#logoW").addClass("l1");
        }
        if ($(this).is("#topic")){
            $("#w1, #w3").hide();
            $("#w2").fadeIn();
            $("#logoW").removeClass();
            $("#logoW").addClass("l2");
        }
        if ($(this).is("#project")){
            $("#w2, #w1").hide();
            $("#w3").fadeIn();
            $("#logoW").removeClass();
            $("#logoW").addClass("l3");
        }
    });
    
    $("#dList>li").click(function(){
        var cID=$(this).text();
        $("#dList>li").removeClass("active");
        $(this).addClass("active");
        
        if (cID=="1"){
            $("#d1i").fadeIn();
            $("#d2i, #d3i, #d4i, #d5i").hide();
        }
        if (cID=="2"){
            $("#d2i").fadeIn();
            $("#d1i, #d3i, #d4i, #d5i").hide();
        }
        if (cID=="3"){
            $("#d3i").fadeIn();
            $("#d2i, #d1i, #d4i, #d5i").hide();
        }
        if (cID=="4"){
            $("#d4i").fadeIn();
            $("#d2i, #d3i, #d1i, #d5i").hide();
        }
        if (cID=="5"){
            $("#d5i").fadeIn();
            $("#d2i, #d3i, #d4i, #d1i").hide();
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
