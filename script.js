moment().format('L');

//search function//
function searchCity(cityname) {

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=imperial&appid=ecc0be5fd92206da3aa90cc41c13ca56";
    var queryURLforecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&units=imperial&appid=ecc0be5fd92206da3aa90cc41c13ca56";

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        console.log(queryURL);
        //empty divs and ids//
        $("#current").empty();
       var mainDate = moment().format('L');

       //create html for city info

       var cityNameEl = $("<h2>").text(response.name);
       var displayMainDate = cityNameEl.append(" " + mainDate);
       var tempEL = $("<p>").text("Tempraturer: " + response.main.temp);
       var humEl = $("<p>").text("Humidity: " + response.main.humidity);
       var windEl = $("<p>").text("Wind Speed: " + response.wind.speed);
       var currentweather = response.weather[0].main;

        if (currentweather === "Rain") {
            var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/09d.png");
            currentIcon.attr("style", "height: 60px; width: 60px");
        } else if (currentweather=== "Clouds") {
            var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/03d.png");
            currentIcon.attr("style", "height: 60px; width: 60px");
        } else if (currentweather === "Clear") {
            var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/01d.png");
            currentIcon.attr("style", "height: 60px; width: 60px");
        }
        else if (currentweather === "Drizzle") {
            var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/10d.png");
            currentIcon.attr("style", "height: 60px; width: 60px");
        }
        else if (currentweather === "Snow") {
            var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/13d.png");
            currentIcon.attr("style", "height: 60px; width: 60px");
        }

    //html div to append elements

        var newDiv = $('<div>');

            newDiv.append(displayMainDate, currentIcon, tempEL, humEl, windEl);

            $("#current").html(newDiv);
    
    // UV call

    // 5 day forecast call

    // event handler city search

    // call stored items on page load


