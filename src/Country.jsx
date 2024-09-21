import { useEffect, useState } from "react";
import Place from './Place'

export default function Country(){

    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [])

    return (
        <div style={{border: '2px solid Green', padding: '15px', marginTop: '10px', borderRadius: '15px'}}>
            <h4>Countries : {country.length}</h4>
            {
                country.map(place => <Place place = {place}></Place>)
            }

        </div>
    )
}