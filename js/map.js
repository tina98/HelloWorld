var coord=new google.maps.LatLng(42.613371,-82.984022);
//42.613941,-82.984022
var irc=new google.maps.LatLng(42.613941,-82.984022);
var googleAA=new google.maps.LatLng(42.279966,-83.743831);
var michigan=new google.maps.LatLng(42.276238, -83.741310);
var microsoft=new google.maps.LatLng(42.475428, -83.243757);
var gm=new google.maps.LatLng(42.5227, -83.03693);
//exact lat-.00057
var marker1;
var marker2;
var marker3;
var marker4;


function initialize() {
  
  var mapO={
    center: coord,
    zoom: 18
  };
  var map = new google.maps.Map(document.getElementById('map'), mapO);
  
  marker1=new google.maps.Marker({
    map:map,
    animation: google.maps.Animation.DROP,
    position: irc
  });
  marker2=new google.maps.Marker({
    map:map,
    animation: google.maps.Animation.DROP,
    position: googleAA
  });
  marker3=new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: michigan
  });
  marker4=new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: microsoft
  });
  marker5=new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: gm
  });
  marker1.setAnimation(google.maps.Animation.BOUNCE);
  marker2.setAnimation(google.maps.Animation.BOUNCE);
  marker3.setAnimation(google.maps.Animation.BOUNCE);
  marker4.setAnimation(google.maps.Animation.BOUNCE);
  marker5.setAnimation(google.maps.Animation.BOUNCE);
}


function m1(){
  coord=new google.maps.LatLng(42.613371,-82.984022);
  document.getElementById("mapAdd").innerHTML="Instructional Resource Center (14201 Canal Rd., Sterling Heights MI, 48313)";
  document.getElementById("mapI").innerHTML="Transporation will not be provided to the IRC for Days 1-5";
  
  initialize();
}
function m2(){
  coord=new google.maps.LatLng(42.2805, -83.743831);
  document.getElementById("mapAdd").innerHTML="Google Ann Arbor (201 South Division Street #500, Ann Arbor, MI 48104)";
  document.getElementById("mapI").innerHTML="Transporation WILL be provided to Google Ann Arbor for Day 5";
  
  initialize();
}
function m3(){
  coord=new google.maps.LatLng(42.2768, -83.741310);
  document.getElementById("mapAdd").innerHTML="University of Michigan (500 South State Street, Ann Arbor, MI 48109)";
  document.getElementById("mapI").innerHTML="Transporation WILL be provided back to the IRC for Day 5";
  
  initialize();
}
function m4(){
  coord=new google.maps.LatLng(42.4764697,-83.244586);
  document.getElementById("mapAdd").innerHTML="Microsoft Technology Center (1000 Town Center Dr., Southfield, MI 48075)";
  document.getElementById("mapI").innerHTML="Transporation WILL be provided to the Microsoft Technology Center for Day 3";
  
  initialize();
}
function m5(){
  coord=new google.maps.LatLng(42.5227, -83.03693);
  document.getElementById("mapAdd").innerHTML="General Motors Tech Center (GM Tech Center Rd, Warren, MI 48092)";
  document.getElementById("mapI").innerHTML="Transporation WILL be provided back to the IRC for Day 3";
  
  initialize();
}
google.maps.event.addDomListener(window, 'load', initialize);
