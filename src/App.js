import {useState} from 'react'
import Weather from './components/Weather';
import './App.css';

function App() {
  const APP_KEY = "f6e91a2e291348bab54110416211512"
  let cityİnput = ""
const[weather, setWeather] = useState([])

  function handleChange() {
    document.querySelector("input").addEventListener("input", (e)=> {
      e.preventDefault()
      cityİnput = e.target.value

      console.log(cityİnput)
    })
  }

  async function getWeather(value) {
    const data= await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${value}&days=10&aqi=no&alerts=no`)
const result = await data.json()
setWeather(result.forecast.forecastday)
    console.log(result)
  }
  return (
    <div className="app">
      <div className="search">
        <input type="text" placeholder='Şehir İsmi Giriniz...' onChange={handleChange}/>
        <button onClick={()=> getWeather(cityİnput)}>Göster</button>
      </div>
      {weather.map((item,i) =><Weather key={i} date={item.date} condition={item.day.condition.text} minTemp={Math.round(item.day.mintemp_c)} maxTemp={Math.round(item.day.maxtemp_c)} icon={item.day.condition.icon}/>)}
    <div className="footer">By M.Melih Sargın <br/> <a href='https://github.com/MmSARGIN'>Github</a> </div>
    </div>
  );
}

export default App;
