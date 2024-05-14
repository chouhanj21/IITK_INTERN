import React, { useEffect } from "react";
import Highcharts from "highcharts";

const AirTempChart = ({data}) => {
  useEffect(() => {
    if (data && data.length > 0) makeChart(data);
  }, [data]);
  return <div id="temp-container"></div>;
};

const makeChart =(data)=>{
    const labels = data.map(item =>{
        const date = new Date(item.Date);
        date.setDate(date.getDate() - 1); // Subtract one day from the date
        return date.toLocaleDateString() + ' ' + item.Time;
    });
    const temp1 = data.map(item => item["Air_Temp1"]);
    const temp2 = data.map(item => item["Air_Temp2"]);
    const temp3 = data.map(item => item["Air_Temp3"]);
    Highcharts.chart("temp-container", {
        chart: {
            type:'line',
            zoomType: 'xy'
        },
        title: {
          text: `Time Vs Air Temperature`,
          align: 'center'
        },
        yAxis: {
          title: {
            text: "Temperature (Deg C)"
          }
        },
        xAxis: {
            categories:labels,
        },
        credits:{
            enabled:false  // disabled watermark of highchart.js 
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },
        accessibility: {
            enabled: false // Enable accessibility module
        },
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            },
            turboThreshold: 1000000	  
          }
        },
        series: [{
            name: "Air_Temp1",
            data:temp1,
        },{
            name:"Air_Temp2",
            data:temp2,
        },{
          name:"Air_Temp3",
          data:temp3
        }
        ],
        responsive: {
          rules: [{
            condition: {
              maxWidth: 2000
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }]
        }
      });      
}

export default AirTempChart;