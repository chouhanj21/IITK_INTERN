import React, { useEffect } from "react";
import Highcharts from "highcharts";

const SoilMoistureChart = ({data,id}) => {
  useEffect(() => {
    if (data) makeChart(data,id);
  }, [data,id]);
  return <div id="container"></div>;
};

const makeChart =(data,id)=>{
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
          text: `Soil Moisture for Plot-${id}`,
          align: 'center'
        },
        yAxis: {
          title: {
            text: "Soil Moisture (%)",
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
            name: "Soil Moisture (at 10cm)",
            data:Y1,
        },{
            name:"Soil Moisture (at 25cm)",
            data:Y2,
        },{
            name:"Soil Moisture (at 50cm)",
            data:Y3,
        },{
            name:"Soil Moisture (at 80cm)",
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

export default SoilMoistureChart;