// By Mathew Doan

var apiKey = "92c7e0d2789399fa9d326f4c5e3caeb5";

if ("geolocation" in navigator) {
    window.onload = function () {
    var currentPosition;
    function getCurrentLocation (position) {
        currentPosition = position;
        latitude = currentPosition.coords.latitude;
        longitude = currentPosition.coords.longitude;

        var website = "http://api.openweathermap.org/data/2.5/weather?lat="+latitude + "&lon=" + longitude + "&APPID=" + apiKey + "&units=metric";

        $.getJSON(website, function(data) {
        	document.getElementById('location').innerHTML = data.name +", "+ data.sys.country;
        	document.getElementById('clouds').innerHTML = data.weather[0].main;
        	document.getElementById('winds').innerHTML = data.wind.speed + " knots";
        	document.getElementById('temp').innerHTML = data.main.temp;

        	var temp = Math.floor(data.main.temp);
        	var ctemp = Math.floor(temp*9/5 + 32);

        		$("#btn1").on("click", function(){
				document.getElementById('temp').innerHTML = ctemp + " degrees Farenheight";
				})

				$("#btn2").on("click", function(){
				document.getElementById('temp').innerHTML = temp + " degrees Celcius";
				})     	
		})

    }
    navigator.geolocation.getCurrentPosition(getCurrentLocation);
}
};


