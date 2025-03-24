import WeatherForm from "@/components/weather/weatherForm";
import WeatherList from "@/components/weather/weatherList";
import React from "react";

interface SearchParams{
    searchParams: {
        cityName: string;
    };
}


const Weather = async ({ searchParams }: SearchParams) => {
  const city = (await searchParams).cityName;
  return (
    <div className="flex justify-center h-screen bg-cover" style={{ backgroundImage: "url('/images/weather.jpg')"} }>
    
        
      <div className="flex flex-col mt-50 justify-center items-center  gap-6 border-5 rounded-2xl bg-white/30 backdrop-blur w-[400px] h-[200px] shadow-lg shadow-gray-500">
        <header className="text-4xl font-semibold"> Weather App </header>
        <WeatherForm />
        <WeatherList city={city} />
      </div>
    </div>
  );
};

export default Weather;
