let weather = {
     "apiKey": "d6dc536bda9a8d642a66c72edffd394a",

     fetchWeather: function(city){
          fetch(
               "https://api.openweathermap.org/data/2.5/weather?q=" 
               + city 
               + "&units=metric&appid="
               + this.apiKey
          )
          .then((response) => response.json())
          .then((data) => this.displayWeather(data)); // displaying contents in console
     },
     displayWeather: function(data){
          const {name} = data; // extract name from the object
          const {icon, description} = data.weather[0];  //get the first element from weather object and grab the icon and description
          const {temp, humidity} = data.main;
          const {speed} = data.wind;

          // console.log(name, icon, description, temp, humidity, speed); 
          document.querySelector(".city").innerText = "Weather in " + name;
          document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + ".png";
          document.querySelector(".description").innerText = description;
          document.querySelector(".temp").innerText = temp + "°C";
          document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
          document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";

          
          // visibility gained
          document.querySelector(".weather").classList.remove("loading");

          // image with city name
          document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name +"')";
     },
     // search function
     search: function(){
          this.fetchWeather(document.querySelector(".search-bar").value);
     }
};

// search bar
document.querySelector(".search button").addEventListener("click", function(){
     weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
     if(event.key == "Enter"){
          weather.search();
     }
});

weather.fetchWeather("Assam");