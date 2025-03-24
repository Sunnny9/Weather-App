import WeatherForm from "@/components/weather/weatherForm";
import WeatherList from "@/components/weather/weatherList";
import React from "react";

// Correct PageProps Interface for Next.js
interface PageProps {
  searchParams: { [key: string]: string | undefined };
}

// No need for async unless you're fetching data
const Weather = ({ searchParams }: PageProps) => {
  // Extracting cityName safely
  const city = searchParams?.cityName || "";

  // Conditional check if no city provided
  if (!city.trim()) {
    return <p className="text-center text-red-500">Please provide a city name.</p>;
  }

  return (
    <div
      className="flex justify-center h-screen bg-cover"
      style={{ backgroundImage: "url('/images/weather.jpg')" }}
    >
      <div className="flex flex-col justify-center items-center gap-6 border-5 rounded-2xl bg-white/30 backdrop-blur w-[400px] h-[200px] shadow-lg shadow-gray-500">
        <header className="text-4xl font-semibold"> Weather App </header>
        <WeatherForm />
        <WeatherList city={city} />
      </div>
    </div>
  );
};

export default Weather;
