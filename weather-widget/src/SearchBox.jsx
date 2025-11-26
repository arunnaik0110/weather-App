import { useState } from 'react'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InfoBox from './InfoBox';

function SearchBox({updateinfo}) {
   
    
  let [city, setcity]=useState("");
   let [err,seterr]=useState(false);
  const API_URL="https://api.openweathermap.org/data/2.5/weather?";
  const API_KEY="7427f9eb72acee5f674ff71262e42cbd";

  let getWeatherInfo=async()=>{
    try{
 let response=await fetch (`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
  let data=await response.json();
    
  let result={
    city:city,
 temp:data.main.temp,
 mintemp:data.main.temp_min,
 maxtemp:data.main.temp_max,
 humidity:data.main.humidity,
 weather:data.weather[0].main,
  }

  console.log(result);
    return result;
    }
    catch(err){
      throw err;
    }
 
};


   

let selectcity=(event)=>{
setcity(event.target.value);
};


 let handleSubmit=async(evt)=>{
    try{ 
     evt.preventDefault();
     console.log(city);
     setcity("");
    let info=await getWeatherInfo();
    updateinfo(info);
    }
    catch(err){
        seterr(true);
    }
}


 return (
 <>
<form onSubmit={handleSubmit}> 
   <h2>weather app</h2>
   <TextField id="outlined-basic" required label="select city" onChange={selectcity} value={city} variant="outlined" />
   <br />
   <br />
  <Button variant="contained" type="submit">Submit</Button>
   {err &&<p style={{color:"red"}}> No Such Place Exist</p>}
</form>
</> 
  )

}

export default SearchBox;
