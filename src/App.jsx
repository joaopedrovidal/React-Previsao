import { useState, useRef } from 'react'
import './App.css'
import axios from 'axios';
import { WeatherInfo } from './components/WeatherInfo/WeatherInfo';
import { FiveDays } from './components/FiveDays/FiveDays';


function App() {
  const [weather, setWeather] = useState();
  const inputRef = useRef ();

  const [weather5Days, setweather5Days] = useState();


  async function searchCity(){
    console.log(inputRef.current.value);
    const city = inputRef.current.value;
    const apiKey = "116d59cdef7ee452ede486b9740ddbc7";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;


    const apiInfo = await axios.get(url)
    const apiInfo5days = await axios.get(url5Days)

    setweather5Days(apiInfo5days.data)
    setWeather(apiInfo.data)
  }

  return (
    <div className='container'>
      <h1>
        Previsão do tempo
      </h1>
      <input 
        type="text"  
        placeholder='Digite o nome da cidade'
        ref={inputRef}
      />
      <button 
        onClick={searchCity}>
        Buscar
      </button>
      {weather && <WeatherInfo weather={weather}/>}
      {weather5Days && <FiveDays weather5Days={weather5Days}/>}
    </div>
  )
}

export default App
