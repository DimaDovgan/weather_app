import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.open-meteo.com/',
    
  }),
  tagTypes: ['weather'],
  endpoints: (builder) => ({
    getWeather: builder.mutation<any,{ latitude: string; longitude: string;timezone_abbreviation:string;  }>({
      query: ({ latitude, longitude,timezone_abbreviation}) => ({
        url: `/v1/forecast`,
        method: 'GET',
        params: {  latitude,
            longitude,
            timezone_abbreviation,
            current: "temperature_2m,weather_code",
            hourly:"temperature_2m,weather_code",
            daily: "temperature_2m_max,temperature_2m_min",
            forecast_days: 1,
        },
      }),
    }),
  }),
});
export const{
    useGetWeatherMutation,
}=weatherApi;