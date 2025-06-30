import React, { useEffect, useState } from 'react';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';

export const Weather = () => {
    const [city, setCity] = useState("Ha Noi");
    const [weatherData, setWeatherData] = useState(null);

    const allIcons = {
        "01d": clear_icon,
        "01n": clear_icon,
        "02d": cloud_icon,
        "02n": cloud_icon,
        "03d": cloud_icon,
        "03n": cloud_icon,
        "04d": drizzle_icon,
        "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13d": snow_icon,
        "13n": snow_icon
    };

    const search = async (cityName) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${import.meta.env.VITE_APP_ID}&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            if (data.cod !== 200) {
                alert("City not found!");
                return;
            }

            const iconCode = data.weather[0].icon;
            const icon = allIcons[iconCode] || clear_icon;

            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.round(data.main.temp),
                location: data.name,
                icon: icon
            });
        } catch (err) {
            console.error("Error fetching weather:", err);
        }
    };

    useEffect(() => {
        search(city);
    }, []);

    return (
        <div className=''>
            <div className='flex items-center justify-center gap-2 mb-6'>
                <input
                    type='text'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className='py-2 px-4 w-full border border-cyan-400 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-cyan-300 text-black text-white'
                    placeholder='Enter city name'
                />
                <img
                    src={search_icon}
                    alt="Search Icon"
                    className='w-6 h-6 cursor-pointer'
                    onClick={() => search(city)}
                />
            </div>

            {weatherData && (
                <>
                    <div className='flex flex-col items-center mb-6 text-white'>
                        <img src={weatherData.icon} alt="Weather Icon" className='w-24' />
                        <p className='text-4xl font-bold'>{weatherData.temperature}°C</p>
                        <p className='text-2xl mt-1'>{weatherData.location}</p>
                    </div>

                    <div className='flex justify-between text-center font-medium'>
                        <div className='flex items-center gap-2 text-white'>
                            <img src={humidity_icon} alt="Humidity" className='w-6' />
                            <div>
                                <p>{weatherData.humidity}%</p>
                                <span className='text-sm'>Humidity</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 text-white'>
                            <img src={wind_icon} alt="Wind" className='w-6' />
                            <div>
                                <p>{weatherData.windSpeed} km/h</p>
                                <span className='text-sm'>Wind</span>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
