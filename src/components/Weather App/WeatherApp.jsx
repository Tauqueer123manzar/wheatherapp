import React from 'react'
import "./WeatherApp.css"
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow .png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/Humidity.png";

const WeatherApp = () => {
    let apikey="e2a776b09a07e2efd74c5a27490a972e";
    const search = () =>{
           const element=document.getElementsByClassName("cityInput");
           if(element[0]===" "){
              return 0;
           }
    }
  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className='cityInput' placeholder='Search' />
            <div className="search_icon" onClick={()=>{search()}}>
                <img src={search_icon} alt="search bar" />
            </div>
        </div>

        <div className="wheather-image">
            <img src={cloud_icon} alt="cloud icon" />
        </div>
        <div className="weather-temp">24°C</div>
        <div className="weather-location">India</div>

        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="humidity image" className='icon'/>
            </div>
            <div className="data">
                <div className="humidity-percent">64%</div>
                <div className="text">Humidity</div>
            </div>

        <div className="element">
            <img src={wind_icon} alt="wind icon"  className='icon'/>
        </div>
        <div className="data">
            <div className="humidity-percent">18 km/h</div>
            <div className="text">wind speed</div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp;