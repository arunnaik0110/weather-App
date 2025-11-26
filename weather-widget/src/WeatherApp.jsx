import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import './App.css'
export default function WeatherApp(){
   let [weather,setweather]=useState({
      city:"kurnool",
      temp: 4.44,
        mintemp: 3.33,
      maxtemp: 2.2,
      humidity: 37.44,
      weather: "Sunny",
   });

 let updateInfo = (info) => {
   console.log("running");
    setweather(info );
 }

   return( 
    <>
       <SearchBox  updateinfo={updateInfo} />
       <InfoBox info={weather}/>
    </>
   );
 }
