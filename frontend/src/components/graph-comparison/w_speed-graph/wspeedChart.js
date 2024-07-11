import React, { useEffect } from "react";
import Highcharts from "highcharts";

const WSpeedChart = ({data}) => {
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
    const wspeed = data.map(item => item["W_Speed"]);
    const awspeed = data.map(item => item["A_W_Speed"]);
    const maxwspeed = data.map(item => item["Max_W_Speed"]);
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
            name: "W_Speed",
            data:wspeed,
        },{
            name:"A_W_Speed",
            data:awspeed,
        },{
            name:"Max_W_Speed",
            data:maxwspeed,
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

export default WSpeedChart;