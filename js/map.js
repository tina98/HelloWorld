var coord=new google.maps.LatLng(42.613643, -82.984093);
function initialize() {
  
  var mapO={
    center: coord,
    zoom: 18
  };
  var map = new google.maps.Map(document.getElementById('map'), mapO);
}
google.maps.event.addDomListener(window, 'load', initialize);
