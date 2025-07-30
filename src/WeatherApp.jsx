import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
  const [weatherInfo, setWeaterInfo] = useState({
    city: "Delhi",
    feelsLike: 37.86,
    temp: 32.74,
    tempMax: 32.74,
    tempMin: 32.74,
    humidity: 57,
    weather: "scattered clouds",
  });
  let updateInfo = (newInfo) => {
    setWeaterInfo(newInfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h3>
        <i>Weather App by Riya</i>
      </h3>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
