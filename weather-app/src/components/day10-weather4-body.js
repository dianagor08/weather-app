import React, { useCallback, createContext } from 'react';
import WeatherItem from './day10-weather5-weather-item';
import Settings from './day10-weather7-settings';
import Graph from './day10-weather6-graph';

export const settingsContext = createContext(null);

export default function Body() {
    const [settings, setSettings] = React.useState({
        'tempCelsius': true,
        'displayTemp': true,
        'displayWind': true,
        'displayIcon': true,
        'displayHumidity': true
    });
    const [weatherObj, setWeatherObj] = React.useState(null);


    React.useEffect(() => {
        // API docs https://openweathermap.org/forecast5
        const Weather_API_key = '6b9ee5f9edbf0469243e280ab4f5d256'
        const url = 'https://api.openweathermap.org/data/2.5/forecast';
        // Read about Fetch API here: https://javascript.info/fetch
        fetch(`${url}?q=Calgary,AB,CA&appid=${Weather_API_key}&units=metric`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setWeatherObj(data);
                console.log('API data came mounted')
            });
    }, []);

    const handleSettingsChange = useCallback((settingsUpdate) => {
        //console.log(settingsUpdate)
        setSettings(() => { return { ...settings, ...settingsUpdate } });
        console.log(settings)
    }, [settings]);

    return (
        <div className="container p-3 bg-info">
            <settingsContext.Provider value={settings}>
                <i className='text-danger fw-bold'>Body component</i>
                {weatherObj &&
                    <h4>{weatherObj.city.name} - {weatherObj.city.country}</h4>}
                <div className='row'>
                    <div className='col'>
                        {weatherObj && weatherObj.list.map((item) => <WeatherItem data={item} />)}
                    </div>
                    <div className='col'>
                        {/* <Settings settings={settings} settingsChangeHandler={handleSettingsChange} /> */}
                        <Settings settingsChangeHandler={handleSettingsChange} />
                    </div>
                </div>
                <div className='row'>
                    {weatherObj && <Graph data={weatherObj} dayIndex={1} />}
                </div>
            </settingsContext.Provider>
        </div>
    );
}
