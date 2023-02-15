const weatherApp  = document.querySelector('.weather-app')
const weathers = document.querySelector('.weathers')
const details = document.querySelector('.details')
const form = document.getElementById('locationInput')
const search = document.querySelector('.search')
const btn = document.querySelector('.submit')
const cities = document.querySelectorAll('.city')
const locationInput = document.querySelector('#locationInput')


cityInput = 'Toshkent'
const updateUI = (weather)=>{
     
     console.log(weather);
     weathers.innerHTML=''
     details.innerHTML=''
     
     weathers.innerHTML=`
          <div class="temp-cloudBox">
               <h1 class="temp">${Math.round(weather.main.temp)}</h1>
               <small>
                    <img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" alt="icon" width:50; height:50>
                    <span>${weather.weather[0].main}</span>
               </small>
          </div>
          <div class="city-country">
               <h2>${weather.name}</h2>
               <h3>${weather.sys.country}</h3>
          </div>
     `
     details.innerHTML=`
     <h4>Weather Details</h4>
     <li>
          <span>Cloudy</span>
          <span class="cloud">${weather.clouds.all}%</span>
     </li>
     <li>
          <span>Humidity</span>
          <span class="humidity">${weather.main.humidity}%</span>
     </li>
     <li>
          <span>Wind</span>
          <span class="wind">${weather.wind.speed}km/h</span>
     </li>
     `
     // clear backgroud
     if (weather.weather[0].icon == '01d' ) {
          weatherApp.style.backgroundImage =  'url(./images/day/clear.jpg)'
     }
     if(weather.weather[0].icon == '01n' ){
          weatherApp.style.backgroundImage =  'url(./images/night/clear.jpg)'
     }


     // cloud backgroud
     if((weather.weather[0].icon == '02d') || (weather.weather[0].icon == '03d') || (weather.weather[0].icon == '04d')){
          weatherApp.style.backgroundImage =  'url(./images/day/cloudy.jpg)'
     }
     if((weather.weather[0].icon == '02n') || (weather.weather[0].icon == '03n') || (weather.weather[0].icon == '04n')){
          weatherApp.style.backgroundImage =  'url(./images/night/cloudy.jpg)'
     }


     // rainy backgroud
     if((weather.weather[0].icon == '09d') || (weather.weather[0].icon == '10d') || (weather.weather[0].icon == '11d')){
          weatherApp.style.backgroundImage =  'url(./images/day/rainy.jpg)'
     }
     if((weather.weather[0].icon == '09n') || (weather.weather[0].icon == '10n') || (weather.weather[0].icon == '11n')){
          weatherApp.style.backgroundImage =  'url(./images/night/rainy.jpg)'
     }

     // rainy backgroud
     if (weather.weather[0].icon == '13d' ) {
          weatherApp.style.backgroundImage =  'url(./images/day/snowy.jpg)'
     }
     if(weather.weather[0].icon == '13n' ){
          weatherApp.style.backgroundImage =  'url(./images/night/snowy.jpg)'
     }


       // foggy backgroud
       if ((weather.weather[0].icon == '50d' ) || (weather.weather[0].icon == '50n')) {
          weatherApp.style.backgroundImage =  'url(./images/day/fog.jpg)'
     }

     

     console.log(weather.weather[0].icon);


     
}




const getWeather = async (city)=>{
     const data = await getData(city) 
    return data
}
getWeather(cityInput).then((data)=> updateUI(data))



form.addEventListener('submit',(e)=>{
     e.preventDefault()
     const cityName  = form.city.value.trim()
     cityInput = cityName
     getWeather(cityInput).then((data)=> updateUI(data))
     form.reset()
     

})
cities.forEach((city)=>{
     city.addEventListener('click',(e)=>{
         cityInput = e.target.innerHTML
         getWeather(cityInput).then((data)=> updateUI(data))
     })
})
