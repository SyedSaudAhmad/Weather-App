const key = "7ed8e93e7a3121fa3fbce4d15c46a5c5" ;
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})



async function checkWeather(city){
    const response = await fetch(url + city +`&appid=${key}`);

    if( response.status == 404 ) {
        document.querySelector(".error").style.display = "block" 
        document.querySelector(".weather").style.display = "none" ;
    }
    
    else{
        
        let data = await response.json();
        console.log(data);
        
        document.querySelector(".city").innerHTML = data.name ;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%" ;
        document.querySelector(".wind").innerHTML = data.wind.speed + "kmph" ;
        
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "1530391_weather_clouds_sun_sunny_icon.png"
        }
        else if (data.weather[0].main == "Clear"){
            weatherIcon.src = "1530392_weather_sun_sunny_temperature_icon.png"
        }
        else if (data.weather[0].main == "Rain"){
            weatherIcon.src = "2995003_cloud_rain_weather_day_water_icon.png"       
        }
        else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src = "4102317_cloud_rain_weather_icon.png"       
        }
        else if (data.weather[0].main == "Mist"){
            weatherIcon.src = "2682821_fog_foggy_forecast_mist_weather_icon.png"       
        }
        else if (data.weather[0].main == "Haze"){
            weatherIcon.src = "9044329_haze_icon.png"       
        }
        document.querySelector(".weather").style.display = "block" ;
        document.querySelector(".error").style.display = "none"
    }
    
}

checkWeather() ;
