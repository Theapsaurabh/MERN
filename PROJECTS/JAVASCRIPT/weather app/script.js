const btn= document.getElementById('Search-btn')
const cityName= document.getElementById('city-name')
const API_Key= "a020c8b4fab16c5ecce5b73dbb4681e8";


  async function fetchData(city){

    try{
        console.log("city name", city)
    let res= await fetch(`https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`);
    let result= await res.json()
    if(result.message){
        console.log(object)
    }
    displayWeather(result)


    }catch(err){
        console.log(err.message)


    }
    

}


btn.addEventListener('click', ()=>{
    fetchData(cityName.value)
})

function displayWeather({name, main, wind, }){
    div = ` <div id="weatherInfo">
            <p id="temp">${main.temp}°C</p>
            <p id="city">${name}</p>
            <div class="otherInfo">
                <div class="wind">
                    <p>Wind</p>
                    <p>${wind.speed}km/h</p>
                </div>
                <div class="wind">
                    <p>Pressure</p>
                    <p>${main.pressure}ma</p>
                </div>
                <div class="wind">
                    <p>Humidity</p>
                    <p>${main.humidity}</p>
                </div>
            </div>

        </div>
`
    document.getElementById('second-div').innerHTML= div;

}