import React from 'react';
interface WeatherIconProps {
  value: number;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ value }) => {
  const getWeatherIcon = () => {
    switch (value) {
      case 0:
        return <img className="w-9 h-9" src="../../images/clear-sky-icon.jpg" alt="Clear Sky" />;
      case 1:
      case 2:
      case 3:
        return <img className="w-9 h-9" src="../../images/partly-cloudy-icon.png" alt="Partly Cloudy" />;
      case 45:
      case 48:
        return <img className="w-9 h-9" src="../../images/fog-icon.png" alt="Fog" />;
      case 51:
      case 53:
      case 55:
        return <img className="w-9 h-9"src="../../images/drizzle-icon.png" alt="Drizzle" />;
      case 56:
      case 57:
        return <img className="w-9 h-9" src="../../images/freezing-drizzle-icon.png" alt="Freezing Drizzle" />;
      case 61: 
      case 63:
      case 65:
        return <img className="w-9 h-9" src="../../images/rain-icon.png" alt="Rain" />;
      case 66:
      case 67:
        return <img className="w-9 h-9" src="../../images/freezing-rain-icon.png" alt="Freezing Rain" />;
      case 71:
      case 73:
      case 75:
        return <img className="w-9 h-9" src="../../images/snow-fall-icon.png" alt="Snow Fall" />;
      case 77:
        return <img className="w-9 h-9" src="../../images/snow-grains-icon.png" alt="Snow Grains" />;
      case 80:
      case 81:
      case 82:
        return <img className="w-9 h-9" src="../../images/rain-showers-icon.png" alt="Rain Showers" />;
      case 85:
      case 86:
        return <img className="w-9 h-9" src="../../images/snow-showers-icon.jpg" alt="Snow Showers" />;
      case 95:
        return <img className="w-9 h-9" src="../../images/thunderstorm-slight-icon.jpg" alt="Thunderstorm Slight" />;
      case 96:
      case 99:
        return <img className="w-9 h-9" src="../../images/thunderstorm-heavy-icon.jpg" alt="Thunderstorm Heavy" />;
      default:
        return <img className="w-9 h-9" src="../../images/default-icon.png" alt="Default Weather" />;
    }
  };
  return <div className="inline-block mx-auto pt-3">{getWeatherIcon()}</div>;
};

export default WeatherIcon;