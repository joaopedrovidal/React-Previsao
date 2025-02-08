import styles from './WeatherInfo.module.css';
import React from 'react';


export function WeatherInfo ({ weather }){ 
    if (!weather || !weather.weather) {
        return null; 
    }
    return (
        <div className={styles.weatherContainer}>
            <h2>{weather.name}</h2>
            <div className={styles.weatherInfo}>
                <img 
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                />
                <p className={styles.temperature}>{Math.round(weather.main.temp)}ºC</p>
            </div>

            <p className={styles.description}>{weather.weather[0].description}</p>

            <div className={styles.details}>
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}ºC</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure}</p>
            </div>
        </div>
    )
}