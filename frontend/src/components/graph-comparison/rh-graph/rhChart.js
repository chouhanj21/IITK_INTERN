import React, { useEffect } from "react";
import Highcharts from "highcharts";

const RHChart = ({data}) => {
  useEffect(() => {
    if (data) makeChart(data);
  }, [data]);
  return <div id="rh-container"></div>;
};

const makeChart =(data)=>{
    const labels = data.map(item =>{
        const date = new Date(item.Date);
        if(item.Time) return date.toLocaleDateString() + ' ' + item.Time;
        else return date.toLocaleDateString();
    });
    const RH1 = data.map(item => item["RH1"]);
    const RH2 = data.map(item => item["RH2"]);
    Highcharts.chart("rh-container", {
        chart: {
            type:'line',
            zoomType: 'xy'
        },
        title: {
          text: `Time Vs RH`,
          align: 'center'
        },
        yAxis: {
          title: {
            text: "RH (%)"
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
            name: "RH1",
            data:RH1,
        },{
            name:"RH2",
            data:RH2,
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

export default RHChart;