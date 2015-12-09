var coord=new google.maps.LatLng(42.6142, -82.984093);

var irc=new google.maps.LatLng(42.613643,-82.984093);
var googleAA=new google.maps.LatLng(42.279966,-83.743831);
var michigan=new google.maps.LatLng(42.276238, -83.741310);
var microsoft=new google.maps.LatLng(42.459570, -83.239894);
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
  marker1.setAnimation(google.maps.Animation.BOUNCE);
  marker2.setAnimation(google.maps.Animation.BOUNCE);
  marker3.setAnimation(google.maps.Animation.BOUNCE);
  marker4.setAnimation(google.maps.Animation.BOUNCE);
}


function m1(){
  coord=new google.maps.LatLng(42.6142, -82.984093);
  document.getElementById("mapAdd").innerHTML="Instructional Resource Center (14201 Canal Rd., Sterling Heights MI, 48313)";
  document.getElementById("mapI").innerHTML="Transporation will not be provided to the IRC for Days 1-5";
  
  initialize();
}
function m2(){
  coord=new google.maps.LatLng(42.2805, -83.743831);
  document.getElementById("mapAdd").innerHTML="Google Ann Arbor (201 South Division Street #500, Ann Arbor, MI 48104)";
  document.getElementById("mapI").innerHTML="Transporation WILL be provided to Google Ann Arbor for Day 5 (tentative)";
  
  initialize();
}
function m3(){
  coord=new google.maps.LatLng(42.2768, -83.741310);
  document.getElementById("mapAdd").innerHTML="University of Michigan (500 South State Street, Ann Arbor, MI 48109)";
  document.getElementById("mapI").innerHTML="Transporation WILL be provided back to the IRC for day 5 (tentative)";
  
  initialize();
}
function m4(){
  coord=new google.maps.LatLng(42.4789094,-83.247662);
  document.getElementById("mapAdd").innerHTML="Microsoft Technology Center (1000 Town Center Dr., Suite 1930, Southfield, MI 48075)";
  document.getElementById("mapI").innerHTML="Transporation WILL be provided to and from the Microsoft Technology Center for Day 2 (tentative)";
  
  initialize();
}
google.maps.event.addDomListener(window, 'load', initialize);
