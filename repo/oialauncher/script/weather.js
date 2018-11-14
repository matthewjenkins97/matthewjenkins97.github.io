//PLEASE PLACE YOUR LATITUDE AND LONGITUDE HERE - OTHERWISE YOUR WEATHER WILL 
//NOT WORK.
LATITUDE = "43.0484"
LONGITUDE = "-75.3785"
//PLEASE PLACE YOUR PREFERRED UNIT (C OR F) HERE
TEMP_UNIT = "f"

function http_get(the_url) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", the_url, false); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.responseText;
}     

function weather() {
  latlon = LATITUDE + "," + LONGITUDE
  //if you steal this api key shame on you
  loc = http_get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latlon + "&result_type=postal_code&key=AIzaSyBJxuWE2w3dZAB3IsYjjVTsMzI6Asr56u4")
  loc = JSON.parse(loc)
  postal_code = loc.results[0].address_components[0].long_name

  reallySimpleWeather.weather({
    wunderkey: '821376f2ebc80afb', //if you steal this api key shame on you
    location: postal_code,
    unit: TEMP_UNIT,
    success: function(weather) {
      // temperature
      document.getElementById("temp").innerHTML = weather.temp + "&#176;"
      // misc info about temperature
      // this includes the following: low ... high, Wind: wind km/h
      temp_misc = weather.low + "&#176;... " + weather.high + "&#176;, Wind: " + weather.wind.speed + " mph"
      document.getElementById("temp_misc").innerHTML = temp_misc
    }
  })
  setTimeout(weather, 300000)
}
weather()