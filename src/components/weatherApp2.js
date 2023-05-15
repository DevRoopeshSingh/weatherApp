import React,{useState} from 'react';

const WeatherApp = () =>{
    
    const [city, setCity] = useState("Delhi");
    const [weather, setWeather] = useState(null);
    const [error,setError] =  useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather();
      };
   
      const fetchWeather = () => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c32b8cc2061de1d61c021f9d01a85034&units=metric`
        )
          .then((res) => res.json())
          .then((data) => setWeather(data))
          .catch((error) => console.log(error.message));
      };

    return(
        
            // <div className='flex flex-col h-screen justify-center items-center'>
            //     <h1 className="py-4 text-5xl text-white font-serif">Search Weather</h1>
            //     <div className="form">
            //         <form onSubmit={handleSubmit}>
            //             <input
            //             type="text"
            //             placeholder="Enter city name"
            //             className="px-4 py-3"
            //             value={city}
            //             onChange={(e) => setCity(e.target.value)}
            //             />
            //             <button type="submit" className="px-4 py-3 bg-green-500 text-white">
            //             Search
            //             </button>
            //         </form>
            //     </div>

            //     {weather && (
            //             <div className="card bg-blue-500 text-white w-[220px] h-[350px] flex flex-col justify-center items-center mt-10">
            //             <h4 className="text-2xl">{weather.name}</h4>
            //             <img
            //                 src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            //                 alt=""
            //                 className="w-[150px]"
            //             />
            //             <h2 className="text-5xl font-bold mb-2">{weather.main.temp}&deg;</h2>
            //             <p>{weather?.weather[0].main}</p>
            //             </div>
            //         )}

            // </div>
            <div className='bg-gray-200 min-h-screen py-8 px-4'>
            <h1 className='text-2xl font-bold mb-4'>Weather App</h1>
            <form onSubmit={handleSubmit} className='flex'>
                <input 
                    type="text"
                    placeholder="Enter Location"
                    className='px-4 py-2 border-gray-400 rounder-1-lg flex-1'
                    value={city}
                    onChange={(ev)=>{setCity(ev.target.value)}}
                />
                <button
                   type="submit" 
                   className='bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white rounded-r-lg'
                >Get Weather
                </button>                   
            </form>
            {weather && (
                <div className='mt-8'>
                    <h2 className='text-lg font-bold mb-2'>
                    Current weather for {weather.name}    
                    </h2>
                    <div className='flex item-center'>
                        <img
                         src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                         alt={weather.weather[0].description}
                         className='mr-4'
                         />
                         <span className='text-3xl font-bold'>
                            {weather.main.temp}°C
                         </span>
                    </div>
                    <p className='text-gray-600'>
                        {weather.weather[0].description}
                    </p>    
                </div> 
            )}
            {error && <p className='text-red-500 mt-4'>{error}</p>}
        </div>
        
    )
}

export default WeatherApp;