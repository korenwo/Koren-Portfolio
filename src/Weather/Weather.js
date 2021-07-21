import React, { useState } from "react";
import { render } from "react-dom"
import axios from "axios";

const WeatherApp = () => {
    const [temperature, setTemperature] = useState("");
    const [city, setCity] = useState("London");
    const [country, setCountry] = useState("UK");


const getWeatherData = (city, country) => {
    axios({
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=f2f7e33fbb51c9666538fa3e49b1d959`
    })
    .then((response) => {
        console.log(response.data.main.temp);
        setTemperature(response.data.main.temp -273.15)
    })
    .catch((error) => {
        console.log(error);
    });
};

return (
    <>
    <div style={{ marginLeft: "33%" }}>
        <div 
            style={{
                height: "150px",
                width: "450px",
                backgroundColor: "lightgreen",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "25px",
            }}
        >
            <br/>
            {city} Weather
            <br />
            {Math.round(temperature * 100) / 100} C
            </div>
            <br />
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
            />
            <button
                onClick={() => {
                    getWeatherData(city, country);
                }}                
            >
                get
            </button>
           </div>
        </> 
    );
};

render (<WeatherApp />, document.querySelector("#root"));

export default WeatherApp;