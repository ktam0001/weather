import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import './css/days.css';

const Days = ()=> {
    const location = useLocation();
    const [daysForecast, setDaysForecast] = useState([])

    const headerKeys = ['Day-Forecast', 'Symbol', 'Night-Forecast', 'Symbol', 'Min-Temp', 'Max-Temp']
    useEffect(()=> {
        const fetchApi = async() => {
            const url = `http://dataservice.accuweather.com/forecasts/v1/daily/${location.state.days}/${location.state.key}?apikey=s6GKrcurx7Fw9IVdr5cYviAEL5oYIdQ8`;            
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson);
            setDaysForecast(resJson);
        }
        fetchApi();
    }, [location.state.days, location.state.key]);
    return <div>
        <div className="forecast-header">
        CITY FORECAST REPORT
        </div>
        {daysForecast.DailyForecasts && daysForecast.DailyForecasts.length && <div className="table-container">
            <table>
                <tr>
                {headerKeys.map((key, i) => {
                    return <th key={i}>{key}</th>
                })}
                </tr>
                <React.Fragment>
                {daysForecast.DailyForecasts.map((ele, i)=> {
                    return <tr>
                        { ele.Day.Icon < 10 && 
                            <React.Fragment>
                                <td className = 'tdicon'>{ele.Day.IconPhrase}</td>
                                <td>
                                    <img src = {`https://developer.accuweather.com/sites/default/files/0${ele.Day.Icon}-s.png`}/>
                                </td>
                            </React.Fragment>
                        }
                        { ele.Day.Icon >= 10 && 
                            <React.Fragment>
                                <td className = 'tdicon'>{ele.Day.IconPhrase}</td>
                                <td>
                                    <img src = {`https://developer.accuweather.com/sites/default/files/${ele.Day.Icon}-s.png`}/>
                                </td>
                            </React.Fragment>
                        }
                        { ele.Night.Icon < 10 && 
                            <React.Fragment>
                                <td className = 'tdicon'>{ele.Night.IconPhrase}</td>
                                <td>
                                    <img src = {`https://developer.accuweather.com/sites/default/files/0${ele.Night.Icon}-s.png`}/>
                                </td>
                            </React.Fragment>
                        }
                        { ele.Night.Icon >= 10 && 
                            <React.Fragment>
                                <td className = 'tdicon'>{ele.Night.IconPhrase}</td>
                                <td>
                                    <img src = {`https://developer.accuweather.com/sites/default/files/${ele.Night.Icon}-s.png`}/>
                                </td>
                            </React.Fragment>
                        }
                        <td>{`${ele.Temperature.Minimum.Value}${ele.Temperature.Minimum.Unit}`}</td>
                        <td>{`${ele.Temperature.Maximum.Value}${ele.Temperature.Maximum.Unit}`}</td>
                        
                    </tr>
                })}
                </React.Fragment>
            </table>
        </div> }
    </div>
}
export default Days;

// <button className = 'h-button'
//                             onClick = {}
//                         >Get Hourly Data</button>

//https://developer.accuweather.com/sites/default/files/{ele.Day.Icon}-s.png