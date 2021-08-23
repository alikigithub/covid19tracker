import React, { useEffect, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { fetchcountry } from './api.js';

function Country({handlecountrychange}) {
    let [countryname, setcountryname] = useState([]);
    useEffect(() => {
        async function countryapi() {
            let countries = await fetchcountry();
            setcountryname(countries);
        }
        countryapi();
    }, [setcountryname])
    return (
        <FormControl>
            <NativeSelect defaultValue=" " onChange={(e)=>handlecountrychange(e.target.value)}>
                <option value=" ">Global</option>
                {countryname.map((country, ind) => {
                    return (
                        <option key={ind} value={country}>
                            {country}
                        </option>
                    )
                })}

            </NativeSelect>
        </FormControl>
    )

};
export default Country;