function initialize() {
  var mapO={
    center: {lat: 42.613643, lng: -82.984093},
    zoom: 18
  };
  var map = new google.maps.Map(document.getElementById('map'), mapO);
}
google.maps.event.addDomListener(window, 'load', initialize);
