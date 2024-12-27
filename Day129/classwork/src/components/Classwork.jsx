import React, { useEffect, useState } from "react";

const ApiUrl = 'http://api.weatherapi.com/v1/current.json?key=88a715dfaa084e13a19141558242712&q=Canada&aqi=no';

function Classwork() {
  const [data, setData] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [weatherInfo, setWeatherInfo] = useState('');


  const handleChange = (e) =>{
    setUserInput(e.target.value)
  }

  const info = async () => {
    const response = await fetch(ApiUrl);
    const jsonData = await response.json();
    setData(jsonData);
  };

  useEffect(() => {
    info();
  }, []);

  useEffect(() => {
    if (data && userInput) {
      if (userInput.toLowerCase() !== data.location.country.toLowerCase()) {
        setWeatherInfo('No country found');
      } else {
        setWeatherInfo(data.current.temp_c);
      }
    }
  }, [data, userInput]);

  return (
    <> 
      <h1>Weather App</h1>
      <input type="text" placeholder="Enter country name" value={userInput} onChange={handleChange}/>
      <p>Weather: {weatherInfo}</p>
    </>
  );
}

export default Classwork;
