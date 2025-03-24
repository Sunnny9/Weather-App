import { Input } from "../ui/input";
import { Button } from "../ui/button";

const WeatherForm = () => {
  return (
    <form className="*:not-first:mt-2" action="">
      <div className="flex">
        <Input
          placeholder="Enter City Name"
          name="cityName"
          className="rounded-r-none border-gray-400 shadow-2xs"
        />
        <Button className="rounded-l-none">Search</Button>
      </div>
    </form>
  );
};

export default WeatherForm;
