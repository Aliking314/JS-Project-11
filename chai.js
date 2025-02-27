let BASED_URL= "https://api.openweathermap.org/data/2.5/weather?q="
let API_KEY ='43874aec2522eb45ec0379b9772c1777';

 const searchBox = document.querySelector(".search input");
 const searchBtn = document.querySelector(".search button");
 const weatherIcon = document.querySelector(".weather-icon")


 async function checkWeather(city){
    const respone = await fetch(BASED_URL + city + "&mode=json&units=metric" + `&appid=${API_KEY}`);
    let data = await respone.json();
    console.log(respone);
   
  if (respone.status==404) {
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";

  } else {
   
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main="Clear") {
    weatherIcon.src = "clear.png"
  }else if (data.weather[0].main="Clouds") {
    weatherIcon.src = "cloud.png"
  }else if (data.weather[0].main="Mist") {
    weatherIcon.src = "mist.png"
  } else if (data.weather[0].main="Rain") {
    weatherIcon.src = "rain.png"
  }else if (data.weather[0].main="Drizzle") {
    weatherIcon.src = "drizzle.png"
  }else if (data.weather[0].main="Snow") {
    weatherIcon.src = "snow.png"
  }
 
  document.querySelector(".weather").style.display="block";
  document.querySelector(".error").style.display="none";


   

  }
    
 }
 searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);

 })