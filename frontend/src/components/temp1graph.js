import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function Temp1Graph({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data && data.length > 0) {

        const labels = data.map(item =>{
            const date = new Date(item.Date);
            date.setDate(date.getDate() - 1); // Subtract one day from the date
            return date.toLocaleDateString() + ' ' + item.Time;
        });
      const temps = data.map(item => item.Temp1);
      console.log(temps.length);

      if (chartRef.current) {
        chartRef.current.destroy(); // Destroy existing chart if it exists
      }

      const ctx = document.getElementById('temperatureChart').getContext('2d');

      chartRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Temperature',
            data: temps,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
      //   options: {
      //     plugins: {
      //       tooltip: {
      //         enabled: false
      //       }
      //     }
      // }
      });
    }
  }, [data]);

  return (
    <div>
      <canvas id="temperatureChart" width="400" height="200"></canvas>
    </div>
  );
}

export default Temp1Graph;
