import React, { useEffect } from "react";
import Highcharts from "highcharts";

const TempChart = ({data}) => {
  useEffect(() => {
    if (data) makeChart(data);
  }, [data]);
  return <div id="temp-container"></div>;
};

const makeChart =(data)=>{
    const labels = data.map(item =>{
        const date = new Date(item.Date);
        if(item.Time) return date.toLocaleDateString() + ' ' + item.Time;
        else return date.toLocaleDateString()
    });
    const temp1 = data.map(item => item["Temp1"]);
    const temp2 = data.map(item => item["Temp2"]);
    Highcharts.chart("temp-container", {
        chart: {
            type:'line',
            zoomType: 'xy'
        },
        title: {
          text: `Time Vs Temperature`,
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
            name: "Temp1",
            data:temp1,
        },{
            name:"Temp2",
            data:temp2,
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

export default TempChart;