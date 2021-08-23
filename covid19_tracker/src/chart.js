import React, { useEffect, useState } from 'react';
import { fetchDailyData } from './api';
import { Line, Bar } from 'react-chartjs-2';
import './App.css';

function Chart({ apivalue: { confirmed, recovered, deaths }, country }) {
  let [dailydata, setDailydata] = useState([]);
  useEffect(() => {
    async function getdata() {
      const data = await fetchDailyData();
      setDailydata(data);
    }
    getdata();
  }, [])

  // const LineChart = (
  // this is terminal operator if the dailydata got
  //some value it will work otherwise value would be null
  let data = {};
  if (dailydata.length) {


    data = {
      labels: dailydata.map(({ date }) => date),
      datasets: [{
        data: dailydata.map(({ confirmed }) => confirmed),
        label: "infected",
        borderColor: "Red",
        fill: true,

      },
      {
        data: dailydata.map(({ deaths }) => deaths),
        label: "Death",
        borderColor: "Blue",
        fill: true
      }
      ]
    }

  }
  else {
    return null;
  };
  let dataa = {};
  if (confirmed) {
    dataa = {
      labels: ['Infected', 'Recovered', 'Deaths'],
      datasets: [
        {
          label: "People",
          data: [confirmed.value, recovered.value, deaths.value],
          backgroundColor: [
            'Blue',
            'Green',
            'Red',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
  }
  else {
    return "Barchart is not working";
  }
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    title: {
      display: true, text: `current situation in ${country}`
    },
  };

  return (
    <div className="chartclass">

      {country=== " " ? <Line data={data} /> : <Bar data={dataa} options={options} />}
    </div>
  );

}
export default Chart;