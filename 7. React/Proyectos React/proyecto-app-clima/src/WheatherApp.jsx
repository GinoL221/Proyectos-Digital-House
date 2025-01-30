import { useState } from 'react'
import './WheatherApp.css'

export const WheatherApp = () => {

    const [city, setCity] = useState('')
    const [weatherData, setWeatherData] = useState(null)

    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    const apiKey = 'ab5ca05c1625280c8c30bea2cccdb498'
    const difKelvin = 273.15

    const fetchWeatherData = async () => {
        try {
            const response = await fetch(`${urlBase}?q=${city}&appid=${apiKey}&lang=es`)
            const data = await response.json()
            setWeatherData(data);
        } catch (error) {
            console.error('Error en la petición: ', error)
        }
    }


    const handleCityChange = (e) => {
        setCity(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchWeatherData()
    }

    return (
        <div className="container">
            <h1>Aplicación de clima</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Ingresar una ciudad" value={city} onChange={handleCityChange} />
                <button type="submit">Buscar</button>
            </form>
            {weatherData && (
                <div>
                    <h2>{weatherData.name}, {weatherData.sys.country}</h2>
                    <p>Temperatura: {Math.floor(weatherData.main.temp - difKelvin)}°C</p>
                    <p>Humedad: {weatherData.main.humidity}%</p>
                    <p>La condicion meteorológica actual: {weatherData.weather[0].description}</p>
                    <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description} />
                </div>
            )}
        </div>
    )
}
