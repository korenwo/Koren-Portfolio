import React, { useState } from "react";
import { render } from "react-dom"
import axios from "axios";

const WeatherApp = () => {
    const [temperature, setTemperature] = useState("");
    const [desc, setDesc] = useState("");
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
        setDesc(response.data.weather[0].main)
    })
    .catch((error) => {
        console.log(error);
    });
};

return (
    <div className="box">
        <div style={{ }}>
            <div 
                style={{
                    height: "150px",
                    width: "100%",
                    backgroundColor: "rgba(0, 0, 255, 0.3)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "25px",
                    color:"whitesmoke"
                }}
            >
                {new Date().toLocaleString()}
                <br/>
                {city} Weather
                <br />
                {Math.round(temperature * 100) / 100} °C - {desc}
                </div>
                <br />
                <div style={{textAlign: "center" }}>
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
                </div>
            </div> 
        );
    };

render (<WeatherApp />, document.querySelector("#root"));

export default WeatherApp;