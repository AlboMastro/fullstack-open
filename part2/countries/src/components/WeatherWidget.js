export const WeatherWidget = ({ weather }) => {
    return (
        <div>
            <p> {weather.main.temp} </p>
        </div>
    )
}