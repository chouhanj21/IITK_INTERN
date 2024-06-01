import React, { useEffect } from "react";
import Highcharts from "highcharts";

const SoilChart = ({data}) => {
  useEffect(() => {
    if (data) makeChart(data);
  }, [data]);
  return <div id="container"></div>;
};

const makeChart =(data)=>{
    const labels = data.map(item =>{
        const date = new Date(item.Date);
        if(item.Time) return date.toLocaleDateString() + ' ' + item.Time;
        else return date.toLocaleDateString();
    });
    const Y1 = data.map(item => item["Soil_Moisture_A"]);
    const Y2 = data.map(item => item["Soil_Moisture_B"]);
    const Y3 = data.map(item => item["Soil_Moisture_C"]);
    const Y4 = data.map(item => item["Soil_Moisture_D"]);
    Highcharts.chart("container", {
        chart: {
            type:'line',
            zoomType: 'xy',
        },
        title: {
          text: `Time Vs Soil Moisture`,
          align: 'center'
        },
        yAxis: {
          title: {
            text: "Moisture",
          }
        },
        xAxis: {
            categories:labels,
            tickLength:0,
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
            name: "Soil Moisture A",
            data:Y1,
        },{
            name:"Soil Moisture B",
            data:Y2,
        },{
            name:"Soil Moisture C",
            data:Y3,
        },{
            name:"Soil Moisture D",
            data:Y4,
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

export default SoilChart;