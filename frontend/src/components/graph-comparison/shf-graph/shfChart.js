import React, { useEffect } from "react";
import Highcharts from "highcharts";

const SHFChart = ({data}) => {
  useEffect(() => {
    if (data && data.length > 0) makeChart(data);
  }, [data]);
  return <div id="shf-container"></div>;
};

const makeChart =(data)=>{
    const labels = data.map(item =>{
        const date = new Date(item.Date);
        return date.toLocaleDateString() + ' ' + item.Time;
    });
    const shf1 = data.map(item => item["SHF1"]);
    const shf2 = data.map(item => item["SHF2"]);
    Highcharts.chart("shf-container", {
        chart: {
            type:'line',
            zoomType: 'xy'
        },
        title: {
          text: `Time Vs SHF`,
          align: 'center'
        },
        yAxis: {
          title: {
            text: "SHF (watts/mtr)"
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
            name: "SHF1",
            data:shf1,
        },{
            name:"SHF2",
            data:shf2,
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

export default SHFChart;