import React from 'react';
import './css/table.css';
import { useHistory } from 'react-router-dom';
export const Table = ({ cityData }) => {
    const history = useHistory();
    const headerKeys = ['State', "City", "Country", "Rank", "DAYS"];
    const selectedDaysHandler = (e, city) => {
        history.push(
            {
                pathname: '/days',
                state: {
                    days: e.target.value,
                    key: city.Key
                },
            });
    }
    return <div className="table-container">
        {cityData.length && <table>
            <tr>
                {headerKeys.map((key, i) => {
                    return <th key={i}>{key}</th>
                })}
            </tr>
            <React.Fragment>
                {cityData.map((city, i) => {
                    return (
                        <tr>
                            <td>{city.AdministrativeArea.LocalizedName}</td>
                            <td>{city.LocalizedName}</td>
                            <td>{city.Country.LocalizedName}</td>
                            <td>{city.Rank}</td>
                            <td>
                                <select name="days" id="days"
                                    onChange={(e)=> {selectedDaysHandler(e, city)}}>
                                    <option value="1day">1 Days</option>
                                    <option value="5day" >5 Days</option>
                                </select>
                            </td>
                        </tr>

                    )
                })}

            </React.Fragment>
        </table>}
    </div>
}