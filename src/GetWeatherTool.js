
import GetLocation from "./Functions/GetLocation.js"



export const getWeather=async(city)=>{

    const {latitude,longitude}=await GetLocation(city);

    const weatherRes = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`
  );

    let weatherData=await weatherRes.json();

    
      return `Current temperature in ${city} is ${weatherData.current.temperature_2m}°C.`;
}




// obj.weather naam ka array usme obj.main mein current weather and obj.description me moderate rain
// obj.main.temp_min,obj.main.temp_max,obj.main.humidity


