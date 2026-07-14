
const getCurrentLatAndLong=async (city)=>{

 let result=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`);

let data=await result.json();

const dataObj={
latitude:data.latitude,
longitude:data.longitude
}
console.log(dataObj);
return dataObj;
};

export default getCurrentLatAndLong;

