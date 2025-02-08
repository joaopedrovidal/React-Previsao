import styles from './FiveDays.module.css'

export function FiveDays({ weather5Days }){
    console.log(weather5Days)

    let dailyForecast = {}

    for(let forecast of weather5Days.list){
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast
        }
    }

    const nextFiveDays = Object.values(dailyForecast).slice(1,6)

    function convertDate(date){
        const newDate = new Date (date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' })
         
        return newDate
    }


    return (
        <div className={styles.weatherContainer}>
            <h3>Previsão próximos 5 dias</h3>
            <div className={styles.weatherList}>
                {nextFiveDays.map(forecast =>(
                    <div key={forecast.dt} className={styles.weatherItem}>
                        <p className={styles.forecastDay}>{convertDate(forecast)}</p>
                        <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="" />
                        <p className={styles.forecastDescription}>{forecast.weather[0].description}</p>
                        <p>{Math.round(forecast.main.temp_min)}ºC min / {' '} {Math.round(forecast.main.temp_max)}ºC máx</p>
                    </div>
                ))}
            </div>
        </div>
    )
}