import React, { useState } from "react";
import { render } from "react-dom"
import axios from "axios";

const WeatherApp = () => {
    const [temperature, setTemperature] = useState("");
    const [desc, setDesc] = useState("");
    const [city, setCity] = useState("London");
    const [country, setCountry] = useState("UK");
    const [y, setY] = useState("");
    const [z, setZ] = useState("");
    const [x, setX] = useState("");

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

const getMap = (x, y, z) => {
    axios({
        method: "GET",
        url: `http://maps.openweathermap.org/maps/2.0/weather/WND${z},${x},${y}?date=1527811099&use_norm=true&arrow_step=16&appid=ea2360aae6b7a2b63945302ef81d9707`
    })
    .then((response) => {
        console.log(response.map);
        setX(response.data.main.temp)
        setY(response.data.main.temp)
        setZ(response.data.main.temp)
    })
    .catch((error) => {
        console.log(error);
    });
};

return (
    <div className="box1">
        <div style={{ }}>
            <div 
                style={{
                    height: "150px",
                    width: "100%",
                    backgroundColor: "skyblue",
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
                    
                    <div
                        type="num"
                        value={x}
                        onChange={(e) => setX(e.target.value)}
                    />
                    <div
                        type="num"
                        value={y}
                        onChange={(e) => setY(e.target.value)}
                    />
                    <div
                        type="num"
                        value={z}
                        onChange={(e) => setZ(e.target.value)}
                    />
                    <button
                        onClick={() => {
                            getWeatherData(city, country);
                        }}                
                    >
                        get
                    </button>
                    <button
                        onClick={() => {
                            getMap(x, y, z);
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