interface WeatherData {
 city: string;
 temp: number;
}

interface WeatherListProps {
    city: string;
  }



const WeatherList = async ({ city }: WeatherListProps) => {
  if (!city?.trim()) {
    return null; 
  }
  const res = await fetch(`http://localhost:3001/weather?city=${city}`);
  const json: WeatherData[] = await res.json();

  if (!json?.length) {
    return <p>{`${city} is not found`}</p>;
  }

  return (
    <div className="flex gap-4">
      {json.map((item: WeatherData, index: number) => (
        <div key={index}>
          <p>
            Temperature of{" "}
            <b>
              {item.city} - {item.temp}°C
            </b>
          </p>
        </div>
      ))}
    </div>
  );
};

export default WeatherList;

