const apiKey='692b780555768a1a6ab984990b885d4f'

const btn=document.getElementById("getWeatherBtn")

btn.addEventListener("click",async()=>{

  const city=document.getElementById("cityInput")
  const ans=city.value.trim()

  if(ans==="")
  {
    alert("please enter the city name")
    return;
  }
  
  try{
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ans}&appid=${apiKey}&units=metric`)

    if(!response.ok)
    {
        throw new Error('city not found')
    }
   
    const data=await response.json()
    document.getElementById("result").innerHTML=`
    <h3>${data.name}, ${data.sys.country}</h3>
    <p>🌡️ Temperature: ${data.main.temp} °C</p>
    <p>🌤️ Weather: ${data.weather[0].main}</p>
    <p>💧 Humidity: ${data.main.humidity}%</p>
    <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>`

   
  }
  catch(err){
     document.getElementById("result").innerHTML=`<p style="color:red";>${err.message}</p>`
  }



})