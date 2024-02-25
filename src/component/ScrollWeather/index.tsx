import React from 'react';
import WeatherIcon from '../WeatherIcon';
interface HourlyData {
    temperature_2m: number[];
    time: string[];
    weather_code:number[]

  }
  
  interface HourlyUnits {
    time: string;
    temperature_2m: string;
  }
  
  interface ScrollWeatherProps {
    hourly: HourlyData;
    hourly_units: HourlyUnits;
  }
  

  const ScrollWeather: React.FC<ScrollWeatherProps> = ({ hourly, hourly_units }) => {
    const spliteDate=(string:string)=>{
        const [datePart, timePart] = string.split('T');
        return {datePart, timePart}
      }
      return hourly ? (
        <div className="max-w-screen-md mx-auto border overflow-x-auto w-[264px] mt-4">
          <div className="grid grid-cols-24 gap-2" style={{ gridAutoFlow: 'column', gridTemplateRows: 'auto' }}>
            {hourly.time.map((time, index) => (
              <div key={time} className="p-2 bg-gray-200">
                <div>{spliteDate(time).timePart}</div>
                <div>
                  <WeatherIcon value={hourly.weather_code[index]} />
                </div>
                <div>
                  {hourly.temperature_2m[index]} {hourly_units.temperature_2m}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null;
    
  };

export default ScrollWeather;