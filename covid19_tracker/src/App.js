import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchData } from './api';
import Global from './global';
import Chart from './chart';
import Country from './country';


function App() {
  let [apivalue, setapivalue] = useState({});
  let [country, setcoutry] = useState(" ");
  let [statemanger, statemanagersetter] = useState({});
  useEffect(() => {
    async function getdata() {
      const data = await fetchData();
      setapivalue(data);
    }
    getdata();
  }, [])
  useEffect(() => {
    async function statemange() {
      const data = await fetchData();
      statemanagersetter(data);
    }
    statemange();
  }, [])

  let handlecountrychange = async (countryval) => {


    if (countryval == " ") {
      setcoutry(" ")
      setapivalue(statemanger);
    }
    else {
      const data = await fetchData(countryval);

      // console.log(data)
      setapivalue(data);
      setcoutry(countryval);
    }
  }
  console.log(country);
  return (
    <div className="container">
      <h1 className="heading"> Covid 19 Tracker</h1>
      <Global apivalue={apivalue} />
      <Country handlecountrychange={handlecountrychange} />
      <Chart apivalue={apivalue} country={country} />
    </div>

  );
}

export default App;
