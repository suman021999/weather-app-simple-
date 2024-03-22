const apikey="789601c615df9c05229a2217de79f018"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const weathericon=document.querySelector(".weather-icon img")

async function checkweather(city){
    const response=await fetch(apiurl + city + `&appid=${apikey}`)

    let data= await response.json()

    console.log(data)

    document.querySelector(".city").innerHTML=data.name  
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C"
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%"
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h"

    if(data.weather[0].main=="Clouds"){
        weathericon.src="/dist/images/clouds.png"
    }

    else if(data.weather[0].main=="Rain"){
        weathericon.src="/dist/images/rain.png"
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src="/dist/images/rain.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src="/dist/images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        weathericon.src="/dist/images/mist.png"
    }
}

searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value)

})


