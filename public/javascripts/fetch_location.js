$(document).ready(function(){
  function getLocation() {
      navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude.toFixed(2);
        var longitude = position.coords.longitude.toFixed(2);

        $('#longitude').text(longitude);
        $('#latitude').text(latitude);
        insertMap(latitude, longitude);
      });
  }
  var coords =  getLocation();
});
