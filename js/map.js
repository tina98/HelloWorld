var coord=new google.maps.LatLng(42.6142, -82.984093);
function initialize() {
  
  var mapO={
    center: coord,
    zoom: 18
  };
  var map = new google.maps.Map(document.getElementById('map'), mapO);
}
function m1(){
  coord=new google.maps.LatLng(42.6142, -82.98402);
  // document.getElementById("mapAdd").innerHTML("Instructional Resource Center (14201 Canal Rd., Sterling Heights MI, 48313)");
  // document.getElementById("mapI").innerHTML("Transporation will not be provided to the IRC for Days 1-5");
  
  initialize();
}
function m2(){
  coord=new google.maps.LatLng(42.2805, -83.743831);
  // document.getElementById("mapAdd").innerHTML("Google Ann Arbor (201 South Division Street #500, Ann Arbor, MI 48104)");
  document.getElementById("mapI").innerHTML("Transporation WILL be provided to Google Ann Arbor for Day 5 (tentative)");
  
  initialize();
}
function m3(){
  coord=new google.maps.LatLng(42.2768, -83.741310);
  // document.getElementById("mapAdd").innerHTML("University of Michigan (500 South State Street, Ann Arbor, MI 48109)");
  // document.getElementById("mapI").innerHTML("Transporation WILL be provided back to the IRC for day 5 (tentative)");
  
  initialize();
}
google.maps.event.addDomListener(window, 'load', initialize);
