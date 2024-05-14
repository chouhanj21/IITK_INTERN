import React, { useEffect } from "react";
import Highcharts from "highcharts";

const RH123Chart = ({data}) => {
  useEffect(() => {
    if (data && data.length > 0) makeChart(data);
  }, [data]);
  return <div id="rh-container"></div>;
};

const makeChart =(data)=>{
    const labels = data.map(item =>{
        const date = new Date(item.Date);
        date.setDate(date.getDate() - 1); // Subtract one day from the date
        return date.toLocaleDateString() + ' ' + item.Time;
    });
    const RH1 = data.map(item => item["RH1"]);
    const RH2 = data.map(item => item["RH2"]);
    const RH3 = data.map(item => item["RH3"]);
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
        },{
            name:"RH3",
            data:RH3,
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

export default RH123Chart;