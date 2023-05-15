import React, { useEffect, useState } from 'react';
import axios from 'axios';
const apiKey = "c32b8cc2061de1d61c021f9d01a85034";
//const baseURL = //https://openweathermap.org/data/2.5/find?q=delhi%20&appid=c32b8cc2061de1d61c021f9d01a85034&units=metric
//              //https://openweathermap.org/data/2.5/find?q=delhi%20&appid=c32b8cc2061de1d61c021f9d01a85034&units=metric
//  `https://api.mapbox.com/geocoding/v5/mapbox.places/newyork.json?access_token=c32b8cc2061de1d61c021f9d01a85034&limit=1`

const WeatherApp = () =>{
    const [location,setLocation] =  useState('');
    const [weatherData,setWeatherData] = useState(null);
    const [error,setError] =  useState(null);

    const getCode = async () =>{
        const url  = `https://api.mapbox.com/geocoding/v5/mapbox.places/newyork.json?access_token=${apiKey}&limit=1`;
        const response =  await axios.get(url);
        console.log(response.data);
    }


    // useEffect = (()=>{
        
    // },[])


    const handleInputChange = (event) =>{
        setLocation(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const codes =  await getCode();
            const response = await axios.get(
                  //`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid={c32b8cc2061de1d61c021f9d01a85034}&units=metric`
                  `https://openweathermap.org/data/2.5/find?q=${location}%20&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric`
                );
                setWeatherData(response.data.list[0]);
                setError(null);
        }catch(error){
            setWeatherData(null);
            setError(error.message)
        }
    }

    return (
        <div className='bg-gray-200 min-h-screen py-8 px-4'>
            <h1 className='text-2xl font-bold mb-4'>Weather App</h1>
            <form onSubmit={handleSubmit} className='flex'>
                <input 
                    type="text"
                    placeholder="Enter Location"
                    className='px-4 py-2 border-gray-400 rounder-1-lg flex-1'
                    value={location}
                    onChange={handleInputChange}
                />
                <button
                   type="submit" 
                   className='bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white rounded-r-lg'
                >Get Weather
                </button>                   
            </form>
            {weatherData && (
                <div className='mt-8'>
                    <h2 className='text-lg font-bold mb-2'>
                    Current weather for {weatherData.name}    
                    </h2>
                    <div className='flex item-center'>
                        <img
                         src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                         alt={weatherData.weather[0].description}
                         className='mr-4'
                         />
                         <span className='text-3xl font-bold'>
                            {weatherData.main.temp}°C
                         </span>
                    </div>
                    <p className='text-gray-600'>
                        {weatherData.weather[0].description}
                    </p>    
                </div> 
            )}
            {error && <p className='text-red-500 mt-4'>{error}</p>}
        </div>
    )

}

export default WeatherApp;