
const getCurrentLatAndLong=async (city)=>{

 let result=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`);

const data=await result.json();

const dataObj={
latitude:data.results[0].latitude,
longitude:data.results[0].longitude,

}

return dataObj;

};


export default getCurrentLatAndLong;


