import React, { useEffect } from "react";
import Highcharts from "highcharts";

const WindSpeedChart = ({data}) => {
  useEffect(() => {
    if (data) makeChart(data);
  }, [data]);
  return <div id="wspeed-container"></div>;
};

const makeChart =(data)=>{
    const labels = data.map(item =>{
        const date = new Date(item.Date);
        if(item.Time) return date.toLocaleDateString() + ' ' + item.Time;
        else return date.toLocaleDateString();
    });
    const windSpeed = data.map(item => item["Wind_Speed"]);
    const maxWindSpeed = data.map(item => item["Max_Wind_Speed"]);
    const minWindSpeed = data.map(item => item["Min_Wind_Speed"]);
    Highcharts.chart("wspeed-container", {
        chart: {
            type:'line',
            zoomType: 'xy'
        },
        title: {
          text: `Wind Speed`,
          align: 'center'
        },
        yAxis: {
          title: {
            text: "Wind Speed (m/s)"
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
            name: "Wind Speed",
            data:windSpeed,
        },{
            name:"Max Wind Speed",
            data:maxWindSpeed,
        },{
            name:"Min Wind Speed",
            data:minWindSpeed,
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

export default WindSpeedChart;