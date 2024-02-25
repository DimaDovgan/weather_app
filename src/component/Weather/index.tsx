"use client"
import { useEffect } from "react";
import { useGetWeatherMutation } from "@/Redux/api/weather";
import WeatherIcon from "@/component/WeatherIcon" ;
import ScrollWeather from "../ScrollWeather";


interface LocationProps{
    location:{
      timezone:{
        offset: string;
      }
      coordinates:{
        latitude:string;
        longitude:string;
        
      }
    }
    close:() => void;
}

const WeatherModal: React.FC<LocationProps> = ({ location ,close}) => {
    const [getWether, { isLoading, isError, error, isSuccess, data }] = useGetWeatherMutation();
    const spliteDate=(string:string)=>{
      const [datePart, timePart] = string.split('T');
      return {datePart, timePart}
    }
    useEffect(() => {
        const timeZone=`GMT${location.timezone.offset }`
         getWether({latitude:location.coordinates.latitude, longitude:location.coordinates.longitude, timezone_abbreviation:timeZone});
    }, []);
  
    return (isSuccess &&   <div className="absolute bottom-0 left-0 z-50 w-full h-full bg-white">
      <button
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 cursor-pointer"
          onClick={close}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div className="pt-8 mx-auto w-44 text-center">
          <h3 className="inline-block mx-auto text-gray-600">{spliteDate(data.current.time).datePart}</h3>
          <div><p className="text-gray-600 pt-3">Current : {data.current.temperature_2m}{data.current_units.temperature_2m}</p></div>
          <WeatherIcon  value={data.current.weather_code}/>
          <div className="flex justify-between">
            <div>
              <p className="text-gray-600 pt-3">min.</p>
              <p className="text-gray-600 pt-3">{data.daily.temperature_2m_min}{data.current_units.temperature_2m}</p>
            </div>
            <div>
              <p className="text-gray-600 pt-3">max.</p>
              <p className="text-gray-600 pt-3">{data.daily.temperature_2m_max}{data.current_units.temperature_2m}</p>
            </div>
          </div>
        </div>
        <ScrollWeather hourly={data.hourly} hourly_units={data.hourly_units}/>
  </div>)
}
export default WeatherModal;